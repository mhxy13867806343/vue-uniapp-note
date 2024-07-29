import store from "@/store";
import {postLogin,postRegister} from '@/api/outer.js'
import {
    toast
} from "@/uni_modules/uv-ui-tools/libs/function";
import {
    ref,reactive
} from '@vue/composition-api'
export default ()=>{
   
    const formRef=ref(null)
    const model=reactive({
        account: '',
        password: '',
        newpassword: '',
    })
    const isPassword=ref(true)
    const rules=reactive({
        account: [
            { required: true, message: '请输入用户名', trigger: ['blur', 'change']},
        ],
        password: [
            { required: true, message: '请输入密码', trigger: ['blur', 'change']},
        ],
        newpassword: [
            { required: true, message: '请输入新密码', trigger: ['blur', 'change']},
            {
                validator: (rule, value, callback) => {
                    if(value!== model.password) {
                        callback ( new Error ( '两次密码不一致' ) )
                    }
                    callback()
                },
                trigger: ['blur', 'change']
            }
        ],
    })
    
    const onClickLoginSubmit = () => {
        if (!model.account.length) {
            toast('请输入用户名');
            return;
        }
        if (!model.password.length) {
            toast('请输入密码');
            return;
        }
        postLogin({
            username: model.account,
            password:model.password
        }).then(res=>{
            store.dispatch('setUserToken', {
                token: res.data.token,
                user: res.data
            })
            setTimeout(() => {
                uni.reLaunch({
                    url: '/pages/home/home'
                })
            }, 2000)
        }).catch(e=>{
            toast(e.message)
        })
      
     
    }
    const onClickRegisterSubmit = () => {
        if (!model.account.length) {
            toast('请输入用户名');
            return;
        }
        if (!model.password.length) {
            toast('请输入密码');
            return;
        }
        postRegister({
            username: model.account,
            password:model.password
        }).then(res=>{
            toast("注册成功")
            setTimeout(() => {
                uni.navigateTo({
                    url: '/pages/login/login'
                })
            }, 2000)
        }).catch(e=>{
            toast(e.message)
        })
        
        
    }
    // 提交
    const  submit=(type)=> {
        // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
        formRef.value.validate().then(res => {
            uni.showToast({
                icon: 'success',
                title: '校验通过'
            })
           
            if(type==='login'){
                // 登录
                onClickLoginSubmit()
            }else if(type==='register'){
                // 注册
                onClickRegisterSubmit()
            }
            
        }).catch(errors => {
            uni.showToast({
                icon: 'error',
                title: type==='login'?'登录失败':'注册失败'
            })
        })
    }
    return {
        formRef,
        model,
        rules,
        submit,
        isPassword
    }
}

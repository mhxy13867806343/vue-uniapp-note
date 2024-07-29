<script setup>
import {getNote,delNote} from '@/api/outer'
import {
	Dialog , Toast
} from 'vant';
    const list =ref([])
	onShow(()=>{
		getNote1()
	})
const getNote1=()=>{
	const data={
		page:1,
		pageSize:10
	}
	getNote(data).then(res=>{
		list.value=res.data
	})
}
    const onClickNote = (type="add",item={},index=0) => {
		if(type === 'add'){
            uni.navigateTo({
                url:'/pages/note/note?type=add'
            })
		}else{
			uni.navigateTo({
				url:`/pages/note/note?id=${item.id}&type=${type}`
			})
		}
	   
    }
	const onClickDelNote=(item,index)=>{
		uni.showModal( {
			title : '提示' ,
			content : '是否要删除此条笔记呢?' ,
			success : function ( res ) {
				if ( res.confirm ) {
					delNote(item.id).then(res=>{
						Toast('删除成功')
						list.value=[]
						getNote1()
					}).catch(e=>{
						console.log(e)
					})
				} else if ( res.cancel ) {
					console.log ( '用户点击取消' );
				}
			}
		})
	}
    const showPopover = ref(false)
    const actions = ref([{
        text: '新建日志',
        id: "01",
	    url:'/pages/note/note?type=add'
    },{
		text: '个人中心',
		id: "02",
	    url:'/pages/personalCenter/personalCenter'
    },{
        text: '关于',
        id: '03'
    },
	    {
			text:'关于作者',
		    id:'04',
		    url:'https://lcs200.icu/#/pages/author/author'
	    }
    ])
    const onSelect = e => {
        if (e.id === '03') {
            Dialog.confirm({
                    title: '提示',
                    message: `此应用后端使用的是rust+axum api接口，前端使用的uniapp+vue2.x+vant ui方式的;
                    如果有问题，可以发我邮箱进行咨询：<span href="#" style="color:red">869710179@qq.com</span>进行咨询吧!`,
                })
                .then(() => {
                    // on confirm
                })
                .catch(() => {
                    // on cancel
                });
        }
		else if(e.id === '02' || e.id === '01'){
			uni.navigateTo({
                url: e.url
            })
        }else if(e.id==='04'){
			uni.navigateTo({
				url:`/pages/waibu/waibu?url=${e.url}`
			})
        }
    }
	onShow(()=>{
		showPopover.value=false
	})
</script>
<template>
    <view class="app-container">
        <van-nav-bar title="笔记" fixed placeholder>
            <template #right>
                <van-popover placement="bottom-end" theme="dark" v-model="showPopover" trigger="click"
                    :actions="actions" @select="onSelect">
                    <template #reference>
                        <van-icon name="list-switch" size="18" />
                    </template>
                </van-popover>

            </template>
        </van-nav-bar>
	    <van-cell-group inset v-if="list.length">
		    <van-cell center
		              is-link
		              
		              v-for="(item,index) in list" :key="index"
		             
		    >
			    <template #title>
				    <span class="custom-title" >{{ item.title}}</span>
			    </template>
			    <template #label>
				    <span class="custom-title">{{ item.createdAt}}</span>
			    </template>
			    <template #right-icon>
				    <view class="van-row--flex">
					    <svg t="1722260449476"
					         @click="onClickNote('edit',item,index)"
					         class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5442" width="200" height="200"><path d="M862.709333 116.042667a32 32 0 1 1 45.248 45.248L455.445333 613.813333a32 32 0 1 1-45.258666-45.258666L862.709333 116.053333zM853.333333 448a32 32 0 0 1 64 0v352c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V224c0-64.8 52.533333-117.333333 117.333333-117.333333h341.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v576a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V448z" fill="#000000" p-id="5443"></path></svg>
					    <svg t="1722260164815"
					         @click="onClickNote('details',item,index)"
					         
					         class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4432" width="200" height="200"><path d="M298.666667 341.333333h384v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667zM170.666667 128h682.666666v554.666667h42.666667V106.517333c0-11.52-9.557333-21.184-21.333333-21.184H149.333333c-11.626667 0-21.333333 9.557333-21.333333 21.376v810.581334C128 929.066667 137.557333 938.666667 149.333333 938.666667h490.666667v-42.666667H170.666667V128z m469.333333 576.042667c0-11.797333 9.728-21.376 21.376-21.376H896L640 938.666667V704.042667z m153.002667 21.290666H682.666667v110.336L793.002667 725.333333z" fill="#3D3D3D" p-id="4433"></path></svg>
					    <van-icon name="delete-o" @click="onClickDelNote(item,index)"/>
				    </view>
			    </template>
		    </van-cell>
	    </van-cell-group>
	    <van-empty  v-else>
		    <van-button round type="primary" class="bottom-button"
		                block
		    @click="onClickNote('add')"
		    
		    >新建</van-button>
	    </van-empty>
    </view>
</template>

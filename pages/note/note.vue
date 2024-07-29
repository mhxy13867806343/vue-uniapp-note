<script setup>
import {addNote,findNote,updateNote} from '@/api/outer'
const note=reactive({
	title:'',
	content:'',
	id:''
})
const typeValue=ref('add')
onLoad(opt=>{
	const {type}=opt
	typeValue.value=type
	if(type==='edit'  || type==='details'){
		uni.setNavigationBarTitle({
			title:type==='edit'?'编辑日志':'查看详情'
		})
		findNote1(opt.id)
	}
	else{
		uni.setNavigationBarTitle({
			title:'新建日志'
		})
	}
})
//查询
const findNote1=(note_id)=>{
	findNote(note_id).then(res=>{
		const {data,code}=res
		if(code===200){
			note.title=data.title
			note.content=data.content
			note.id=data.id
		}
	})
}
const onClickSave=val=>{
	if(val==='add'){
		addNote({
			title:note.title,
			content:note.content
		}).then(res=>{
			uni.showToast({
				title:'新建成功',
				icon:'success',
				duration:2000
			})
			uni.navigateBack()
		}).catch(e=>{
			uni.showToast({
				title:'新建失败',
				icon:'none',
				duration:2000
			})
		})
	}
	else if(val==='edit'){
		updateNote({
			note_id:note.id,
			title:note.title,
			content:note.content
		}).then(res=>{
			uni.showToast({
				title:'编辑成功',
				icon:'success',
				duration:2000
			})
			uni.navigateBack()
		}).catch(e=>{
			uni.showToast({
				title:'编辑失败',
				icon:'none',
				duration:2000
			})
		})
	}
}
</script>
<template>
	<view class="app-container">
		<view>
			<van-field v-model="note.title" label="日志标题" placeholder="请输入标题(限30字内)"
			           maxlength="30"
			           center
			           :show-word-limit="typeValue!='details'"
			           required
			           clearable
			           :disabled="typeValue=='details'"
			/>
			<van-field clearable v-model="note.content" label="日志内容" type="textarea" rows="2" placeholder="请输入500字内内容"
			           maxlength="500"
			           required
			           center
			           autosize
			           :show-word-limit="typeValue!='details'"
			           :disabled="typeValue=='details'"
			/>
		</view>
		
		<van-button
			v-if="typeValue!='details'"
			class="p-margin-top" :type="typeValue==='edit'?'danger':'primary'" block
		
		:disabled="!note.title.length||!note.content.length"
		            @click="onClickSave(typeValue)"
		>
			{{ typeValue==='edit'?'保存':'新建' }}
		</van-button>
	</view>
</template>




<style scoped
       lang="scss">

</style>

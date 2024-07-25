<script setup>
const note=reactive({
	title:'',
	content:''
})
const typeValue=ref('add')
onLoad(opt=>{
	const {type}=opt
	typeValue.value=type
	if(type==='edit'){
		uni.setNavigationBarTitle({
			title:'编辑日志'
		})
	}
	else{
		uni.setNavigationBarTitle({
			title:'新建日志'
		})
	}
})
</script>
<template>
	<view class="app-container">
		<view>
			<van-field v-model="note.title" label="日志标题" placeholder="请输入标题(限30字内)"
			           maxlength="30"
			           center
			           show-word-limit
			           required
			           clearable
			/>
			<van-field clearable v-model="note.content" label="日志内容" type="textarea" rows="2" placeholder="请输入500字内内容"
			           maxlength="500"
			           required
			           center
			           autosize
			           show-word-limit
			/>
		</view>
		
		<van-button class="p-margin-top" :type="typeValue==='edit'?'danger':'primary'" block
		
		:disabled="!note.title.length||!note.content.length"
		>
			{{ typeValue==='edit'?'保存':'新建' }}
		</van-button>
	</view>
</template>




<style scoped
       lang="scss">

</style>

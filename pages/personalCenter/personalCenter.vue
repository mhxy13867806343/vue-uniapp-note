<script setup>
import store from "@/store";
const onClickBack=()=>{
	uni.showModal({
		title: '提示',
		content: '是否要退出?',
		success: function (res) {
			if (res.confirm) {
				uni.showToast({
					title: '退出成功',
					icon: 'none',
					duration: 2000,
				})
				store.dispatch('clearToken');
				setTimeout(()=>{
					uni.reLaunch({
						url: '/pages/login/login',
					});
				},1500)
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	});
}
</script>
<template>
	<view>
		<view class="app-container">
			<uv-cell-group title="功能设置">
				<view class="p-margin-top">
					<van-button type="info" block @click="onClickBack">退出</van-button>
				</view>
			</uv-cell-group>
		
		</view>
	</view>
</template>



<style lang="scss">
.p-fctuin-title{
	padding: 10rpx 0;
	font-size: 30rpx;
	span{
		padding-left: 10rpx;
	}
}
</style>

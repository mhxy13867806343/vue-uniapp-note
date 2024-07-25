<script setup>
const list =ref([
		{ title: "清晨思绪", timestamp: "2024-01-02 12:34:12" },
		{ title: "午后的阳光非常明媚", timestamp: "2024-01-02 12:34:12" },
		{ title: "读书笔记", timestamp: "2024-01-02 12:34:12" },
		{ title: "旅行的意义", timestamp: "2024-01-02 12:34:12" },
		{ title: "关于时间管理的几点思考", timestamp: "2024-01-02 12:34:12" },
		{ title: "如何改善睡眠质量", timestamp: "2024-01-02 12:34:12" },
		{ title: "理财小技巧", timestamp: "2024-01-02 12:34:12" },
		{ title: "美食探店", timestamp: "2024-01-02 12:34:12" },
		{ title: "工作与生活的平衡", timestamp: "2024-01-02 12:34:12" },
		{ title: "孤独", timestamp: "2024-01-02 12:34:12" },
		{ title: "人生的选择与决定", timestamp: "2024-01-02 12:34:12" },
		{ title: "夜晚的城市风光", timestamp: "2024-01-02 12:34:12" },
		{ title: "快速学习新技能的方法", timestamp: "2024-01-02 12:34:12" },
		{ title: "电影欣赏", timestamp: "2024-01-02 12:34:12" },
		{ title: "音乐与情感", timestamp: "2024-01-02 12:34:12" },
		{ title: "书籍推荐", timestamp: "2024-01-02 12:34:12" },
		{ title: "健康饮食的重要性", timestamp: "2024-01-02 12:34:12" },
		{ title: "晨跑的好处", timestamp: "2024-01-02 12:34:12" },
		{ title: "节日庆典", timestamp: "2024-01-02 12:34:12" },
		{ title: "网络安全基础", timestamp: "2024-01-02 12:34:12" },
		{ title: "编程技巧", timestamp: "2024-01-02 12:34:12" },
		{ title: "关于创业的思考", timestamp: "2024-01-02 12:34:12" },
		{ title: "成功的习惯", timestamp: "2024-01-02 12:34:12" },
		{ title: "朋友之间的互助", timestamp: "2024-01-02 12:34:12" },
		{ title: "学习外语的策略", timestamp: "2024-01-02 12:34:12" },
		{ title: "文化差异的体验", timestamp: "2024-01-02 12:34:12" },
		{ title: "自我提升的途径", timestamp: "2024-01-02 12:34:12" },
		{ title: "心理健康的重要性", timestamp: "2024-01-02 12:34:12" },
		{ title: "社交媒体的影响", timestamp: "2024-01-02 12:34:12" },
		{ title: "保持创造力的方法", timestamp: "2024-01-02 12:34:12" }
	]
)
const onClick = (item,index) => {
	uni.navigateTo({
		url:`/pages/note/note?id=${index}&type=edit`
	})
}
</script>
<template>
	<view class="app-container">
		<van-cell-group inset>
		<van-cell center :title="item.title" :label="item.timestamp"
		          is-link
		
		v-for="(item,index) in list" :key="index"
		        @click="onClick(item,index)"
		/>
		</van-cell-group>
	</view>
</template>




<style scoped
       lang="scss">

</style>

<script setup>
    import {
        Dialog
    } from 'vant';
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
    const onClickNote = (type="add",item={},index=0) => {
		if(type === 'add'){
            uni.navigateTo({
                url:'/pages/note/note?type=add'
            })
		}else{
			uni.navigateTo({
				url:`/pages/note/note?id=${index}&type=edit`
			})
		}
	   
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
		    <van-cell center :title="item.title" :label="item.timestamp"
		              is-link
		              
		              v-for="(item,index) in list" :key="index"
		              @click="onClickNote('edit',item,index)"
		    />
	    </van-cell-group>
	    <van-empty  v-else>
		    <van-button round type="primary" class="bottom-button"
		                block
		    @click="onClickNote('add')"
		    
		    >新建</van-button>
	    </van-empty>
    </view>
</template>

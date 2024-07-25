<script setup>
const optUrl=ref("")
onLoad(opt=> {
	optUrl.value = opt.url
})
</script>
<template>
	<web-view :src="optUrl"></web-view>
</template>




<style scoped
       lang="scss">

</style>

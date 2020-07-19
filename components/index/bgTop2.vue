<template>
	<view class="bg-top">
		<image src="~/static/mulu-1.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name:'gbtop',
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.bg-top{
		width: 100%;
		position: absolute;
		top: 0;
		z-index: -1;
		image{
			width: 100%;
		}
	}
</style>

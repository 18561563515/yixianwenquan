<template>
	<view class="bg-bottom">
		<image src="~/static/endbottom.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		name:'gbbottomjibenA',
	}
</script>

<style lang="scss">
	.bg-bottom{
		width: 100%;
		position: absolute;
		bottom: 0;
		z-index: -1;
		image{
			width: 100%;
		}
	}
</style>

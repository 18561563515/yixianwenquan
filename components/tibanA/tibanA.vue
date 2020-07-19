<template>
	<view class="tibanA">
		<view class="rongqi">
			<view class="xiaowenhao">
				
			</view>
			<!-- <image src="~/static/xiaowenhao.png" mode="widthFix" class=""></image> -->
			<slot class="txt"></slot>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'tibanA',
		
	}
</script>

<style lang="scss" scoped>
	.tibanA{
		margin-bottom: 25rpx;
		.rongqi{
			// margin-top: 50rpx;
			display: flex;
			flex-direction: row;
			padding-top: 50rpx;
			padding-left: 36rpx;
			padding-right: 36rpx;
			.txt{
				// display: block;
			}
		}
		width: 683rpx;
		height: 221rpx;
		
		background: url(../../static/tibanA.png) no-repeat center center;
		background-size: 100%;
		
		.xiaowenhao{
			width: 48rpx;
			height: 47rpx;
			background: url(../../static/xiaowenhao.png) no-repeat center center;
			background-size: 100%;
			
			margin: 0;
			// margin-left: 36rpx;
		}
		
	}
</style>

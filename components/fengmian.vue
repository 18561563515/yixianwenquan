<template>
	<view class="fengmian-box">
		<text class="num">{{num}}</text>
		<slot name="img" class="pic"></slot>
		<slot name="txt"></slot>
	</view>
</template>

<script>
	export default{
		name:'fengmian',
		props:{
			num:{
				type:String,
				default:'01'
			}
		}
	}
</script>

<style lang="scss">
	.fengmian-box{
		position: relative;
		box-shadow: 1px 1px 10rpx rgba(0,0,0,.1);
		display: flex;
		flex-direction: column;
		border-radius: 50rpx;
		width: 676rpx;
		height: 230rpx;
		background: linear-gradient(135deg, #ffd2be 0%,#ffffff 13%,#ffffff 82%,#ffd6ba 100%);
		margin-top: 424rpx;
		align-items: center;
	}
	
	.num{
		font-size: 144rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -135rpx;
		font-weight: bold;
		color: #dcdddd;
		text-shadow: 1px 1px 10rpx rgba(0,0,0,.1);
	}
</style>

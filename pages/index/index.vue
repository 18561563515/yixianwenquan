<template>
	<view class="mask">
		<BGTOP></BGTOP>
		<BGBOTTOM></BGBOTTOM>
		<view class="shuoming">
			<image src="~/static/wenhao.png" mode="widthFix" class="wenhao"></image>
			<text class="col1">活动说明</text>
			<text class="col2">1. 本次调查目的旨在了解和获得目前国内胰十二指肠切除术中消化道重建相关的基本资料</text>
			<text class="col2">2. 本次调查基于您宝贵的临床实践经验，答案无优劣之分，经验无深浅之别，请按您的实际开展的情况如实填写</text>
			<text class="col2">3. 本次调查采用无记名调查，不涉及隐私及商业利益，无任何利益冲突存在</text>
			<text class="col2">4. 本次调查均为自愿参与，感谢您对我们工作的大力支持和帮助</text>
		</view>
		<view class="play-btn" @click="nextBtn">
			
		</view>
	</view>
</template>

<script>
	import BGTOP from '@/components/index/bgTop.vue'
	import BGBOTTOM from '@/components/index/bgBottom.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		components:{
			BGTOP,
			BGBOTTOM
		},
		methods: {
			nextBtn(){
				console.log(111)
				this.$next('../index2/index2')
			}
		}
	}
</script>

<style lang="scss">
	page{
		/* background: url(../../static/BG-fengmian.png) no-repeat center top;
		background-size: 100% auto; */
		background: #fff;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
	}
.shuoming{
	
	position: relative;
	width: 636rpx;
	// height: 347rpx;
	border-radius: 50rpx;
	margin-top: 488rpx;
	box-shadow: 1px 1px 10rpx rgba(0,0,0,.1);
	display: flex;
	padding: 20rpx;
	flex-direction: column;
	align-items: center;
	background:linear-gradient(135deg, #ffd2be 0%,#ffffff 13%,#ffffff 82%,#ffd6ba 100%);
	text{
		margin-bottom: 16rpx;
		line-height: 35rpx;
	}
	
}
	.col1{
		color: #c94825;
		font-size: 25rpx;
		
	}
	.col2{
		color: #ce5a3b;
		font-size: 22rpx;
	}
	.play-btn{
		width: 627rpx;
		height: 82rpx;
		background: url(../../static/play-btn.png) no-repeat center center;
		background-size: 100%;
		margin-top: 88rpx;
	}
	
	.wenhao{
		display: block;
		width: 53rpx;
		height: 77rpx;
		position: absolute;
		top: -40rpx;
		right: -20rpx;
	}
	
</style>

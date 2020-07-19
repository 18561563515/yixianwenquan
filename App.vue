
<script>
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		// mixins:[next]
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.pic{
		width: 100%;
	}
	.mask{
		position: absolute;
		
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	
	.swiper{
		/* position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0; */
		width: 100%;
		height: 100%;
	}
	
	.line{
		width: 676rpx;
		height: 3rpx;
		border-bottom: 1px dashed #ffebe9;
		margin: 23rpx 0;
	}
	.wenti-txt{
		color: #e83c00;
		font-size: 32rpx;
		margin-left: 20rpx;
		line-height: 45rpx;
		flex: 1;
		margin-top: -10rpx;
	}
	.jianbian{
		background: linear-gradient(135deg, #ffd2be 0%,#ffffff 13%,#ffffff 82%,#ffd6ba 100%);
	}
	.jianbian-active{
		background: linear-gradient(135deg, #eaa381 0%,#ffffff 43%,#ffffff 62%,#eaa381 100%);
	}
</style>

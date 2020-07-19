<template>
	<view class="mask">
		<BGTOP2></BGTOP2>
		<BGBOTTOM></BGBOTTOM>
		<image src="~/static/mulu.png" mode="widthFix" class="pic"></image>
		<view class="play-btn" @click="nextBtn">
			
		</view>
	</view>
</template>

<script>
	import BGTOP2 from '@/components/index/bgTop2.vue'
	import BGBOTTOM from '@/components/index/bgBottom.vue'
	// import next from '@/api/mixin.js'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			BGTOP2,
			BGBOTTOM
		},
		// mixins:[next],
		methods:{
			nextBtn(){
				this.$next('../jibenwenti/jibenwenti')
			}
		}
	}
</script>

<style lang="scss">
	.pic{
		width: 549rpx;
		height: 564rpx;
		margin-top: 300rpx;
	}
	.play-btn{
		width: 627rpx;
		height: 82rpx;
		background: url(../../static/play-btn.png) no-repeat center center;
		background-size: 100%;
		margin-top: 88rpx;
	}
</style>

<template>
	<view class="mask">

		<swiper :indicator-dots="false" :autoplay="false" :interval="300" :duration="300" class="swiper" :vertical="false" :current="lunboCurrentA" :disable-touch="true" @change="changeCurrentA">
			<swiper-item>
				<view class="swiper-item">
					<BGTOP2></BGTOP2>
					<BGBOTTOM></BGBOTTOM>
					<FENGMIAN num="01">
						<image src="../../static/basewenti.png" mode="widthFix" class="pic1" slot="img"></image>
						<span slot="txt" class="txt">(14题)</span>
					</FENGMIAN>
					<!-- <text class="txt1">(右划开始答题)</text>
					<text class="txt1 txt2">>>></text> -->
					<view class="play-btn" @click="nextBtnA">
						
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item bg1">
					<swiper :indicator-dots="false" :autoplay="false" :interval="300" :duration="300" class="swiper" :vertical="true"
					 :disable-touch="true" :current="lunboCurrent" @change="changeCurrent">
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您所属的医院是否为大学附属教学医院和三级医院：</text>
								</TIBANA>
								<view class="danxuan-box">
									<view class="danxuan" :class="currentB1==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarr"
									 :key="index" @click="chooseDanXuan(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								<view class="line"></view>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您的医疗团队/医疗组手术医生的性别构成：</text>
								</TIBANA>
								<view class="danxuan-box">
									<view class="danxuan jianbian" v-for="(i,index) in tianxieB2" :key="index">
										<text>{{i.sign}}</text>
										<input type="number" value="" placeholder="填写人数" placeholder-class="shurukuang-yanse" v-model="i.txt" class="shurukuangB2" />
									</view>
								</view>
								<view class="danxuan-box mg">
									<!-- <view class="shangyiti"></view> -->
									<view class="xiayiti" @click="checkB1B2"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您的医疗团队/医疗组手术医生的年龄分布：</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 jianbian" v-for="(i,index) in tianxieB3" :key="index">
										<text class="w200">{{i.sign}}</text>
										<span class="flex1">
											<input type="number" value="" placeholder="填写人数" placeholder-class="shurukuang-yanse" v-model="i.txt" class="shurukuangB2" />
										</span>

									</view>
								</view>
								<view class="danxuan-box">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB3"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您的医疗团队/医疗组手术医生的学历分布：</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 jianbian" v-for="(i,index) in tianxieB4" :key="index">
										<text class="w200">{{i.sign}}</text>
										<span class="flex1">
											<input type="number" value="" placeholder="填写人数" placeholder-class="shurukuang-yanse" v-model="i.txt" class="shurukuangB2" />
										</span>

									</view>
								</view>
								<view class="danxuan-box">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB4"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您所在医院每年胰十二指肠切除术手术量：</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentB5==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB5"
									 :key="index" @click="chooseDanXuanB5(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB5"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您每年参与的胰十二指肠切除术大约有多少：</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentB6==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB6"
									 :key="index" @click="chooseDanXuanB6(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB6"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您参与/主刀的胰十二指肠切除术通常是：</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentB7==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB7"
									 :key="index" @click="chooseDanXuanB7(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB7"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">近3年来，您的团队所在医院每年开展腹腔镜胰十二指肠切除术的量是多少？</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentB8==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB8"
									 :key="index" @click="chooseDanXuanB8(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB8"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您所参与的胰十二指肠切除术消化道离断顺序通常是：</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentB9==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB9"
									 :key="index" @click="chooseDanXuanB9(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB9"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您所参与的胰十二指肠切除术消化道重建顺序通常是：</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentB10==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB10"
									 :key="index" @click="chooseDanXuanB10(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB10"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您所参与的胰十二指肠切除术消化道重建方法是：</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentB11==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB11"
									 :key="index" @click="chooseDanXuanB11(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB11"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您所参与的胰十二指肠切除术是否常规放置腹腔引流管</text>
								</TIBANA>
								<view class="danxuan-box ">
									<view class="danxuan " :class="currentB12==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB12"
									 :key="index" @click="chooseDanXuanB12(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								<view class="line"></view>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您团队胰十二指肠切除术的患者在出院前是否常规进行全腹部增强CT检查</text>
								</TIBANA>
								<view class="danxuan-box ">
									<view class="danxuan" :class="currentB13==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB13"
									 :key="index" @click="chooseDanXuanB13(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB12B13"></view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">目前您所在团队是否常规单独登记（住院病例记录之外）每一例胰十二指肠切除术后并发症</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentB14==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrB14"
									 :key="index" @click="chooseDanXuanB14(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtn"></view>
									<view class="xiayiti" @click="checkB14"></view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<BGTOP2></BGTOP2>
					<BGBOTTOM></BGBOTTOM>
					<FENGMIAN num="02">
						<image src="../../static/danchangwenhe.png" mode="widthFix" class="pic1" slot="img"></image>
						<span slot="txt" class="txt">(14题)</span>
					</FENGMIAN>
					<view class="play-btn" @click="nextBtnA">
						
					</view>
				</view>
			</swiper-item>
			<swiper-item class="bg1">
				<swiper :indicator-dots="false" :autoplay="false" :interval="300" :duration="300" class="swiper" :vertical="true"
					 :disable-touch="true" :current="lunboCurrentB" @change="changeCurrentB">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与的胰腺癌行胰十二指肠切除术胆道离断部位通常是：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH1==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH1"
								 :key="index" @click="chooseDanXuanH1(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box mg">
								<!-- <view class="shangyiti" @click="backBtn"></view> -->
								<view class="xiayiti" @click="checkH1"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所在医疗组的胰腺癌行胰十二指肠切除术是否常规术中胆道切缘快速病理检查：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH2==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH2"
								 :key="index" @click="chooseDanXuanH2(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH2"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参/主刀与的胰十二指肠切除术胆道离断方法通常是：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH3==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH3"
								 :key="index" @click="chooseDanXuanH3(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH3"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胆肠吻合通常是：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH4==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH4"
								 :key="index" @click="chooseDanXuanH4(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH4"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胆肠吻合通常是：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH5==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH5"
								 :key="index" @click="chooseDanXuanH5(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH5"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀单层胆肠吻合，通常是：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH6==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH6"
								 :key="index" @click="chooseDanXuanH6(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH6"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀双层胆肠吻合，通常是：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH7==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH7"
								 :key="index" @click="chooseDanXuanH7(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH7"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胆肠吻合选择（单层/双层；间断/连续）缝合方式的依据通常是?</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH8==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH8"
								 :key="index" @click="chooseDanXuanH8(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH8"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胆肠吻合采用的缝线通常是 <text style="color: #808080;width: 100%;display: block;text-align: right;">（可多选）</text></text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content jianbian" :class="{'jianbian-active':i.fuxuan}" v-for="(i,index) in danxuanarrH9"
								 :key="index" @click="chooseDanXuanH9(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign == 'F'">其他</text>
									<text v-else>{{i.txt}}</text>
									<input type="text" value="" v-if="i.sign=='F'" class="xuanxiangbuchong" placeholder="请简述" v-model="i.txt"/>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH9"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胆肠吻合（可吸收/不可吸收或者单股线/编织线）缝线选择依据通常是?</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH10==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH10"
								 :key="index" @click="chooseDanXuanH10(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH10"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胆肠吻合术中胆管支架管放置通常是?</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentH11==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH11"
								 :key="index" @click="chooseDanXuanH11(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnB"></view>
								<view class="xiayiti" @click="checkH11"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您术中记录过您所参与/主刀的胰十二指肠切除术的胆肠吻合时间吗？</text>
							</TIBANA>
							<view class="danxuan-box ">
								<view class="danxuan " :class="currentH12==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH12"
								 :key="index" @click="chooseDanXuanH12(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="line"></view>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术的胆肠吻合时间通常为?</text>
							</TIBANA>
							<view class="danxuan-box " style="flex-wrap: wrap;">
								<view class="danxuan" :class="currentH13==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH13"
								 :key="index" @click="chooseDanXuanH13(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtn"></view>
								<view class="xiayiti" @click="checkH12H13"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<view class="swiper-item">
								<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
								<TIBANA class="tibanA">
									<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胆肠吻合口附近放置引流管通常是?</text>
								</TIBANA>
								<view class="danxuan-box chuizhi">
									<view class="danxuan w100 justify-content" :class="currentH14==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrH14"
									 :key="index" @click="chooseDanXuanH14(index)">
										<view>{{i.sign}}</view>
										<text>{{i.txt}}</text>
									</view>
								</view>
								
								<view class="danxuan-box ">
									<view class="shangyiti" @click="backBtnB"></view>
									<view class="xiayiti" @click="checkH14"></view>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<BGTOP2></BGTOP2>
					<BGBOTTOM></BGBOTTOM>
					<FENGMIAN num="03">
						<image src="../../static/changweiwenhe.png" mode="widthFix" class="pic1" slot="img"></image>
						<span slot="txt" class="txt">(21题)</span>
					</FENGMIAN>
					<view class="play-btn" @click="nextBtnA">
						
					</view>
				</view>
			</swiper-item>
			<swiper-item class="bg1">
				<swiper :indicator-dots="false" :autoplay="false" :interval="300" :duration="300" class="swiper" :vertical="true"
					 :disable-touch="true" :current="lunboCurrentC" @change="changeCurrentC">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰腺癌行胰十二指肠切除术通常是PD还是PPPD？</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" style="flex-wrap: wrap;">
								<view class="danxuan w100 justify-content" :class="currentG1==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG1"
								 :key="index" @click="chooseDanXuanG1(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box mg">
								<!-- <view class="shangyiti" @click="backBtnC"></view> -->
								<view class="xiayiti" @click="checkG1"></view>
							</view>
							<!-- <view class="line"></view> -->
							
						</view>
					</swiper-item>
					<swiper-item>	
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的保留幽门胰十二指肠切除术十二指肠保留的长度通常是：</text>
							</TIBANA>
							<view class="danxuan-box  chuizhi" style="flex-wrap: wrap;">
								<view class="danxuan w100 justify-content" :class="currentG2==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG2"
								 :key="index" @click="chooseDanXuanG2(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG2"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胃切除的范围通常是：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" style="flex-wrap: wrap;">
								<view class="danxuan w100 justify-content " :class="currentG3==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG3"
								 :key="index" @click="chooseDanXuanG3(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<!-- <view class="line"></view> -->
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG3"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">您所参与/主刀的胰十二指肠切除术胃肠吻合口距离胆肠吻合口通常是：</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" style="flex-wrap: wrap;">
								<view class="danxuan w100 justify-content" :class="currentG4==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG4"
								 :key="index" @click="chooseDanXuanG4(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG4"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[32].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" style="flex-wrap: wrap;">
								<view class="danxuan w100 justify-content" :class="currentG5==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG5"
								 :key="index" @click="chooseDanXuanG5(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<!-- <view class="line"></view> -->
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG5"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>	
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[33].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG6==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG6"
								 :key="index" @click="chooseDanXuanG6(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG6"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<view class="wenti-txt">{{$allArr[34].question}}</view>
							</TIBANA>
							<view class="danxuan-box chuizhi" style="flex-wrap: wrap;">
								<view class="danxuan w100 justify-content" :class="currentG7==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG7"
								 :key="index" @click="chooseDanXuanG7(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<!-- <view class="line"></view> -->
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG7"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>	
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[35].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG8==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG8"
								 :key="index" @click="chooseDanXuanG8(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG8"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[36].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG9==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG9"
								 :key="index" @click="chooseDanXuanG9(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG9"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[37].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG10==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG10"
								 :key="index" @click="chooseDanXuanG10(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG10"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[38].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG11==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG11"
								 :key="index" @click="chooseDanXuanG11(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG11"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[39].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG12==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG12"
								 :key="index" @click="chooseDanXuanG12(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG12"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[40].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG13==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG13"
								 :key="index" @click="chooseDanXuanG13(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG13"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[41].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG14==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG14"
								 :key="index" @click="chooseDanXuanG14(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG14"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[42].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG15==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG15"
								 :key="index" @click="chooseDanXuanG15(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG15"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[43].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG16==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG16"
								 :key="index" @click="chooseDanXuanG16(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG16"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[44].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG17==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG17"
								 :key="index" @click="chooseDanXuanG17(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG17"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<view class="wenti-txt">{{$allArr[45].question}}</view>
							</TIBANA>
							<view class="danxuan-box " style="flex-wrap: wrap;">
								<view class="danxuan justify-content" :class="currentG18==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG18"
								 :key="index" @click="chooseDanXuanG18(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<!-- <view class="line"></view> -->
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[46].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG19==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG19"
								 :key="index" @click="chooseDanXuanG19(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG18G19"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[47].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG20==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG20"
								 :key="index" @click="chooseDanXuanG20(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG20"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai3.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[48].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentG21==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrG21"
								 :key="index" @click="chooseDanXuanG21(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnC"></view>
								<view class="xiayiti" @click="checkG21"></view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<BGTOP2></BGTOP2>
					<BGBOTTOM></BGBOTTOM>
					<FENGMIAN num="04">
						<image src="../../static/yichangwenhe.png" mode="widthFix" class="pic1" slot="img"></image>
						<span slot="txt" class="txt">(22题)</span>
					</FENGMIAN>
					<view class="play-btn" @click="nextBtnA">
						
					</view>
				</view>
			</swiper-item>
			<swiper-item class="bg1">
				<swiper :indicator-dots="false" :autoplay="false" :interval="300" :duration="300" class="swiper" :vertical="true"
					 :disable-touch="true" :current="lunboCurrentD" @change="changeCurrentD">
					<swiper-item >
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[49].question}}</text>
							</TIBANA>
							<view class="danxuan-box " >
								<view class="danxuan  justify-content" :class="currentP1==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP1"
								 :key="index" @click="chooseDanXuanP1(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<!-- <view class="line"></view> -->
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[50].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi ">
								<view class="danxuan w100 justify-content" :class="currentP2==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP2"
								 :key="index" @click="chooseDanXuanP2(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box mg">
								<!-- <view class="shangyiti" @click="backBtnC"></view> -->
								<view class="xiayiti" @click="checkP1P2"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[51].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentP3==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP3"
								 :key="index" @click="chooseDanXuanP3(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP3"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[52].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content autoH" :class="currentP4==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP4"
								 :key="index" @click="chooseDanXuanP4(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='C'">其他胰肠吻合方法</text>
									<text v-else>{{i.txt}}</text>
									
									<input type="text" value="" style="flex: 1;" v-if="i.sign=='C'" class="xuanxiangbuchong" placeholder="请简述" v-model="i.txt"/>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD4"></view>
								<view class="xiayiti" @click="checkP4"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<text style="color: #999999;font-size: 34rpx;text-align: center;padding: 10rpx 40rpx;">如果您采用导管对粘膜的胰肠吻合技术，请回答以下问题：</text>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[53].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content" :class="currentP5==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP5"
								 :key="index" @click="chooseDanXuanP5(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP5"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[54].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content " :class="currentP6==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP6"
								 :key="index" @click="chooseDanXuanP6(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='F'">其他方法</text>
									<text v-else>{{i.txt}}</text>
									
									<input type="text" value="" v-if="i.sign=='F'" class="xuanxiangbuchong" placeholder="请具体说明" v-model="i.txt"/>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD6"></view>
								<view class="xiayiti" @click="checkP6"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[55].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content " :class="currentP7==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP7"
								 :key="index" @click="chooseDanXuanP7(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box mg">
								<!-- <view class="shangyiti" @click="backBtnD"></view> -->
								<view class="xiayiti" @click="checkP7"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[56].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content " :class="currentP8==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP8"
								 :key="index" @click="chooseDanXuanP8(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='D'">其他</text>
									<text v-else>{{i.txt}}</text>
									
									<input type="text" value="" v-if="i.sign=='D'" class="xuanxiangbuchong" placeholder="请具体说明" v-model="i.txt"/>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP8"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[57].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content " :class="currentP9==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP9"
								 :key="index" @click="chooseDanXuanP9(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP9"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[58].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content " :class="currentP10==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP10"
								 :key="index" @click="chooseDanXuanP10(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP10"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[59].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi " >
								<view class="danxuan w100 justify-content autoH1" :class="currentP11==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP11"
								 :key="index" @click="chooseDanXuanP11(index)" >
									<view>{{i.sign}}</view>
									
									<label v-if="i.sign=='C'" style="flex: 1;">
										<text>根据胰管直径决定是否放置，</text>
										<text>您选择放置胰管支架的胰管直径</text>
										<label for="" style="display: flex;flex-direction: row;">
											<text>是≤</text>
											<input type="number" value="" placeholder="填写数字" style="width: 150rpx;display: inline;" class="xuanxiangbuchong" v-model="i.txt"/>
											<text>mm</text>
										</label>
										
										
									</label>
									
									<text v-else>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP11"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[60].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP12==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP12"
								 :key="index" @click="chooseDanXuanP12(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP12"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[61].question}}</text>
							</TIBANA>
							<image src="../../static/fenzhi1.png" mode="widthFix" class="fenzhi1"></image>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP14==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP14"
								 :key="index" @click="chooseDanXuanP14(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='C'">其他技术</text>
									<input type="text" value="" v-model="i.txt" placeholder="请具体说明" v-if="i.sign=='C'" class="xuanxiangbuchong"/>
									<text v-else>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP14"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<!-- <TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[62].question}}</text>
							</TIBANA> -->
							<image src="../../static/fenzhi2.png" mode="widthFix" class="fenzhi2"></image>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP15==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP15"
								 :key="index" @click="chooseDanXuanP15(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='E'">其他技术</text>
									<input type="text" value="" v-model="i.txt" placeholder="请具体说明" v-if="i.sign=='E'" class="xuanxiangbuchong"/>
									<text v-else>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP15"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<!-- <TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[63].question}}</text>
							</TIBANA> -->
							<image src="../../static/fenzhi3.png" mode="widthFix" class="fenzhi3"></image>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP16==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP16"
								 :key="index" @click="chooseDanXuanP16(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='E'">其他技术</text>
									<input type="text" value="" v-model="i.txt" placeholder="请具体说明" v-if="i.sign=='E'" class="xuanxiangbuchong"/>
									<text v-else>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP16"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[65].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP17==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP17"
								 :key="index" @click="chooseDanXuanP17(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='E'">使用其它材料</text>
									<input type="text" value="" v-model="i.txt" placeholder="请具体说明" v-if="i.sign=='E'" class="xuanxiangbuchong"/>
									<text v-else>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP17"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[66].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP18==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP18"
								 :key="index" @click="chooseDanXuanP18(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP18"></view>
							</view>
						</view>
					</swiper-item>
					<!-- <swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[67].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP19==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP19"
								 :key="index" @click="chooseDanXuanP19(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP19"></view>
							</view>
						</view>
					</swiper-item> -->
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[68].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP20==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP20"
								 :key="index" @click="chooseDanXuanP20(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP20"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[69].question}}<!-- <br><text style="color: #808080;width: 100%;display: block;text-align: right;">（可多选）</text> --></text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content jianbian" :class="{'jianbian-active':i.fuxuan}" v-for="(i,index) in danxuanarrP21"
								 :key="index" @click="chooseDanXuanP21(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign == 'E'">其他位置</text>
									<text v-else>{{i.txt}}</text>
									<input type="text" value="" v-if="i.sign=='E'" class="xuanxiangbuchong" placeholder="请具体描述" v-model="i.txt"/>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP21"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[70].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP22==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP22"
								 :key="index" @click="chooseDanXuanP22(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='E'">其他</text>
									<input type="text" value="" v-model="i.txt" placeholder="请具体说明" v-if="i.sign=='E'" class="xuanxiangbuchong"/>
									<text v-else>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP22"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[71].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP23==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP23"
								 :key="index" @click="chooseDanXuanP23(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP23"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[72].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP24==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP24"
								 :key="index" @click="chooseDanXuanP24(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP24"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai2.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[73].question}}<!-- <br><text style="color: #808080;width: 100%;display: block;text-align: right;">（可多选）</text> --></text>
							</TIBANA>
							<view class="danxuan-box chuizhi">
								<view class="danxuan w100 justify-content jianbian" :class="{'jianbian-active':i.fuxuan}" v-for="(i,index) in danxuanarrP25"
								 :key="index" @click="chooseDanXuanP25(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP25"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[74].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP26==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP26"
								 :key="index" @click="chooseDanXuanP26(index)">
									<view>{{i.sign}}</view>
									<text v-if="i.sign=='D'">都不是</text>
									<input type="text" value="" v-model="i.txt" placeholder="请简要描述" v-if="i.sign=='D'" class="xuanxiangbuchong"/>
									<text v-else>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP26"></view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/bg-top-bankuai4.png" mode="widthFix" class="pic"></image>
							<TIBANA class="tibanA">
								<text class="wenti-txt">{{$allArr[75].question}}</text>
							</TIBANA>
							<view class="danxuan-box chuizhi" >
								<view class="danxuan justify-content w100" :class="currentP27==index?'jianbian-active':'jianbian'" v-for="(i,index) in danxuanarrP27"
								 :key="index" @click="chooseDanXuanP27(index)">
									<view>{{i.sign}}</view>
									<text>{{i.txt}}</text>
								</view>
							</view>
							<view class="danxuan-box ">
								<view class="shangyiti" @click="backBtnD"></view>
								<view class="xiayiti" @click="checkP27"></view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</swiper-item>
			<swiper-item class="bg1">
				<view class="swiper-item endpage">
					<image src="../../static/wancheng.png" mode="widthFix"></image>
					<view class="fenxiang" @click="shareBtn"></view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import BGTOP2 from '@/components/index/bgTop2.vue'
	import BGBOTTOM from '@/components/fenlei/bgJibenwenti.vue'
	import BGBOTTOMA from '@/components/fenlei/bgJibenwentiA.vue'
	import FENGMIAN from '@/components/fengmian.vue'
	import TIBANA from '@/components/tibanA/tibanA.vue'
	export default {
		data() {
			return {
				bgc: '',
				currentB1: -1,
				currentB2: -1,
				currentB5:-1,
				currentB6:-1,
				currentB7:-1,
				currentB8:-1,
				currentB9:-1,
				currentB10:-1,
				currentB11:-1,
				currentB12:-1,
				currentB13:-1,
				currentB14:-1,
				currentH1:-1,
				currentH2:-1,
				currentH3:-1,
				currentH4:-1,
				currentH5:-1,
				currentH6:-1,
				currentH7:-1,
				currentH8:-1,
				currentH9:-1,
				currentH10:-1,
				currentH11:-1,
				currentH12:-1,
				currentH13:-1,
				currentH14:-1,
				currentG1:-1,
				currentG2:-1,
				currentG3:-1,
				currentG4:-1,
				currentG5:-1,
				currentG6:-1,
				currentG7:-1,
				currentG8:-1,
				currentG9:-1,
				currentG10:-1,
				currentG11:-1,
				currentG12:-1,
				currentG13:-1,
				currentG14:-1,
				currentG15:-1,
				currentG16:-1,
				currentG17:-1,
				currentG18:-1,
				currentG19:-1,
				currentG20:-1,
				currentG21:-1,
				currentP1:-1,
				currentP2:-1,
				currentP3:-1,
				currentP4:-1,
				currentP5:-1,
				currentP6:-1,
				currentP7:-1,
				currentP8:-1,
				currentP9:-1,
				currentP10:-1,
				currentP11:-1,
				currentP12:-1,
				currentP13:-1,
				currentP14:-1,
				currentP15:-1,
				currentP16:-1,
				currentP17:-1,
				currentP18:-1,
				currentP19:-1,
				currentP20:-1,
				currentP21:-1,
				currentP22:-1,
				currentP23:-1,
				currentP24:-1,
				currentP25:-1,
				currentP26:-1,
				currentP27:-1,
				lunboCurrent: 0,
				lunboCurrentA: 0,
				lunboCurrentB:0,
				lunboCurrentC:0,
				lunboCurrentD:0,
				danxuanarr: [{
						sign: 'A',
						txt: '是'
					},
					{
						sign: 'B',
						txt: '否'
					}
				],
				tianxieB2: [{
						sign: '男',
						txt: ''
					},
					{
						sign: '女',
						txt: ''
					}
				],
				tianxieB3: [{
						sign: '<30岁',
						txt: ''
					},
					{
						sign: '31-40岁',
						txt: ''
					},
					{
						sign: '41-50岁',
						txt: ''
					},
					{
						sign: '51-60岁',
						txt: ''
					},
					{
						sign: '>60岁',
						txt: ''
					},
				],
				tianxieB4: [{
						sign: '本科',
						txt: ''
					},
					{
						sign: '硕士',
						txt: ''
					},
					{
						sign: '博士',
						txt: ''
					}
				],
				danxuanarrB5:[
					{
						sign: 'A',
						txt: '<20台'
					},
					{
						sign: 'B',
						txt: '20-40台'
					},
					{
						sign: 'C',
						txt: '41-100台'
					},
					{
						sign: 'D',
						txt: '101-200台'
					},
					{
						sign: 'E',
						txt: '>200台'
					}
				],
				danxuanarrB6:[
					{
						sign: 'A',
						txt: '<20台'
					},
					{
						sign: 'B',
						txt: '20-40台'
					},
					{
						sign: 'C',
						txt: '41-100台'
					},
					{
						sign: 'D',
						txt: '>100台'
					},
					{
						sign: 'E',
						txt: '没有统计结果不详'
					}
				],
				danxuanarrB7:[
					{
						sign: 'A',
						txt: '开放'
					},
					{
						sign: 'B',
						txt: '微创'
					},
					{
						sign: 'C',
						txt: '开放/微创都有，开放为主'
					},
					{
						sign: 'D',
						txt: '开放/微创都有，微创为主'
					},
					{
						sign: 'E',
						txt: '2种方式手术量基本持平'
					}
				],
				danxuanarrB8:[
					{
						sign: 'A',
						txt: '<20台/年'
					},
					{
						sign: 'B',
						txt: '21-50台/年'
					},
					{
						sign: 'C',
						txt: '51-100台/年'
					},
					{
						sign: 'D',
						txt: '>100台/年'
					}
				],
				danxuanarrB9:[
					{
						sign: 'A',
						txt: '胃(十二指肠)--胆道--胰腺'
					},
					{
						sign: 'B',
						txt: '胃(十二指肠)--胰腺--胆道'
					},
					{
						sign: 'C',
						txt: '胆道--胃(十二指肠)--胰腺'
					},
					{
						sign: 'D',
						txt: '胆道--胰腺--胃(十二指肠)'
					},
					{
						sign: 'E',
						txt: '胰腺--胆道--胃(十二指肠)'
					},
					{
						sign: 'F',
						txt: '胰腺--胃(十二指肠)--胆道'
					}
				],
				danxuanarrB10:[
					{
						sign: 'A',
						txt: '胰肠吻合--胆肠吻合--胃肠吻合'
					},
					{
						sign: 'B',
						txt: '胃肠吻合--胆肠吻合--胰肠吻合'
					},
					{
						sign: 'C',
						txt: '胆肠吻合--胃肠吻合--胰肠吻合'
					},
					{
						sign: 'D',
						txt: '胰肠吻合--胃肠吻合--胆肠吻合'
					},
					{
						sign: 'E',
						txt: '胆肠吻合--胰肠吻合--胃肠吻合'
					},
					{
						sign: 'F',
						txt: '胃肠吻合--胰肠吻合--胆肠吻合'
					},
					{
						sign: 'G',
						txt: '胃肠吻合--胰肠吻合--胆肠吻合'
					}
				],
				danxuanarrB11:[
					{
						sign: 'A',
						txt: 'Child法'
					},
					{
						sign: 'B',
						txt: 'Whipple法'
					},
					{
						sign: 'C',
						txt: 'Cattell法'
					},
					{
						sign: 'D',
						txt: '其他方法'
					}
				],
				danxuanarrB12:[
					{
						sign: 'A',
						txt: '常规放置'
					},
					{
						sign: 'B',
						txt: '常规不放置'
					}
				],
				danxuanarrB13:[
					{
						sign: 'A',
						txt: '通常是'
					},
					{
						sign: 'B',
						txt: '通常不是'
					}
				],
				danxuanarrB14:[
					{
						sign: 'A',
						txt: '是 我们常规单独登记'
					},
					{
						sign: 'B',
						txt: '不是 我们不单独登记'
					}
				],
				danxuanarrH1:[
					{
						sign: 'A',
						txt: '胆总管'
					},
					{
						sign: 'B',
						txt: '肝总管'
					},
					{
						sign: 'C',
						txt: '不一定'
					}
				],
				danxuanarrH2:[
					{
						sign: 'A',
						txt: '基本是'
					},
					{
						sign: 'B',
						txt: '基本不是'
					},
					{
						sign: 'C',
						txt: '根据主刀决定'
					}
				],
				danxuanarrH3:[
					{
						sign: 'A',
						txt: '剪刀/手术刀切断'
					},
					{
						sign: 'B',
						txt: '电刀切断'
					},
					{
						sign: 'C',
						txt: '超声刀切断'
					},
					{
						sign: 'D',
						txt: 'Ligasure切断'
					}
				],
				danxuanarrH4:[
					{
						sign: 'A',
						txt: '单层缝合'
					},
					{
						sign: 'B',
						txt: '双层缝合'
					},
					{
						sign: 'C',
						txt: '不一定，前后壁采取不同方式的杂交缝合'
					},
					{
						sign: 'D',
						txt: '不一定，根据胆管粗细决定'
					}
				],
				danxuanarrH5:[
					{
						sign: 'A',
						txt: '连续缝合'
					},
					{
						sign: 'B',
						txt: '间断缝合'
					},
					{
						sign: 'C',
						txt: '不一定，前后壁采取不同方式的杂交缝合'
					},
					{
						sign: 'D',
						txt: '不一定，根据胆管粗细决定'
					}
				],
				danxuanarrH6:[
					{
						sign: 'A',
						txt: '前后壁都是单层连续缝合'
					},
					{
						sign: 'B',
						txt: '前后壁都是单层间断缝合'
					},
					{
						sign: 'C',
						txt: '后壁单层间断缝合\n前壁单层连续缝合'
					},
					{
						sign: 'D',
						txt: '后壁单层连续缝合\n前壁单层间断缝合'
					},
					{
						sign: 'E',
						txt: '都不是'
					}
				],
				danxuanarrH7:[
					{
						sign: 'A',
						txt: '前后壁都是单层连续缝合'
					},
					{
						sign: 'B',
						txt: '前后壁都是单层间断缝合'
					},
					{
						sign: 'C',
						txt: '后壁单层间断缝合\n前壁单层连续缝合'
					},
					{
						sign: 'D',
						txt: '后壁单层连续缝合\n前壁单层间断缝合'
					},
					{
						sign: 'E',
						txt: '近3年不做双层胆道吻合'
					}
				],
				danxuanarrH8:[
					{
						sign: 'A',
						txt: '胆管直径'
					},
					{
						sign: 'B',
						txt: '胆管离断部位'
					},
					{
						sign: 'C',
						txt: '胆管血供情况'
					},
					{
						sign: 'D',
						txt: '都不是'
					}
				],
				danxuanarrH9:[
					{
						sign: 'A',
						txt: '单股可吸收缝线（如普迪思PDSⅡ）',
						fuxuan:false
					},
					{
						sign: 'B',
						txt: '编织可吸收缝线（如抗菌薇乔Vicryl Plus）',
						fuxuan:false
					},
					{
						sign: 'C',
						txt: '单股不可吸收缝线（如普理灵Prolene）',
						fuxuan:false
					},
					{
						sign: 'D',
						txt: '编织不可吸收缝线（如丝线）',
						fuxuan:false
					},
					{
						sign: 'E',
						txt: '倒刺线(如爱惜捷 Stratafix)',
						fuxuan:false
					},
					{
						sign: 'F',
						txt: '',
						fuxuan:false
					}
				],
				danxuanarrH10:[
					{
						sign: 'A',
						txt: '胆管直径'
					},
					{
						sign: 'B',
						txt: '胆管离断部位'
					},
					{
						sign: 'C',
						txt: '胆管血供情况'
					},
					{
						sign: 'D',
						txt: '都不是'
					}
				],
				danxuanarrH11:[
					{
						sign: 'A',
						txt: '从来不放'
					},
					{
						sign: 'B',
						txt: '基本不放'
					},
					{
						sign: 'C',
						txt: '偶尔放置'
					},
					{
						sign: 'D',
						txt: '都不是'
					}
				],
				danxuanarrH12:[
					{
						sign: 'A',
						txt: '没有'
					},
					{
						sign: 'B',
						txt: '有'
					}
				],
				danxuanarrH13:[
					{
						sign: 'A',
						txt: '<10分钟'
					},
					{
						sign: 'B',
						txt: '10-20分钟'
					},
					{
						sign: 'C',
						txt: '21-30分钟'
					},
					{
						sign: 'D',
						txt: '>30分钟'
					}
				],
				danxuanarrH14:[
					{
						sign: 'A',
						txt: '后方放置'
					},
					{
						sign: 'B',
						txt: '前方放置'
					},
					{
						sign: 'C',
						txt: '前后方均放置'
					},
					{
						sign: 'D',
						txt: '不常规放置'
					}
				],
				danxuanarrG1:[
					{
						sign: 'A',
						txt: 'PD为主'
					},
					{
						sign: 'B',
						txt: 'PPPD为主'
					},
					{
						sign: 'C',
						txt: '两种都有，基本持平'
					}
				],
				danxuanarrG2:[
					{
						sign: 'A',
						txt: '<1cm'
					},
					{
						sign: 'B',
						txt: '1-2cm'
					},
					{
						sign: 'C',
						txt: '>2cm'
					}
				],
				danxuanarrG3:[
					{
						sign: 'A',
						txt: '<30%'
					},
					{
						sign: 'B',
						txt: '30%～50%'
					},
					{
						sign: 'C',
						txt: '>50%'
					},
					{
						sign: 'D',
						txt: '不确定'
					}
				],
				danxuanarrG4:[
					{
						sign: 'A',
						txt: '<30cm'
					},
					{
						sign: 'B',
						txt: '30～50cm'
					},
					{
						sign: 'C',
						txt: '>50cm'
					}
				],
				danxuanarrG5:[
					{
						sign: 'A',
						txt: '结肠前'
					},
					{
						sign: 'B',
						txt: '结肠后'
					},
					{
						sign: 'C',
						txt: '不一定'
					}
				],
				danxuanarrG6:[
					{
						sign: 'A',
						txt: '输入袢对大弯侧'
					},
					{
						sign: 'B',
						txt: '输入袢对小弯侧'
					},
					{
						sign: 'C',
						txt: '不一定'
					}
				],
				danxuanarrG7:[
					{
						sign: 'A',
						txt: 'Roux-en-Y'
					},
					{
						sign: 'B',
						txt: 'Billroth-II'
					},
					{
						sign: 'C',
						txt: 'Billroth-II+Braun'
					}
				],
				danxuanarrG8:[
					{
						sign: 'A',
						txt: '从不'
					},
					{
						sign: 'B',
						txt: '偶尔'
					},
					{
						sign: 'C',
						txt: '通常是'
					}
				],
				danxuanarrG9:[
					{
						sign: 'A',
						txt: '全手工吻合'
					},
					{
						sign: 'B',
						txt: '管型吻合器辅助'
					},
					{
						sign: 'C',
						txt: '直线型切割闭合器辅助'
					}
				],
				danxuanarrG10:[
					{
						sign: 'A',
						txt: '节约手术时间'
					},
					{
						sign: 'B',
						txt: '减少胃肠吻合术后并发症'
					},
					{
						sign: 'C',
						txt: '减少住院费用'
					},
					{
						sign: 'D',
						txt: '训练手工缝合技术'
					},
					{
						sign: 'E',
						txt: '其他因素'
					}
				],
				danxuanarrG11:[
					{
						sign: 'A',
						txt: '单层连续'
					},
					{
						sign: 'B',
						txt: '单层间断吻合'
					},
					{
						sign: 'C',
						txt: '双层连续'
					},
					{
						sign: 'D',
						txt: '双层间断'
					}
				],
				danxuanarrG12:[
					{
						sign: 'A',
						txt: '单股可吸收缝线（如普迪思PDSⅡ）'
					},
					{
						sign: 'B',
						txt: '编织可吸收缝线（如抗菌薇乔Vicryl Plus）'
					},
					{
						sign: 'C',
						txt: '单股不可吸收缝线（如普理灵Prolene）'
					},
					{
						sign: 'D',
						txt: '编织不可吸收缝线（如丝线）'
					},
					{
						sign: 'E',
						txt: '倒刺线(如爱惜捷 Stratafix)'
					}
				],
				danxuanarrG13:[
					{
						sign: 'A',
						txt: '胃切除闭合端小弯侧'
					},
					{
						sign: 'B',
						txt: '胃切除闭合端大弯侧'
					},
					{
						sign: 'C',
						txt: '胃切除闭合端胃前壁'
					},
					{
						sign: 'D',
						txt: '胃切除闭合端胃后壁'
					}
				],
				danxuanarrG14:[
					{
						sign: 'A',
						txt: '是'
					},
					{
						sign: 'B',
						txt: '否'
					},
					{
						sign: 'C',
						txt: '不一定'
					}
				],
				danxuanarrG15:[
					{
						sign: 'A',
						txt: '间断单层缝合'
					},
					{
						sign: 'B',
						txt: '连续单层缝合'
					},
					{
						sign: 'C',
						txt: '双层缝合'
					},
					{
						sign: 'D',
						txt: '闭合器关闭'
					}
				],
				danxuanarrG16:[
					{
						sign: 'A',
						txt: '<10min'
					},
					{
						sign: 'B',
						txt: '10-20min'
					},
					{
						sign: 'C',
						txt: '20-30min'
					},
					{
						sign: 'D',
						txt: '>30min'
					}
				],
				danxuanarrG17:[
					{
						sign: 'A',
						txt: '主刀'
					},
					{
						sign: 'B',
						txt: '一助'
					},
					{
						sign: 'C',
						txt: '大部分主刀，偶尔一助'
					},
					{
						sign: 'D',
						txt: '大部分一助，偶尔主刀'
					}
				],
				danxuanarrG18:[
					{
						sign: 'A',
						txt: '后方放置'
					},
					{
						sign: 'B',
						txt: '前方放置'
					},
					{
						sign: 'C',
						txt: '前后方均放置'
					},
					{
						sign: 'D',
						txt: '常规不放置'
					}
				],
				danxuanarrG19:[
					{
						sign: 'A',
						txt: '是'
					},
					{
						sign: 'B',
						txt: '否'
					}
				],
				danxuanarrG20:[
					{
						sign: 'A',
						txt: '术后24小时内拔除'
					},
					{
						sign: 'B',
						txt: '术后第3天拔除'
					},
					{
						sign: 'C',
						txt: '术后第5天拔除'
					},
					{
						sign: 'D',
						txt: '术后第7天拔除'
					},
					{
						sign: 'E',
						txt: '根据肛门排气时间决定'
					}
				],
				danxuanarrG21:[
					{
						sign: 'A',
						txt: '基本不放'
					},
					{
						sign: 'B',
						txt: '常规放置'
					}
				],
				
				danxuanarrP1:[
					{
						sign: 'A',
						txt: '没有'
					},
					{
						sign: 'B',
						txt: '有'
					}
				],
				danxuanarrP2:[
					{
						sign: 'A',
						txt: '单层胰肠吻合'
					},
					{
						sign: 'B',
						txt: '双层胰肠吻合'
					},
					{
						sign: 'C',
						txt: '3层胰肠吻合'
					}
				],
				danxuanarrP3:[
					{
						sign: 'A',
						txt: '单层间断缝合'
					},
					{
						sign: 'B',
						txt: '单层连续缝合'
					},
					{
						sign: 'C',
						txt: '前后壁分别采用间断或者连续的杂交缝合'
					}
				],
				danxuanarrP4:[
					{
						sign: 'A',
						txt: '套入式吻合技术（Invagination Technique，包括：胰腺空肠端端套入吻合、胰腺空肠端侧套入吻合、彭氏捆绑式胰腺空肠吻合、陈氏U型胰肠吻合等）'
					},
					{
						sign: 'B',
						txt: '导管对粘膜吻合技术（Duct to Mucosa Technique，包括：Cattel-Warren胰肠吻合、Kakita胰肠吻合、Blumgart胰肠吻合、洪氏一针法及类似方法等）'
					},
					{
						sign: 'C',
						txt: ''
					}
				],
				danxuanarrP5:[
					{
						sign: 'A',
						txt: '1层'
					},
					{
						sign: 'B',
						txt: '2层'
					},
					{
						sign: 'C',
						txt: '>2层'
					},
					{
						sign: 'D',
						txt: '不单独缝合胰腺实质和空肠浆肌层'
					}
				],
				danxuanarrP6:[
					{
						sign: 'A',
						txt: '前后壁间断吻合'
					},
					{
						sign: 'B',
						txt: '前后壁连续吻合'
					},
					{
						sign: 'C',
						txt: '后壁连续，前壁间断吻合'
					},
					{
						sign: 'D',
						txt: '后壁间断，前壁连续吻合'
					},
					{
						sign: 'E',
						txt: '不常规单独缝合胰腺实质和空肠浆肌层'
					},
					{
						sign: 'F',
						txt: ''
					}
				],
				danxuanarrP7:[
					{
						sign: 'A',
						txt: '单股可吸收缝线（如普迪思PDSⅡ）'
					},
					{
						sign: 'B',
						txt: '编织可吸收缝线（如抗菌薇乔 Vicryl Plus）'
					},
					{
						sign: 'C',
						txt: '单股不可吸收缝线（如普理灵Prolene）'
					},
					{
						sign: 'D',
						txt: '编织不可吸收缝线（如丝线）'
					},
					{
						sign: 'E',
						txt: '倒刺线（如爱惜捷 Stratafix）'
					},
					{
						sign: 'F',
						txt: '其他'
					}
				],
				danxuanarrP8:[
					{
						sign: 'A',
						txt: '2-0'
					},
					{
						sign: 'B',
						txt: '3-0'
					},
					{
						sign: 'C',
						txt: '4-0'
					},
					{
						sign: 'D',
						txt: ''
					}
				],
				danxuanarrP9:[
					{
						sign: 'A',
						txt: '单股可吸收缝线（如普迪思PDSⅡ等）'
					},
					{
						sign: 'B',
						txt: '编织可吸收缝线（如抗菌薇乔 Vicryl Plus）'
					},
					{
						sign: 'C',
						txt: '单股不可吸收缝线（如普理灵Prolene）'
					},
					{
						sign: 'D',
						txt: '编织不可吸收缝线（如丝线）'
					},
					{
						sign: 'E',
						txt: '倒刺线（如爱惜捷 Stratafix）'
					},
					{
						sign: 'F',
						txt: '不涉及'
					}
				],
				danxuanarrP10:[
					{
						sign: 'A',
						txt: '3-0'
					},
					{
						sign: 'B',
						txt: '4-0'
					},
					{
						sign: 'C',
						txt: '5-0'
					},
					{
						sign: 'D',
						txt: '6-0'
					},
					{
						sign: 'E',
						txt: '不涉及'
					}
				],
				danxuanarrP11:[
					{
						sign: 'A',
						txt: '常规放置'
					},
					{
						sign: 'B',
						txt: '常规不放置'
					},
					{
						sign: 'C',
						txt: ''
					}
				],
				danxuanarrP12:[
					{
						sign: 'A',
						txt: '外引流'
					},
					{
						sign: 'B',
						txt: '内引流'
					},
					{
						sign: 'C',
						txt: '常规不放置'
					},
					{
						sign: 'D',
						txt: '不一定'
					}
				],
				danxuanarrP13:[
					{
						sign: 'A',
						txt: '单层吻合技术'
					},
					{
						sign: 'B',
						txt: '套入式吻合技术（Invagination Technique）：'
					},
					{
						sign: 'C',
						txt: '导管对粘膜吻合技术（Duct to Mucosa Technique）:'
					}
				],
				danxuanarrP14:[
					{
						sign: 'A',
						txt: '单层连续'
					},
					{
						sign: 'B',
						txt: '单层间断'
					},
					{
						sign: 'C',
						txt: ''
					}
				],
				danxuanarrP15:[
					{
						sign: 'A',
						txt: '胰腺空肠端端套入吻合'
					},
					{
						sign: 'B',
						txt: '胰腺空肠端侧套入吻合'
					},
					{
						sign: 'C',
						txt: '彭氏捆绑式胰腺空肠吻合'
					},
					{
						sign: 'D',
						txt: '陈氏U型胰肠吻合'
					},
					{
						sign: 'E',
						txt: ''
					}
				],
				danxuanarrP16:[
					{
						sign: 'A',
						txt: 'Cattel-Warren胰肠吻合'
					},
					{
						sign: 'B',
						txt: 'Kakita胰肠吻合'
					},
					{
						sign: 'C',
						txt: 'Blumgart胰肠吻合'
					},
					{
						sign: 'D',
						txt: '洪氏一针法及类似方法'
					},
					{
						sign: 'E',
						txt: ''
					}
				],
				danxuanarrP17:[
					{
						sign: 'A',
						txt: '使用自体材料：网膜组织'
					},
					{
						sign: 'B',
						txt: '使用自体材料：圆韧带'
					},
					{
						sign: 'C',
						txt: '使用可吸收补片：如生物补片等'
					},
					{
						sign: 'D',
						txt: '使用不可吸收补片：如聚四氟乙烯'
					},
					{
						sign: 'E',
						txt: ''
					},
					{
						sign: 'F',
						txt: '不使用'
					}
				],
				danxuanarrP18:[
					{
						sign: 'A',
						txt: '<10min'
					},
					{
						sign: 'B',
						txt: '10-30min'
					},
					{
						sign: 'C',
						txt: '31-60min'
					},
					{
						sign: 'D',
						txt: '＞60min'
					},
					{
						sign: 'E',
						txt: '无相关数据'
					}
				],
				danxuanarrP19:[
					{
						sign: 'A',
						txt: '<10min'
					},
					{
						sign: 'B',
						txt: '10-30min'
					},
					{
						sign: 'C',
						txt: '31-60min'
					},
					{
						sign: 'D',
						txt: '＞60min'
					},
					{
						sign: 'E',
						txt: '无相关数据'
					}
				],
				danxuanarrP20:[
					{
						sign: 'A',
						txt: '1根'
					},
					{
						sign: 'B',
						txt: '2根'
					},
					{
						sign: 'C',
						txt: '3根'
					},
					{
						sign: 'D',
						txt: '>3根'
					},
					{
						sign: 'E',
						txt: '不常规放置'
					}
				],
				danxuanarrP21:[
					{
						sign: 'A',
						txt: '胰肠吻合口后方',
						fuxuan:false
					},
					{
						sign: 'B',
						txt: '胰肠吻合口前方',
						fuxuan:false
					},
					{
						sign: 'C',
						txt: '胰肠吻合口上缘',
						fuxuan:false
					},
					{
						sign: 'D',
						txt: '胰肠吻合口下缘',
						fuxuan:false
					},
					{
						sign: 'E',
						txt: '',
						fuxuan:false
					}
				],
				danxuanarrP22:[
					{
						sign: 'A',
						txt: '双套管（冲洗+低负压吸引）'
					},
					{
						sign: 'B',
						txt: '橡胶材质引流管'
					},
					{
						sign: 'C',
						txt: '硅胶材质引流管'
					},
					{
						sign: 'D',
						txt: 'Jackson-Pratt（J-P）引流管'
					},
					{
						sign: 'E',
						txt: ''
					}
				],
				danxuanarrP23:[
					{
						sign: 'A',
						txt: '不，常规不检测'
					},
					{
						sign: 'B',
						txt: '是 常规检测术后第1天'
					},
					{
						sign: 'C',
						txt: '是 常规检测术后第3天'
					},
					{
						sign: 'D',
						txt: '是 常规检测术后第5天'
					},
					{
						sign: 'E',
						txt: '常规检测，但是具体时间没有规定'
					}
				],
				danxuanarrP24:[
					{
						sign: 'A',
						txt: 'POD 3-5'
					},
					{
						sign: 'B',
						txt: 'POD 5-7'
					},
					{
						sign: 'C',
						txt: 'POD 7-9'
					},
					{
						sign: 'D',
						txt: 'POD 9-14'
					},
					{
						sign: 'E',
						txt: 'POD＞14'
					}
				],
				danxuanarrP25:[
					{
						sign: 'A',
						txt: '引流液的量',
						fuxuan:false
					},
					{
						sign: 'B',
						txt: '引流液的淀粉酶值',
						fuxuan:false
					},
					{
						sign: 'C',
						txt: '引流液的外观性质',
						fuxuan:false
					},
					{
						sign: 'D',
						txt: '引流管放置时间',
						fuxuan:false
					},
					{
						sign: 'E',
						txt: '引流液微生物培养结果',
						fuxuan:false
					},
					{
						sign: 'F',
						txt: '病人的一般情况',
						fuxuan:false
					}
				],
				danxuanarrP26:[
					{
						sign: 'A',
						txt: '一次性拔除'
					},
					{
						sign: 'B',
						txt: '常规退管后观察1到2天后再拔除'
					},
					{
						sign: 'C',
						txt: '常规更换引流管后再拔除'
					},
					{
						sign: 'D',
						txt: ''
					}
				],
				danxuanarrP27:[
					{
						sign: 'A',
						txt: '<5%'
					},
					{
						sign: 'B',
						txt: '5%-10%'
					},
					{
						sign: 'C',
						txt: '11%-20%'
					},
					{
						sign: 'D',
						txt: '21%-30%'
					},
					{
						sign: 'E',
						txt: '31%以上'
					},
					{
						sign: 'F',
						txt: '我们没有相关统计数据'
					}
				],
			};
		},
		components: {
			BGTOP2,
			BGBOTTOM,
			BGBOTTOMA,
			FENGMIAN,
			TIBANA
		},
		methods: {
			chooseDanXuan(index) {
				// console.log(this.danxuanarr[index].txt)

				this.currentB1 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B1') {
						s.val = this.danxuanarr[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB1B2() {
				console.log('男', this.tianxieB2[0].txt)
				console.log('女', this.tianxieB2[1].txt)
				if (this.tianxieB2[0].txt && this.tianxieB2[1].txt && this.$allArr[0].val) {
					this.$allArr[1].val = '男' + this.tianxieB2[0].txt + ',女' + this.tianxieB2[1]
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请完整填写所有问题',
						showCancel: false
					})
				}
			},
			backBtn() {
				this.lunboCurrent--
			},
			checkB3() {
				if (this.tianxieB3[0].txt && this.tianxieB3[1].txt && this.tianxieB3[2].txt && this.tianxieB3[3].txt && this.tianxieB3[
						4].txt) {
					this.$allArr[2].val = this.tianxieB3[0].sign + ':' + this.tianxieB3[0].txt + '人，' +
						this.tianxieB3[1].sign + ':' + this.tianxieB3[1].txt + '人，' +
						this.tianxieB3[2].sign + ':' + this.tianxieB3[2].txt + '人，' +
						this.tianxieB3[3].sign + ':' + this.tianxieB3[3].txt + '人，' +
						this.tianxieB3[4].sign + ':' + this.tianxieB3[4].txt + '人'

					console.log(this.$allArr[2])
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请完整填写所有问题',
						showCancel: false
					})
				}
			},
			checkB4() {
				if (this.tianxieB4[0].txt && this.tianxieB4[1].txt && this.tianxieB4[2].txt) {
					this.$allArr[3].val = this.tianxieB4[0].sign + ':' + this.tianxieB4[0].txt + '人，' +
						this.tianxieB4[1].sign + ':' + this.tianxieB4[1].txt + '人，' +
						this.tianxieB4[2].sign + ':' + this.tianxieB4[2].txt + '人'

					console.log(this.$allArr[3])
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请完整填写所有问题',
						showCancel: false
					})
				}
			},
			changeCurrent(e) {
				// console.log(e)
				this.lunboCurrent = e.detail.current
			},
			changeCurrentA(e) {
				// console.log(e)
				this.lunboCurrentA = e.detail.current
			},
			changeCurrentB(e) {
				// console.log(e)
				this.lunboCurrentB = e.detail.current
			},
			changeCurrentC(e) {
				// console.log(e)
				this.lunboCurrentC = e.detail.current
			},
			changeCurrentD(e) {
				// console.log(e)
				this.lunboCurrentD = e.detail.current
			},
			chooseDanXuanB5(index) {
				this.currentB5 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B5') {
						s.val = this.danxuanarrB5[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB5(){
				if (this.$allArr[4].val) {
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanB6(index) {
				this.currentB6 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B6') {
						s.val = this.danxuanarrB6[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB6(){
				if (this.$allArr[5].val) {
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanB7(index) {
				this.currentB7 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B7') {
						s.val = this.danxuanarrB7[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB7(){
				if (this.$allArr[6].val) {
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanB8(index) {
				this.currentB8 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B8') {
						s.val = this.danxuanarrB8[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB8(){
				if (this.$allArr[7].val) {
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanB9(index) {
				this.currentB9 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B9') {
						s.val = this.danxuanarrB9[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB9(){
				if (this.$allArr[8].val) {
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanB10(index) {
				this.currentB10 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B10') {
						s.val = this.danxuanarrB10[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB10(){
				if (this.$allArr[9].val) {
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanB11(index) {
				this.currentB11 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B11') {
						s.val = this.danxuanarrB11[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB11(){
				if (this.$allArr[10].val) {
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanB12(index) {
				this.currentB12 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B12') {
						s.val = this.danxuanarrB12[index].txt
					}
				}
				console.log(this.$allArr)
			},
			chooseDanXuanB13(index) {
				this.currentB13 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B13') {
						s.val = this.danxuanarrB13[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB12B13(){
				if (this.$allArr[11].val && this.$allArr[12].val) {
					this.lunboCurrent++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanB14(index) {
				this.currentB14 = index
				for (let s of this.$allArr) {
					if (s.sid == 'B14') {
						s.val = this.danxuanarrB14[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkB14(){
				if (this.$allArr[13].val) {
					this.lunboCurrentA++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			nextBtnA(){
				this.lunboCurrentA++
			},
			chooseDanXuanH1(index) {
				this.currentH1 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H1') {
						s.val = this.danxuanarrH1[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH1(){
				if (this.$allArr[14].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			backBtnB(){
				this.lunboCurrentB--
			},
			chooseDanXuanH2(index) {
				this.currentH2 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H2') {
						s.val = this.danxuanarrH2[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH2(){
				if (this.$allArr[15].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH3(index) {
				this.currentH3 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H3') {
						s.val = this.danxuanarrH3[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH3(){
				if (this.$allArr[16].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH4(index) {
				this.currentH4 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H4') {
						s.val = this.danxuanarrH4[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH4(){
				if (this.$allArr[17].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH5(index) {
				this.currentH5 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H5') {
						s.val = this.danxuanarrH5[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH5(){
				if (this.$allArr[18].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH6(index) {
				this.currentH6 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H6') {
						s.val = this.danxuanarrH6[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH6(){
				if (this.$allArr[19].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH7(index) {
				this.currentH7 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H7') {
						s.val = this.danxuanarrH7[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH7(){
				if (this.$allArr[20].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH8(index) {
				this.currentH8 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H8') {
						s.val = this.danxuanarrH8[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH8(){
				if (this.$allArr[21].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH9(index) {
				this.danxuanarrH9[index].fuxuan = !this.danxuanarrH9[index].fuxuan
				if (!this.danxuanarrH9[5].fuxuan) {
					this.danxuanarrH9[5].txt = ''
				}
				
			},
			checkH9(){
				if (this.danxuanarrH9[0].fuxuan || this.danxuanarrH9[1].fuxuan || this.danxuanarrH9[2].fuxuan || this.danxuanarrH9[3].fuxuan || this.danxuanarrH9[4].fuxuan || this.danxuanarrH9[5].fuxuan) {
					
					//存储
					let str = ''
					
					for (let s of this.danxuanarrH9) {
						if(s.fuxuan){
							str+=(s.sign+s.txt+' ')
						}
					}
					this.$allArr[22].val = str
					this.lunboCurrentB++
					console.log(this.$allArr[22].val)
				}else{
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
				
			},
			chooseDanXuanH10(index) {
				this.currentH10 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H10') {
						s.val = this.danxuanarrH10[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH10(){
				if (this.$allArr[23].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH11(index) {
				this.currentH11 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H11') {
						s.val = this.danxuanarrH11[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH11(){
				if (this.$allArr[24].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH12(index) {
				this.currentH12 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H12') {
						s.val = this.danxuanarrH12[index].txt
					}
				}
				console.log(this.$allArr)
			},
			chooseDanXuanH13(index) {
				this.currentH13 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H13') {
						s.val = this.danxuanarrH13[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH12H13(){
				if (this.$allArr[25].val && this.$allArr[26].val) {
					this.lunboCurrentB++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanH14(index) {
				this.currentH14 = index
				for (let s of this.$allArr) {
					if (s.sid == 'H14') {
						s.val = this.danxuanarrH14[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkH14(){
				if (this.$allArr[27].val) {
					this.lunboCurrentA++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG1(index) {
				this.currentG1 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G1') {
						s.val = this.danxuanarrG1[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG1(){
				if (this.$allArr[28].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG2(index) {
				this.currentG2 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G2') {
						s.val = this.danxuanarrG2[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG2(){
				if (this.$allArr[29].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG3(index) {
				this.currentG3 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G3') {
						s.val = this.danxuanarrG3[index].txt
					}
				}
				console.log(this.$allArr)
			},
			chooseDanXuanG4(index) {
				this.currentG4 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G4') {
						s.val = this.danxuanarrG4[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG3(){
				if (this.$allArr[30].val ) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			checkG4(){
				if ( this.$allArr[31].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG5(index) {
				this.currentG5 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G5') {
						s.val = this.danxuanarrG5[index].txt
					}
				}
				console.log(this.$allArr)
			},
			chooseDanXuanG6(index) {
				this.currentG6 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G6') {
						s.val = this.danxuanarrG6[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG5(){
				if (this.$allArr[32].val ) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			checkG6(){
				if ( this.$allArr[33].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanG7(index) {
				this.currentG7 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G7') {
						s.val = this.danxuanarrG7[index].txt
					}
				}
				console.log(this.$allArr)
			},
			chooseDanXuanG8(index) {
				this.currentG8 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G8') {
						s.val = this.danxuanarrG8[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG7(){
				if (this.$allArr[34].val ) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			checkG8(){
				if (this.$allArr[35].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			backBtnC(){
				this.lunboCurrentC--
			},
			backBtnD(){
				this.lunboCurrentD--
			},
			chooseDanXuanG9(index) {
				this.currentG9 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G9') {
						s.val = this.danxuanarrG9[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG9(){
				if (this.$allArr[36].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG10(index) {
				this.currentG10 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G10') {
						s.val = this.danxuanarrG10[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG10(){
				if (this.$allArr[37].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG11(index) {
				this.currentG11 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G11') {
						s.val = this.danxuanarrG11[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG11(){
				if (this.$allArr[38].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG12(index) {
				this.currentG12 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G12') {
						s.val = this.danxuanarrG12[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG12(){
				if (this.$allArr[39].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG13(index) {
				this.currentG13 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G13') {
						s.val = this.danxuanarrG13[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG13(){
				if (this.$allArr[40].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG14(index) {
				this.currentG14 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G14') {
						s.val = this.danxuanarrG14[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG14(){
				if (this.$allArr[41].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG15(index) {
				this.currentG15 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G15') {
						s.val = this.danxuanarrG15[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG15(){
				if (this.$allArr[42].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG16(index) {
				this.currentG16 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G16') {
						s.val = this.danxuanarrG16[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG16(){
				if (this.$allArr[43].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			chooseDanXuanG17(index) {
				this.currentG17 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G17') {
						s.val = this.danxuanarrG17[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG17(){
				if (this.$allArr[44].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanG18(index) {
				this.currentG18 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G18') {
						s.val = this.danxuanarrG18[index].txt
					}
				}
				console.log(this.$allArr)
			},
			chooseDanXuanG19(index) {
				this.currentG19 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G19') {
						s.val = this.danxuanarrG19[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG18G19(){
				if (this.$allArr[45].val && this.$allArr[46].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanG20(index) {
				this.currentG20 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G20') {
						s.val = this.danxuanarrG20[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG20(){
				if (this.$allArr[47].val) {
					this.lunboCurrentC++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanG21(index) {
				this.currentG21 = index
				for (let s of this.$allArr) {
					if (s.sid == 'G21') {
						s.val = this.danxuanarrG21[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkG21(){
				if (this.$allArr[48].val) {
					this.lunboCurrentA++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP1(index) {
				this.currentP1 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P1') {
						s.val = this.danxuanarrP1[index].txt
					}
				}
				console.log(this.$allArr)
			},
			chooseDanXuanP2(index) {
				this.currentP2 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P2') {
						s.val = this.danxuanarrP2[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP1P2(){
				if (this.$allArr[49].val && this.$allArr[50].val) {
					if (this.currentP2 == 0) {
						this.lunboCurrentD++
					} else if(this.currentP2 == 1){
						this.lunboCurrentD +=2
					} else{
						this.lunboCurrentD +=5
					}
					
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP3(index) {
				this.currentP3 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P3') {
						s.val = this.danxuanarrP3[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP3(){
				if (this.$allArr[51].val) {
					this.lunboCurrentD+=4
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			backBtnD4(){
				this.lunboCurrentD -=2
			},
			
			chooseDanXuanP4(index) {
				this.currentP4 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P4') {
						s.val = this.danxuanarrP4[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP4(){
				if(this.$allArr[52].val){
					/* for (let s of this.$allArr) {
						if (s.sid == 'P4') {
							s.val = this.danxuanarrP4[2].txt
						}
					} */
					this.lunboCurrentD++
				}
				// if (this.$allArr[52].val&&this.currentP4==1) {
					
				// } else if(this.$allArr[52].val&&this.currentP4!=1){
					// this.lunboCurrentD+=2
				else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP5(index) {
				this.currentP5 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P5') {
						s.val = this.danxuanarrP5[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP5(){
				if (this.$allArr[53].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP6(index) {
				this.currentP6 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P6') {
						s.val = this.danxuanarrP6[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP6(){
				if(this.currentP6 == 5){
					for (let s of this.$allArr) {
						if (s.sid == 'P6') {
							s.val = this.danxuanarrP6[5].txt
						}
					}
				}
				if (this.$allArr[54].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			backBtnD6(){
				this.lunboCurrentD--
			},
			
			
			chooseDanXuanP7(index) {
				this.currentP7 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P7') {
						s.val = this.danxuanarrP7[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP7(){
				if (this.$allArr[55].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP8(index) {
				this.currentP8 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P8') {
						s.val = this.danxuanarrP8[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP8(){
				if(this.currentP8 == 3){
					for (let s of this.$allArr) {
						if (s.sid == 'P8') {
							s.val = this.danxuanarrP8[3].txt
						}
					}
				}
				if (this.$allArr[56].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP9(index) {
				this.currentP9 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P9') {
						s.val = this.danxuanarrP9[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP9(){
				if (this.$allArr[57].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP10(index) {
				this.currentP10 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P10') {
						s.val = this.danxuanarrP10[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP10(){
				if (this.$allArr[58].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP11(index) {
				this.currentP11 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P11') {
						s.val = this.danxuanarrP11[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP11(){
				if(this.currentP11 == 2){
					for (let s of this.$allArr) {
						if (s.sid == 'P11') {
							s.val = this.danxuanarrP11[2].txt
						}
					}
				}
				if (this.$allArr[59].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP12(index) {
				this.currentP12 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P12') {
						s.val = this.danxuanarrP12[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP12(){
				if (this.$allArr[60].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP14(index) {
				this.currentP14 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P14') {
						s.val = this.danxuanarrP14[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP14(){
				if(this.currentP14 == 2){
					for (let s of this.$allArr) {
						if (s.sid == 'P14') {
							s.val = this.danxuanarrP14[2].txt
						}
					}
				}
				if (this.$allArr[62].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP15(index) {
				this.currentP15 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P15') {
						s.val = this.danxuanarrP15[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP15(){
				if(this.currentP15 == 4){
					for (let s of this.$allArr) {
						if (s.sid == 'P15') {
							s.val = this.danxuanarrP15[4].txt
						}
					}
				}
				if (this.$allArr[63].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP16(index) {
				this.currentP16 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P16') {
						s.val = this.danxuanarrP16[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP16(){
				if(this.currentP16 == 4){
					for (let s of this.$allArr) {
						if (s.sid == 'P16') {
							s.val = this.danxuanarrP16[4].txt
						}
					}
				}
				if (this.$allArr[64].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP17(index) {
				this.currentP17 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P17') {
						s.val = this.danxuanarrP17[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP17(){
				if(this.currentP17 == 4){
					for (let s of this.$allArr) {
						if (s.sid == 'P17') {
							s.val = this.danxuanarrP17[4].txt
						}
					}
				}
				if (this.$allArr[65].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP18(index) {
				this.currentP18 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P18') {
						s.val = this.danxuanarrP18[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP18(){
				if (this.$allArr[66].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP19(index) {
				this.currentP19 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P19') {
						s.val = this.danxuanarrP19[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP19(){
				if (this.$allArr[67].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP20(index) {
				this.currentP20 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P20') {
						s.val = this.danxuanarrP20[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP20(){
				if (this.$allArr[68].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP21(index) {
				this.danxuanarrP21[index].fuxuan = !this.danxuanarrP21[index].fuxuan
				if (!this.danxuanarrP21[4].fuxuan) {
					this.danxuanarrP21[4].txt = ''
				}
				
			},
			checkP21(){
				if (this.danxuanarrP21[0].fuxuan || this.danxuanarrP21[1].fuxuan || this.danxuanarrP21[2].fuxuan || this.danxuanarrP21[3].fuxuan || this.danxuanarrP21[4].fuxuan) {
					
					//存储
					let str = ''
					
					for (let s of this.danxuanarrP21) {
						if(s.fuxuan){
							str+=(s.sign+s.txt+' ')
						}
					}
					this.$allArr[69].val = str
					this.lunboCurrentD++
					console.log(this.$allArr[69].val)
				}else{
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
				
			},
			
			chooseDanXuanP22(index) {
				this.currentP22 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P22') {
						s.val = this.danxuanarrP22[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP22(){
				if(this.currentP22 == 4){
					for (let s of this.$allArr) {
						if (s.sid == 'P22') {
							s.val = this.danxuanarrP22[4].txt
						}
					}
				}
				if (this.$allArr[70].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP23(index) {
				this.currentP23 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P23') {
						s.val = this.danxuanarrP23[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP23(){
				if (this.$allArr[71].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP24(index) {
				this.currentP24 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P24') {
						s.val = this.danxuanarrP24[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP24(){
				if (this.$allArr[72].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP25(index) {
				this.danxuanarrP25[index].fuxuan = !this.danxuanarrP25[index].fuxuan
				
				
			},
			checkP25(){
				if (this.danxuanarrP25[0].fuxuan || this.danxuanarrP25[1].fuxuan || this.danxuanarrP25[2].fuxuan || this.danxuanarrP25[3].fuxuan || this.danxuanarrP25[4].fuxuan|| this.danxuanarrP25[5].fuxuan) {
					
					//存储
					let str = ''
					
					for (let s of this.danxuanarrP25) {
						if(s.fuxuan){
							str+=(s.sign+s.txt+' ')
						}
					}
					this.$allArr[73].val = str
					this.lunboCurrentD++
					console.log(this.$allArr[73].val)
				}else{
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
				
			},
			
			chooseDanXuanP26(index) {
				this.currentP26 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P26') {
						s.val = this.danxuanarrP26[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP26(){
				if(this.currentP26 == 3){
					for (let s of this.$allArr) {
						if (s.sid == 'P26') {
							s.val = this.danxuanarrP26[3].txt
						}
					}
				}
				if (this.$allArr[74].val) {
					this.lunboCurrentD++
				} else {
					uni.showModal({
						content: '请选择答案或者填写答案',
						showCancel: false
					})
				}
			},
			
			chooseDanXuanP27(index) {
				this.currentP27 = index
				for (let s of this.$allArr) {
					if (s.sid == 'P27') {
						s.val = this.danxuanarrP27[index].txt
					}
				}
				console.log(this.$allArr)
			},
			checkP27(){
				if (this.$allArr[75].val) {
					this.lunboCurrentA++
				} else {
					uni.showModal({
						content: '请选择答案',
						showCancel: false
					})
				}
			},
			
			shareBtn(){
				if(window.parent.saveSurvey){
					console.log(this.$allArr)
						window.parent.saveSurvey('胰腺问卷', this.$allArr,'胰十二指肠切除术后消化道重建全国调查' );
						uni.showModal({
							content:'提交成功',
							showCancel:false
						})
					}else{
						console.log(this.$allArr)
						uni.showModal({
							content:'提交失败',
							showCancel:false
						})
					}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #fdfcff;
	}

	.swiper-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.pic1 {
		width: 299rpx;
		height: 68rpx;
		margin-top: 52rpx;
	}
.pic2 {
		width: 297rpx;
		height: 65rpx;
		margin-top: 52rpx;
	}
	.txt {
		color: #c9caca;
		font-size: 40rpx;
		margin-top: 33rpx;
	}

	.txt1 {
		color: #c9caca;
		font-size: 40rpx;
		margin-top: 45rpx;
	}

	.txt2 {
		color: #c9caca;
		font-size: 40rpx;
		margin-top: 15rpx;
	}

	.tibanA {
		margin-top: 20rpx;
	}

	.bg1 {
		background: url(../../static/bg-bottonm-bankuai.png) no-repeat center bottom;
		background-size: 100% auto;
	}

	.danxuan-box {
		width: 683rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.danxuan {
		width: 296rpx;
		height: 118rpx;
		border-radius: 30rpx;
		display: flex;
		margin-bottom: 20rpx;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);

		.flex1 {
			flex: 1 !important;
			font-weight: 400;
		}

		view {
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
			background: linear-gradient(90deg, #ff8148, #ff5b42);
			line-height: 50rpx;
			text-align: center;
			color: #fff;
			font-size: 30rpx;
			border: 1px solid #fff;
			box-shadow: 1px 1px 5px rgba(0, 0, 0, .4);
			margin-right: 24rpx;
		}

		text {
			font-size: 30rpx;
			color: #e83c00;
			font-weight: bold;
		}
	}

	.shurukuang-yanse {
		color: #e83c00;
		font-size: 20rpx;
	}

	.shurukuangB2 {
		width: 150rpx;
		margin-left: 20rpx;
		border: 1px solid rgba(232, 60, 0, .2);
		border-radius: 10rpx;
		text-align: center;
	}

	.shangyiti {
		width: 299rpx;
		height: 84rpx;
		background: url(../../static/shangyiti.png);
		background-size: cover;
	}

	.xiayiti {
		width: 298rpx;
		height: 84rpx;
		background: url(../../static/xiayiti.png);
		background-size: cover;
	}

	.mg {
		margin-top: 50rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.chuizhi {
		display: flex;
		flex-direction: column;
	}

	.w100 {
		width: 676rpx;
	}

	.w200 {
		width: 200rpx;
		text-align: right;
		display: block;
		flex: 1;
	}

	.flex1 {
		flex: 1;
	}
	.justify-content{
		justify-content: left;
		view{
			margin-left: 40rpx;
		}
	}
	
	.play-btn{
		width: 627rpx;
		height: 82rpx;
		background: url(../../static/play-btn.png) no-repeat center center;
		background-size: 100%;
		margin-top: 88rpx;
	}
	.xuanxiangbuchong{
		border-bottom: 1px solid #e83c00;
	}
	
	.autoH{
		height: auto !important;
		// flex: 1;
		display: flex;
		padding: 30rpx 0;
		text{
			flex: 1;
		}
	}
	.autoH1{
		height: auto !important;
		// flex: 1;
		display: flex;
		padding: 30rpx 0;
	}
	.fenzhi1{
		width: 270rpx;
		height: 72rpx;
	}
	.fenzhi2{
		width: 439rpx;
		height: 93rpx;
		margin: 30rpx 0;
	}
	.fenzhi3{
		width: 480rpx;
		height: 93rpx;
		margin: 30rpx 0;
	}
	
	.fenxiang{
		width: 107rpx;
		height: 108rpx;
		background: url(../../static/share.png) no-repeat center center;
		background-size: 100%;
	}
</style>

<template>
    <div>
		<!-- top slide 区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id === 0 ? ' mui-active' : '']" data-wid="tab-top-subpage-1.html" v-for="item in categories" :key="item.id" @click="getPhotoList(item.id)">
							{{ item.title }}
						</a>
					</div>
				</div>

		</div>

		<!-- 图片列表区域 -->
		<ul class="photo-list">
			<li v-for="item in list" :key="item.id">
				<img  v-lazy="item.img_url">
				<div class="info">
					<div class="info_title">
						{{ item.title }}
					</div>
					<div class="info_body">
						{{ item.zhaiyao }}
					</div>
				</div>
			</li>
		</ul>
    </div>
</template>



<script>
// 导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'


export default {
	data() {
		return {
			categories: [],
			list: []
		}
	},
	created() {
		this.getAllCategories()
		this.getPhotoList(0)
	},
	mounted() {
		// 要操作元素最好放在mounted里面,因为此时在内存中渲染的模板已经挂载到了页面中
		// 初始化滑动控件
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
	methods: {
		getAllCategories(){
			this.$http.get('/api/getimgcategory').then(res => {
				// console.log(res)
				if(res.status === 200 && res.data.status === 0 ) {
					res.data.message.unshift({title: "全部", id: 0})
					this.categories = res.data.message;
				}
			})
		},
		getPhotoList(cateId) {
			this.$http.get('/api/getimages/'+ cateId).then(res => {
				// console.log(res)
				if(res.status === 200 && res.data.status === 0) {
					this.list = res.data.message
				}
			})
		}
	}

    
}
</script>

<style lang="less" scoped>
	* {
		touch-action: pan-y;
	}
	.photo-list {
		margin: 0;
		padding: 10px;
		padding-bottom: 0;
		li {
			position: relative;
			background-color: #ccc;
			text-align: center;
			list-style: none;
			margin-bottom: 10px;
			box-shadow: 0 0 9px #999;
			img {
				width: 100%;
				vertical-align: center;
			}
			img[lazy=loading] {
				width: 40px;
				height: 300px;
				margin: auto;
			}
			.info {
				position: absolute;
				left: 0;
				bottom: 0;
				color: #fff;
				background-color: rgba(0, 0, 0, .5);
				text-align: left;
				height: 85px;
				.info_title {
					font-size: 14px;
					font-weight: bold;
				}
				.info_body {
					font-size: 12px;
				}
			}
		}
	}
</style>

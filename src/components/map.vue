<template>
    <div id="mapqaq">
        <div class="img">
            <img src="../assets/banner_jing.png" alt="">
        </div>
        <div class="content">
            <div class="head_bar">
                <span>位置：</span>
                <a href="/helloworld">首页</a> >
                <span>网站地图</span>
            </div>
            <div class="title">
                <div><span>网站地图</span></div>
                <!-- <span>SUCCESSFUL CASE</span> -->
            </div>

            <div class="map_box">
                <div class="map_left">
                    <dl>
                        <dt>
                            <a href="/company">公司概况</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="/product">产品简介</a>
                        </dt>
                        <dd>
                            <div>
                                <a href="/product/1">用友T3标准版</a>
                            </div>
                            <div>
                                <a href="/product/2">用友T6产品线</a>
                            </div>
                            <div>
                                <a href="/product/3">U890</a>
                            </div>
                            <div>
                                <a href="/product/4">用友表单</a>
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <a href="/success">成功简介</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="/news">企业新闻</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="/contact">留言版</a>
                        </dt>
                    </dl>
                </div>
                <div class="map_right" id="right">
                    <baidu-map class="mymap" :center="center" :zoom="zoom" @ready="handler">
                        <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
                        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-map-type>
                        <bm-control anchor="BMAP_ANCHOR_TOP_LEFT">
                            <button class="map_btn2" @click="quanmian">全面屏</button>
                        </bm-control>
                    </baidu-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/Map/Map.vue";
import BmGeolocation from "vue-baidu-map/components/controls/Geolocation.vue";
import BmNavigation from "vue-baidu-map/components/controls/Navigation.vue";
export default {
    name: "mapqaq",
    data() {
        return {
            center: { lng: 0, lat: 0 }, //经纬度
            zoom: 16, //地图展示级别
            flag_quan:0,
            ck_width:0,
            ck_height:0
        };
    },
    mounted: function() {
        // this.baiduMap();
        //获取屏幕分辨率的宽高
        var ck_width = window.innerWidth;
        var ck_height = window.innerHeight;
        console.log(ck_width, ck_height);
        this.ck_width = ck_width;
        this.ck_height = ck_height;
    },
    components: {
        BaiduMap, //指定组件模板
        BmGeolocation,
        BmNavigation
    },
    methods: {
        handler({ BMap, map }) {
            console.log(BMap, map);
            this.center.lng = 118.765822;
            this.center.lat = 31.998508;
            this.zoom = 16;
            map.enableScrollWheelZoom();
        },
        quanmian: function(){
            var that = this;
            console.log(that.ck_width,that.ck_height)
            if(that.flag_quan == 0){
				$(".mymap").css({
					"position": "fixed",
					"left": 0,
					"top": 0,
					"height": that.ck_height,
					"width": that.ck_width-10,
					"z-index": 99,
				});
				that.flag_quan = 1;
				$(".map_btn2").html("返回");
			}else{
				$(".mymap").css({
					"position": "static",
					"left": 0,
					"top": 0,
					"height": "350px",
					"width": "100%",
					"z-index": 1,
				});
				that.flag_quan = 0;
				$(".map_btn2").html("全面屏");
			}
        }
    }
    // methods: {
    //     baiduMap: function() {
    //         var map = new BaiduMap.Map("container"); // 创建地图实例
    //         var point = new BaiduMap.Point(118.765822, 31.998508); // 创建点坐标
    //         map.centerAndZoom(point, 16); // 初始化地图，设置中心点坐标和地图级别
    //         map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    //         // map.addControl(new BaiduMap.NavigationControl());//左边平移控件
    //         map.addControl(new BaiduMap.ScaleControl());
    //         map.addControl(new BaiduMap.OverviewMapControl());
    //         map.addControl(new BaiduMap.MapTypeControl());

    //         // 定义一个控件类,即function
    //         function ZoomControl() {
    //             // 默认停靠位置和偏移量
    //             this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    //             this.defaultOffset = new BaiduMap.Size(10, 10);
    //         }

    //         // 通过JavaScript的prototype属性继承于BMap.Control
    //         ZoomControl.prototype = new BaiduMap.Control();

    //         // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
    //         // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
    //         ZoomControl.prototype.initialize = function(map) {
    //             // 创建一个DOM元素
    //             var div = document.createElement("div");
    //             // 添加文字说明
    //             div.appendChild(document.createTextNode("全面屏"));
    //             // 设置样式
    //             div.style.cursor = "pointer";
    //             div.style.border = "1px solid gray";
    //             div.style.fontSize = "12px";
    //             div.style.borderRadius = "4px";
    //             div.style.backgroundColor = "white";
    //             // 绑定事件
    //             div.onclick = function(e) {
    //                 //给地图添加全屏事件
    //                 if (flag_quan == 0) {
    //                     $("#right").css({
    //                         position: "fixed",
    //                         left: 0,
    //                         top: 0,
    //                         height: ck_height,
    //                         width: ck_width,
    //                         "z-index": 99
    //                     });
    //                     flag_quan = 1;
    //                     this.innerHTML = "返回";
    //                 } else {
    //                     $("#right").css({
    //                         position: "static",
    //                         left: 0,
    //                         top: 0,
    //                         height: "350px",
    //                         width: "50%",
    //                         "z-index": 1
    //                     });
    //                     flag_quan = 0;
    //                     this.innerHTML = "全面屏";
    //                 }
    //             };
    //             // 添加DOM元素到地图中
    //             map.getContainer().appendChild(div);
    //             // 将DOM元素返回
    //             return div;
    //         };
    //         // 创建控件
    //         var myZoomCtrl = new ZoomControl();
    //         // 添加到地图当中
    //         map.addControl(myZoomCtrl);
    //     }
    // }
};
</script>

<style>
@import "../assets/css/stroke.css";

#container {
    height: 100%;
}
/* 必须给容器指高度，要不然地图将显示在一个高度为0的容器中，自然看不到 */
.mymap {
    width: 100%;
    height: 350px;
}
.map_btn2{
    position: absolute;
    left:10px;
    top: 10px;
    width: 60px;
    font-size: 10px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.35) 2px 2px 3px;
    border:1px solid rgb(139, 164, 220);
    background: rgb(142, 168, 224);
    color:#fff;
    transition: all 0.3s;
}
.map_btn2:hover{
    border:1px solid rgb(255, 255, 255);
    background: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
}
/* 隐藏左下角百度地图logo */
.anchorBL {
    display: none;
}
.map_box {
    max-width: 1240px;
    margin: auto;
    border-radius: 5px;
    padding: 20px;
    width: 98%;
    margin-top: -20px;
    overflow: hidden;
}
.map_left {
    float: left;
    width: 50%;
}

.map_right {
    float: right;
    width: 50%;
    height: 350px;
}
.map_left {
    margin: 0 auto;
}
.map_left dl {
    margin: 20px 0 20px 0;
    overflow: hidden;
    line-height: 30px;
}
.map_left dl:hover dt a {
    color: #fff;
    font-weight: bold;
}
.map_left dt {
    font-size: 14px;
    float: left;
    width: 10%;
    text-align: center;
    background: #81a849;
}
.map_left dt a {
    color: #fff;
    display: block;
}
.map_left dt a:hover {
    color: #fff;
    font-weight: bold;
}
.map_left dd {
    font-size: 12px;
    overflow: hidden;
    float: left;
    width: 85%;
}
.map_left dd .p2 {
    padding: 0 0 0 20px;
    clear: both;
}
.map_left dd .p2 a {
    color: #81a849;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.map_left dd .p2 a:hover {
    color: #81a849;
}
.map_left dd div {
    clear: both;
    overflow: hidden;
    padding: 0px 20px 0 10px;
}
.map_left dd div a {
    color: #333;
    float: left;
    padding: 0 10px 0 10px;
}
.map_left dd div a:hover {
    color: #003e7e;
    background: #81a849;
    color: #fff;
}
@media (max-width: 768px) {
    .map_left dt {
        width: 15%;
    }
    .map_left dd {
        width: 85%;
    }
}
@media (max-width: 640px) {
    .map_left dt {
        width: 20%;
    }
    .map_left dd {
        width: 80%;
    }
}
@media (max-width: 400px) {
    .map_left dt {
        width: 100%;
    }
    .map_left dd {
        width: 100%;
    }
}
</style>

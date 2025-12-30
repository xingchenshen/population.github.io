import { ethnicdata,ethnicChart,ethnicChartoption} from "./ethnic.js";
import {jiaoyudata,jiaoyuechats,jiaoyuechatsoption} from "./jiaoyu.js";
d3.json('../date/map_population.json').then(function (data) {
var myChart = echarts.init(document.getElementById('map')); 



    
//指定图标配置项
let option = {
   // backgroundColor: '#142452',
    tooltip: {
        trigger: 'item',
    },

    //柱状游标
    visualMap: {
        // orient: 'horizontal', //横置
        type: 'continuous',
        itemWidth: 16,
        itemHeight: 120,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 200000,
        max: 50000000,
        calculable: true, //开启游标
        left: 50,
        bottom: 30,
        inRange: {
            color: ['#5599FF', '#0066FF','#0044BB', '#007799', '#209FA9', '#F5903D', '#EE8C00', '#EE3B3B'],
        },
        textStyle: {
            color: '#ffffff',
            fontSize: 12,
        },
    },
    
    //配置数据项
    series: [
        {
            name: '第七次人口普查户数',
            type: 'map',
            mapType: 'china',
            roam:true,
            zoom:1,//缩放比例
            showLegendSymbol: true, //去掉指示点
            itemStyle: {
                normal: {
                    borderWidth: 1, //区域边框宽度
                    borderColor: '#00a6dc', //区域边框颜色
                    areaColor: '#224E7F', //区域颜色
                    label: {
                        show: false, //是否显示各省名称
                        textStyle: {
                            color: '#ff5500', //显示各省名称颜色
                        },
                    },
                },

                emphasis: {
                    areaColor: '#f0690f', //区域颜色，鼠标悬停颜色
                    label: {
                        show: true, //鼠标悬浮时是否显示各省名称
                        textStyle: {
                            color: '#fdf1f6', //鼠标悬浮时显示各省名称的颜色
                        },
                    },
                },
            },

            data: data,
        },
    ],
};

myChart.setOption(option);//实例化echarts

// 添加窗口大小变化监听，使图表自适应
window.addEventListener('resize', function() {
    myChart.resize();
});

//点击事件的代码
myChart.on('click',function (params) {
        let mapname=params.data.name;
        // console.log(mapname);
        ethnicdata.then(function (params1){
            // console.log(params1[mapname])
            setTimeout(()=>{
                ethnicChartoption.series =  [
                    {
                        name: '',
                        type: 'pie',
                        radius: '80%',
                        center: ['60%', '48%'],
                        data: params1[mapname],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                            }
                        }
                    }
                ]
            },0);
            ethnicChart.setOption(ethnicChartoption);
            // console.log( ethnicChartoption.series.data);
        })




        jiaoyudata.then(function (params2){

            let d1 = new Array(3)
            for(let i=0;i<3;i++){
                d1[i] = new Array();
                d1[i] = params2[mapname][i].value;
            }
            console.log(d1);
            console.log( d1[0])

            setTimeout(()=>{
                jiaoyuechatsoption.series.data=d1
            },0)

                jiaoyuechats.setOption(jiaoyuechatsoption);
        })
    })
})

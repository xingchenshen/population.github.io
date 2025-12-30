var myChart = echarts.init(document.getElementById('age')); 
var legendData = ['年龄分布']; //图例
var indicator = [{
        text: '0-9',
        max: 20,
    },
    {
        text: '10-19',
        max: 20
    },
    {
        text: '20-29',
        max: 20
    },
    {
        text: '30-39',
        max: 20,
    },
    {
        text: '40-49',
        max: 20
    },
    {
        text: '50-59',
        max: 20
    },
    {
        text: '60-69',
        max: 20
    },
    {
        text: '70-79',
        max: 20
    },
    {
        text: '80-89',
        max: 20
    },
    {
        text: '90-99',
        max: 20
    },
    {
        text: '100以上',
        max: 10
    }
];
var dataArr = [{
        value: [11.92,11.21,11.84,15.83,14.69,15.78,10.46,5.74,2.22,0.32,0.01],
        name: legendData[0],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#55d7f2',
                },
                // shadowColor: '#4A99FF',
                // shadowBlur: 10,
            },
        },
        areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 1, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#4A99FF'
                        }, {
                            offset: 1,
                            color: 'rgba(0,0,0,0)'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
    }
];
var colorArr = ['#55d7f2', '#4BFFFC']; //颜色
option = {
    //backgroundColor: '#101736',
    color: colorArr,
    legend: {
        orient:'vertical',
        // icon: 'circle', //图例形状
        data: legendData,
        top:20,
        left:20,
        itemWidth: 8, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 8, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 22, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#00E4FF',
        },
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 16
            },
        },
        indicator: indicator,
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#2b75d2', // 分隔线颜色
                width: 2, // 分隔线线宽
            }
        },
    },
    series: [{
        type: 'radar',
        symbolSize: 8,
        symbol: 'circle',
        data: dataArr
    }]
};
myChart.setOption(option); 

// 添加窗口大小变化监听，使图表自适应
window.addEventListener('resize', function() {
    myChart.resize();
});
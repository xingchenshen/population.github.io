let ethnicdata=d3.json('../date/ethnic.json');
let ethnicChart=echarts.init(document.getElementById('ethnic'));
let ethnicChartoption=null;
d3.json('../date/ethnic.json').then(function (data3) {
    let data = data3
    var traget = "中国";
    // let privous=data[traget];
    // console.log(privous);
// var myChart = echarts.init(document.getElementById('ethnic'));
    ethnicChartoption = {
    color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
    //backgroundColor: '#ff75',
    title: {
        text: "少数民族占比",
        x: "50%",
        textStyle: {
            color: '#0fff',
            fontSize: '22'
        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    tooltip : {
        formatter: "{b}：{c}人"
    },

    legend: {
        type:'scroll',
        orient: 'vertical',
        left: 'left',
        // data: privous,
        textStyle:{
            color: '#ffffff'
        },

    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '80%',
            center: ['60%', '48%'],
            data: data[traget],
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
};
    ethnicChart.setOption(ethnicChartoption);
    
    // 添加窗口大小变化监听，使图表自适应
    window.addEventListener('resize', function() {
        ethnicChart.resize();
    });
})
export {ethnicdata,ethnicChart,ethnicChartoption}


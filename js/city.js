var myChart = echarts.init(document.getElementById('city'),'dpurple-passion'); 
option = {
    title: {
        text: "历次普查乡村与城镇人口",
        x: "40%",
        textStyle: {
            color: '#0fff',
            fontSize: '22'
        },
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '%';
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '亿';
                }
            }
            return res;

        }
    },
    grid: {
        containLabel: true

    },
    //这是顶部点击组件，可以打开
    // legend: {
        // data: ['城镇人口', '乡村人口', '城乡人口比重']
    // },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: false
        },
        splitLine: {show: false},
        data: ['1953', '1964', '1982', '1990', '2000', '2010', '2020'],
        axisLine:{
            lineStyle: {
                color: "white"
            }
        }
    }],
    //这是缩放组件,不用就删了吧
    // dataZoom: [{
        // type: 'slider',
        // xAxisIndex: 0,
        // filterMode: 'empty',
        // start: 0,
        // end: 100
    // }, {
        // type: 'slider',
        // yAxisIndex: 0,
        // filterMode: 'empty',
        // start: 0,
        // end: 100
    // }, {
        // type: 'inside',
        // xAxisIndex: 0,
        // filterMode: 'empty',
        // start: 0,
        // end: 100
    // }, {
        // type: 'inside',
        // yAxisIndex: 0,
        // filterMode: 'empty',
        // start: 0,
        // end: 100
    // }],
    yAxis: [
        {
        //show:false,
        type: 'value',
        splitLine: {show: false},
        name: '比例',
        min: 0,
        position: 'left',
            axisLabel: {
            formatter: '{value} %',
        },
         axisLine:{
                lineStyle: {
                    color: "white"
                }
        }
    }, {
        type: 'value',
        name: '个数',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} 亿'
        },
            axisLine:{
                lineStyle: {
                    color: "white"
                }
            }
    }],
    series: [{
        name: '城乡人口比重',
        type: 'line',
        label: {
            normal: {
                show: false,
                position: 'top',
            }
        },
        splitLine: {show: false},
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [13.45, 14.10, 20.49, 26.15, 36.69, 50.00, 67.80]
    }, {
        name: '城镇人口',
        type: 'bar',
        yAxisIndex: 1,
        color:'#0fff',
        lineStyle:{
            smooth:true,
        },
        
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        data: [0.8,1.0,2.1,3.0,4.6,6.7,8.7]
    }, {
        name: '乡村人口',
        type: 'bar',
        yAxisIndex: 1,
        color:'	#6495ED',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [5.1,6.0,8.0,8.4,7.9,6.7,5.3]
    }]
};
myChart.setOption(option); 

// 添加窗口大小变化监听，使图表自适应
window.addEventListener('resize', function() {
    myChart.resize();
});
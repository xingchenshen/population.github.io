d3.json('../date/population.json').then(function(data) {//d3读入数据
    var myChart = echarts.init(document.getElementById('population'));//初始echarts实例

    //获取省份
    var name = function() {
            var ndata = [];
            for (var i = 0; i < 31; i++) {
                ndata.push(data[i].name + "");
            }
            return ndata;
        }
        //获取总人数
    var total = function() {
            var ndata = [];
            for (var i = 0; i < 31; i++) {
                ndata.push(data[i].total + "");
            }
            return ndata;
        }
        //获取男性
    var nan = function() {
            var ndata = [];
            for (var i = 0; i < 31; i++) {
                ndata.push(data[i].nan + "");
            }
            return ndata;
        }
        //获取女性
    var nv = function() {
            var ndata = [];
            for (var i = 0; i < 31; i++) {
                ndata.push(data[i].nv + "");
            }
            return ndata;
        }
        //console.log(name)
        //console.log(data)
    
    //指定图标配置项
    option = {
        //标题组件
        title: {
            text: "各省男女人口",
            x: "4%",
            textStyle: {
                color: '#0fff',
                fontSize: '22'
            },

        },
        //提示框组件
        tooltip: {
            trigger: "axis",//坐标轴指示器
            axisPointer: {
                type: "shadow",//阴影指示器
                textStyle: {
                    color: "#fff"
                }

            },
        },

        //网格组件，这是为了控制下边坐标标签和缩放组件的距离
        grid: {
            borderWidth: 0,
            top: 50,
            bottom: 95,//离容器下册的距离
            textStyle: {
                color: "#0fff"
            }
        },
        
        //申明图例组件
        legend: {
            x: '30%',
            top: '11%',
            textStyle: {
                color: '#90979c',
            },
            data: ['男', '女', '总']
        },

        //手柄能拖拽改变值域
        calculable: true,

        xAxis: [{
            type: "category",//类目轴
            axisLine: {
                lineStyle: {
                    color: '#90979c'
                }
            },
            splitLine: {
                show: false//分割线
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                interval: 0,
            },
            data: name(),

        }],

        yAxis: [{
            type: "value",//值轴
            splitLine: {
                show: false},//去掉网格
            axisLine: {
                lineStyle: {
                    color: '#90979c'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,//可以设置成 0 强制显示所有标签
            },
            splitArea: {
                show: false//是否显示分隔区域
            },
            //坐标轴刻度显示
            axisLabel: {
                formatter: function(value, index) {
                    if (value >= 10000) {
                        value = value / 10000 + '万';
                    } else if (value < 10000) {
                        value;
                    }
                    return value;
                }
            }

        }],

        //缩放组件
        dataZoom: [{
            show: true,
            height: 30,
            xAxisIndex: [
                0
            ],
            bottom: 30,
            start: 10,//起始占比
            end: 80,
            handleSize: '110%',
            handleStyle: {
                color: "#d3dee5",

            },
            textStyle: {
                color: "#0fff"
            },
            borderColor: "#90979c"
        }, 
        {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35
        }],


        series: [
            {
                name: "男",
                type: "bar",
                stack: "总量",
                barMaxWidth: 35,
                barGap: "10%",
                itemStyle: {
                    normal: {
                        color: "#33cabb",
                        label: {
                            show: false,
                            textStyle: {
                                color: "#33cabb"
                            },
                            position: "insideTop",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                data: nan(),
            },


            {
                name: "女",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        color: "#F02FC2",
                        barBorderRadius: 0,
                        label: {
                            show: false,
                            position: "top",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                data: nv(),
            }, 


            {
                name: "总",
                type: "line",
                stack: "总量",
                symbolSize: 20,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        //color: "rgba(252,230,48,1)",
                        color: "#6020df",
                        barBorderRadius: 0,
                        label: {
                            show: false,
                            position: "top",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                data: total(),
            },
        ]
    }
    myChart.setOption(option);
    
    // 添加窗口大小变化监听，使图表自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})
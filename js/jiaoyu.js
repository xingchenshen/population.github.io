let jiaoyudata = d3.json('../date/jiaoyu.json');
let jiaoyuechats = echarts.init(document.getElementById('jiaoyu'));
let jiaoyuechatsoption = null;

d3.json('../date/jiaoyu.json').then(function(data) {
    jiaoyuechats = echarts.init(document.getElementById('jiaoyu'));


    
    let schema = [
        { index: 0, text: '未上学' },
        { index: 1, text: '学前' },
        { index: 2, text: '小学' },
        { index: 3, text: '初中' },
        { index: 4, text: ' 高中' },
        { index: 5, text: '专科' },
        { index: 6, text: '本科' },
        { index: 7, text: '研究生' },
        { index: 8, text: '博士' }
    ];


    jiaoyuechatsoption = {
        title: {
            text: '每百万人最高学历(城市，城镇，乡村）',
            x:'35%',
            textStyle: {
                color: '#0fff'
            }
        },
        x:0,
        color: ['#da0d68', '#0fff', '#fff'],
        legend: {
            top: 0,
            left: 8,
            data: ['乡村', '城镇', '城市'],
            itemGap: 20,
            textStyle: {
                color: '#0fff',
                fontSize: 14
            }
        },
        grid: {
            top: 48,
            left: 24,
            bottom: 24,
            right: 24,
        },
        tooltip: {
            padding: 10,
            backgroundColor: '#333',
            borderColor: '#777',
            borderWidth: 1,
        },

        parallelAxis: [
            { dim: 0, name: schema[0].text },
            { dim: 1, name: schema[1].text },
            { dim: 2, name: schema[2].text },
            { dim: 3, name: schema[3].text },
            { dim: 4, name: schema[4].text },
            { dim: 5, name: schema[5].text },
            { dim: 6, name: schema[6].text },
            { dim: 7, name: schema[7].text },
            { dim: 8, name: schema[8].text }
        ],
        visualMap: {
            show: true,

            inRange: {
                color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
            }
        },
        parallel: {
            smooth: true,
            left: 24,
            right: 64,
            bottom: 16,
            top: 64,
            parallelAxisDefault: {
                type: 'value',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: 'white',
                    fontSize: 12
                },
                axisLine: {
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: 'white'
                    }
                },
                splitLine: {
                    show: true
                },
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                }
            }
        },
        
        series: {
            visualMap: {
                show: true,
                inRange: {
                    color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
                }
            },
            lineStyle: {
                width: 3,
                opacity: 10,
                color: '#0fff',
            },

            type: 'parallel',
            smooth: true,
            
           
            data: [
                
                [243949, 9236, 862989, 607962, 231078, 65655, 47072, 1848, 368],
                 [333057, 9646, 823023, 359709, 74634, 18442, 6441, 170, 26],
                 [1116680, 29502, 2272198, 721027, 84207, 12080, 3680, 146, 60]
                
            ]
    
    //    {
        // width: 1,
        // opacity: 0.5,
        // name: '城市',
        // type: 'parallel',
        // data:[data1]
        // },
        // {
        // width: 1,
        // opacity: 0.5,   

        // name: '城镇',
        // type: 'parallel',
        // data:[data2]
        // 
        // },
        // {
        // width: 6,
        // opacity: 2,
        // name: '乡村',
        // type: 'parallel',
        // data:[[1116680, 29502, 2272198, 721027, 84207, 12080, 3680, 146, 60]]
        // }
        

        }
    };
    jiaoyuechats.setOption(jiaoyuechatsoption);
    
    // 添加窗口大小变化监听，使图表自适应
    window.addEventListener('resize', function() {
        jiaoyuechats.resize();
    });
})
export { jiaoyudata, jiaoyuechats, jiaoyuechatsoption}
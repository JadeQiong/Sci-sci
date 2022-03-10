$.ajaxSetup({
    async: false
});

var chart = echarts.init(document.getElementById('main'));

var dataSH = [[1,0.016304348],
[2,0.038043478],
[3,0.025362319],
[4,0.028985507],
[5,0.014492754],
[6,0.036231884],
[7,0.025362319],
[8,0.030797101],
[9,0.032608696],
[10,0.039855072],
[11,0.036231884],
[12,0.02173913],
[13,0.032608696],
[14,0.028985507],
[15,0.02173913],
[16,0.012681159],
[17,0.012681159],
[18,0.014492754],
[19,0.010869565],
[20,0.010869565],
[21,0.025362319],
[22,0.019927536],
[23,0.012681159],
[24,0.010869565],
[25,0.003623188],
[26,0.010869565],
[27,0.012681159],
[28,0.016304348],
[29,0.010869565],
[30,0.012681159],
[31,0.010869565],
[32,0.016304348],
[33,0.009057971],
[34,0.014492754],
[35,0.009057971],
[36,0.009057971],
[37,0.005434783],
[38,0.005434783],
[39,0.007246377],
[40,0.005434783],
[41,0.001811594],
[42,0.005434783],
[43,0.003623188],
[44,0.005434783],
[45,0.003623188],
[46,0.009057971],
[47,0.003623188],
[48,0.014492754],
[49,0.003623188],
[50,0.003623188],
[51,0.005434783],
[52,0.005434783],
[53,0.001811594],
[54,0.003623188],
[55,0.005434783],
[56,0.003623188],
[57,0.003623188],
[58,0.001811594],
[59,0.003623188],
[60,0.001811594],
[61,0.001811594],
[62,0.003623188],
[63,0.001811594],
[64,0.005434783],
[65,0.001811594],
[67,0.001811594],
[71,0.005434783],
[72,0.003623188],
[73,0.001811594],
[76,0.001811594],
[77,0.001811594],
[78,0.005434783],
[79,0.005434783],
[81,0.003623188],
[82,0.001811594],
[83,0.003623188],
[84,0.001811594],
[85,0.003623188],
[86,0.003623188],
[87,0.003623188],
[88,0.001811594],
[89,0.003623188],
[92,0.003623188],
[93,0.003623188],
[95,0.001811594],
[97,0.001811594],
[98,0.001811594],
[99,0.001811594],
[101,0.003623188],
[102,0.003623188],
[105,0.001811594],
[106,0.003623188],
[107,0.003623188],
[109,0.005434783],
[114,0.001811594],
[115,0.001811594],
[117,0.001811594],
[118,0.001811594],
[124,0.001811594],
[127,0.003623188],
[128,0.003623188],
[129,0.001811594],
[132,0.001811594],
[133,0.001811594],
[135,0.007246377],
[138,0.001811594],
[141,0.003623188],
[142,0.003623188],
[145,0.001811594],
[159,0.001811594],
[170,0.001811594],
[180,0.001811594],
[182,0.001811594]
];

var myRegression = ecStat.regression('exponential', dataSH);
var option = {
    title: {
        text: 'Network degree distribution and fitting',
        subtext: 'By ecStat.regression',
        sublink: 'https://github.com/ecomfe/echarts-stat',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        splitNumber: 20
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
        name: 'scatter',
        type: 'scatter',
        emphasis: {
            label: {
                show: true,
                position: 'left',
                color: 'black',
                fontSize: 16
            }
        },
        data: dataSH
    },
    {
        name: 'line',
        type: 'line',
        showSymbol: true,
        smooth: true,
        data: myRegression.points,
        markPoint: {
            itemStyle: {
                color: '#359'
            },
            label: {
                show: true,
                position: 'left',
                formatter: myRegression.expression,
                color: '#359',
                fontSize: 14
            },
            data: [{
                coord: myRegression.points[myRegression.points.length - 1]
            }]
        }
    }]
};

chart.setOption(option);
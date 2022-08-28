import React from 'react';
import useProducts from '../Utilitis/hooks/useProducts';
import ReactEcharts from "echarts-for-react";

const ScatterChart = () => {
    const { products } = useProducts()

    const option = {
        xAxis: {
            name: "Color Intensity",
            data: products.map(product => product["Color intensity"])
        },
        yAxis: { name: "Hue", type: "value" },
        tooltip: {},
        series: [
            {

                type: 'scatter',
                data: products.map(product => product.Hue),
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    return <ReactEcharts option={option} />;
};

export default ScatterChart;
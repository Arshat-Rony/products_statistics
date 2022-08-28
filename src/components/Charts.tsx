import React from "react";
import ReactEcharts from "echarts-for-react";
import useProducts from "../Utilitis/hooks/useProducts";


const Charts = () => {
    const { products } = useProducts()

    const option = {
        xAxis: {
            name: "Alcohol",
            type: 'category',
            data: products.map(product => product.Alcohol)
        },
        tooltip: {},
        yAxis: {
            type: 'value',
            name: "Malic Acid"
        },
        series: [
            {
                data: products.map(product => product["Malic Acid"]),
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    return <ReactEcharts option={option} />;
};

export default Charts;
import React from "react";
import {Chart as ChartJS} from "chart.js/auto";
import { Bar} from "react-chartjs-2";

const BarChart = ({ chartData }) => {
    const ranges = [
        { label: "0-100", min: 0, max: 100 },
        { label: "100-200", min: 100, max: 200 },
        { label: "200-300", min: 200, max: 300 },
        { label: "300-400", min: 300, max: 400 },
        { label: "400-500", min: 400, max: 500 },
        { label: "500-600", min: 500, max: 600 },
        { label: "600-700", min: 600, max: 700 },
        { label: "700-800", min: 700, max: 800 },
        { label: "800-900", min: 800, max: 900 },
        { label: "901 above", min: 901, max: Number.POSITIVE_INFINITY }
    ];

    const soldData = ranges.map(range => {
        const count = chartData.filter(item => item.sold && item.price > range.min && item.price <= range.max).length;
        return count;
    });
    const labels = ranges.map(range => range.label);

    return (
        <div className="chart">
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "Overall Sold Data",
                            data: soldData,
                            backgroundColor: ["rgba(253,135,135,0.9)"],
                            borderRadius: 5
                        },
                    ],
                }}
            />
        </div>        

    );
};

export default BarChart;

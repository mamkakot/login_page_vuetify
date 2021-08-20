<template>
<div>
    <apexcharts width="700"
      height="350"
      type="area"
      :options="chartOptions"
      :series="series">
    </apexcharts>

    <apexcharts
      width="700"
      type="radar"
      :options="chartOptions"
      :series="series">
    </apexcharts>
</div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "basic-bar",
          sparkline: {
            enabled: false,
          },
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        plotOptions: {
            area: {
                fillTo: 'end',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
        },
        colors: ['#E63946', '#457b9d'],
        fill: {
            opacity: 0.8,
            type: 'solid',
            pattern: {
                style: 'verticalLines',
                width: 17
            }
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
          name: "Radar Series 2",
          data: [26, 21, 65, 36, 87, 15, 60, 70]
        }
      ],
    };
  },
};


    

// import { Bar } from 'vue-chartjs'
// export default {
//     name: 'BarChart',
//     extends: Bar
//     // created() {
//     //     console.log(this.chartData)
//     // }    // data: () => ({
//     //     chartData: [
//     //         {
//     //             'param': 1
//     //         },
//     //         {
//     //             'param': 2
//     //         },
//     //         {
//     //             'param': 3
//     //         },
//     //     ]
//     // })
// }
  </script>


<style scoped>

</style>
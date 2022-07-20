<template>
  <div class="home">
    <!-- style="width: 70vw" -->
    <Header />
    <Visual />
    <Finance />
    <!-- <button @click="aaa()">aa</button> -->
    <Project>
      <Setting msg="myChart1Con" slot="chart1" class="marginTB">
        <div
          id="myChartDiv1"
          slot="chartCanvas"
          style="width: 700px; height: 300px"
          @mousewheel="mouseWheel($event, 'myChartDiv1')"
        >
          <canvas
            id="GridChart01"
            @mousedown="startDrag($event, 0)"
            @mousemove="doDrag($event, 0)"
            @mouseup="stopDrag(0)"
            @mouseout="stopDrag(0)"
            ref="myCanvas"
          ></canvas>
        </div>
      </Setting>
      <canvas
        id="GridChart01Y"
        class="pd-TB bg-White p-ab"
        slot="chart11"
        height="300"
        width="0"
      ></canvas>
      <Setting msg="myChart2Con" slot="chart2" class="marginTB">
        <div
          id="myChartDiv2"
          slot="chartCanvas"
          style="width: 700px; height: 300px"
          @mousewheel="mouseWheel($event, 'myChartDiv2')"
        >
          <canvas
            id="GridChart02"
            @mousedown="startDrag($event, 1)"
            @mousemove="doDrag($event, 1)"
            @mouseup="stopDrag(1)"
            @mouseout="stopDrag(1)"
          ></canvas>
        </div>
      </Setting>
      <canvas
        id="GridChart02Y"
        class="pd-TB bg-White p-ab"
        slot="chart22"
        height="300"
        width="0"
      ></canvas>
      <Setting msg="myChart3Con" slot="chart3" class="marginTB">
        <div
          id="myChartDiv3"
          slot="chartCanvas"
          style="width: 700px; height: 300px"
          @mousewheel="mouseWheel($event, 'myChartDiv3')"
        >
          <canvas
            id="GridChart03"
            @mousedown="startDrag($event, 2)"
            @mousemove="doDrag($event, 2)"
            @mouseup="stopDrag(2)"
            @mouseout="stopDrag(2)"
          ></canvas>
        </div>
      </Setting>
      <canvas
        id="GridChart03Y"
        class="pd-TB bg-White p-ab"
        slot="chart33"
        height="300"
        width="0"
      ></canvas>
      <Setting msg="myChart4Con" slot="chart4" class="marginTB">
        <div
          id="myChartDiv4"
          slot="chartCanvas"
          style="width: 700px; height: 300px"
          @mousewheel="mouseWheel($event, 'myChartDiv4')"
        >
          <canvas
            id="GridChart04"
            @mousedown="startDrag($event, 3)"
            @mousemove="doDrag($event, 3)"
            @mouseup="stopDrag(3)"
            @mouseout="stopDrag(3)"
          ></canvas>
        </div>
      </Setting>
      <canvas
        id="GridChart04Y"
        class="pd-TB bg-White p-ab"
        slot="chart44"
        height="300"
        width="0"
      ></canvas>
    </Project>
    <ChartEx :aniShow="aniShow" />
    <Start />
    <Footer />

    <a class="menu" href="#menu-strategy">
      <div id="to-top" :class="`material-symbols-outlined ${toTop}`">
        arrow_upward
      </div>
    </a>

    <!-- <section>
      <div class="d-flex between" v-for="(f, g) in checkedNames" :key="g">
        <div>설명</div>
        <div>
          <canvas style="width: 50vw" :id="`myChart${f[1]}`"></canvas>
        </div>
      </div>
    </section>
    <section>
      <button @click="gridChart(checkedNames)">선택</button>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total</th>
              <th>1 Day</th>
              <th>1 Year</th>
              <th>Operating Hour</th>
              <th>Last7 days</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(m, n) in table" :key="n">
             
              <td colspan="2">
                <input
                  type="checkbox"
                  :id="`check${m.checkBoxId}`"
                  :value="m.checkBoxId"
                  v-model="checkedNames"
                /><label :for="`check${m.checkBoxId}`"> {{ m.name }}</label>
                <span>{{ checkedNames }}</span>
              </td>
              <td>{{ m.total }}</td>
              <td>{{ m.day }}</td>
              <td>{{ m.Year }}</td>
              <td>{{ m.operatingHour }}</td>
              <td><canvas :id="m.day7"></canvas></td>
              <td>
                <button id="show-modal" @click="showModal = true">
                  {{ m.button }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MyModal v-if="showModal" @close="showModal = false">
     
        <h3 slot="header">custom header</h3>
        <h3 slot="body">안녕</h3>
      </MyModal>
    </section> -->
  </div>
</template>

<script>
import { api } from "../control/axios";
// import MyModal from "../components/MyModal.vue";
import Setting from "../components/Setting.vue";
import Header from "../components/Header.vue";
import Finance from "../components/Finance.vue";
import Footer from "../components/Footer.vue";
import ChartEx from "../components/ChartEx.vue";
import Project from "../components/Project.vue";
import Start from "../components/Start.vue";
import Visual from "../components/Visual.vue";
// import zoomPlugin from "chartjs-plugin-zoom";

import "../style/Index.css";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
  // zoomPlugin
);

export default {
  name: "HomeView",
  components: {
    // MyModal,
    Setting,
    Header,
    Finance,
    Footer,
    ChartEx,
    Project,
    Start,
    Visual,
  },
  // watch: {
  //   async checkedNames(val) {
  //     if (!val) return;
  //     for (var i = 0; i < val.length; i++) {
  //       let f = this.table[val[i][0]].chart;
  //       setTimeout(() => {
  //         f();
  //       }, 100);
  //     }
  //   },
  // },
  created() {
    this.chartDataCall(7).then((result) => {
      this.chartBasic1(
        result,
        1,
        "GridChart01",
        "GridChart01Y",
        this.myChart01
      );
    });
    this.chartDataCall1(3).then((result) => {
      this.chartBasic1(
        result,
        2,
        "GridChart02",
        "GridChart02Y",
        this.myChart02
      );
    });
    this.chartDataCall1(4).then((result) => {
      this.chartBasic1(
        result,
        3,
        "GridChart03",
        "GridChart03Y",
        this.myChart03
      );
    });
    this.chartDataCall(2).then((result) => {
      this.chartBasic1(
        result,
        4,
        "GridChart04",
        "GridChart04Y",
        this.myChart04
      );
    });

    // offsetTop
  },
  mounted() {
    const throttle = (callback, delay) => {
      let timer;
      return (event) => {
        // 타이머가 호출되면, 함수를 실행하고 타이머 제거
        if (timer) return;
        timer = setTimeout(() => {
          callback(event);
          timer = null;
        }, delay);
      };
    };
    const upup = document.getElementsByClassName("chartIntro");

    window.addEventListener(
      "scroll",
      throttle(() => {
        // 화살표
        if (window.pageYOffset > 450) {
          this.toTop = "top-in";
          // console.log("hi");
          this.timeOnce = true;
        } else if (this.timeOnce) {
          this.toTop = "top-out";
          this.timeOnce = false;
          setTimeout(() => {
            this.toTop = "top-right";
          }, 200);
        }

        // 이미지 예시
        const a = upup[0].offsetTop - upup[0].offsetHeight;
        if (window.pageYOffset > a) {
          // console.log("11");
          this.aniShow = "show";
        } else {
          // console.log("22");
          this.aniShow = null;
        }
      }, 300)
    );
  },
  data() {
    return {
      // readFirstSheetRow,
      // readFirstSheetRow1,
      api,
      Chart,
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Decimation,
      Filler,
      Legend,
      Title,
      Tooltip,
      SubTitle,

      chartViewList1: false,
      chartViewList2: false,
      chartViewList3: false,
      chartViewList4: false,
      dragging: false,
      x: [null, null, null, null],
      // chartViewList5: false,
      // myChart11: null,
      myChart01: null,
      myChart02: null,
      myChart03: null,
      myChart04: null,
      // myChart05: null,
      toTop: "top-right",
      timeOnce: true,
      aniShow: null,
    };
  },
  methods: {
    async chartDataCall(sheetNum) {
      const list = await this.api("/api/db0", "post", {
        param: [sheetNum],
      });
      console.log("리스트 업데이트");
      return list;
    },

    async chartDataCall1(sheetNum) {
      const list = await this.api("/api/db1", "post", {
        param: [sheetNum],
      });
      console.log("리스트 업데이트1");
      return list;
    },

    makeLabel1(data) {
      let label = [];
      for (let index = 0; index < data.length; index++) {
        label.push(index);
      }
      return label;
    },

    chartBasic1(getData, num, source, target, saveChart) {
      const sourceCanvas = document.getElementById(source);
      // console.log(sourceCanvas);
      const sourceCtx = sourceCanvas.getContext("2d");
      // console.log(document);
      const targetCanvas = document.getElementById(target);
      // console.log(targetCanvas);
      const targetCtx = targetCanvas.getContext("2d");
      // console.log(saveChart);

      const data1 = getData;
      let hold = [];
      let realPercent = [];
      let demixPercent = [];
      data1.forEach((ele) => {
        hold.push(ele[8]);
        realPercent.push(ele[12]);
        demixPercent.push(ele[13]);
      });
      // console.log(this.demixPercent1);
      const labels = this.makeLabel1(hold);

      const skipped = (ctx, value) =>
        ctx.p0.skip || ctx.p1.skip ? value : undefined;

      const data = {
        labels: labels,

        datasets: [
          {
            label: "dex_percent",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            pointRadius: 0,
            borderWidth: 1,
            data: hold,
            // fill: 1,
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgba(255, 99, 132, 0.4)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          },
          {
            label: "Profit",
            backgroundColor: "rgb(2, 99, 132)",
            borderColor: "rgb(2, 99, 132)",
            pointRadius: 0,
            borderWidth: 1,
            data: realPercent,
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgba(2, 99, 132, 0.4)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          },
          {
            label: "DeMix Mining",
            backgroundColor: "rgba(122, 99, 132, 0.5)",
            borderColor: "rgb(122, 99, 132)",
            pointRadius: 0,
            borderWidth: 1,
            fill: true,
            data: demixPercent,
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgba(122, 99, 132, 0.4)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          },
        ],
      };

      const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer.querySelector("ul");

        if (!listContainer) {
          listContainer = document.createElement("ul");
          listContainer.style.display = "flex";
          listContainer.style.flexDirection = "column";
          listContainer.style.flexWrap = "wrap";
          listContainer.style.alignContent = "flex-end";
          listContainer.style.margin = 0;
          listContainer.style.padding = 0;

          legendContainer.appendChild(listContainer);
        }

        return listContainer;
      };
      // 디스를 못찾아서
      // const _____this = this;

      const htmlLegendPlugin = {
        id: "htmlLegend",
        afterUpdate(chart, args, options) {
          // console.log(options.containerID);
          const ul = getOrCreateLegendList(chart, options.containerID);

          // Remove old legend items
          while (ul.firstChild) {
            ul.firstChild.remove();
          }

          // Reuse the built-in legendItems generator
          const items =
            chart.options.plugins.legend.labels.generateLabels(chart);

          items.forEach((item) => {
            const li = document.createElement("li");
            li.style.alignItems = "center";
            li.style.cursor = "pointer";
            li.style.display = "flex";
            li.style.flexDirection = "row";
            li.style.marginLeft = "10px";

            const boxForm = document.createElement("form");
            const boxCheckbox = document.createElement("INPUT");
            boxCheckbox.type = "checkbox";
            boxCheckbox.id = `boxCheckboxId${item.datasetIndex}`;
            boxCheckbox.defaultChecked = true;

            li.onclick = () => {
              const { type } = chart.config;

              if (type === "pie" || type === "doughnut") {
                // Pie and doughnut charts only have a single dataset and visibility is per item
                chart.toggleDataVisibility(item.index);
              } else {
                chart.setDatasetVisibility(
                  item.datasetIndex,
                  !chart.isDatasetVisible(item.datasetIndex)
                );
              }
              chart.update();
              // _____this.click(boxCheckbox.id);
            };

            // Color box
            const boxSpan = document.createElement("span");
            boxSpan.style.background = item.fillStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = item.lineWidth + "px";
            boxSpan.style.display = "inline-block";
            boxSpan.style.height = "20px";
            boxSpan.style.marginRight = "10px";
            boxSpan.style.width = "20px";

            // Text
            const textContainer = document.createElement("p");
            textContainer.style.color = item.fontColor;
            textContainer.style.margin = 0;
            textContainer.style.padding = 0;
            textContainer.style.textDecoration = item.hidden
              ? "line-through"
              : "";

            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);

            boxForm.appendChild(boxCheckbox);
            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            li.appendChild(boxForm);
            ul.appendChild(li);
          });
        },
      };

      if (saveChart != null) {
        saveChart.destroy();
      }

      saveChart = new Chart(sourceCtx, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,

          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            title: {
              display: false,
              text: `투자전략${num}`,
            },
            htmlLegend: {
              // ID of the container to put the legend in
              containerID: `myChart${num}Con`,
            },
            legend: {
              display: false,
            },
            // zoom: {
            //   zoom: {
            //     wheel: {
            //       enabled: true,
            //     },
            //     pinch: {
            //       enabled: true,
            //     },
            //     mode: "x",
            //   },
            // },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                // text: "Operating Time (H)",
                // color: "#911",
                // font: {
                //   family: "Comic Sans MS",
                //   size: 20,
                //   weight: "bold",
                //   lineHeight: 1.2,
                // },
                padding: { top: 20, left: 0, right: 0, bottom: 0 },
              },
              // 그래프 인라인 x축 선
              grid: {
                display: false,
                // color: "rgb(255, 255, 255)",
              },
              // backgroundColor: "rgb(255, 99, 132)",
              // max: 10,
              ticks: {
                callback: function (val, index) {
                  // maxTicksLimit 이 충분히 커야 제대로 나옴
                  return index % 100 === 0 ? this.getLabelForValue(val) : "";
                },
                // 라벨 기울기 (0 은 수평)
                minRotation: 0,
                maxRotation: 0,
                // 최대 개수
                maxTicksLimit: 999,
              },
            },

            yAxis: {
              display: true,
              title: {
                display: true,
                text: "Profit (%)",
                // color: "#911",
                // font: {
                //   family: "Comic Sans MS",
                //   size: 20,
                //   weight: "bold",
                //   lineHeight: 1.2,
                // },
                padding: { top: 30, left: 0, right: 0, bottom: 0 },
              },
            },
          },

          animation: {
            onComplete: function () {
              if (!this.rectangleSet) {
                // console.log(saveChart);
                const scale = window.devicePixelRatio;

                const copyWidth = saveChart.scales.yAxis.width - 10;
                const copyHeight =
                  saveChart.scales.yAxis.height +
                  saveChart.scales.yAxis.top +
                  10;

                targetCtx.scale(scale, scale);
                targetCtx.canvas.width = copyWidth * scale;
                targetCtx.canvas.height = copyHeight * scale;
                targetCtx.canvas.style.width = copyWidth + "px";
                targetCtx.canvas.style.height = copyHeight + "px";
                targetCtx.drawImage(
                  sourceCanvas,
                  0,
                  0,
                  copyWidth * scale,
                  copyHeight * scale,
                  0,
                  0,
                  copyWidth * scale,
                  copyHeight * scale
                );
                sourceCtx.clearRect(0, 0, copyWidth, copyHeight);
                this.rectangleSet = true;
              }
            },
          },
        },
        plugins: [htmlLegendPlugin],
      });
      // return config;
    },

    // 마우스 휠로 스크린 바 좌우로 움직임
    mouseWheel(e, id) {
      e.preventDefault();
      const element = document.getElementById(id);

      let str = element.style.width;
      let str1 = Number(str.slice(0, -2));

      if (e.deltaY < 0) {
        str1 = str1 + 15; // 작아짐
      } else if (str1 > 700) {
        str1 = str1 - 15; // 커짐
      }

      // console.log(str1);
      element.style.width = str1 + "px";
    },

    startDrag(e, num) {
      this.dragging = true;
      this.x[num] = e.x;
    },
    stopDrag(num) {
      if (this.dragging) {
        this.dragging = false;
        this.x[num] = null;
      }
    },
    doDrag(e, num) {
      if (this.dragging) {
        e.preventDefault();
        const element = document.getElementsByClassName("chart-detail");
        //다른곳 델타값 알아보기

        element.item(num).scrollBy({
          // left: e.deltaY < 0 ? -30 : 30,
          left: e.x > this.x[num] ? -15 : 15,
        });
      }
    },
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>

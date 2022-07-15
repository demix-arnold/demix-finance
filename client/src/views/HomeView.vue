<template>
  <div class="home">
    <!-- style="width: 70vw" -->
    <Header />
    <Visual />
    <Finance />
    <Project>
      <Setting
        msg="myChart1Con"
        msg1="투자전략1"
        slot="chart1"
        class="marginTB"
      >
        <div
          id="myChartDiv1"
          slot="chartCanvas"
          style="width: 600px; height: 300px"
          @mousewheel="mouseWheel($event, 'myChartDiv1')"
        >
          <canvas
            id="myChart14"
            @mousedown="startDrag($event, 0)"
            @mousemove="doDrag($event, 0)"
            @mouseup="stopDrag(0)"
            @mouseout="stopDrag(0)"
          ></canvas>
        </div>
      </Setting>
      <Setting
        msg="myChart2Con"
        msg1="투자전략2"
        slot="chart2"
        class="marginTB"
      >
        <div
          id="myChartDiv2"
          slot="chartCanvas"
          style="width: 600px; height: 300px"
          @mousewheel="mouseWheel($event, 'myChartDiv2')"
        >
          <canvas
            id="myChart15"
            @mousedown="startDrag($event, 1)"
            @mousemove="doDrag($event, 1)"
            @mouseup="stopDrag(1)"
            @mouseout="stopDrag(1)"
          ></canvas>
        </div>
      </Setting>
      <Setting
        msg="myChart3Con"
        msg1="투자전략3"
        slot="chart3"
        class="marginTB"
      >
        <div
          id="myChartDiv3"
          slot="chartCanvas"
          style="width: 600px; height: 300px"
          @mousewheel="mouseWheel($event, 'myChartDiv3')"
        >
          <canvas
            id="myChart16"
            @mousedown="startDrag($event, 2)"
            @mousemove="doDrag($event, 2)"
            @mouseup="stopDrag(2)"
            @mouseout="stopDrag(2)"
          ></canvas>
        </div>
      </Setting>
      <Setting
        msg="myChart4Con"
        msg1="투자전략4"
        slot="chart4"
        class="marginTB"
      >
        <div
          id="myChartDiv4"
          slot="chartCanvas"
          style="width: 600px; height: 300px"
          @mousewheel="mouseWheel($event, 'myChartDiv4')"
        >
          <canvas
            id="myChart17"
            @mousedown="startDrag($event, 3)"
            @mousemove="doDrag($event, 3)"
            @mouseup="stopDrag(3)"
            @mouseout="stopDrag(3)"
          ></canvas>
        </div>
      </Setting>
    </Project>
    <ChartEx />
    <Start />
    <Footer />

    <a class="menu" href="#menu-strategy">
      <div id="to-top">
        <img
          class="icon"
          src="../assets/arrow_upward_FILL0_wght400_GRAD0_opsz20.svg"
          alt=""
        />
        <!-- <div class="material-symbols-outlined">arrow_upward</div> -->
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
  watch: {
    async checkedNames(val) {
      if (!val) return;
      for (var i = 0; i < val.length; i++) {
        let f = this.table[val[i][0]].chart;
        setTimeout(() => {
          f();
        }, 100);
      }
    },
  },
  async created() {
    this.chartDataCall(7).then((result) => {
      this.investmentStrategy1Chart(result, 1);
    });
    this.chartDataCall1(3).then((result) => {
      this.investmentStrategy2Chart(result, 2);
    });
    this.chartDataCall1(4).then((result) => {
      this.investmentStrategy3Chart(result, 3);
    });
    this.chartDataCall(2).then((result) => {
      this.investmentStrategy4Chart(result, 4);
    });

    // this.makeLunaChart();
    // this.makeChart6();

    // this.makeChart();
    // this.makeChart1();
    // // this.makeChart2();
    // this.makeChart3();
    // this.makeChart4();
    // this.makeChart5();

    // this.makeLunaChart2();
    // this.makeLabel();
    // // this.makeChart8();
    // this.makeChart9();
    // this.makeChart10();
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
      // hold: [],
      // current: [],
      // labels: [],
      // holdP: [],
      // currentP: [],
      // onlyLiP: [],
      // aniCurrent: [],
      // aniHold: [],
      // aniLP: [],
      // lunaC: [],
      // lunaP: [],
      // labels1: [],
      // investmentStrategy1: [],
      // investmentStrategy2: [],
      // investmentStrategy3: [],
      // investmentStrategy4: [],
      // luncC: [],
      // luncP: [],
      // labels2: [],
      // table: [
      //   {
      //     chart: this.makeChart2, // 여기서 그릴 차트의 아이디를 checkBoxId 배열의 두번째 파라미터
      //     checkBoxId: ["0", "0"], // [table 배열에서의 순서, 그려야될 차트의 아이디]
      //     name: "LUNA2/BUSD",
      //     total: "+2555",
      //     day: "+1.25%",
      //     Year: "+ 1300.122%",
      //     operatingHour: "271",
      //     day7: "myChart5",
      //     button: "5",
      //   },
      //   {
      //     chart: this.makeChart8,
      //     checkBoxId: ["1", "4"],
      //     name: "LUNC/USDT",
      //     total: "+2555",
      //     day: "+1.25%",
      //     Year: "+ 1300.122%",
      //     operatingHour: "271",
      //     day7: "myChart6",
      //     button: "6",
      //   },
      // ],
      // checkedNames: [],
      // myChart: null,
      // myChart1: null,
      // myChart2: null,
      // myChart3: null,
      // myChart4: null,
      // myChart5: null,
      // myChart6: null,
      // myChart7: null,
      myChart14: null,
      myChart15: null,
      myChart16: null,
      myChart17: null,
      // showModal: false,
      // test: {
      //   boxCheckboxId0: true,
      //   boxCheckboxId1: true,
      //   boxCheckboxId2: true,
      // },
      // chartViewList: false,
      chartViewList1: false,
      chartViewList2: false,
      chartViewList3: false,
      chartViewList4: false,
      dragging: false,
      x: [null, null, null, null],
    };
  },
  methods: {
    async chartDataCall(sheetNum) {
      const list = await this.api("/api/db", "post", {
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

    investmentStrategy1Chart(data, num) {
      const config = this.chartBasic(data, num);
      const ctx = document.getElementById("myChart14");

      if (this.myChart14 != null) {
        this.myChart14.destroy();
      }

      this.myChart14 = new Chart(ctx, config);
    },

    investmentStrategy2Chart(data, num) {
      const config = this.chartBasic(data, num);
      const ctx = document.getElementById("myChart15");

      if (this.myChart15 != null) {
        this.myChart15.destroy();
      }

      this.myChart15 = new Chart(ctx, config);
    },

    investmentStrategy3Chart(data, num) {
      const config = this.chartBasic(data, num);
      const ctx = document.getElementById("myChart16");

      if (this.myChart16 != null) {
        this.myChart16.destroy();
      }

      this.myChart16 = new Chart(ctx, config);
    },

    investmentStrategy4Chart(data, num) {
      const config = this.chartBasic(data, num);
      const ctx = document.getElementById("myChart17");

      if (this.myChart17 != null) {
        this.myChart17.destroy();
      }

      this.myChart17 = new Chart(ctx, config);
    },

    chartBasic(getData, num) {
      console.log("dd");
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
            data: realPercent,
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgba(2, 99, 132, 0.4)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          },
          {
            label: "DeMix Mining",
            backgroundColor: "rgb(122, 99, 132)",
            borderColor: "rgb(122, 99, 132)",
            type: "bar",
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
      const _____this = this;

      const htmlLegendPlugin = {
        id: "htmlLegend",
        afterUpdate(chart, args, options) {
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
              _____this.click(boxCheckbox.id);
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

      const config = {
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
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Operating Time (H)",
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
                  // console.log(val);
                  // console.log("index", index);
                  // Hide every 2nd tick label

                  // maxTicksLimit 이 충분히 커야 제대로 나옴
                  return index % 100 === 0 ? this.getLabelForValue(val) : "";
                  // [0, 1일, 2일, 3일 ...]
                  // return index % 24 === 0
                  //   ? this.getLabelForValue(val / 24 + "일")
                  //   : "";
                  // [기준일, + 1일, +1일, +1일 ...]
                  // return index % 24 === 0
                  //   ? this.getLabelForValue(new Date(2022, 6, 28 + val / 24))
                  //   : "";
                },
                // 라벨 기울기 (0 은 수평)
                minRotation: 0,
                maxRotation: 0,
                // 최대 개수
                maxTicksLimit: 999,
              },
            },
            y: {
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
        },
        plugins: [htmlLegendPlugin],
      };

      return config;
    },

    // 마우스 휠로 스크린 바 좌우로 움직임
    // mouseWheel(e, num) {
    //   e.preventDefault();
    //   const element = document.getElementsByClassName("chart-detail");
    //   //다른곳 델타값 알아보기
    //   console.log(e);
    //   element.item(num).scrollBy({
    //     left: e.deltaY < 0 ? -30 : 30,
    //   });
    // },

    // 마우스 휠로 스크린 바 좌우로 움직임
    mouseWheel(e, id) {
      e.preventDefault();
      const element = document.getElementById(id);

      let str = element.style.width;
      let str1 = Number(str.slice(0, -2));

      if (e.deltaY < 0) {
        str1 = str1 + 30; // 작아짐
      } else {
        str1 = str1 - 30; // 커짐
      }

      console.log(str1);
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
          left: e.x > this.x[num] ? -30 : 30,
        });
      }
    },
    /*
    makeChart() {
      const data = this.investmentStrategy1;
      let a = 0;
      data.forEach((ele) => {
        // console.log(ele._rawData[4]);
        this.hold.push(ele[4]);
        this.current.push(ele[6]);
        this.holdP.push(ele[9]);
        this.currentP.push(ele[10]);
        this.onlyLiP.push(ele[11]);
        this.aniCurrent.push({ x: a, y: Number(ele[10]) });
        this.aniHold.push({ x: a, y: Number(ele[9]) });
        this.aniLP.push({ x: a, y: Number(ele[11]) });

        a++;
      });
    },
    makeLunaChart() {
      const data = this.investmentStrategy2;
      data.forEach((ele) => {
        this.lunaC.push(ele[10] == -100 ? undefined : ele[10]);
        this.lunaP.push(ele[12] == -100 ? undefined : ele[12]);
      });
    },
    makeLunaChart2() {
      const data = this.investmentStrategy3;
      data.forEach((ele) => {
        this.luncC.push(ele[10] == -100 ? undefined : ele[10]);
        this.luncP.push(ele[12] == -100 ? undefined : ele[12]);
      });
    },

    makeChart1() {
      // let labels = Utils.numbers({})
      for (let index = 0; index < this.hold.length; index++) {
        this.labels.push(index);
      }
      console.log(this.labels);
    },
    makeLabel() {
      // let labels = Utils.numbers({})
      for (let index = 0; index < this.luncC.length; index++) {
        this.labels2.push(index);
      }
      console.log(this.labels2);
    },
    makeChart2() {
      console.log("실행");
      const data = {
        labels: this.labels,
        datasets: [
          {
            label: "Just Holding",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: this.hold,
          },
          {
            label: "Liquidity Minig",
            backgroundColor: "rgb(2, 99, 132)",
            borderColor: "rgb(2, 99, 132)",
            data: this.current,
          },
        ],
      };

      // const footer = (tooltipItems) => {
      //   let sum = 0;

      //   tooltipItems.forEach(function (tooltipItem) {
      //     console.log("a", tooltipItem.parsed.y);
      //     sum += tooltipItem.parsed.y;
      //   });
      //   return "차이: " + sum;
      // };

      const config = {
        type: "line",
        data: data,
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            tooltip: {
              callbacks: {
                // footer: footer,
              },
            },
          },
        },
      };

      const ctx = document.getElementById("myChart0");

      if (this.myChart != null) {
        this.myChart.destroy();
      }

      this.myChart = new Chart(ctx, config);
      // const myChart = new Chart(document.getElementById("myChart"), config);
      console.log(this.myChart);
    },

    makeChart3() {
      const data = {
        labels: this.labels,
        datasets: [
          {
            label: "Liquidity Minig",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            pointRadius: 0,
            data: this.currentP,
            // fill: 1,
          },
          {
            label: "Just Holding",
            backgroundColor: "rgb(2, 99, 132)",
            borderColor: "rgb(2, 99, 132)",
            pointRadius: 0,
            data: this.holdP,
          },
          {
            label: "Only Liquidity Percent",
            backgroundColor: "rgb(102, 99, 12)",
            borderColor: "rgb(102, 99, 12)",
            type: "bar",
            data: this.onlyLiP,
          },
        ],
      };

      // const footer = (tooltipItems) => {
      //   let sum = 0;

      //   tooltipItems.forEach(function (tooltipItem) {
      //     console.log("a", tooltipItem.parsed.y);
      //     sum += tooltipItem.parsed.y;
      //   });
      //   return "차이: " + sum;
      // };

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
      const _____this = this;

      const htmlLegendPlugin = {
        id: "htmlLegend",
        afterUpdate(chart, args, options) {
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
              _____this.click(boxCheckbox.id);
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

      const config = {
        type: "line",
        data: data,
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            tooltip: {
              display: false,
            },
            htmlLegend: {
              // ID of the container to put the legend in
              containerID: "myChart1Con",
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        },
        plugins: [htmlLegendPlugin],
      };
      const ctx = document.getElementById("myChart1");

      if (this.myChart1 != null) {
        this.myChart1.destroy();
      }

      this.myChart1 = new Chart(ctx, config);

      // const myChart = new Chart(document.getElementById("myChart1"), config);
      // console.log(myChart);
    },

    click(id) {
      const plz = document.getElementById(id);
      // 랜더링 된 곳에서 호출하면 정신 못차려서 따로 저장 및 기준 삼음
      if (this.test.id === false) {
        this.test.id = true;
        plz.checked = true;
      } else {
        this.test.id = false;

        plz.checked = false;
      }
    },

    makeChart4() {
      const totalDuration = 10000;
      const delayBetweenPoints = totalDuration / this.aniCurrent.length;
      const previousY = (ctx) =>
        ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(["y"], true).y;
      const animation = {
        x: {
          type: "number",
          easing: "linear",
          duration: delayBetweenPoints,
          from: NaN, // the point is initially skipped
          delay(ctx) {
            if (ctx.type !== "data" || ctx.xStarted) {
              return 0;
            }
            ctx.xStarted = true;
            return ctx.index * delayBetweenPoints;
          },
        },
        y: {
          type: "number",
          easing: "linear",
          duration: delayBetweenPoints,
          from: previousY,
          delay(ctx) {
            if (ctx.type !== "data" || ctx.yStarted) {
              return 0;
            }
            ctx.yStarted = true;
            return ctx.index * delayBetweenPoints;
          },
        },
      };

      const config = {
        type: "line",
        data: {
          datasets: [
            {
              label: "Liquidity Minig",
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgb(255, 99, 132)",
              borderWidth: 1,
              radius: 0,
              data: this.aniCurrent,
            },
            {
              label: "Just Holding",
              borderColor: "rgb(2, 99, 132)",
              backgroundColor: "rgb(2, 99, 132)",
              borderWidth: 1,
              radius: 0,
              data: this.aniHold,
            },

            {
              label: "Only Liquidity Percent",
              borderColor: "rgb(102, 99, 12)",
              backgroundColor: "rgb(102, 99, 12)",
              borderWidth: 1,
              radius: 0,
              data: this.aniLP,
            },
          ],
        },
        options: {
          animation,
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            legend: true,
            title: {
              display: true,
              text: "[DeMix] AUTO/USDT",
            },
            tooltip: {
              callbacks: {
                // footer: footer,
              },
            },
          },
          scales: {
            x: {
              type: "linear",
              display: true,
              title: {
                display: true,
                text: "Operating Time (H)",
                color: "#911",
                font: {
                  family: "Comic Sans MS",
                  size: 20,
                  weight: "bold",
                  lineHeight: 1.2,
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 },
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Profit (%)",
                color: "#191",
                font: {
                  family: "Times",
                  size: 20,
                  style: "normal",
                  lineHeight: 1.2,
                },
                padding: { top: 30, left: 0, right: 0, bottom: 0 },
              },
            },
          },
        },
      };
      const ctx = document.getElementById("myChart2");

      if (this.myChart2 != null) {
        this.myChart2.destroy();
      }

      this.myChart2 = new Chart(ctx, config);

      // const myChart = new Chart(document.getElementById("myChart2"), config);
      // console.log(myChart);
    },

    makeChart6() {
      // let labels = Utils.numbers({})
      for (let index = 0; index < this.lunaC.length; index++) {
        this.labels1.push(index);
      }
    },

    makeChart5() {
      const skipped = (ctx, value) =>
        ctx.p0.skip || ctx.p1.skip ? value : undefined;

      const data = {
        labels: this.labels1,

        datasets: [
          {
            label: "Price",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            pointRadius: 0,
            data: this.lunaP,
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgba(2, 99, 132, 0.4)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          },
          {
            label: "With DeMix Minig",
            backgroundColor: "rgb(2, 99, 132)",
            borderColor: "rgb(2, 99, 132)",
            pointRadius: 0,
            data: this.lunaC,
            // fill: 1,
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgba(255, 99, 132, 0.4)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          },
        ],
      };

      // const footer = (tooltipItems) => {
      //   let sum = 0;

      //   tooltipItems.forEach(function (tooltipItem) {
      //     console.log("a", tooltipItem.parsed.y);
      //     sum += tooltipItem.parsed.y;
      //   });
      //   return "차이: " + sum;
      // };

      let i = 0;
      const footer = () => {
        // let days = new Date(2022, 6, 28, 0 + i / 24);
        let days = new Date(2022, 6, 28, 0 + i);

        i++;

        return days;
      };

      const config = {
        type: "line",
        data: data,
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            title: {
              display: true,
              text: "[DLP] LUNA/BUSD (Real)",
            },
            tooltip: {
              callbacks: {
                footer: footer,
              },
            },
            // legend: {
            //   labels: {
            //     padding: 50,
            //   },
            // },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Operating Time (H)",
                color: "#911",
                font: {
                  family: "Comic Sans MS",
                  size: 20,
                  weight: "bold",
                  lineHeight: 1.2,
                },
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
                  // console.log(val);
                  // console.log("index", index);
                  // Hide every 2nd tick label

                  // maxTicksLimit 이 충분히 커야 제대로 나옴
                  return index % 100 === 0 ? this.getLabelForValue(val) : "";
                  // [0, 1일, 2일, 3일 ...]
                  // return index % 24 === 0
                  //   ? this.getLabelForValue(val / 24 + "일")
                  //   : "";
                  // [기준일, + 1일, +1일, +1일 ...]
                  // return index % 24 === 0
                  //   ? this.getLabelForValue(new Date(2022, 6, 28 + val / 24))
                  //   : "";
                },
                // 라벨 기울기 (0 은 수평)
                minRotation: 0,
                maxRotation: 0,
                // 최대 개수
                maxTicksLimit: 999,
              },
            },
            y: {
              display: true,

              title: {
                display: true,
                text: "Profit (%)",
                color: "#911",
                font: {
                  family: "Comic Sans MS",
                  size: 20,
                  weight: "bold",
                  lineHeight: 1.2,
                },
                padding: { top: 30, left: 0, right: 0, bottom: 0 },
              },
            },
          },
        },
      };
      const ctx = document.getElementById("myChart3");

      if (this.myChart3 != null) {
        this.myChart3.destroy();
      }

      this.myChart3 = new Chart(ctx, config);

      // const myChart = new Chart(document.getElementById("myChart3"), config);
      // console.log(myChart);
    },

    makeChart8() {
      const skipped = (ctx, value) =>
        ctx.p0.skip || ctx.p1.skip ? value : undefined;

      const data = {
        labels: this.labels2,

        datasets: [
          {
            label: "Hold in CEX",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            pointRadius: 0,
            data: this.luncC,
            // fill: 1,
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgba(255, 99, 132, 0.4)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          },
          {
            label: "Real With DeMix Mining",
            backgroundColor: "rgb(2, 99, 132)",
            borderColor: "rgb(2, 99, 132)",
            pointRadius: 0,
            data: this.luncP,
            segment: {
              borderColor: (ctx) => skipped(ctx, "rgba(2, 99, 132, 0.4)"),
              borderDash: (ctx) => skipped(ctx, [6, 6]),
            },
            spanGaps: true,
          },
        ],
      };

      const config = {
        type: "line",
        data: data,
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            title: {
              display: true,
              text: "[DLP] LUNC/USDT - Spot",
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Operating Time (H)",
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
                  // console.log(val);
                  // console.log("index", index);
                  // Hide every 2nd tick label

                  // maxTicksLimit 이 충분히 커야 제대로 나옴
                  return index % 100 === 0 ? this.getLabelForValue(val) : "";
                  // [0, 1일, 2일, 3일 ...]
                  // return index % 24 === 0
                  //   ? this.getLabelForValue(val / 24 + "일")
                  //   : "";
                  // [기준일, + 1일, +1일, +1일 ...]
                  // return index % 24 === 0
                  //   ? this.getLabelForValue(new Date(2022, 6, 28 + val / 24))
                  //   : "";
                },
                // 라벨 기울기 (0 은 수평)
                minRotation: 0,
                maxRotation: 0,
                // 최대 개수
                maxTicksLimit: 999,
              },
            },
            y: {
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
        },
      };
      const ctx = document.getElementById("myChart4");

      if (this.myChart4 != null) {
        this.myChart4.destroy();
      }

      this.myChart4 = new Chart(ctx, config);
      // const myChart = new Chart(document.getElementById("myChart4"), config);
      // console.log(myChart);
    },

    makeChart9() {
      const data = {
        labels: this.labels.slice(-168),

        datasets: [
          {
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            pointRadius: 0,
            data: this.current.slice(-168),
          },
          {
            backgroundColor: "rgb(2, 99, 132)",
            borderColor: "rgb(2, 99, 132)",
            pointRadius: 0,
            data: this.hold.slice(-168),
          },
        ],
      };

      // const chartAreaBorder = {
      //   id: "chartAreaBorder",
      //   beforeDraw(chart, args, options) {
      //     const {
      //       ctx,
      //       chartArea: { left, top, width, height },
      //     } = chart;
      //     ctx.save();
      //     ctx.strokeStyle = options.borderColor;
      //     ctx.lineWidth = options.borderWidth;
      //     ctx.setLineDash(options.borderDash || []);
      //     ctx.lineDashOffset = options.borderDashOffset;
      //     ctx.strokeRect(left, top, width, height);
      //     ctx.restore();
      //   },
      // };

      const config = {
        type: "line",
        data: data,
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },

          plugins: {
            legend: {
              display: false,
            },
            //   chartAreaBorder: {
            //     borderWidth: 1,
            //   },
            tooltip: {
              enabled: false,
            },
          },
        },
        // plugins: [chartAreaBorder],
      };
      const ctx = document.getElementById("myChart5");

      if (this.myChart5 != null) {
        this.myChart5.destroy();
      }

      this.myChart5 = new Chart(ctx, config);
      // const myChart = new Chart(document.getElementById("myChart5"), config);
      // console.log(myChart);
    },

    makeChart10() {
      console.log("실행1");
      const data = {
        labels: this.labels2.slice(-168),

        datasets: [
          {
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            pointRadius: 0,
            data: this.luncC.slice(-168),
          },
          {
            backgroundColor: "rgb(2, 99, 132)",
            borderColor: "rgb(2, 99, 132)",
            pointRadius: 0,
            data: this.luncP.slice(-168),
          },
        ],
      };

      // const chartAreaBorder = {
      //   id: "chartAreaBorder",
      //   beforeDraw(chart, args, options) {
      //     const {
      //       ctx,
      //       chartArea: { left, top, width, height },
      //     } = chart;
      //     ctx.save();
      //     ctx.strokeStyle = options.borderColor;
      //     ctx.lineWidth = options.borderWidth;
      //     ctx.setLineDash(options.borderDash || []);
      //     ctx.lineDashOffset = options.borderDashOffset;
      //     ctx.strokeRect(left, top, width, height);
      //     ctx.restore();
      //   },
      // };

      const config = {
        type: "line",
        data: data,
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },

          plugins: {
            legend: {
              display: false,
            },
            //   chartAreaBorder: {
            //     borderWidth: 1,
            //   },
            tooltip: {
              enabled: false,
            },
          },
        },
        // plugins: [chartAreaBorder],
      };
      const ctx = document.getElementById("myChart6");

      if (this.myChart6 != null) {
        this.myChart6.destroy();
      }

      this.myChart6 = new Chart(ctx, config);
    },

    gridChart(list) {
      console.log(list);
      for (var i = 0; i < list.length; i++) {
        // console.log(i);
        // console.log(list[i]);
        // console.log(list[i][0]);

        let f = this.table[list[i][0]].chart;
        f();
        // console.log(this.table[list[i][0]].chart);
      }
    },
    */
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

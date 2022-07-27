<template>
  <div class="home">
    <!-- style="width: 70vw" -->
    <Header />
    <Visual />
    <Finance />
    <!-- <button @click="aaa()">aa</button> -->
    <!-- <Project :apyList="apyList"> -->
    <Project>
      <Setting msg="myChart1Con" slot="chart1" class="marginTB">
        <canvas
          slot="chartCanvas"
          width="700"
          height="300"
          id="GridChart01"
        ></canvas>
      </Setting>

      <Setting msg="myChart2Con" slot="chart2" class="marginTB">
        <canvas
          slot="chartCanvas"
          width="700"
          height="300"
          id="GridChart02"
        ></canvas>
      </Setting>

      <Setting msg="myChart3Con" slot="chart3" class="marginTB">
        <canvas
          slot="chartCanvas"
          width="700"
          height="300"
          id="GridChart03"
        ></canvas>
      </Setting>

      <Setting msg="myChart4Con" slot="chart4" class="marginTB">
        <canvas
          slot="chartCanvas"
          width="700"
          height="300"
          id="GridChart04"
        ></canvas>
      </Setting>
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
import { chartBasic1 } from "../control/chart";
import { chartDataCall, chartDataCall1 } from "../control/dataCall";

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
      this.apyList[1] = this.chartBasic1(
        result,
        1,
        "GridChart01",

        this.myChart01,
        "AUTO/USDT (x1)"
      );
    });
    this.chartDataCall1(3).then((result) => {
      this.chartBasic1(
        result,
        2,
        "GridChart02",

        this.myChart02,
        "LUNC/USDT (x3)"
      );
    });
    this.chartDataCall1(4).then((result) => {
      this.chartBasic1(
        result,
        3,
        "GridChart03",

        this.myChart03,
        "LUNA2/BUSD (x10)"
      );
    });
    this.chartDataCall(2).then((result) => {
      this.chartBasic1(
        result,
        4,
        "GridChart04",

        this.myChart04,
        "BTC/USD (x10)"
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

      chartBasic1,
      chartDataCall,
      chartDataCall1,

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
      apyList: [],
    };
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

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

let apyList;

const makeLabel1 = (data) => {
  let label = [];
  for (let index = 0; index < data.length; index++) {
    label.push(index);
  }
  return label;
};

export const chartBasic1 = (getData, num, source, target, saveChart, title) => {
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
  let price = [];
  let date112233 = [];
  let apy = null;
  data1.forEach((ele) => {
    price.push(ele[4]);
    hold.push(ele[8]);
    realPercent.push(ele[12]);
    demixPercent.push(ele[13]);
    apy = ele[14];
    date112233.push(ele[15]);
  });
  // console.log(date112233);
  apy = Number(apy);
  // console.log(typeof this.apyList[1]);
  apyList = apy.toFixed(2);
  // console.log(this.demixPercent1);
  const labels = makeLabel1(date112233);
  // const labels = date;

  const skipped = (ctx, value) =>
    ctx.p0.skip || ctx.p1.skip ? value : undefined;

  const data = {
    labels: labels,

    datasets: [
      {
        label: "Hold",
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
      {
        label: "Price",
        backgroundColor: "rgba(22, 99, 32, 0.5)",
        borderColor: "rgb(22, 199, 132)",
        pointRadius: 0,
        borderWidth: 1,
        data: price,
        segment: {
          borderColor: (ctx) => skipped(ctx, "rgba(22, 199, 32, 0.4)"),
          borderDash: (ctx) => skipped(ctx, [6, 6]),
        },
        spanGaps: true,
        hidden: true,
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
      const items = chart.options.plugins.legend.labels.generateLabels(chart);

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
        boxCheckbox.defaultChecked = !item.hidden;

        li.onclick = () => {
          const { type } = chart.config;
          const a = document.getElementById(
            `boxCheckboxId${item.datasetIndex}`
          );

          if (type === "pie" || type === "doughnut") {
            // Pie and doughnut charts only have a single dataset and visibility is per item
            chart.toggleDataVisibility(item.index);
          } else {
            chart.setDatasetVisibility(
              item.datasetIndex,
              !chart.isDatasetVisible(item.datasetIndex)
            );
            a.checked != a.checked;
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
        textContainer.style.textDecoration = item.hidden ? "line-through" : "";

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

  const footer = (tooltipItems) => {
    // console.log(tooltipItems);
    let date;

    tooltipItems.forEach(function (tooltipItem) {
      // console.log(tooltipItem);
      date = date112233[tooltipItem.dataIndex];
    });
    return "Date: " + date;
  };

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
          display: true,
          text: title,
        },
        htmlLegend: {
          // ID of the container to put the legend in
          containerID: `myChart${num}Con`,
        },
        legend: {
          display: true,
        },
        tooltip: {
          callbacks: {
            footer: footer,
          },
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
              // console.log(date112233[val]);
              // console.log(date112233);
              // maxTicksLimit 이 충분히 커야 제대로 나옴
              //slice(2, -3)
              return index % 150 === 0
                ? this.getLabelForValue(date112233[val].slice(2))
                : "";
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
              saveChart.scales.yAxis.height + saveChart.scales.yAxis.top + 10;

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
  return apyList;
};

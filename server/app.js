const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const log = require("./config/logger");

var { readFirstSheetRow, readFirstSheetRow1 } = require("./db/getDB");

const corsOption = {
  // origin: "https://www.deliquidity.co.kr/",
  // origin: "http://localhost:8080",
  origin: "http://158.247.202.179:80/",
  // origin: "*",
  credentials: true,
};

app.use(cors(corsOption));

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use("/api/download", express.static("uploads"));

const server = app.listen(3000, () => {
  console.log("Server started. port 3000");
  log.info("Server started. port 3000");
});

app.post("/api/db", async (req, res) => {
  let sheetNum = req.body.param[0];
  console.log(sheetNum);
  log.info(`/api/db, param: ${sheetNum}`);
  let data = [];
  try {
    data = await readFirstSheetRow(sheetNum);
    res.send(data);
  } catch (error) {
    console.log(error);
    log.error(error);
    res.send({
      error,
    });
  }
});

app.post("/api/db1", async (req, res) => {
  let sheetNum = req.body.param[0];
  console.log(sheetNum);
  log.info(`/api/db1, param: ${sheetNum}`);
  let data = [];
  try {
    data = await readFirstSheetRow1(sheetNum);
    res.send(data);
  } catch (error) {
    console.log(error);
    log.error(error);
    res.send({
      error,
    });
  }
});

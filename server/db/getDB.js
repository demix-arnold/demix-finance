const { GoogleSpreadsheet } = require("google-spreadsheet");
// const gs_creds = require("./tokyo-concept-354205-1f938e1786c9.json"); // 키 생성 후 다운된 json파일을 지정합니다.
const doc = new GoogleSpreadsheet(
  "1TotPdoG3EJ5G7jRGCYeSiEq24VOhwX_gAw8uzG3CKfI"
);
const doc1 = new GoogleSpreadsheet(
  "1sSQgZI4B3jzzIKaiRReuo2rASHqtXpw6JJVWG4kGxL8"
);

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env.local") });

const log = require("../config/logger");

async function authGoogleSheet() {
  try {
    // await doc.useServiceAccountAuth(gs_creds);
    // console.log(process.env);
    await doc.useServiceAccountAuth(process.env);
    await doc.loadInfo();

    log.info("google connect");
  } catch (err) {
    console.log("AUTH ERROR ", err);
    log.error(`AUTH ERROR ${err}`);
  }
}
// authGoogleSheet(); // 처음 시작할 때 문서 접속에 대한 인증을 처리하고 해당 문서를 로드합니다.
// const readFirstSheetRow = async () => {
const readFirstSheetRow = async (num) => {
  // async function readFirstSheetRow() {
  await authGoogleSheet();
  var sheet = doc.sheetsByIndex[num]; // 첫번째 시티를 가져옵니다.
  console.log(sheet.title);
  log.info(sheet.title);
  const sheetLimit = sheet.rowCount;
  var rows = await sheet.getRows({ offset: 0, limit: sheetLimit }); // 세 번째 row 부터 100개 row를 가져옵니다.
  // console.log(rows);
  let rows1 = [];
  rows.forEach((ele) => {
    //console.log(ele._rawData); // 읽어온 rows 중 현재row에서 첫 번째 컬럼과 두 번째 컬럼을 출력합니다.
    rows1.push(ele._rawData);
  });
  //console.log(rows1);
  return rows1;
};

async function authGoogleSheet1() {
  try {
    // await doc.useServiceAccountAuth(gs_creds);
    await doc1.useServiceAccountAuth(process.env);
    await doc1.loadInfo();

    log.info("google connect");
  } catch (err) {
    console.log("AUTH ERROR ", err);
    log.error(`AUTH ERROR ${err}`);
  }
}

const readFirstSheetRow1 = async (num) => {
  // async function readFirstSheetRow() {
  await authGoogleSheet1();
  var sheet = doc1.sheetsByIndex[num]; // 첫번째 시티를 가져옵니다.
  console.log(sheet.title);
  log.info(sheet.title);
  const sheetLimit = sheet.rowCount;
  var rows = await sheet.getRows({ offset: 0, limit: sheetLimit }); // 세 번째 row 부터 100개 row를 가져옵니다.
  // console.log(rows);
  let rows1 = [];
  rows.forEach((ele) => {
    //console.log(ele._rawData); // 읽어온 rows 중 현재row에서 첫 번째 컬럼과 두 번째 컬럼을 출력합니다.
    rows1.push(ele._rawData);
  });
  //console.log(rows1);
  return rows1;
};

// readFirstSheetRow();
module.exports = { readFirstSheetRow, readFirstSheetRow1 };

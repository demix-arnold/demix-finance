const axios = require("axios");

// axios.defaults.baseURL = "https://www.deliquidity.co.kr";
// axios.defaults.baseURL = "http://localhost:3000"; //서버 ip 주소
axios.defaults.baseURL = "http://http://158.247.202.179/"; //서버 ip 주소

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8;";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

module.exports = {
  api: async (url, method, data) => {
    // 서버 연결
    console.log("api 들어옴");
    console.log(data);
    return (
      await axios({
        method: method,
        url: url,
        data: data,
      }).catch((e) => {
        console.log(e);
      })
    ).data;
  },
};

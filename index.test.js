require("./index");
const nock = require("nock");
const fetch = require("node-fetch");
const path = require("path");

const main = async () => {
  nock.back.fixtures = path.join(__dirname, "fixtures");
  nock.back.setMode("record");
  const { nockDone } = await nock.back("test.json");

  const url = "http://localhost:6061";

  const response = await fetch(url, {
    method: "GET",
    // compress: false,
    headers: {}
  });
  console.log("Headers:", response.headers);
  const body = await response.json();
  console.log("Body:", body);
  nockDone();
};

main().catch(ex => {
  console.log(ex);
  process.exit(1);
});

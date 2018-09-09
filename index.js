const express = require("express");
const compression = require("compression");

const app = express();

app.use(
  compression({
    threshold: "0",
    chunkSize: 64
  })
);

app.get("/", (req, res) => {
  const ret = {};
  for (var i = 0; i < 10; i++) {
    ret[`key${i}`] = "value";
  }
  return res.json(ret);
});

app.listen(6061, () => {
  console.log("Listening on 6061");
});

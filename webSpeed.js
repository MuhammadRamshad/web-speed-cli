#!/usr/bin/env node
const http = require("http");

function ping(url) {
  const hostname = url.replace(/^https?:\/\//, "");
  console.log(`Testing connection to ${hostname}`);
  const startTime = Date.now();

  const req = http.get(`http://${hostname}`, (res) => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`\nConnected to ${hostname}`);
    console.log(`Response status: ${res.statusCode}`);
    console.log(`Response time: ${responseTime}ms`);
    res.resume();
  });
  req.on("error", (err) => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`Failed to connect to ${hostname}: ${err.message}`);
    console.log(`Time elapsed before failure ${responseTime}ms`);
  });
  req.setTimeout(3000, () => {
    req.abort();
    const responseTime = endTime - startTime;
    console.log(`Connection to ${hostname} time out`);
    console.log(`Time elapsed before timeout ${responseTime}ms`);
  });
}
if (process.argv.length < 3) {
  console.log("Usage : node webSpeed.js website1 website2...");
  console.log("Example : node WebSpeed.js google.com facebook.com...");
} else {
  const websites = process.argv.slice(2);
  websites.forEach((site) => {
    ping(site);
  });
}

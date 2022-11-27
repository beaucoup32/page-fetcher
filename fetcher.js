const url = process.argv[2];
const path = process.argv[3];
const fs = require("fs");
const writefile = fs.writeFile;

const request = require("request");

request(url, (error, response, body) => {
  //console.log("error:", error); // Print the error if one occurred
  //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

  writefile(path, body, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    const { size } = fs.statSync(path);

    console.log(`Downloaded and saved ${size} bytes to ${path}`);
  });
});

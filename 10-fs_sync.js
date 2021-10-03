const { readFileSync, writeFileSync } = require("fs");

//To read a file
const first = readFileSync("./folder/first.txt", "utf-8");
const second = readFileSync("./folder/second.txt", "utf-8");
//To write a new file
writeFileSync("./folder/result.txt", `The text is : ${first}`);
//To add something to a file
writeFileSync("./folder/result.txt", `This is my new text: ${second}`, {
  flag: "a",
});

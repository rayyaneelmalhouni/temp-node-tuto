const { readFile, writeFile } = require("fs");

readFile("./folder/first.txt", "utf-8", (err, resolve) => {
  if (err) {
    console.log("Not find check the file path");
    return;
  }
  const first = resolve;
  readFile("./folder/second.txt", "utf-8", (err, resolve) => {
    if (err) {
      console.log("Not find check the file path");
      return;
    }
    const second = resolve;
    writeFile(
      "./folder/result-async.txt",
      `This is a new text so ${first} and there is ${second}`,
      (err, resolve) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(resolve);
      }
    );
  });
});

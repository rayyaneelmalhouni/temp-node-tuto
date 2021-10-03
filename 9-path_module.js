const path = require("path");

//get the right path in the folder
const pathText = path.join("folder", "sub", "file.txt");
//get the file name
const file_name = path.basename(pathText);
//get the absolute path
const file_absolute_path = path.resolve(__dirname, "folder", "sub", "file.txt");

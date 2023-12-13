"use strict";
const ps = require("prompt-sync");
const prompt = ps();

/* let name = prompt("Enter your name : ");
//console.log("Heloo ${name}");
console.log(`Heloo ${name}`);  */

const fs = require("fs");
const path = require("path");
const { config } = require("process");

function getFiles(dir, files = []) {
  // get an array of files and directories in the passed directory using fs.readdirSync
  const filelist = fs.readdirSync(dir);
  //create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of filelist) {
    //const name = '${dir}/${file}';
    const name = dir + "/" + file;

    //check if the current file/directory is a directory
    if (fs.statSync(name).isDirectory()) {
      //if it is a directory, call the get file function with the directory path and the files array
      getFiles(name, files);
    } else {
      //if it is a file, push the full path to the files array
      files.push(name);
    }
  }
  return files;
}

// List all files in a directory
const getAllFiles = (dir) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);

//filtering files by extensions

function extFilter(dir) {
  if (path.extname(dir) === ".pdf") {
    fs.appendFile("pdf.txt", "\n" + path.basename(dir), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else if (path.extname(dir) === ".docx" || path.extname(dir) === ".doc") {
    fs.appendFile("doc.txt", "\n" + path.basename(dir), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else if (path.extname(dir) === ".pptx" || path.extname(dir) === ".ppt") {
    fs.appendFile("ppt.txt", "\n" + path.basename(dir), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else if (path.extname(dir) === ".html") {
    fs.appendFile("html.txt", "\n" + path.basename(dir), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else if (path.extname(dir) === ".js") {
    fs.appendFile("js.txt", "\n" + path.basename(dir), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else if (path.extname(dir) === ".txt") {
    fs.appendFile("text.txt", "\n" + path.basename(dir), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else if (path.extname(dir) === ".mp3") {
    fs.appendFile("mp3.txt", "\n" + path.basename(dir), (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else if (path.extname(dir) === ".jpg") {
    fs.appendFile("jpg.txt", "\n" + path.basename(dir), (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

//const filesIntheFolder = getFiles("C:/Users/ShibePC/Desktop/sami");
let userPath = prompt("Enter the folder path : ");
const filesIntheFolder = getFiles(userPath);
const onlyfiles = getAllFiles(userPath);

console.log(filesIntheFolder);
console.log(path.basename(filesIntheFolder[0]));
/* fs.appendFile("pdf.txt", "\n" + path.basename(filesIntheFolder[0]), (err) => {
  if (err) {
    console.error(err);
  }
}); */
for (var i = 0; i < filesIntheFolder.length; i++) {
  extFilter(filesIntheFolder[i]);
}

console.log("all files in the folder " + userPath + " are :");
console.log(onlyfiles);

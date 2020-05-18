const path = require("path");
const fs = require("fs");

const changeFilePosition = (arrOfFiles, cameFrom, goingTo) => {
  arrOfFiles.forEach((file) => {
    fs.rename(
      path.join(cameFrom, file),
      path.join(goingTo, file),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log(file, cameFrom);
  });
};

const getArrOfFiles = (folder, putFolder) => {
  const directory = path.join(__dirname, folder);
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    changeFilePosition(files, directory,putFolder);
  });
};

getArrOfFiles("1800", "2000");
getArrOfFiles("2000", "1800");

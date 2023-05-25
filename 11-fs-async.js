const { readFile, writeFile } = require("fs");

readFile(
  "./content/subfolder/first.txt",
  "utf8",

  (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = res;
    readFile("./content/subfolder/second.txt", "utf8", (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = res;
      writeFile(
        "./content/res-async.txt",
        `Here is the result ${first}, ${second}`,
        (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(res);
        }
      );
    });
  }
);

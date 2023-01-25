const fs = require("fs");
const util = require('util')

fs.readdir('./', (err, files) => {
  files.forEach(file => {
    // if (file.endsWith("back.js")) fs.renameSync(file, file.replace(".back", ""));
    if (file === "modifier.js" || file === "vineta.js") return;

    let json = require(`./${file}`);
    
    Object.keys(json?.page1?.items || {}).forEach((key) => {
      if (json.page1.items[key].input || json.page1.items[key].textarea) {
        json.page1.items[key].y -= 3;
        json.page1.items[key].lineGap -= 4;
        json.page1.items[key].max = parseInt(json.page1.items[key].max * 0.72);
      }
    });

    Object.keys(json?.page2?.items || {}).forEach((key) => {
      if (json.page2.items[key].input || json.page2.items[key].textarea) {
        json.page2.items[key].y -= 3;
        json.page2.items[key].lineGap -= 4;
        json.page2.items[key].max = parseInt(json.page2.items[key].max * 0.72);
      }
    });

    let jsonTXT = `const config = ${JSON.stringify(json, null, "\t")}; \n\n module.exports = config;`;
    console.log(util.inspect(jsonTXT, false, null, true /* enable colors */));

    fs.writeFileSync(`${file.replace(".js", "")}.back.js`, jsonTXT);
  });
});
const fs = require("fs");

module.exports.readJSONFile = ()=> {
    return JSON.parse(fs.readFileSync("db.json"))["schedule"];
}

module.exports.writeJSONFile =(content)=>{
    fs.writeFileSync(
        "db.json",
        JSON.stringify({schedule: content}, null, 4),
        "utf-8",
        error => {
            if(error)
                console.log(error);
        }
    );
}
//create file
const fs = require("fs");

fs.writeFile("myfile.text", "Hello Nitin", (err) => {

    if (err) throw err;
    console.log("File created Successfully");

});

//read file

fs.readFile("myfile.text", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
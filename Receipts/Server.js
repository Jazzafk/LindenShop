const http = require("http"); //looks for a package with i
const fs = require('fs'); // for reading and creating files
const PORT = 3000; //port 3000 is not usually used
http.createServer((req, res) => { // function that creates a local server
    const type = req.method; //
    const url = req.url; //this checks the url after the / and asks server for that
    console.log(type, url);
    if (type == "GET") {
        if (url == "/receipts.html") {
            fs.readFile("./receipt.html", (err, data) => {
                res.end(data);
            })
        } else if(url=="/test"){
            fs.readFile("./info.txt", "utf8", (err, data2) => {
                res.write(data2)
                res.end();
            })
        }
    }

    if (type == "POST") {
    let body = ""
    console.log("post request");
    req.on("data", chunk => {
        console.log("chunks", chunk)
        body += chunk
    });
    req.on("end", () => {
        console.log("body", body)
        res.end("success")
        fs.writeFile('./info.txt', body, err => {
            if (err) {
                console.error(err)
                return
            }
            console.log("working!")
        })
    })
}
}).listen(PORT);

//http://localhost:3000/receipt.html
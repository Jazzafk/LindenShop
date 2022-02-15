function getReceipts() {
    fetch("./test").then(function (data) {
        return data.text()
    }).then(function (result) {
        var obj = result;
        console.log(obj);
        makeText(obj, ELEMENT)
    })
} 

// this function would allow you to add the contents of the text file into the browser.
function getReceipts() {
    fetch("./test").then(function (data) {
        return data.text()
    }).then(function (result) {
        var obj = result;
        console.log(obj);
        makeText(obj, para) // para can be replaced.
    })
} 
// this function would allow you to add the contents of the text file into the browser.

function SendReceipts(){

}

//this function would allow you to add the receipts to the text file (to be added to the browser with the function above)
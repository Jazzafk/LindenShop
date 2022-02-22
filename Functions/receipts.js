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
    var items = TestObj //TestObj is the name of the object that contains the new receipt
    console.log(items)
    fetch("./postReceipts").then(function (data) {
        return data.text()
    }).then(function (result) {
        var obj = result;
        console.log(JSON.parse(obj));
    })

    fetch("./postReceipts", {
        method: 'POST',
        body: JSON.stringify(items)
    }).then(data => {
        return data.text()
    }).then(result => {
        console.log(result)
    })
}
//this function would allow you to add the receipts from an object to the text file (to be added to the browser with the function above)
var textObject={
    names:["chocolate","chips","gummies"],
    items:["1", "2", "3"],
    totals:[],
}
function findTotal() {
    //get information from data base in object
    //go into correct day, then student, then order
    //save all selected items in array
   
    var selectedItems = textObject.items
    function findTax() {
        var base = 0
        for (let i = 0; i < selectedItems.length; i++) {
            var price = parseInt(selectedItems[i])
            var base = base + price
            if (i == selectedItems.length-1) {
                var taxedTotal =(base * 1.13).toFixed(2)
                var total=(base).toFixed(2)
                var tax=(taxedTotal-total).toFixed(2)
                textObject.totals.push(taxedTotal)
                textObject.totals.push(total)
                textObject.totals.push(tax)
                alert("Total: "+textObject.totals[0]+" HST: "+textObject.totals[1]+" NET: "+textObject.totals[2])
            }
        }
    }
    findTax()
    
}
findTotal()
function makeReceipt(){
    var receipt=""
    for(i=0;i<textObject.names.length;i++){
    var receipt=receipt+textObject.names[i]+"   "+textObject.items[i]+" /n "
    }
    var receipt=receipt+"Total: "+textObject.totals[0]+" HST: "+textObject.totals[1]+" NET: "+textObject.totals[2]
    alert(receipt)
}
makeReceipt()
function findTotal() {
    //get information from data base in object
    //go into correct day, then student, then order
    //save all selected items in array
    var selectedItems = ["1", "2", "3"]
    function findTax() {
        var base = 0
        for (let i = 0; i < selectedItems.length; i++) {
            var price = parseInt(selectedItems[i])
            var base = base + price
            if (i == selectedItems.length) {
                var taxedTotal = base * 1.13
            }
        }
    }
    findTax()
    alert(taxedTotal)
}
findTotal
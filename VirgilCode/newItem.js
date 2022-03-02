var products = {
    book: {
        name: 'book',
        price: 30.00,
        barcodeNum: '840374958374',
        img: 'https://images-na.ssl-images-amazon.com/images/I/91i7MSrNHXL.jpg',
        numberStock: 69
    },
    rockets: {
        name:'rockets',
        price: 200.00,
        barcodeNum: '849274655483',
        img: 'https://i5.walmartimages.ca/images/Enlarge/165/126/6000203165126.jpg',
        numberStock: 420
    }
}
var cartList=[];
var checkBoxes=[];
function displaySingle(item, allProd){
    var prodDiv = document.createElement('div');
    allProd.appendChild(prodDiv);
    prodDiv.classList.add('prodDivClass');
    var prodImg = document.createElement('img');
    prodDiv.appendChild(prodImg);
    prodImg.setAttribute('src', products[item]['img']);
    prodImg.classList.add('prodImgClass');
    var prodName = document.createElement('h3');
    prodDiv.appendChild(prodName);
    makeText(products[item]['name'], prodName);
    prodName.classList.add('prodNameClass');
    var prodPrice = document.createElement('h4');
    prodDiv.appendChild(prodPrice);
    makeText('$' + (products[item]['price']), prodPrice);
    prodPrice.classList.add('prodPriceClass');
    var check = document.createElement('input');
    check.type = 'checkbox';
    prodDiv.appendChild(check);
    checkBoxes.push(check);
}
function displayAll(container){
    var allProd = document.createElement('div');
    allProd.id='allProdCSS';
    container.appendChild(allProd);
    var checkOut=document.createElement('button');
    makeText('Check Out',checkOut);
    container.appendChild(checkOut);
    var allProdArr = Object.keys(products);
    for (i=0;i<allProdArr.length;i++){
        displaySingle(allProdArr[i], allProd);
    }
    checkOut.addEventListener('click', function(){
        for(i=0;i<allProdArr.length;i++){
            if((checkBoxes[i]).checked==true){
                cartList.push(allProdArr[i]);
            }
        }
        console.log(cartList);
    })
}
displayAll(document.getElementById('productContainer'));
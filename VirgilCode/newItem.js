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

// var allProd = document.createElement('div');
// document.body.appendChild(allProd);

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
    var prodPrice = document.createElement('h4');
    prodDiv.appendChild(prodPrice);
    makeText('$' + (products[item]['price']), prodPrice);
}

function displayAll(container){
    var allProd = document.createElement('div');
    allProd.id='allProdCSS';
    container.appendChild(allProd);
    var allProdArr = Object.keys(products);
    for (i=0;i<allProdArr.length;i++){
        displaySingle(allProdArr[i], allProd);
    }
}

displayAll(document.getElementById('productContainer'));
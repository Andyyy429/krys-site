function searchSite() {
    location.href = "search_page.html";
    /*
    let searchKey = document.querySelector('#searchBar').value;
    let results = [];

    for(let rec of AllProducts){
        let searchText = rec.character.toUpperCase();
        searchKey = searchKey.toUpperCase();

        if ( searchText.search(searchKey) !== -1 ){
        results.push(rec);
    }

    drawProducts(results);
}
*/
}
/*
const search = document.querySelector('#searchBar');

search.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        const url = 'search_page.html';

        window.location.href = url;
    }
})*/

function drawProducts (products) {
    let result = document.querySelector("#product-results");
    let html = '';
    for(let product of products.products){
        html += `<div class="product">
            <div class="product-thumbnail">
                <img class="product-img" src="${product.thumbnail}">
            </div>   
            <div class = "product-content">
                <h1 class="product-name">${product.title}</h1>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${product.rating}</div>
            </div>
        </div>`;
    }
    result.innerHTML = html;
}

let AllProducts = [];

async function getProducts(){
    try {
        let response = await fetch("https://dummyjson.com/products");
        let result = await response.json();
        return result;
    }
    catch(e){
        console.log(e);
    }
}

async function showAllProducts(){
    AllProducts = await getProducts();
    drawProducts(AllProducts);
}

showAllProducts();

let dropcat = document.querySelector(".dropdown-content");
function showCatagories() {
    if (dropcat.style.display === "none" && screen.width < 600) {
        dropcat.style.display = "block";
    }
    else if (dropcat.style.display === "none" && screen.width > 600){
        dropcat.style.display = "inline-flex";
    }
    else {
        dropcat.style.display = "none";
    }
};

window.onload = hideCatagories ();
function hideCatagories () {
    if (dropcat.style.display === "block" ||"inline-flex") {
        dropcat.style.display = "none";
    }
}



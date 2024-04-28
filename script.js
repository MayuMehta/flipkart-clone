import {products} from "./Data/products.js";
import {slider} from './Data/slider.js';
import {electronic} from "./Data/electronic.js"
// console.log(products);
let productList=document.querySelector(".product");
let addProduct='';
products.forEach(pr=>{
    addProduct+=`
    <div class="product-list">
       <a href="${pr.link}">
            <div class="product-image">
            <img src="${pr.img}" >
            </div>
            <p class="product-name">
                ${pr.name}
                ${pr.subNavigation?`<i class="fa-solid fa-caret-down"></i>`:""}
            </p>
            
       </a>
    </div>
    `
    // console.log(pr);
})
productList.innerHTML=addProduct;

/*****************Slider***************/

let sliderList=document.querySelector('.images')
let sliderItem='';
slider.forEach(img=>{
    sliderItem+=`
    <div class="image-list">
        <a href="${img.link}">
            <img src="${img.img}" >
        </a> 
    </div>   
    `
})
sliderList.innerHTML=sliderItem;

let preve_imageBtnEl = document.getElementById("preve_imageBtn")
let next_imageBtn = document.getElementById("next_imageBtn")
let start = 0;
let end = -400;

preve_imageBtnEl.addEventListener("click", handlePreveImage)
next_imageBtn.addEventListener("click", handleNextImage)

function handlePreveImage() {
    let imageallList = document.querySelectorAll(".image-list")
    console.log(imageallList)
    if (start < 0)
        start += 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })

}
function handleNextImage() {
    let imageallList = document.querySelectorAll(".image-list")
    console.log(imageallList)
    if (start > end)
        start -= 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}

function renderImageSlider() {
    if (start > end) {
        handleNextImage()
    }
    else {
        start = 100
    }
}

setInterval(renderImageSlider, 5000);


/*********************************bestofElctronic_product_item */
let bestofElctronic_product_itemEl = document.querySelector(".bestofElctronic_product_item")
let bestofElectornicProduct_html = ""

console.log(electronic)
electronic.forEach(el => {
    bestofElectornicProduct_html += `
    <div >
        <a href="${el.link}" class="BestofElectronic_item">   

        <div class="bestOfElectornic_image_Product">
            <img
                src="${el.img}" />
        </div>
        <div class="bestofElectronicmoreOption">
            <p class="bestofElectornicProduct_name">${el.productName}</p>
            <p class="bestofElecronic_discount">${el.discount}</p>
            <p class="bestofElectronic_brand">${el.brand}</p>
        </div>
        </a>

    </div>
    
    `
})

bestofElctronic_product_itemEl.innerHTML = bestofElectornicProduct_html
// import file flower.js ingat '.js'
import {bunga} from "../js/flower.js";

const flowerbouquetcard1 = document.getElementById('P1');
const flowerbouquetcard2 = document.getElementById('P2');

const filter = bunga.filter((f) => f.tipe === "table");


// kalo mau full length kek gini
// for (let i = 0; i < filter.length; i++){}

// tapi kan gw mau dipisah jadinya gini unutk ipad saolnya
// card 1
for (let i = 0; i < 2; i++){
    //status
    let card_status = filter[i].status ? "Available" : "Unavailable";


    // rating
    // buat var baru
    let card_rating = "";

    for (let j = 0; j < filter[i].rating; j++) {
        // backflip bukan peik 1
        card_rating += `<i class="fa-solid fa-star"></i>`;
    }


    // troli
    // buat var baru
    let troli = "";

    if (filter[i].status){
        // backflip bukan peik 1
        troli = `
            <a href="../html/detail-transaksi.html?id=${filter[i].id}">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
        `;
    }

    else{
        // backflip bukan peik 1
        troli = `
            <a href="#" onclick="alert('ops.. Looks like This product is unavailable, we will restock it as soon as possible')">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
        `;
    }

    // html
    flowerbouquetcard1.innerHTML += `
    <div class="card" id="${filter[i].id}">
        <div class="cardimg">
            <img class="${filter[i].status ? "" : "saturation"}" id="image" src="${filter[i].foto}" alt="${filter[i].nama}"/>
        </div>
        <div class="cardWarp">
            <div class="Dproduct">
                <h3>${filter[i].nama}</h3>
                <p class="${filter[i].status ? "available" : "unavailable"}" id="status">${card_status}</p>
            </div>

            <div class="Dproduct">
                <!---input integer agak ribet----->
                <h3 id="discount">Rp. ${new Intl.NumberFormat().format(filter[i].disc)}</h3>
                <h1>Rp. ${new Intl.NumberFormat().format(filter[i].harga)}</h3>
            </div>

            <div class="RCproduct">
                <!---Reting----->
                <div class="rating">
                    ${card_rating}
                    
                    <!---Penjualan----->
                    <p>(${filter[i].penjualan})</p>
                </div>
                
                <div class="troli">
                    <!---troli----->
                    ${troli}
                </div>
            </div>
        </div>
    </div>
    `;
}

// card 2
for (let x = 2; x < 4; x++){
    //status
    let card_status = filter[x].status ? "Available" : "Unavailable";


    // rating
    // buat var baru
    let card_rating = "";

    for (let y = 0; y < filter[x].rating; y++) {
        // backflip bukan peik 1
        card_rating += `<i class="fa-solid fa-star"></i>`;
    }


    // troli
    // buat var baru
    let troli = "";

    if (filter[x].status){
        // backflip bukan peik 1
        troli = `
            <a href="../html/detail-transaksi.html?id=${filter[x].id}">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
        `;
    }

    else{
        // backflip bukan peik 1
        troli = `
            <a href="#" onclick="alert('ops.. Looks like This product is unavailable, we will restock it as soon as possible')">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
        `;
    }

    // html
    flowerbouquetcard2.innerHTML += `
    <div class="card" id="${filter[x].id}">
        <div class="cardimg">
            <img class="${filter[x].status ? "" : "saturation"}" id="image" src="${filter[x].foto}" alt="${filter[x].nama}"/>
        </div>
        <div class="cardWarp">
            <div class="Dproduct">
                <h3>${filter[x].nama}</h3>
                <p class="${filter[x].status ? "available" : "unavailable"}" id="status">${card_status}</p>
            </div>

            <div class="Dproduct">
                <!---input integer agak ribet----->
                <h3 id="discount">Rp. ${new Intl.NumberFormat().format(filter[x].disc)}</h3>
                <h1>Rp. ${new Intl.NumberFormat().format(filter[x].harga)}</h3>
            </div>

            <div class="RCproduct">
                <!---Reting----->
                <div class="rating">
                    ${card_rating}
                    
                    <!---Penjualan----->
                    <p>(${filter[x].penjualan})</p>
                </div>
                
                <div class="troli">
                    <!---troli----->
                    ${troli}
                </div>
            </div>
        </div>
    </div>
    `;
}
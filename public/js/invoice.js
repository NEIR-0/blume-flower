import {bunga} from "./flower.js";

window.addEventListener("load", function () {
    //get file dari flower.js
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");

    // get data dari detail-transaksi.js
    let nama = params.get("names");
    let email = params.get("e_mail");
    let telp = params.get("nomor");
    let alamat = params.get("lokasi");

    // khusus payment option
    let get_payment = params.get("bayar");
    let payment = "";
    if (get_payment == 1){
        payment = "Visa";
    }
    else if (get_payment == 2){
        payment = "MasterCard";
    }
    else if (get_payment == 3){
        payment = "PayPal";
    }

    // get invoice
    const bukti = document.getElementById("DInvoice");

    const BuktiBeli = bunga.filter((dummy) =>{
        return dummy.id == id;
    });

    // date formal
    const tanggal = new Date();

    const hari = tanggal.getDate();
    const bulan = tanggal.getMonth();
    const tahun = tanggal.getFullYear();
    const jam = tanggal.getHours();
    const menit = tanggal.getMinutes();
    const detik = tanggal.getSeconds();

    const TanggalSekarang = `${hari}/${bulan}/${tahun} - ${jam}:${menit}:${detik}`;

    // radom code resi
    const digit = Math.floor(Math.random() * 10000000000000);

    for (let i = 0; i < BuktiBeli.length; i++){
        const total = BuktiBeli[i].harga + BuktiBeli[i].tax;

        bukti.innerHTML += `
        <div class="date">
            <h1>Invoice</h1>
            <h1>${TanggalSekarang}</h1>
        </div>
        <div class="detail">
            <div class="product">
                <div class="Pimage">
                    <img src="${BuktiBeli[i].foto}" alt="">
                </div>
                <div class="DName">
                    <h1>Type : </h1>
                    <h1>${BuktiBeli[i].tipe}</h1>
                </div>
                <div class="DName">
                    <h1>Name : </h1>
                    <h1>${BuktiBeli[i].nama}</h1>
                </div>
                <div class="DName">
                    <h1>No. Receipt :</h1>
                    <h1>${digit}</h1>
                </div>

                <div class="DPName">
                    <h1>${BuktiBeli[i].tipe}</h1>
                    <h1>${BuktiBeli[i].nama}</h1>
                    <h1>${digit}</h1>
                </div>
            </div>
        </div>
        <div class="biodata">
            <div class="HBiodata">
                <div class="Hinput">
                    <h1>Name</h1>
                    <h3>${nama}</h3>
                </div>
                <div class="Hinput">
                    <h1>Email</h1>
                    <h3>${email}</h3>
                </div>
                <div class="Hinput">
                    <h1>Phone</h1>
                    <h3>${telp}</h3>
                </div>
                <div class="Hinput" id="close">
                    <h1>Address</h1>
                    <textarea name="" id="" cols="30" rows="10">${alamat}</textarea>
                </div>
            </div>    
        </div>
        <div class="biodata">
            <div class="HBiodata">
                <div class="Hinput">
                    <h1>Payment</h1>
                    <h3>${payment}</h3>
                </div>
                <div class="Hinput">
                    <h1>Price</h1>
                    <h3>Rp. ${new Intl.NumberFormat().format(BuktiBeli[i].harga)}</h3>
                </div>
                <div class="Hinput">
                    <h1>Tax</h1>
                    <h3>Rp. ${new Intl.NumberFormat().format(BuktiBeli[i].tax)}</h3>
                </div>
            </div>    
        </div>

        <div class="Total">
            <div class="HTotal">
                <div class="Biaya">
                    <h1>Total</h1>
                    <h3>Rp. ${new Intl.NumberFormat().format(total)}</h3>
                </div>
            </div>
                
            <div class="printout">
                <div class="print">
                    <a href="#" onclick="window.print()">
                        <i class="fa-solid fa-print"></i>
                        <h1>Print</h1>
                    </a>
                </div>
            </div>
        </div>
         `
    };


    const back = document.getElementById("back");

    const TombolBack = bunga.filter((data) =>{
        return data.id == id;
    });

    for (let i = 0; i < TombolBack.length; i++){
        // button back
        let tombol = "";

        if(TombolBack[i].tipe == "bouquet"){
            tombol = `../html/flower-boquet.html`;
        }

        else if(TombolBack[i].tipe == "crown"){
            tombol = `../html/flower-crown.html`;
        }

        else if(TombolBack[i].tipe == "table"){
            tombol = `../html/flower-table.html`;
        }

        else{
            tombol = `../html/flower-board.html`;
        }

        back.innerHTML +=`
        <div class="button">
            <a href="${tombol}">
                <i class="fa-solid fa-arrow-left"></i>
                <h1>Back to Shop</h1>
            </a>
         </div>
        `
    };
});
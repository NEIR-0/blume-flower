// pakai .js
import {bunga} from "../js/flower.js";

// function pake yang params
window.addEventListener("load", function () {
    //get file dari flower.js
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");

    // placement
    const detail = document.getElementById("detail-transaksi");

    const transaksi_bunga = bunga.filter((dummy) => {
        return dummy.id == id;
    });
    
    for (let i = 0; i < transaksi_bunga.length; i++){
        // button back
        let back = "";

        if(transaksi_bunga[i].tipe == "bouquet"){
            back = `../html/flower-boquet.html`;
        }

        else if(transaksi_bunga[i].tipe == "crown"){
            back = `../html/flower-crown.html`;
        }

        else if(transaksi_bunga[i].tipe == "table"){
            back = `../html/flower-table.html`;
        }

        else{
            back = `../html/flower-board.html`;
        }

        
        // total
        const total = transaksi_bunga[i].harga+transaksi_bunga[i].tax;

        detail.innerHTML +=`
            <form class="detail">
                <div class="title">
                    <h1>Detail Transaction</h1>
                </div>

                <div class="PImg">
                    <img src="${transaksi_bunga[i].foto}" alt="${transaksi_bunga[i].nama}">
                    <div class="DImg">
                        <h1>${transaksi_bunga[i].tipe}</h1>
                        <h1>${transaksi_bunga[i].nama}</h1>
                    </div>
                </div>

                <div class="biodata">
                    <div class="nama">
                        <h1>Name</h1>
                        <input type="text" id="name"
                        placeholder="dudnh" autocomplete="off" required>
                    </div>

                    <div class="email">
                        <h1>Email</h1>
                        <input type="text" id="email" placeholder="dudnh@gmail.com" autocomplete="off" required>
                    </div>

                    <div class="telp">
                        <h1>Phone</h1>
                        <input type="text" id="phone" placeholder="08XX-XXXX-XXXX" autocomplete="off" required>
                    </div>

                    <div class="alamat">
                        <h1>Address</h1>
                        <textarea cols="30" rows="10" id="address" placeholder="Jl. Hj Hasim Gg.3" autocomplete="off" required></textarea>
                    </div>

                    <div class="pembayaran">
                        <h1>Payment</h1>
                        <select id="payment" required>
                            <option  selected disabled>Choose a Payment</option>
                            
                            <option value="1">Visa</option>
                            <option value="2">MasterCard</option>
                            <option value="3">PayPal</option>
                        </select>
                    </div>

                    <div class="harga">
                        <h1>Peice</h1>
                        <h1>Rp. ${new Intl.NumberFormat().format(transaksi_bunga[i].harga)}</h1>
                    </div>

                    <div class="pajak">
                        <h1>Tax</h1>
                        <h1>Rp. ${new Intl.NumberFormat().format(transaksi_bunga[i].tax)}</h1>
                    </div>
                </div>

                <div class="DTotal">
                    <div class="total">
                        <h1>Tax</h1>
                        <h1>Rp. ${new Intl.NumberFormat().format(total)}</h1>
                    </div>
                </div>  

                <div class="beli">
                    <button type="submit" class="order">Order Now</button>
                </div>
            </form>
            
            <div class="btn">
                <a href="${back}">
                    <div class="back" onclick="alert('Are you sure want to close this page? , Any changes you make will not be saved.')">
                        <i class="fa-solid fa-arrow-left"></i>
                        <h1>Back</h1>
                    </div>
                </a>
            </div>
        `;


        document.querySelector("form").addEventListener("submit" , function (e){
            e.preventDefault();

            const nama = document.getElementById("name").value;
            const telp = document.getElementById("phone").value;
            const emails = document.getElementById("email").value;
            const alamat = document.getElementById("address").value;
            const pembayaran = document.getElementById("payment").value;

            // base on select value
            if (pembayaran == 1){
                window.location.href = `../html/invoice.html?id=${transaksi_bunga[i].id}&names=${nama}&e_mail=${emails}&nomor=${telp}&lokasi=${alamat}&bayar=1`;
            }

            else if (pembayaran == 2){
                window.location.href = `../html/invoice.html?id=${transaksi_bunga[i].id}&names=${nama}&e_mail=${emails}&nomor=${telp}&lokasi=${alamat}&bayar=2`;
            }

            else if (pembayaran == 3){
                window.location.href = `../html/invoice.html?id=${transaksi_bunga[i].id}&names=${nama}&e_mail=${emails}&nomor=${telp}&lokasi=${alamat}&bayar=3`;
            }

            else{
                alert("Please choose a payment")
            }
        });
     }
});


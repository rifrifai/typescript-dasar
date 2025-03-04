"use strict";
// tipe data in ts
let nama = "Alfian";
let panjang = nama.length;
let isCompleted = false;
let image = null;
let kosong;
// union atau mempunyai 2 tipe data
let link = "https://alfian.com";
// tipe data array
let nilai = [90, 80, 65];
let alamat = ["Jakarta", "Bandung", "Bogor"];
let mix = ["Budi", 24, "Semarang"];
nilai.push(22);
let arrayKosong = [];
// tipe data object
let santri = {
    nama: "Alfian",
    umur: 20,
    alamat: "Jakarta",
    nilai: 90,
};
santri.alamat = "Bandung";
santri.isLulus = true;
// tipe data array of object
let book = {
    id: 1,
    item: "Buku",
    harga: 75000,
    stock: 10,
};
let pen = { id: 2, item: "Pena", harga: 20000, stock: 10 };
let pensil = { id: 3, item: "Pensil", harga: 5000 };
// readyonly berfungsi agar tidak bisa diubah
let items = [book, pen, pensil];
items[1].harga = 3000;
//  membuat function di ts
function hitung(a, b) {
    return a * b;
}
console.log(hitung(3, 3));

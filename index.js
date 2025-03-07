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
// dengan parameter
function sapa(nama) {
    return `Hello ${nama} \n`;
}
// tanpa parameter
function hello() {
    return `Hello World \n`;
}
// default parameter
function sapa2(nama = "World") {
    return `Hello ${nama} \n`;
}
// optional parameter
function discountItem(price, discount) {
    return price - (discount || 0);
}
// void function
function pesan(message) {
    console.log(message);
}
const adi = {
    id: 1,
    name: "Adi",
    isActive: true,
};
const budi = {
    id: 1,
    name: "Budi",
    isActive: false,
    address: "Bandung",
};
let tema;
tema = "light";
function setTheme(t) {
    tema = t;
}
setTheme("dark");
const reza = {
    id: 1234,
    name: "Reza",
    age: 20,
    isLulus: true,
};
const ahmad = {
    id: 456,
    name: "Joko",
    age: 18,
    isLulus: false,
};
const biodata1 = {
    id: 10,
    name: "Ahmad Trisna",
    age: 27,
    address: "Kebumen",
    isSantri: true,
};
console.log(biodata1);

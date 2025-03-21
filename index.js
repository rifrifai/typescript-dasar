"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// enum adalah tipe data yang digunakan untuk mendefinisikan sekumpulan nilai konstan atau tetap
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
    Role[Role["Guest"] = 3] = "Guest";
})(Role || (Role = {}));
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
    Status[Status["BadRequest"] = 400] = "BadRequest";
    Status[Status["Unauthorized"] = 401] = "Unauthorized";
})(Status || (Status = {}));
const userRole = Role.Admin;
const userStatus = Status.Success;
// Tuple adalah tipe data yang memungkinkan kita menyimpan array dengan panjang dan tipe data yang sudah di definisikan
let Person = [
    "Reza",
    23,
    false,
    "Jakarta",
    "Bandung",
];
// console.log(add(3, 3));
// console.log(multiple(3, 3));
// generic memungkinkan kita menulis fungsi, class atau interface yang dapat bekerja dengan berbagai tipe data tanpa menentukan tipe spesifik yang membuat kode lebih fleksibel dan dapat digunakan kembali tanpa kehilangan keamanan tipe data
function getDateString(value) {
    return value;
}
function getDataNumber(value) {
    return value;
}
// di atas ribet kebanyakan value, dibawah menggunakan generic
function getNilai(value) {
    return value;
}
// console.log(getNilai<string>("Joko Widodo"));
function getData(params, params2) {
    return Object.assign(Object.assign({}, params), params2);
}
// console.log(getData({ nama: "Joko", address: "Demak" }, { age: 23 }));
function getLength(value) {
    return value.length;
}
// console.log(getLength("Joko Susilo"));
// console.log(getLength(900));
// console.log(getLength([1, 4, 2, 5, 3]));
// class
class Biodata1 {
    // inisialisai nilai saat object dibuat
    constructor(name, age) {
        this.nama = name;
        this.umur = age;
    }
    // method or function
    Pengenalan() {
        return `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`;
    }
}
class fullBiodata extends Biodata1 {
    constructor(name, age) {
        super(name, age);
    }
    fullPengenalan() {
        return `Halo, fungsi ini fullBiodata, nama ${this.nama} dan umur ${this.umur}`;
    }
}
// inisialisasi object
const rafi = new fullBiodata("Rafi", 18);
console.log(rafi.fullPengenalan());

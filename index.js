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
console.log(santri);

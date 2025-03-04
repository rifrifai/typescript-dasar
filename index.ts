// tipe data in ts
let nama: string = "Alfian";
let panjang: number = nama.length;
let isCompleted: boolean = false;
let image = null;
let kosong: undefined;

// union atau mempunyai 2 tipe data
let link: string | null = "https://alfian.com";

// tipe data array
let nilai: number[] = [90, 80, 65];
let alamat: string[] = ["Jakarta", "Bandung", "Bogor"];
let mix: (string | number)[] = ["Budi", 24, "Semarang"];
nilai.push(22);
let arrayKosong: [] = [];

// tipe data object
let santri: {
  nama: string;
  umur: number;
  alamat: string;
  nilai: number;
  isLulus?: boolean;
} = {
  nama: "Alfian",
  umur: 20,
  alamat: "Jakarta",
  nilai: 90,
};
santri.alamat = "Bandung";
santri.isLulus = true;

// tipe data array of object
let book: { id: number; item: string; harga: number; stock: number } = {
  id: 1,
  item: "Buku",
  harga: 75000,
  stock: 10,
};
let pen = { id: 2, item: "Pena", harga: 20000, stock: 10 };
let pensil = { id: 3, item: "Pensil", harga: 5000 };
// readyonly berfungsi agar tidak bisa diubah
let items: {
  readonly id: number;
  readonly item: string;
  harga: number;
  stock?: number;
}[] = [book, pen, pensil];
items[1].harga = 3000;

//  membuat function di ts
function hitung(a: number, b: number): number {
  return a * b;
}
console.log(hitung(3, 3));

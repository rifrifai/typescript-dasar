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
// dengan parameter
function sapa(nama: string): string {
  return `Hello ${nama} \n`;
}
// tanpa parameter
function hello(): string {
  return `Hello World \n`;
}
// default parameter
function sapa2(nama: string = "World"): string {
  return `Hello ${nama} \n`;
}
// optional parameter
function discountItem(price: number, discount?: number): number {
  return price - (discount || 0);
}
// void function
function pesan(message: string): void {
  console.log(message);
}
pesan("Pesan 1");
pesan("Pesan 2");
pesan("Pesan 3");

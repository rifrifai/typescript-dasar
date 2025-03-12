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

// type alis typescript
type User = { id: number; name: string; isActive: boolean; address?: string };

const adi: User = {
  id: 1,
  name: "Adi",
  isActive: true,
};
const budi: User = {
  id: 1,
  name: "Budi",
  isActive: false,
  address: "Bandung",
};

type Theme = "light" | "dark";
let tema: Theme;
tema = "light";

function setTheme(t: Theme) {
  tema = t;
}
setTheme("dark");

// interface
// interface bisa di deklarasikan ulang tapi kelemahannya tidak bisa union dan function type alias
interface Users {
  id: number;
  name: string;
  age: number;
  isLulus: boolean;
}
const reza: Users = {
  id: 1234,
  name: "Reza",
  age: 20,
  isLulus: true,
};
const ahmad: Users = {
  id: 456,
  name: "Joko",
  age: 18,
  isLulus: false,
};

// extends atau pewarisan
interface Bio {
  id: number;
  name: string;
}

interface Biodata extends Bio {
  age: number;
  address: string;
  isSantri: boolean;
}

const biodata1: Biodata = {
  id: 10,
  name: "Ahmad Trisna",
  age: 27,
  address: "Kebumen",
  isSantri: true,
};

// enum adalah tipe data yang digunakan untuk mendefinisikan sekumpulan nilai konstan atau tetap
enum Role {
  Admin,
  User,
  SuperAdmin,
  Guest,
}
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
  BadRequest = 400,
  Unauthorized = 401,
}
const userRole: Role = Role.Admin;
const userStatus: Status = Status.Success;

// Tuple adalah tipe data yang memungkinkan kita menyimpan array dengan panjang dan tipe data yang sudah di definisikan
let Person: [string, number, boolean?, ...string[]] = [
  "Reza",
  23,
  false,
  "Jakarta",
  "Bandung",
];

// import export module
import { add, multiple } from "./utils/MathUtils";
// console.log(add(3, 3));
// console.log(multiple(3, 3));

// generic memungkinkan kita menulis fungsi, class atau interface yang dapat bekerja dengan berbagai tipe data tanpa menentukan tipe spesifik yang membuat kode lebih fleksibel dan dapat digunakan kembali tanpa kehilangan keamanan tipe data
function getDateString(value: string): string {
  return value;
}
function getDataNumber(value: number): number {
  return value;
}
// di atas ribet kebanyakan value, dibawah menggunakan generic
function getNilai<T>(value: T): T {
  return value;
}
// console.log(getNilai<string>("Joko Widodo"));
function getData<T, U>(params: T, params2: U): T & U {
  return { ...params, ...params2 };
}
// console.log(getData({ nama: "Joko", address: "Demak" }, { age: 23 }));
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}
console.log(getLength("Joko Susilo"));
// console.log(getLength(900));
console.log(getLength([1, 4, 2, 5, 3]));

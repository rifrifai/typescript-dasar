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

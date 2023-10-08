//If-else dengan input
let nilai = prompt("Masukkan nilai Anda:");

if (nilai >= 80) {
  document.write("Nilai Anda A");
} else if (nilai >= 70) {
  document.write("Nilai Anda B");
} else {
  document.write("Nilai Anda C");
}

document.write("<br><br>");

//Switch case dengan input
let day = prompt("Masukkan hari:");

switch (day) {
  case "Senin":
    document.write("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    document.write("Hari libur");
    break;
  default:
    document.write("Hari tidak valid");
}

document.write("<br><br>");

//For statement dengan input
let n = prompt("Masukkan nilai n untuk loop:");

for (let i = 1; i <= n; i++) {
  document.write("Iterasi ke-" + i + "<br>");
}

document.write("<br><br>");

//while dengan input
let counter = 1;
let maxCount = prompt("Masukkan jumlah iterasi:");

while (counter <= maxCount) {
  document.write("Iterasi ke-" + counter + "<br>");
  counter++;
}

document.write("<br><br>");

//do while dengan input
let angka = 1;
let maxAngka = prompt("Masukkan jumlah angka:");

do {
  document.write("Angka: " + angka + "<br>");
  angka++;
} while (angka <= maxAngka);

document.write("<br><br>");

//Function dengan input
function tambah(a, b) {
  return a + b;
}

let num1 = prompt("Masukkan angka pertama:");
let num2 = prompt("Masukkan angka kedua:");

let hasilPenambahan = tambah(Number(num1), Number(num2));
document.write("Hasil Penambahan: " + hasilPenambahan);

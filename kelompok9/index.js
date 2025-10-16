const { ubahKeFahrenheit } = require('./rumusSuhu.js');
const chalk = require('chalk');


const suhuAwal = 25
const hasilKonversi = ubahKeFahrenheit(suhuAwal);

console.log(chalk.bold.bgBlueBright.white('\n=== KONVERSI SUHU SEDERHANA ===\n'));
console.log(chalk.cyanBright(` Suhu awal: ${suhuAwal}°C`));
console.log(chalk.magentaBright(` Hasil konversi: ${hasilKonversi}°F\n`));
console.log(chalk.greenBright.bold('Konversi Selesai! Terima kasih telah menggunakan program ini.\n'));

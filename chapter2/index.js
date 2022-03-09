let programImport = require('./Program.js');
let Statistik = require('./Statistik').Statistik

let program = new programImport.Program();

//menjalankan algoritma penambahan data, mencari nilai max,
//mencari min, mencari rerata, memfilter siswa, dan mengurutkan nilai



program.mulai().then(() => {
    const max = Statistik.cariNilaiMaksismum(program.getData());
    const min = Statistik.cariNilaiMinimum(program.getData());
    const rerata = Statistik.rataRata(program.getData());
    const filter = Statistik.filterSiswa(program.getData());
    const urutan = Statistik.mergeSort(program.getData());

    console.log('Nilai maksimum : ', max);
    console.log('Nilai minimum : ', min);
    console.log('rerata nilai : ', rerata);
    console.log('Jumlah siswa lulus :', filter.lulus);
    console.log('Jumlah siswa tidak lulus : ', filter.tidak_lulus);
    console.log('urutan nilai dari terkecil ke terbesar : ', Statistik.print(urutan));
});

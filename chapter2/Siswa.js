const Nilai = require('./Nilai.js');
const MataPelajaran = require('./MataPelajaran.js')

class Siswa{
    constructor(){
        //variabel untuk menyimpan mata pelajaran yang diabmbil siswa beserta nilainya
        var _listPelajaran = {};
        //setter untuk memberi nilai pada suatu mata pelajaran
        this.setNilai = function(mataPelajaran, nilai){
            //kondisi jika mata pelajaran belum tersimpan di variabel _lisPelajaran
            if(! _listPelajaran[mataPelajaran]){
                _listPelajaran[mataPelajaran] = new Nilai.Nilai(
                    new MataPelajaran.MataPelajaran(mataPelajaran),
                    nilai
                );
            }
            //kondisi jika mata pelajaran telah tersimpan di dalam variabel _listPelajaran
            else{
                _listPelajaran[mataPelajaran].setNilai(nilai);
            }
        }
        this.getNilai = function (mataPelajaran){return _listPelajaran[mataPelajaran].getNilai();}
    }
}

module.exports = {
    Siswa : Siswa
}
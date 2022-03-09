class Nilai{
    constructor(mataPelajaran, nilai){
        //variabel untuk meuimpan mata pelajaran
        var _mataPelajaran = mataPelajaran,
            _nilai = nilai; //variable untuk menyimpan nilai
        this.setNilai = function(nilai){ _nilai = nilai;} //setter untuk variabel _nilai
        this.getNilai = function(){return _nilai}; //getter untuk vriabel _nilai
        this.getMataPelajaran = function(){return _mataPelajaran.getMataPelajaran();} //getter untuk variabel mataPelajaran
    }
}

module.exports = {
    Nilai : Nilai
}
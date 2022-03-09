class MataPelajaran{
    constructor(namaMataPelajaran){
        //variabel untuk menyimpan nama mata pelajaran
        var _namaMataPelajaran = namaMataPelajaran;
        //setter terhadap variabel _namaMataPelajaran
        this.setMataPelajaran = function(namaMataPelajaran){_namaMataPelajaran = namaMataPelajaran;}
        //getter terhadap variabel _namaMataPelajaran
        this.getMataPelajaran = function(){return _namaMataPelajaran;}
    }
}

module.exports = {
    MataPelajaran : MataPelajaran
}
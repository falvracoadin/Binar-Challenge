const input = require('readline');
const Siswa = require('./Siswa.js');

class Program{
    constructor(mataPelajaran){
        var _data = [];

        this.statusProgram = true;
        this.count = 0;
        this.mataPelajaran = mataPelajaran;
        this.input = input.createInterface({
            input : process.stdin,
            output : process.stdout
        });

        //meanambahkan data
        this.getInput = function(){ 
            //promise menambahkan data agar bisa berjalan 
            //secara sinkron antar input data
            return new Promise(resolve => {
                //input data
                this.input.question('', (data) => {
                    this.inputData = data;
                    resolve();
                });
            });
        }

        //fungsi untuk menambahkan data
        this.pushData = function(mataPelajaran, nilai){
            this.count ++;
            _data.push(
                new Siswa.Siswa()
            );
            _data[this.count - 1].setNilai(mataPelajaran, nilai);
        }

        //getter untuk _data
        this.getData = function(){
            return _data;
        }
    }

    async mulai(){
        console.log('Masukkan data nilai siswa!');
        //proses input data
        while(this.statusProgram){
            //menunggu inputan user
            await this.getInput();
            //kondisi jika input berupa karakter 'q'
            if(this.inputData === 'q') {
                this.statusProgram = false;
                this.input.close();
                break;
            }
            //kondisi jika data bukan number
            
            if((this.inputData = parseFloat(this.inputData)) === NaN){
                console.log('Program tidak mengenali nilai yang anda masukkan!');
                continue;
            }
            this.pushData(this.mataPelajaran, this.inputData);
        }
    }
}

module.exports = {
    Program : Program
}
class Statistik{

    //fungsi untuk mencari nilai maksismum dari suatu data
    static cariNilaiMaksismum(data){
        //menginisialisasi nilai sebagai pembanding
        let max = -Infinity;
        //melakukan forEach untuk tiap elemen data dan mencari nilai max
        data.forEach(function(siswa){
            if(siswa.getNilai() > max) max = siswa.getNilai();
        });
        return max > -Infinity ? max : 0;
    }

    //fungsi untuk mecari nilai minimum dari suatu data
    static cariNilaiMinimum(data){
        //menginisialisasi nilai sebagai pembading
        let min = Infinity;
        //melakukan foreacch tiap elemen untuk mencari nilai min
        data.forEach(function(siswa){
            if(siswa.getNilai()< min) min = siswa.getNilai();
        });
        return min < Infinity ? min : 0;
    }

    //fungsi untuk menghitung rata-rata
    static rataRata(data){
        if(data.length == 0) return 0;
        //melakukan reduce data sambil menjumlahkan tiap elmennya
        //kemudian membaginya dengan banyak data yang telah tersimpan
        return data.reduce(function(total, siswa){
            return total + siswa.getNilai();
        },0) / data.length;
    }

    //fungsi untuk mefilter siswa lulus dan tidak lulus berdasarkan nilai
    static filterSiswa(data, passNilai = 70){
        //inisialisasi objek untuk menyimpan informasi banyak siswa lulus dan tidak lulus
        const res = {
            lulus : 0,
            tidak_lulus : 0
        };
        //melakukan filter data dan mengelompokkan lulus atau tidak lulus berdasarkan nilai passNilai
        data.forEach(function(siswa){
            if(siswa.getNilai() > passNilai) res.lulus ++;
            else res.tidak_lulus ++;
        })
        return res;
    }

    //fungsi untuk mengurutkan data dengan menggunakan fungsi mergeSort
    static mergeSort(data){
        //kondisi jika tidak ada data yag disorting
        if(data.length === 0) return [];
        //kondisi jika data memiliki 2 nilai
        else if(data.length == 2) return Statistik.compareAndSwap(data[0], data[1]);
        //kondisi jika hanya memiliki 1 nilai
        else if(data.length == 1) return data;

        //membagi data menjadi 2 bagian
        const left = data.slice(0, Math.floor(data.length/2));
        const right = data.slice(Math.floor(data.length/2), data.length);
        //menggabungkan hasil mergesort dari array kiri dan kanan
        return Statistik.#merge(Statistik.mergeSort(left), Statistik.mergeSort(right));
    }

    //fungsi untuk melakukan merge 2 array
    static #merge(left, right){
        //pointer untuk menunjuk indeks array left
        let leftInd = 0;
        //pointer untuk mennjuk indeks array right
        let rightInd = 0;
        //variabel untuk menyimpan hasil penggabungan
        let result = [];
        
        //menggabungkan kedua array yang terpisah 
        while(leftInd < left.length && rightInd < right.length){
            if(left[leftInd].getNilai() < right[rightInd].getNilai()) result.push(left[leftInd++]);
            else result.push(right[rightInd++]);
        }

        return result.concat(left.slice(leftInd).concat(right.slice(rightInd)));
    }

    //fungsi untuk membandingkan nilai dan swapping
    static compareAndSwap(data1, data2){
        if(data1.getNilai() > data2.getNilai()) return [data2, data1];
        return [data1, data2];
    }

    
    //melakukan print data nilai
    static print(data){
        let result = '';
        data.forEach((siswa)=> {
            result += siswa.getNilai() + ' ';
        });
        return result;
    }
}

module.exports = {
    Statistik : Statistik
}
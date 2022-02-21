//program kalkulator dan penghitung luas persegi, volume kubus, dan volume tabung

//membuat input interface untuk membantu mengambil input dari user
const input = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

//inisialisasi variabel
let data = {} //variabel untuk menyimpan data-data aritmatik
let isCalculatorOn = true // variabel untuk menyimpan kondisi kalkulator harus hidup atau mati
let counter = 0 //variabel opsional untuk mematikan kalkulator
let precedence = {
    '^' : 4,
    '/' : 3,
    '*' : 3,
    '+' : 2,
    '-' : 2,
    '(' : 1
};

console.log('Kalkulator siap!!');

//fungsi untuk memulai kalkulator
async function mulaiKalkulator(isCalculatorOn){
    while(isCalculatorOn){
        console.log(`Tekan
            1. Melakukan kalkulasi aritmatik
            2. Melakukan kalkulasi luas persegi
            3. Melakukan kalkulasi volume kubus
            4. Melakukan kalkulasi volume tabung
            5. Matikan kalkulator
        `);
        await kalkulator();
    }
}

//fungsi untuk melakukan kalkulasi
function kalkulator(){
    return new Promise(resolve => {
        input.question('Masukkan pilihan anda :  ', pilihan => {
            switch(pilihan){
                case "1" : {
                    console.log('1. Gunakan + untuk penjumlahan bilangan');
                    console.log('2. Gunakan - untuk pengurangan bilangan');
                    console.log('3. Gunakan * untuk perkalian bilangan');
                    console.log('4. Gunakan / untuk membagi bilangan');
                    console.log('5. Gunakan ^ untuk pemangkatan bilangan');
                    console.log('6. Gunakan v untuk mengakar bilangan');
                    console.log('7. Gunakan spasi untuk memisahkan operator dan operand!!');
                    console.log('Jika bilangan merupakan angka dengan akar cukup tulis avb. contoh : 2v2');
                    console.log('Contoh input : 1 + 4 - 2 * 9v2 / 2');
                    getInput('Masukkan string yang akan dikalkulasi : ', () => {
                        data.input = data.input.split(' ');
                        data.input.push(')');
                        data.stack = ['('];
                        data.postfix = '';

                        //mengubah operasi infix menjadi postfix
                        data.input.forEach(op => {
                            if(op.includes('v')){
                                op = op.split('v');
                                if(op[0] == '') op[0] = 1;
                                if(op.length > 1)
                                    op = parseFloat(op[0]) * Math.sqrt(parseFloat(op[1]));
                                else op = Math.sqrt(parseFloat(op[0]));
                            }
                            if(!isNaN(op)){
                                data.postfix += op+',';
                            }else{
                                if(op === '(') data.stack.push('(');
                                else if(op === ')'){
                                    let x = '';
                                    while((x = data.stack.pop()) !== '(' && data.stack.length !== 0){
                                        data.postfix += x +',';
                                    }
                                }
                                else if( precedence[op] > precedence[data.stack[data.stack.length - 1]]){
                                    data.stack.push(op)
                                }
                                else{
                                    data.postfix += data.stack.pop() +',';
                                    data.stack.push(op);
                                }
                            }
                        });
                        //split postfix
                        data.postfix = data.postfix.split(',');
                        data.postfix.pop();

                        //bersihin stack
                        data.stack = [];

                        //menghitung kalkulasi postfix
                        data.postfix.forEach(op => {
                            if(!isNaN(op)){
                                data.stack.push(parseFloat(op));
                            }else{
                                let right = data.stack.pop();
                                let left = data.stack.pop();
                                switch(op){
                                    case '+' : {
                                        data.stack.push(left + right);
                                        break;
                                    }
                                    case '-' : {
                                        data.stack.push(left - right);
                                        break;
                                    }
                                    case '*' : {
                                        data.stack.push(left * right);
                                        break;
                                    }
                                    case '/' : {
                                        data.stack.push(left / right);
                                        break;
                                    }
                                    case '^' : {
                                        data.stack.push(Math.pow(left, right));
                                        break;
                                    }
                                }
                            }
                        });
                        console.log(`Hasilnya adalah : ${data.stack.pop()}\n\n`);
                        resolve();
                    });
                    break;
                }
                case "2" : {
                    getInput('Masukkan sisi persegi : ', () => {
                        console.log('L = s x s');
                        console.log(`L = ${data.input} x ${data.input}`);
                        console.log(`L = ${data.ans = data.input * data.input}\n\n`);
                        resolve();
                    });
                    break;
                }
                case "3" : {
                    getInput('Masukkan sisi kubus : ', () => {
                        console.log('V = s x s x s');
                        console.log(`V = ${data.input} x ${data.input} x ${data.input}`);
                        console.log(`V = ${data.ans = data.input * data.input * data.input}\n\n`);
                        resolve();
                    });
                    break;
                }
                case "4" : {
                    getInput('Masukkan jari-jari tabung : ', () => {
                        data.jari = data.input;
                        getInput('Masukkan tinggi tabung : ', () => {
                            console.log('V = Pi x r x r x t');
                            console.log(`V = ${Math.PI} x ${data.jari} x ${data.jari} x ${data.input}`);
                            console.log(`V = ${data.ans = Math.PI * data.jari * data.jari * data.input}`);
                            resolve();
                        })
                    });
                    break;
                }
                case "5" : {
                    isCalculatorOn = false;
                    console.log('Sedang menghentikan kalkulator!!')
                    input.close() //menutup input stream
                    counter = 3;

                    //matikan kalkulator dalam 3 detik
                    isCalculatorOn =  matikanKalkulator(3);
                    break;
                }
                default : {
                    console.log(`Input yang anda masukkan tidak dikenali kalkulator
Tolong masukkan sesuai dengan instruksi!!\n`);
                    resolve();
                    break;
                }
            }
        });
    }); 
}



//fungsi untuk mendapatkan input
function getInput(question, cb){
    return new Promise(resolve => {
        input.question(question, ans =>{
            data.input = ans;
            cb();
            resolve();
        });
    });
}

//fungsi untuk menghitung mundur
const hitungMundur = (counter) => new Promise(resolve => {
    const matikan = setInterval(() => {
        if(counter <= 0){
            console.log('Kalkulator mati');
            clearInterval(matikan);
            resolve();
            return;
        }
        console.log(`Kalkulator akan mati dalam ${counter--} detik`);
    }, 1000);
});

//fungsi untuk mematikan kalkulator
async function matikanKalkulator (counter){
    await hitungMundur(counter);
    return false;
}

mulaiKalkulator(isCalculatorOn); //memulai kalkulator
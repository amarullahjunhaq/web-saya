const namaSaya =" amarullah jun haq ";
let usia = 6;

function generateBiodata() {

    
    if(usia > 10 && usia < 18){
// ini adalah kondisi pertama
        console.log("anda remaja");
    } 
    else if (usia > 18 && usia <30 ){
        console.log("anda dewasa") ;
    }
    else if (usia > 30) {
        console.log("anda tua");
    }
    else if (usia > 2 && usia < 10) {
        console.log("anda anak-anak");

    }
    else{
// ini adalah jika kondisi tidak terpenuhi
    console.log(" anda masih bayi");
    }
    
}

console.log(namaSaya);
console.log(usia);

generateBiodata();
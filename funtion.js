function calVat(money,vat){
    return money * vat / 100;
}


const totalVat= calVat(10000,7);
console.log(totalVat);

const totalVat10= calVat(10000,10);
console.log(totalVat10);
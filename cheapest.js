const phones=[
{name:'Xiami',Camera:'10',storage:'32',price:32000,color:'silver'},
{name:'Oppo',Camera:'20',storage:'64',price:52000,color:'Black'},
{name:'Vivo',Camera:'30',storage:'32',price:31000,color:'silver'},
{name:'Samsung',Camera:'25',storage:'128',price:62000,color:'Black'},
{name:'Iphone',Camera:'50',storage:'78',price:92000,color:'purple'}

];


function cheapestPhone(phones){
    chepeastPrice=phones[0];
    for(let i=0;i<phones.length;i++){
        const phone=phones[i];
        if(phone.price<cheapestPhone){
            chepeastPrice=phone;
        }
    }
 return chepeastPrice;
}


const mySelection=cheapestPhone(phones);
console.log(mySelection);
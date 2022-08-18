// const numbers=[12,14,15,18,20];

// for(const number of numbers){
//     console.log(number);
// }

const products=[
    {id:1,name:'Walton phone',price:20000},
    {id:2,name:'Xiaomi Phone',price:26000},
    {id:3,name:'Sony Phone',price:36000},
    {id:4,name:'Symphony',price:16000},
    {id:5,name:'Iphone',price:100000},
    {id:6,name:'Lenovo Thinkpad laptop',price:56000},
    {id:7,name:'Hp Elitbook laptop',price:76000}

]


function matchedProducts (products,search){
    const matched=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
return matched;
}

const result=matchedProducts(products,'Laptop');
console.log(result);

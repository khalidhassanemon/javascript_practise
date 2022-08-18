const friend=[12,13,15,19,20];
console.log(Array.isArray(friend));
console.log(friend.includes(129));
console.log(friend.includes(12));


const nameArray=['alam','kalom','jamol','turag','sdfjx','abul','kabul','abul'];

function removeDuplicate(nameArray){
    const unique=[];
    for(let i=0;i<nameArray.length;i++){
        const name=nameArray[i];
        if(unique.includes(name)===false){
            unique.push(name);
        }
       
    }
    return unique;
}
const uniquNames=removeDuplicate(nameArray);
console.log(uniquNames);
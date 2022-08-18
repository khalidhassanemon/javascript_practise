function maxInArray(numbers){

    let largest=numbers[0];

    for(let i=1;i<numbers.length;i++){

        if(numbers[i]>largest)
        {
            largest=numbers[i];
        }
      
    }
    return largest;
}

const ar=[156,200,132,140,150,332,554,120];

const tallest=maxInArray(ar);

console.log("the tallest man is :",tallest);
const lyrics='tumi bondhu kala pakhi ami jeno ki . bosontokale tumay vulte parini.';
const searchString='Pakhi';

const searchStringlower=searchString.toLowerCase();

const doesExist=lyrics.toLowerCase().includes(searchStringlower);
console.log(doesExist);
console.log(lyrics.indexOf('kala'));
if(lyrics.indexOf('tumi')!==-1){
    console.log("This index is exist");
}
else{
    console.log("This index is not exist");
}
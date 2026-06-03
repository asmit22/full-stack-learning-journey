const fortune1 = "Your cat will look very cuddly today.";
const fortune2 ="The weather will be nice tomorrow.";
const fortune3 ="Be cautious of your new neighbors.";
const fortune4 ="You will find a new hobby soon.";
const fortune5 ="It would be wise to avoid the color red today.";
const randomNumber= Math.floor(Math.random()*5)+1;
let selectedFortune = randomNumber;
if(randomNumber===1){
  console.log(selectedFortune=fortune1)
} else if(randomNumber===2) 
{
  console.log(selectedFortune=fortune2)
} else if(randomNumber===3) 
{
  console.log(selectedFortune=fortune3)
} else if(randomNumber===4) 
{
  console.log(selectedFortune=fortune4)
} else {
  console.log(selectedFortune=fortune5);
}
console.log(selectedFortune);
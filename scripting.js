
  let v1 =Math.floor(Math.random()*10+1);
  let v2 =Math.floor(Math.random()*10+1);
  document.getElementById('value1').value=v1;
  document.getElementById('value2').value=v2;

  let ans= v1 + v2;

  const jsGame = () => {
   var userans= document.getElementById('answer').value;
   if(userans == ans){
    alert('Well Done! Your Answer is correct.')
   }
   else{
    alert("correct answer is" + ans + ". try again")
   }
   
  }
  
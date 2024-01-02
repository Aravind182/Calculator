let outputscr=document.getElementById("output");
 function calculate(n){
    outputscr.value+=n;
 }
 function equal(){
    try{

    
    outputscr.value=eval(outputscr.value);
    }
    catch(err){
        alert("ERROR")
    }
 }
  function Clear(){
    outputscr.value=""; 
  }
  function del(){
    outputscr.value=outputscr.value.slice(0,-1);
  }
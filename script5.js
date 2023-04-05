function formValidation(){
    let idArray = ["first_name", "last_name","username","password","confirmPassword"];
    let errArray = ["errFn","errLn","errUn","errP","errCp"];
    let x = 0;
   
    idArray.forEach((id,idIndex) => {// trying to get the index of an array to continue
        let y =x++;
        let foundArr = errArray.find((fA,fAI)=>{
            return fAI === y;
        });
        let input = document.getElementById(id).value;
        if(input == "") {
            alert("Error: the ".concat(id) +"is Empty"); 
            //document.getElementById(errArray[id]).innerHTML = 'Input is Reqiured.';
            
   }
   console.log(foundArr);
});



}
// let ind = errArray.indexOf(errArray[1]);
//    if(idIndex != errArray){
//     alert("Potek ka".concat(ind));
//    }
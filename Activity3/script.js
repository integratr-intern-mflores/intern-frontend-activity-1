let text = "";
let arrayColle = [];
let index = 0;

function MainDriver(){
    let vFname = document.getElementById("tbFName").value;
    let vMname = document.getElementById("tbMName").value;
    let vLname = document.getElementById("tbLName").value;
    const vCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    
    text = "";
    arrayColle.length = 0;
  
    if(arrayColle.length == 0){
        document.getElementById("sSports").innerHTML = "No Selected Sports";
        console.log("test1");
    }

    for(const checkbox of vCheckboxes){
      
        if (checkbox.checked) {
            arrayColle.push(checkbox.value);
            console.log("test2");
        }
        console.log("test3");
    }
    arrayColle.forEach(TransData);
    console.log("test4");
    document.getElementById("sFullName").innerHTML = vFname +" "+ vMname +" "+ vLname;
    console.log("test5");
}

function TransData(item, index){
    console.log("test6");
    index ++;
    text += index + ":" + item + "<br>";
    console.log("test7");
    document.getElementById("sSports").innerHTML = text;
    console.log("test8");
}
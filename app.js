let surName = prompt("Please entry your Name: ","Name");
let info = surName.trim();

if(info == "" || info =="Name"){
    alert("Please entry your Name");
    window.location.reload(false);
}else{
    document.querySelector(".writeName").textContent= `Welcome dear ${info}`;
}

let dateNow = new Date();

document.querySelector(".clockNow").textContent = `Date: ${dateNow}`;
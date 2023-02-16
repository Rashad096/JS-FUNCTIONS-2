
function Show()
{

let meblegstr=document.getElementById("mebleg");
let muddetstr=document.getElementById("muddet");
let faizstr=document.getElementById("faiz");
    
let mebleg=parseInt(meblegstr.value);
let muddet=parseInt(muddetstr.value);
let faiz=parseInt(faizstr.value);
    
let total_amount=(mebleg*(faiz/100))+mebleg;
let monthly_amount=total_amount/12;


alert(`Ümumi məbləğ: ${total_amount}`);
 alert(`Aylıq ödəniş: ${monthly_amount}`);


}

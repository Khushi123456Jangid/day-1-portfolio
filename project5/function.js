document.addEventListener('DOMContentLoaded',function(){
let birthY=document.getElementById('birth');
let cal=document.getElementById('calculate');
cal.addEventListener('click', function(){
    let age= 2026 - Number(birthY.value);
    let a =  document.getElementById('year');
    a.innerText=age;
})
})
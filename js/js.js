let clear =document.getElementById("clear")
clear.addEventListener("click", function() {
// document.querySelectorAll("input").forEach((e)=>{
//     e.value=""
// })
location.reload();
});
let send =document.querySelector(".send")
send.addEventListener("click", call)
function call(){
  event.preventDefault();
let sone=document.querySelector(".sone")
let s2=document.querySelector(".s2")
let e1=document.querySelector(".errorr1")
let e2=document.querySelector(".errorr2")
let e3=document.querySelector(".errorr3")
let mone=document.getElementById("m")
let p = parseFloat(document.querySelector(".Mortgage-Amount").value); // مبلغ القرض
let t = parseInt(document.querySelector(".Mortgage-Term").value); // مدة القرض بالسنوات
let R = parseFloat(document.querySelector(".Interest-Rate").value); // معدل الفائدة السنوي
let typeone= document .getElementById('Repayment')
let type2= document .getElementById('Interest-Only')
let r = R / (100 * 12); // تحويل الفائدة السنوية إلى شهرية
let n = 12 * t; // عدد الدفعات الشهرية

// حساب القسط الشهري لنوع Repayment
let top = r * Math.pow(1 + r, n); // الجزء العلوي من المعادلة
let d = Math.pow(1 + r, n) - 1; // الجزء السفلي من المعادلة
let m = p * (top / d); // القسط الشهري لنوع Repayment

// حساب القسط الشهري لنوع Interest Only
let mTypeInterest = p * r; // القسط الشهري لنوع الفائدة فقط


if(isNaN(p)){ 
e1.classList.remove("d-none");
return;
}else{e1.classList.add("d-none")
}
if(isNaN(t)){   
 e2.classList.remove("d-none")
 return;
 }else{e2.classList.add("d-none")
}
if(isNaN(R)){   
e3.classList.remove("d-none")
return;
}else{e3.classList.add("d-none")
}
if(typeone.checked){
    sone.classList.add("d-none")
    s2.classList.remove("d-none")
    mone.innerHTML=" £"+m.toFixed(2)
    
}if(type2.checked){
    sone.classList.add("d-none")
    s2.classList.remove("d-none")
    mone.innerHTML=" £"+mTypeInterest.toFixed(2)

    
}


}
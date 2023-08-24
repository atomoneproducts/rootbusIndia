let btn=document.getElementById("cb_btn")
let element=document.getElementById("cb_img")
btn.addEventListener("click",()=>{
  
    if(element.className=="cb_img"){
      element.className="transition";
      btn.style=`border:solid #8d99ae;color:#ffffff;background:transparent;`;
      
    }
    else {element.className="cb_img";
         btn.style=`color: #edf2f4;radius:none;background:#1d3557;`
   }
})

let btn1=document.getElementById("cb1_btn")
let element1=document.getElementById("cb1_img")
btn1.addEventListener("click",()=>{
  
    if(element1.className=="cb_img"){
      element1.className="transition";
      btn1.style=`border:solid #8d99ae;color:#ffffff;background:transparent;`;
    }
    else {element1.className="cb_img";
       btn1.style=`color: #edf2f4;radius:none;background:#1d3557;`

   }
})

let btn2=document.getElementById("cb2_btn")
let element2=document.getElementById("cb2_img");
btn2.addEventListener("click",()=>{
  
    if(element2.className=="cb_img"){
      element2.className="transition";
      btn2.style=`border:solid #8d99ae;color:#ffffff;background:transparent;`;

    }
    else {element2.className="cb_img";
    btn2.style=`color: #edf2f4;radius:none;background:#1d3557;`

   }
})

let btn3=document.getElementById("cb3_btn")
let element3=document.getElementById("cb3_img");
btn3.addEventListener("click",()=>{
  
    if(element3.className=="cb_img"){
      element3.className="transition";
      btn3.style=`border:solid #8d99ae;color:#ffffff;background:transparent;`;

    }
    else {element3.className="cb_img";
    btn3.style=`color: #edf2f4;radius:none;background:#1d3557;`

   }
})
window.addEventListener("scroll",()=>
{
   if(window.scroll){
    element.className="cb_img";
    element1.className="cb_img";
    element2.className="cb_img";
    element3.className="cb_img";
      btn.style=`background:#1d3557;
      border:none;`;
      btn1.style=`background:#1d3557;
      border:none;`;
      btn2.style=`background:#1d3557;
      border:none;`;
      btn3.style=`background:#1d3557;
      border:none;`;

      }
   }
)



let btn=document.getElementById("cb_btn");
let element=document.getElementById("cb_img");
let btn1=document.getElementById("cb1_btn");
let element1=document.getElementById("cb1_img");
let btn2=document.getElementById("cb2_btn");
let element2=document.getElementById("cb2_img");
let btn3=document.getElementById("cb3_btn");
let element3=document.getElementById("cb3_img");
btn.addEventListener("click",function (event){click(btn,element)});
btn1.addEventListener("click",function (event){click(btn1,element1)});
btn2.addEventListener("click",function (event){click(btn2,element2)});
btn3.addEventListener("click",function (event){click(btn3,element3)});


function click(b,e){
   
    if(e.className=="cb_img"){
      e.className="transition";
      b.style=`color:#33415c;background:none;border:none`;
    }
    else {
         e.className="cb_img";
         b.style=`color: #33415c;border:none;background:#d7e3fc;`
   }
}


window.addEventListener("scroll",()=>
{
   if(window.scroll){
    element.className="cb_img";
    element1.className="cb_img";
    element2.className="cb_img";
    element3.className="cb_img";
      btn.style=`background:#d7e3fc;
      border:none;`;
      btn1.style=`background:#d7e3fc;
      border:none;`;
      btn2.style=`background:#d7e3fc;
      border:none;`;
      btn3.style=`background:#d7e3fc;
      border:none;`;
      }
   }
)

let menu=document.getElementById("menu");
let slidescreen=document.getElementById("slidescreen")
let cancel=document.getElementById("cancel-img");
menu.addEventListener('touchstart',()=>{
   cancel.style=`border:none`;
     slidescreen.style=`right:.3rem;z-index:4;transition-duration:0.5s`;
})

cancel.addEventListener('touchstart',()=>{
  
   cancel.style=`border:2px solid white;border-radius:4px;padding:2px`;
     slidescreen.style=`right:-100rem;z-index:0;`;
})

function hide(){

   slidescreen.style=`right:-100rem;z-index:0;`;
}
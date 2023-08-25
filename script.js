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
      b.style=`border:solid #8d99ae;color:#ffffff;background:transparent;`;
      
    }
    else {e.className="cb_img";
         b.style=`color: #edf2f4;radius:none;background:#1d3557;`
   }
}


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



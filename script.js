
  let btn=document.getElementById("cb1_btn")
   function onclick(){ btn.addEventListener("click",()=>{
    let hover=document.getElementById("cb1_img");
    const img=document.getElementById("blog_img1");
    if(hover.className=="cb1_img"){
    hover.className="transfunction";
    img.style.scale=(0.9);
   }
  else{
    hover.className="cb1_img";
    img.style.scale=(0.9);

  }   
})
   }



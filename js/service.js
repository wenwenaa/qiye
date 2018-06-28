window.onload=function(){
// 导航
 let da=document.querySelectorAll(".tabcontent li")[1]
 let xiala= document.querySelector(".tabcontent .xiala")
 console.log(da,xiala)
  da.onmousemove=function(){
    xiala.style.height="90px"
    xiala.style.border="1px solid rgba(0,0,0,0.14)"
  }
  da.onmouseleave=function(){
    xiala.style.height="0"
    xiala.style.border="none"
  }
  let dab=document.querySelectorAll(".tabcontent li")[2]
 let xialab= document.querySelector(".tabcontent .xiala1")
 console.log(dab,xialab)
  dab.onmousemove=function(){
    xialab.style.height="120px"
    xialab.style.border="1px solid rgba(0,0,0,0.14)"
  }
  dab.onmouseleave=function(){
    xialab.style.height="0"
    xialab.style.border="none"
  }
  // 定位的导航
  let dingda=document.querySelectorAll(".tabcontent1 li")[1]
 let dingxiala= document.querySelector(".tabcontent1 .xiala")
 console.log(dingda,dingxiala)
  dingda.onmousemove=function(){
    dingxiala.style.height="90px"
    dingxiala.style.border="1px solid rgba(0,0,0,0.14)"
  }
  dingda.onmouseleave=function(){
    dingxiala.style.height="0"
    dingxiala.style.border="none"
  }
  let didab=document.querySelectorAll(".tabcontent1 li")[2]
 let dixialab= document.querySelector(".tabcontent1 .xiala1")
 console.log(didab,dixialab)
  didab.onmousemove=function(){
    dixialab.style.height="120px"
    dixialab.style.border="1px solid rgba(0,0,0,0.14)"
  }
  didab.onmouseleave=function(){
    dixialab.style.height="0"
    dixialab.style.border="none"
  }
  tabd=document.querySelector(".tabd")
  fanding=document.querySelector(".fanding")
  window.onscroll=function(){
  let gunh=document.body.scrollTop||document.documentElement.scrollTop
  console.log(gunh)
   if(gunh>137){
    animate(tabd,{top:0},200,Tween.Quad.easeIn)
  }
  else{
    animate(tabd,{top:-62},200,Tween.Quad.easeIn)
  }
  if(gunh>400){
    fanding.style.display="block"
  }
  else{
    fanding.style.display="none"
  }
  fanding.onclick=function(){
    animate(document.body,{scrollTop:0})
    animate(document.documentElement,{scrollTop:0})
  }
  }
}
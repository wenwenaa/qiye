window.onload=function(){
	let dibu=document.querySelector(".banner")
	let imgbox=document.querySelector(".pictu")
	let pic=document.querySelectorAll(".pictu li")
	let btnn=document.querySelectorAll(".btnn li")
	console.log(imgbox,pic,btnn)
	let picwidth=parseInt(getComputedStyle(imgbox,null).width)
	console.log(picwidth)
	let t=setInterval(move,3000)
	dibu.onmouseenter=function(){
		clearInterval(t)
	}
	dibu.onmouseleave=function(){
		t=setInterval(move,3000)
	}

	let current=0, next=0;
	let flag=true
	function move(){
      next++;
      if(next==pic.length){
      	next=0;
      }
      btnn[current].classList.remove("hot");
      btnn[next].classList.add("hot")
      pic[next].style.left=picwidth+"px"
      animate(pic[current],{left:-picwidth})
      animate(pic[next],{left:0},function(){
      	 flag=true
      })
      current=next;
	}
	function movel(){
      next--;
      if(next<0){
      	next=pic.length-1;
      }
      btnn[current].classList.remove("hot");
      btnn[next].classList.add("hot")
      pic[next].style.left=-picwidth+"px"
      animate(pic[current],{left:picwidth})
      animate(pic[next],{left:0},function(){
      	 flag=true;
      })
      current=next;
	}
	btnn.forEach(function(element,index,obj){
            element.onclick=function(){
            	btnn[index].classList.add("hot")
            	btnn[current].classList.remove("hot")
               if(current<index){
               	pic[index].style.left=picwidth+"px"
               	animate(pic[index],{left:0})
               	animate(pic[current],{left:-picwidth})
               }
               if(current>index){
               	pic[index].style.left=-picwidth+"px"
               	animate(pic[index],{left:0})
               	animate(pic[current],{left:picwidth})
               }
               next=current=index
            }
	})
 // 风格开始
  function dianxu(style1){
 let xiaodian=style1.querySelectorAll(".circle a")
 let stpic=style1.querySelectorAll(".stpic")
 let picw=parseInt(getComputedStyle(stpic[0],null).width)
 console.log(style1,xiaodian,stpic,picw)
  let cur=0
 xiaodian.forEach(function(element,index,obj){
            element.onclick=function(){
            	 if(cur==index){
                return;
              }
            	xiaodian[index].classList.add("got")
            	xiaodian[cur].classList.remove("got")
               if(cur<index){
               	stpic[index].style.left=picw+"px"
               	animate(stpic[index],{left:0})
               	animate(stpic[cur],{left:-picw})
               }
               if(cur>index){
               	stpic[index].style.left=-picw+"px"
               	animate(stpic[index],{left:0})
               	animate(stpic[cur],{left:picw})
               }
               cur=index
            }
	})
 }
  let style1=document.querySelector(".style1")
  dianxu(style1);
  let style2=document.querySelector(".style2")
  dianxu(style2);
   let style3=document.querySelector(".style3")
  dianxu(style3);
   let style4=document.querySelector(".style4")
  dianxu(style4);
  let style5=document.querySelector(".style5")
  dianxu(style5);
   let style6=document.querySelector(".style6")
  dianxu(style6);
   let style7=document.querySelector(".style7")
  dianxu(style7);
   let style8=document.querySelector(".style8")
  dianxu(style8);
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
  if(gunh>500){
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
  // 风格按钮
  let fengda=document.querySelector(".fengge")
  let anboxR=document.querySelector(".pre")
  let anboxL=document.querySelector(".next")
  let xibox=document.querySelector(".xibox")
  let yikuan=parseInt(getComputedStyle(xibox,null).width)
   console.log(fengda,anboxL,anboxR,xibox,yikuan)
   let times=0
   anboxR.onclick=function(){
    times++
    if(times==2){
      times=1
    }
    fengda.style.transform=`translateX(${-yikuan*times}px)`
   }
   anboxL.onclick=function(){
    times--
    if(times<0){
      times=0
    }
    fengda.style.transform=`translateX(${-yikuan*times}px)`
   }
}
// 导航定位
 
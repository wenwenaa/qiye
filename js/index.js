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
 // 导航
 let da=document.querySelectorAll(".tabcontent li")[1]
 let xiala= document.querySelector(".xiala")
 console.log(da,xiala)
  da.onmousemove=function(){
    xiala.style.height="90px"
    xiala.style.border="1px solid rgba(0,0,0,0.14)"
  }
  da.onmouseleave=function(){
    xiala.style.height="0"
    xiala.style.border="none"
  }
  // 风格按钮
  let fengda=document.querySelector(".fengge")
  let anboxR=document.querySelector(".pre")
  let anboxL=document.querySelector(".next")
  console.log(fengda,anboxL,anboxR)
}

 
window.onload=function(){
	let user=document.getElementById('user')
	let pass=document.getElementById('password')
	let btn=document.getElementsByClassName('denglu')
	let p=document.querySelectorAll(".form p")
	console.log(btn,p)
	btn.onclick=function(){
	 	if(user.value==""&&pass.value==""){
	 		p.style.display="block"  
	 	}
	 	else{
	 		alert("登录成功")
	 	}
	 } 	
}

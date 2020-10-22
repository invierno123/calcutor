let html = document.querySelector("#html")
let style = document.querySelector("#style")
let n = 0
let string=`/*你好丫，我是一枚前端小白；
你看到的是我的代码练习成果；
现在我要给文字变色啦；
我要变绿色*/
body{
    color:green;
}
/*好啦，现在我要做点好玩的东西了，
先画个圆圈吧*/
#div1{
    width:200px;
    height:200px;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*然后给这个圆填个色吧
注意看哦*/
#div1{
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*再加点东西吧*/
#div1::before{
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*你这么聪明，一定猜到我要画什么了吧
没错！就是阴阳八卦图哦*/
#div1::after{
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    top:50%;
    background:white;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}

`

let string2=''
// setInterval(()=>{
//     n=n+1
//     demo.innerHTML = n
// },1000)

let step =()=>{
setTimeout(()=>{
    if(string[n]==="\n"){string2+='<br>'}
    else if(string[n]===" "){string2+='&nbsp'}
    else{string2+=string[n]}
    html.innerHTML = string2
    style.innerHTML=string.substring(0,n)
    window.scrollTo(0,9999)
    html.scrollTo(0,9999)
    console.log(string2)
    if(n+1<string.length){
        n = n+1
        step()
    }
      
},50)
}
step()


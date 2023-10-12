var btn=document.getElementById("myid")

const genratecode=()=>{
    let val="0123456789ABCDEF"
    let x="#"
    for(let i=0;i<6;i++)
    {
        x=x+val[Math.floor(Math.random()*16)]   
    }
    return x;
}

function changecolor()
{
    let m=genratecode();
    console.log(m)
    document.body.style.backgroundColor=m;
  
}

btn.addEventListener("click",changecolor)
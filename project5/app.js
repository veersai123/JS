var arr=[
    {
        dp:"https://plus.unsplash.com/premium_photo-1695750679584-b8e21965ef0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ,story:"https://images.unsplash.com/photo-1695349091210-ad56d3dfd1e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1676068243734-cfdb9fc4ef59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        ,story:"https://images.unsplash.com/photo-1695753579372-498a4a382ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1695821449523-6929f4e61b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        ,story:"https://images.unsplash.com/photo-1695822078950-4908719266dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1695551595095-e9d9dfc58dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        ,story:"https://images.unsplash.com/photo-1696142990758-581061f2801d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNDB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
]
var storiyan=document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,idx)
{
    clutter+=`<div class="story">
    <img id="${idx}" src="${elem.dp}"">
    </div>`;
});
storiyan.innerHTML=clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
});
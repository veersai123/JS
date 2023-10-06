// proceed in subject with same button

// var istatus=document.querySelector("h5")

// var addFriend=document.querySelector("#add")
// var removeFriend=document.querySelector("#remove")

// addFriend.addEventListener("click",function()
// {
//     istatus.innerHTML="React"
//     istatus.style.color="green"
// })

// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML="JavaScript"
//     istatus.style.color="red"
// })

// ========================================================================

var istatus=document.querySelector("h5")

var addFriend=document.querySelector("#btn")
var check = 0
addFriend.addEventListener("click",function()
{
    if(check==0)
    {
        istatus.innerHTML="React"
        istatus.style.color="green"
        btn.innerHTML="back"
        check=1
    }
    else{
        istatus.innerHTML="Java"
        istatus.style.color="red"
        btn.innerHTML="proceed"
        check=0
    }
})


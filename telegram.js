let set = document.getElementsByClassName("set")[0]
let penbtn = document.getElementsByClassName("penbtn")[0]


set.addEventListener("mouseover", () =>{

    document.getElementById("penbtn").style.animationPlayState = "running";
    document.getElementById("penbtn").style.animationName = "penbtn";
    document.getElementById("penbtn").style.top = "890px"
})

set.addEventListener("mouseout", () =>{

    document.getElementById("penbtn").style.animationName = "reverse";
    document.getElementById("penbtn").style.animationPlayState = "running";
    document.getElementById("penbtn").style.top = "1100px"
})

$(".bars").click(function(){

    $(".navcont").toggle(250)

    document.addEventListener('mouseup', function(e) {
        const navcont = document.getElementsByClassName('navcont')[0];

        const bars = document.getElementsByClassName("bars")[0]

        if (!navcont.contains(e.target) && !bars.contains(e.target)){

            navcont.style.display = 'none';

        }
        
    });

})

function changeImage() {    

    if (document.getElementsByClassName("switch")[0].innerHTML == '<i class="fa-solid fa-toggle-on"></i>') 
    {
        document.getElementsByClassName("switch")[0].innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.getElementById("set").classList.remove("setDarkMode")
        document.getElementsByClassName("bars")[0].classList.remove("barsDarkMode")
    }
    else 
    {
        document.getElementsByClassName("switch")[0].innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        document.getElementById("set").classList.add("setDarkMode")
        document.getElementsByClassName("bars")[0].classList.add("barsDarkMode")
    }

}

class Chat{
    constructor(picture,title,lastMessage,time){
        this.picture = picture
        this.title = title
        this.lastMessage = lastMessage
        this.time = time
    }
}


class ChatFunction {


   addChat(contacts){

        let newChat = document.createElement("div")
        newChat.className = "row chats"
        newChat.innerHTML = `

        <div class="col-md-2 pp"><img src="${contacts.picture}" id="contactspic" alt=""></div>
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-12"><b>${contacts.title}</b></div>
            </div>
            <div class="row">
                <div class="col-md-12"><span>${contacts.lastMessage}</span></div>
            </div>
        </div>
        <div class="col-md-1"><span>${contacts.time}</span></div>
        
        `
        document.getElementsByClassName("contacts")[0].appendChild(newChat)
   }

}

let messages = [

    first = {
        picture : "1.jpg",
        title : "Murat",
        lastMessage : "naxcvxvcxcvxcvber"
    },
    
    second = {
        picture : "2.jpg",
        title : "Hasan",
        lastMessage : "asfgdfg"
    },

    third = {
        picture : "3.jpg",
        title : "Mehmet",
        lastMessage : "asdas"
    },
    

]

const lastnumber = messages[messages.length - 1];

document.addEventListener("DOMContentLoaded", function(){

    const now = new Date();
    const time = now.getHours() + ':' + now.getMinutes();

    const chatone = new Chat(first.picture, first.title, first.lastMessage,time)
    const chattwo = new Chat(second.picture, second.title, second.lastMessage,time)
    const chatLast = new Chat(lastnumber.picture, lastnumber.title, lastnumber.lastMessage,time)
    const chatFunction = new ChatFunction()

        chatFunction.addChat(chatLast)
        chatFunction.addChat(chatone)
        chatFunction.addChat(chattwo)
 

})




/*document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        let title = document.getElementById("name").value;
        let lastMessage = document.getElementById("message").value
        let picture = document.getElementById("contactspic").value
    
        const now = new Date();
        const time = now.getHours() + ':' + now.getMinutes();
    
        const chat = new Chat(picture,title,lastMessage,time)
        const chatFunction = new ChatFunction()
    
        if(!title == "" || !lastMessage == "" || !picture == ""){
    
            chatFunction.addChat(chat)
            chatFunction.deleteInputInners()
    
        }
    }
});*/


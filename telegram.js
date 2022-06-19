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
        if (!navcont.contains(e.target)) {
            navcont.style.display = 'none';
        }
    });

})
//change navbar color on scroll

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll",window.scrollY > 0)
})

function hide(){
    let b=document.getElementById("hide")
    if(b.style.display != "none"){
        b.style.display = "none";
    }
    else{
        b.style.display = "block";
    }   
}

const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq_icon i')
        if(icon.className == "uil uil-plus");
        icon.className == "uil uil-minus";
    }
    )
}
)
var animation = bodymovin.loadAnimation({
    container:document.getElementById("animation"),
    path : "web-design-data.json",
    render:"svg",
    loop: true,
    autoplay:true,
    name:"demo animation"
})
var typed=new Typed(".auto-type",{
    strings:["Round Robin","Banker's","C-SCAN disk scheduling","Most recently used (MRU)"],
    typeSpeed:80,
    backSpeed:70,
    loop:true

})





document.addEventListener("DOMContentLoaded",function(){
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelector(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard  = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
    startX = 0,
    startScrollLeft,
    timeoutId;

    const dragStart =(e) =>{
        isDragging = true;
        carousel.classList.add("dragging");
        startScrollLeft = carousel.scrollLeft;
        startX = e.pageX;
    } ;
    const dragging = (e) =>{
        if(!isDragging) return;
        const newScrollLeft = startScrollLeft -(e.pageX - startX);
        if(newScrollLeft <=0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth){
            isDragging = false;
            return;
        }
        carousel.scrollLeft = newScrollLeft;
    };
    const dragStop = () =>{
        isDragging  = false;
        carousel.classList.remove("dragging");
    };
    const autoplay = () =>{
        if(window.innerWidth < 800)return;
        const totalCardWidth  = carousel.scrollWidth;
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        if(carousel.scrollLeft >= maxScrollLeft) return;
        timeoutId = setTimeout(() =>
        carousel.scrollLeft += firstCardWidth,2500);
    };
    carousel.addEventListener("mousedown",dragStart);
    carousel.addEventListener("mousemove",dragging);
    document.addEventListener("mouseup",dragStop);
    wrapper.addEventListener("mouseenter",() =>
    clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave",autoplay);
    arrowBtns.forEach(btn =>{
        btn.addEventListener("click",()=>{
            carousel.scrollLeft += btn.id ==="left" ?
            -firstCardWidth : firstCardWidth ;
        })
    })
}   
)
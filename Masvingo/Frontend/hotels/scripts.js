document.addEventListener("DOMContentLoaded",function(){
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(links=>{
        links.addEventListener("click",function (event){
            event.preventDefault();
            const targetPage = this.getAttribute(href);
            window.location.href = targetPage;
        });
    });
});
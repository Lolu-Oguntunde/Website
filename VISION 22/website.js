// to get an element to change behaviour or style you do
// document.querySelector(the IdleDeadline,class or tag you want)
/*(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();*/

const sections =document.querySelectorAll('.section');
const sectBtns =document.querySelectorAll('.controlls');
const sectBtn =document.querySelectorAll('.control');
const allSections =document.querySelector('.main-content');
function PageTransitions(){
    //button click active class
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('.active-btn','');
            this.className+='active-btn';
        })
    }
    allSections.addEventListener('click',(e)=>{
        const id=e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')

            })
            const element=document.getElementById (id);
            element.classList.add('active');
        }
    })
}
PageTransitions();
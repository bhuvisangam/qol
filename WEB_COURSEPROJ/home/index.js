var slide = document.getElementById("slidemenu");

function openmenu()
{
   slide.style.right= "0";
} 

function closemenu()
{
    slide.style.right = "-300px" ;
}



var i=0;
var image=[];
var time=10000;


image[0]='11.png';
image[1]='2.png';
image[2]='3.png';
image[3]='4.png';


function change()
{
    document.slide.src = image[i];

    if(i<image.length-1)
    {
       i++;
    }
    else
    {
        i=0;
    }

    setTimeout("change()",time);
}

window.onload=change;



/*login*/

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

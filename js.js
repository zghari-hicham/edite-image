let saturate=document.getElementById('saturate');
let contrast=document.getElementById('constrast');
let brightness=document.getElementById('brightness');
let sepia=document.getElementById('sepia');
let grayscale=document.getElementById('grayscale');
let blur=document.getElementById('blur');
let hueRotate=document.getElementById('hue-rotate');

const canvas=document.getElementById("canvas");
const ctx=canvas.getContext('2d');


function resetvalue(){
    img.style.filter='none';
    saturate.value='100';
    contrast.value='100';
brightness.value='100';
sepia.value='0';
grayscale.value='0';
blur.value='0';
hueRotate.value="0";

}
let uploade=document.getElementById('uploade');
let dowland=document.getElementById('dowland')
let img=document.getElementById('img');

let reset =document.querySelector('span');
let imgbox=document.querySelector('.imgbox');

window.onload=function(){
    dowland.style.display='none'
    reset.style.display='none'
    imgbox.style.display='none'
}

uploade.onchange =function(){
    resetvalue();
    dowland.style.display='block'
    reset.style.display='block'
    imgbox.style.display='block'
    let file= new FileReader();
    file.readAsDataURL(uploade.files[0])
file.onload=function(){
    img.src=file.result;
}
img.onload=function(){
    canvas.width=img.width;
    canvas.height=img.height;

    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display='none'
}
}





let filters=document.querySelectorAll("ul li input")
filters.forEach(   filter=>{
    filter.addEventListener('input',function(){
        ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${ hueRotate.value}deg)


        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
})

dowland.onclick=function(){
    dowland.href=canvas.toDataURL();
}







let stars= document.getElementById('stars');
let moon = document.getElementById('moon');
let mount1 = document.getElementById('mount1');
let mount2 = document.getElementById('mount2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let welcome = document.querySelector('.welcome');
 window.onscroll=function(){
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value *4 +'px';
    mount1.style.top = value *2  +'px';
    mount2.style.top = value *1.5  +'px'; 
    river.style.top= value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value +'px';
    welcome.style.fontSize = value +'px';
   if(scrollY >=100){
    welcome.style.fontSize=100+'px';
    welcome.style.position='fixed';
    if(scroll>=478){
       welcome.style.display='none';
    }else{
        welcome.style.display='block';
    }
if(scrollY>= 200){
document.querySelector('.main').style.background='linear-gradient(#038986,#10001f)';
}
else{
document.querySelector('.main').style.background='linear-gradient(#200016,hwb(292 2% 72%))';
}
}

}


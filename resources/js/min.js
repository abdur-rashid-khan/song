$(document).ready(function(){
    const typing=new Typed("#typing",{
        strings:[
            "Brighton...",
            "London..."
        ],
        typeSpeed: 250,
        startDelay: 2,
        backSpeed: 110, 
        backDelay:300,
        loop:true,
        smartBackspace: true,
    });
    $(".owl-carousel").owlCarousel({
        margin:20,
        items:3,
        loop:true,
        autoplayHoverPause:true,
        autoplay:false,
        autoplayTimeout:3000,
        responseresponsiveRefreshRate:true,
        responsive:{
            0:{
                items:2,
            },
            575.98:{
                items:3,
            },
            767.98:{
                items:4,
            },
            991.98:{
                items:4,
            },
            1199.98:{
                items:5,
            },
            1919.98:{
                items:5,
            }
        }
    });
    
// supports
// $("a").on("click", function (e) {
//     if ("" !== this.hash) {
//         e.preventDefault();
//         var t = this.hash;
//         $("html, body").animate({ scrollTop: $(t).offset().top }, 500, function () {
//             window.location.hash = t;
//         });
//     }
// })

});
// javascript
let day=document.querySelector('.day .number');
let hort=document.querySelector('.hor .number');
let mins=document.querySelector('.min .number');
let seco=document.querySelector('.secound .number');
const time= setInterval(() => {
    var carrent=new Date().getTime();
    var lounce=new Date('july 25,2021 13:59:58').getTime();
    var dur=lounce-carrent;
    var days=Math.floor(dur/(1000*60*60*24));
    var horse=Math.floor((dur%(1000*60*60*24))/(1000*60*60));
    var minits=Math.floor((dur%(1000*60*60))/(1000*60));
    var secounds=Math.floor((dur%(1000*60))/(1000));
    day.innerHTML=days;
    hort.innerHTML=horse;
    mins.innerHTML=minits;
    seco.innerHTML=secounds;
    if(days<10){
        day.innerHTML="0"+days;
    }
    if(horse<10){
        hort.innerHTML="0"+horse;
    }
    if(minits<10){
        mins="0"+minits;
    }
    if(dur<0){
        clearInterval(time)
    }
},10);
// video player
let video_player=document.getElementById("video_plyer");
let my_video=document.getElementById('my_video');
function cloce_btn(){
    video_player.style.display="none"; 
    my_video.pause();
};
function play_video(file){
    my_video.src=file;
    video_player.style.display="block";
};
// mobile menu
var toggled = false;
function openMenu(){
    if(!toggled){
        toggled = true;
        document.getElementById("myNav").style.width = "85%"; 
        return;
    }
    if(toggled){
        toggled=false;
        document.getElementById("myNav").style.width="0%";
        return;
    }
}
function closeMenu(){
    document.getElementById("myNav").style.width="0%";
}


// var alert=document.querySelector(".fast_alert");
//     window.addEventListener('load',function(){
//         setTimeout(()=>{
//             alert.classList.add('alert');
//         },5000);
//     }); 
gsap.from('.outline',{opacity:0,duration:2,y:500,ease:Back.easeOut.config(1.7)});
gsap.from('.main_heading,#main_para,.btn',{opacity:0,duration:3,delay:2});

var t1=gsap.timeline({
    scrollTrigger:{
        trigger:'.section_tedx',
        start: 'top bottom'
    }
})

t1.from('.tedx_head',{opacity:0,duration:1.5,y:-100,ease:Back.easeOut.config(1.7)});
t1.from('#tedx_para',{opacity:0,duration:2.5},"-=1");
t1.from('.line',{opacity:0,duration:1.5,x:-200}, "-=2.5");



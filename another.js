const body = document.querySelector('body');
const search =document.querySelector('#search');
/*const buttons = document.querySelectorAll('button');
const sec = document.querySelector('section');
const ul = document.getElementById('u2');*/
const favlist=document.querySelector('.favlist');
/*const but1=document.querySelector('.click1');
const but2=document.querySelector('.click2');
const but3=document.querySelector('.click3');*/
/*but1.value='Friends';
but2.value='Stranger things';
but3.value='Narcos';*/
//console.log('.click'+(0+1).toString());

const favlistbutt=document.querySelector('.na');
/*favlist.classList.remove('favlist');

favlistbutt.addEventListener('click',()=>{
    
   favlist.classList.toggle('favlist');

})*/;let check=[];
let x=[];


//const click='.click'+(i+1).toString();    
const but=document.getElementsByClassName('click1');
console.log(but.length);
for(let i=0;i<but.length;i++){
     but[i].value=but[i].nextSibling.innerText;
     function once(){
        check.push(but[i].parentElement.parentElement);
        but[i].style.display='none';
        but[i].removeEventListener('click',once);
     }
     but[i].addEventListener('click',once)
        
     }
     
     favlistbutt.addEventListener('click',()=>{
         scrollTo(0,0);         // it will scroll the page to the top
         favlistbutt.style.display='none';
         search.style.display='none';
        const retur =document.createElement('button');
        retur.innerText='return';
        retur.style.position='fixed';
        retur.style.cursor='pointer';
        retur.classList.toggle('return');
        body.appendChild(retur);
    
    
     for(let i=0;i<but.length;i++){
         if(check.indexOf(but[i].parentElement.parentElement)!==-1){but[i].parentElement.parentElement.style.display='block';
         but[i].value='true';
         but[i].style.display='block';
         but[i].innerText='Delete';
         function once(){
            but[i].parentElement.parentElement.style.display='none';
            x.push(but[i].parentElement.parentElement);
            but[i].value='false';
            but[i].removeEventListener('click',once);
         }
        but[i].addEventListener('click',once);

    
}
         else if(check.indexOf(but[i].parentElement.parentElement)===-1){but[i].parentElement.parentElement.style.display='none';
         but[i].style.display='none';}}
        
             
    retur.addEventListener('click',()=>{ 
        scrollTo(0,0);
        favlistbutt.style.display='grid';
        search.style.display='block';

        check.length=0;

        for(let i=0;i<but.length;i++){

            if(but[i].value==='true'){
            check.push(but[i].parentElement.parentElement);
            but[i].style.display='none';}
            else{  but[i].style.display='block';}
                
            function once(){
                if(x.indexOf(but[i].parentElement.parentElement)!==-1 && but[i].value==='true')
                but[i].value==='true';
                 check.push(but[i].parentElement.parentElement);
                 but[i].parentElement.parentElement.style.display='block';
                but[i].style.display='none';
                but[i].removeEventListener('click',once);
             }
             but[i].addEventListener('click',once);
             but[i].innerText='Favorite';
             but[i].parentElement.parentElement.style.display='block';
             retur.remove();
             x.length=0;

    }});

    });     
    document.querySelector('form').addEventListener('submit',e=>{
     e.preventDefault();                                              //it does not reload the page when pressing enter
    });

    search.addEventListener('keyup',e=>{            //e reffers to the eventlistener
    e.target.value.toLowerCase();
    
    const val=document.getElementsByClassName('but1');
    for(let i=0;i<val.length;i++){
        if (val[i].childNodes[0].textContent.toLowerCase().indexOf(e.target.value)!==-1)
        but[i].parentElement.parentElement.style.display='block';
        else{        but[i].parentElement.parentElement.style.display='none';
    }
}
    },false);

    //favlist.addEventListener('')



    /*but[i].addEventListener('click',()=>{

        const li=document.createElement('li');
        li.innerText=but[i].value;
        favlist.appendChild(li);
    });*/


/*ul.style.position='absolute';
ul.style.listStyleType='none';

/*window.onresize=function(){
    sec.style.width=window.innerWidth + 'px';
    sec.style.height=window.innerHeight + 'px';}*/
/*let x=0,y=0,z=0;
const fav=[];*/
//const but;
/*for(let i=0;i<3;i++){
    fav[i]=document.createElement('button');

    switch(i){  
        case 0:{ fav[0].style.left='380px';
                fav[0].style.bottom='65px'
                fav[0].onclick=function(){ const li1=document.createElement('li');
                const but=document.createElement('button');
                but.innerText='Delete';
                but.style.border=' white 2px solid';
   but.style.position='relative';
   but.style.fontSize='16px';
   but.style.color='white'
   but.style.borderRadius='17px';
   but.style.marginLeft='5px';
   but.style.borderBottomLeftRadius='8px';
   but.style.backgroundColor='darkred';
                li1.innerText='Friends';
                li1.style.fontSize='21px'
                li1.style.marginTop='20px';
                li1.style.display='grid';
                li1.style.color='white';
                li1.style.placeItems='center';
                ul.appendChild(li1);
                li1.appendChild(but);
               but.onclick=()=>{li1.remove();
                x=0;
                }
                if(x!==0)
                li1.remove();
               x++;
            };
            } break;
    case 1:{ fav[1].style.left='670px';
                fav[1].style.bottom='65px'
                fav[1].addEventListener('click',()=>{const li11=document.createElement('li');
                const but=document.createElement('button');
                but.innerText='Delete';
                but.style.border=' white 2px solid';
   but.style.position='relative';
   but.style.fontSize='16px';
   but.style.color='white'
   but.style.borderRadius='17px';
   but.style.marginLeft='5px';
   but.style.borderBottomLeftRadius='8px';
   but.style.backgroundColor='darkred';
                li11.innerText='Stranger things';
                li11.style.fontSize='21px'
                li11.style.color='white';
                li11.style.marginTop='20px';
                li11.style.display='grid';
                li11.style.placeItems='center';
                ul.appendChild(li11);
                li11.appendChild(but);

                but.onclick=()=>{li11.remove();
                    y=0;
                    }
                if(y!==0)
                li11.remove();
                y++
            });} break;
    
    case 2:{ fav[2].style.left='958px';
                fav[2].style.bottom='65px';
                fav[2].addEventListener('click',()=>{const li2=document.createElement('li');
                const but=document.createElement('button');
                but.innerText='Delete';
                but.style.border=' white 2px solid';
   but.style.position='relative';
   but.style.fontSize='16px';
   but.style.color='white'
   but.style.borderRadius='17px';
   but.style.marginLeft='5px';
   but.style.borderBottomLeftRadius='8px';
   but.style.backgroundColor='darkred';
                li2.innerText='Narcos';
                li2.style.display='grid';
                li2.style.marginTop='20px';
                li2.style.placeItems='center';
                li2.style.fontSize='21px'
                li2.style.color='white';
                ul.appendChild(li2);
                li2.appendChild(but);
                but.onclick=()=>{li2.remove();
                    z=0;
                    }
                if(z!==0)
                li2.remove();
                z++
                });}} 
   fav[i].innerText='Favorite';
   fav[i].style.border=' black 3px solid';
   fav[i].style.position='relative';
   fav[i].style.fontSize='16px';
   fav[i].style.color='white'
   fav[i].style.borderRadius='17px';
   fav[i].style.borderBottomLeftRadius='8px';
   fav[i].style.backgroundColor='darkred';
   body.appendChild(fav[i]);
   fav[i].onmouseover=()=>{fav[i].style.backgroundColor='black';
   fav[i].onmouseleave=()=>{fav[i].style.backgroundColor='darkred';
}
}}*/









/*for (const button of buttons) {
button.onmouseenter= () =>{

      button.style.display='grid';
      button.style.placeItems='center';

    const drop =document.createElement('div');
        const text =document.createElement('p');
        text.style.fontSize='21px'
        text.style.flexWrap='wrap';
        text.innerText=button.value;
        drop.appendChild(text);    

   

   // drop.style.width='170px';
   // drop.style.height='px';
    drop.style.display='grid';
    drop.style.placeItems='center';
   // drop.style.paddingTop='40px';
    drop.style.marginTop='20px';
    drop.style.border='0px';
    drop.style.borderRadius='25px';
    drop.style.backgroundImage='linear-gradient(darkred 20%,black,darkred)';
    drop.style.animation= 'move 300ms ease-in-out forwards';

    button.appendChild(drop);
    button.onmouseleave=() => {
        button.removeChild(drop);}
    
}}*/
/*
const diplayes=document.querySelectorAll('.qq');
diplayes[0].value=['comedy','imdb'];
console.log(diplayes[0].value)
for(const display of diplayes ){
display.addEventListener('mouseover',()=>{
  const ins= document.createElement('div');
  ins.setAttribute('id','bbb');
  const sp1= document.createElement('span');
  const sp2= document.createElement('span');
  sp1.setAttribute('id','bbbb');
  sp2.setAttribute('id','bbbb');

  sp1.style.fontSize='large';
  sp1.style.opacity='0';
  sp1.style.color='white';
  sp1.style.display='inline-block';
  sp2.style.fontSize='large';
  sp2.style.opacity='0';
  sp2.style.color='white';
  sp2.style.display='inline-block';
     sp1.innerText=(display.value)[0];
     sp2.innerText=(display.value)[1];
     ins.appendChild(sp1);
     ins.appendChild(sp2);

  display.appendChild(ins);

  ins.style.backgroundImage='linear-gradient(45deg, darkred, transparent)';
  ins.style.position='absolute';
  ins.style.width='200px';
  ins.style.height='300px';
  ins.style.border='0px solid gainsboro';
  ins.style.borderRadius='15px';
  ins.style.display='grid';
  ins.style.placeItems='center';
  ins.style.opacity='0';

  const tl = gsap.timeline({defaults:{ease:"power1.out"}});
  tl.to('#bbb',{opacity:1, duration:1});
  tl.to('#bbbb',{opacity:1, duration:1,  },"-=1");
  display.addEventListener('mouseleave',()=>{
      const tl = gsap.timeline({defaults:{ease:"power1.out"}});
      tl.fromTo('#bbb',{opacity:1},{opacity:0, duration:1});
  });
    
});
}*/

  





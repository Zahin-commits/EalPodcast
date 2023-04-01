const text = document.getElementById('quote');
const author = document.getElementById('author');
const bg = document.getElementById('bg');
const meteor = document.getElementById('meteor');
const layer = document.getElementById('layer_3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');

const form = document.getElementById('contactForm');


const func = async()=>{
 const res = await fetch("https://dummyjson.com/quotes/random");
 const data = await res.json();

console.log(data)

text.innerText = data.quote;
author.innerText = `-${data.author}`;
}

func()

window.addEventListener("scroll",()=>{ 
const Y = window.scrollY;
/* 
bg.style.bottom = -Y/1.5+'px';
meteor.style.bottom = -Y/1.2+'px';
meteor.style.right = Y/4+'px'
layer.style.top = Y/1.3+'px';
img4.style.bottom = -Y/2+'px'
img5.style.bottom = -Y/3+'px' */


bg.style.transform = `translateY( ${Y/1.5}px)`;
//meteor.style.transform =`translateY(${Y/1.2}px)`;
meteor.style.transform = `translate(-${Y/4}px,${Y/1.2}px)`;
layer.style.transform = `translateY(${Y/1.3}px)`;
img4.style.transform = `translateY(${Y/2}px)`;
img5.style.transform = `translateY(${Y/3}px)`;

})

const  sendMail = async (e)=>{
    e.preventDefault();
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const message = document.getElementById('message').value;

 console.log(name, email, message)
}


form.addEventListener('submit',async (e)=>{
    e.preventDefault();
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const message = document.getElementById('message').value;

 try {
    const serviceID = 'service_id';
    const templateID = 'template_id';
    const params = {name,email,message}
    
     const res = await emailjs.send(serviceID, templateID,params);
     emailjs.send(serviceID, templateID, params,"5xLsFLOPz7LCMFe2w");
    
     if(res.status == 200){
     alert('Your message has been sent successfully.');
     console.log(res)
     }else{
     alert('Something went wrong,Please try again later.')
     }

     console.log(res);
     } catch (error) {
        console.log(error)
     }

})

/*  try {
const serviceID = 'service_60sw38k';
const templateID = 'template_az18yyi';
const params = {name,email,message}

 const res = await emailjs.send(serviceID, templateID,params);
 emailjs.send(serviceID, templateID, params,"5xLsFLOPz7LCMFe2w");

 console.log(res);
 } catch (error) {
    console.log(error)
 } */
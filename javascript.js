let p1price=document.getElementById('prixprod1')
let pqtn1=document.getElementById('product-qtn1')
let total=document.getElementById('total')
let part1=document.getElementById('part1')

let heart1=document.getElementById('heart')



let p1price2=document.getElementById('prixprod2')
let pqtn2=document.getElementById('product-qtn2')
let part22=document.getElementById('part2')
let heart22=document.getElementById('heart2')

let p1price3=document.getElementById('prixprod3')
let pqtn3=document.getElementById('product-qtn3')
let part33=document.getElementById('part3')
let heart33=document.getElementById('heart3')


let p1price4=document.getElementById('prixprod4')
let pqtn4=document.getElementById('product-qtn4')
let part44=document.getElementById('part4')
let heart44=document.getElementById('heart4')







function heart(){
  if(heart1.style.color=='red'){
    heart1.style.color='black'
  }
  else{
    heart1.style.color='red'
  }
}
function inc1(){

  pqtn1.innerHTML=+pqtn1.innerHTML+1
  p1price.innerHTML=+p1price.innerHTML+250;
  total.innerHTML=+total.innerHTML+250
}

function dec1(){
  if(pqtn1.innerHTML==0){
    pqtn1.innerHTML=pqtn1.innerHTML
    total.innerHTML=+total.innerHTML
    p1price.innerHTML=p1price.innerHTML
  }
  else{  pqtn1.innerHTML=+pqtn1.innerHTML-1
    total.innerHTML=+total.innerHTML-250
    p1price.innerHTML=+p1price.innerHTML-250}

}
function remove1(){
part1.style.display='none'
total.innerHTML=+total.innerHTML-p1price.innerHTML
}



function heart2(){
    if(heart22.style.color=='red'){
      heart22.style.color='black'
    }
    else{
      heart22.style.color='red'
    }
  }
  function inc2(){
  
    pqtn2.innerHTML=+pqtn2.innerHTML+1
    p1price2.innerHTML=+p1price2.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
  }
  
  function dec2(){
    if(pqtn2.innerHTML==0){
      pqtn2.innerHTML=pqtn2.innerHTML
      total.innerHTML=+total.innerHTML
      p1price2.innerHTML=p1price2.innerHTML
    }
    else{  pqtn2.innerHTML=+pqtn2.innerHTML-1
      total.innerHTML=+total.innerHTML-250
      p1price2.innerHTML=+p1price2.innerHTML-250}
  
  }
  function remove2(){
  part22.style.display='none'
  total.innerHTML=+total.innerHTML-p1price2.innerHTML
  }

  
function heart3(){
    if(heart33.style.color=='red'){
      heart33.style.color='black'
    }
    else{
      heart33.style.color='red'
    }
  }
  function inc3(){
  
    pqtn3.innerHTML=+pqtn3.innerHTML+1
    p1price3.innerHTML=+p1price3.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
  }
  
  function dec3(){
    if(pqtn3.innerHTML==0){
      pqtn3.innerHTML=pqtn3.innerHTML
      total.innerHTML=+total.innerHTML
      p1price3.innerHTML=p1price3.innerHTML
    }
    else{  pqtn3.innerHTML=+pqtn3.innerHTML-1
      total.innerHTML=+total.innerHTML-250
      p1price3.innerHTML=+p1price3.innerHTML-250}
  
  }
  function remove3(){
  part33.style.display='none'
  total.innerHTML=+total.innerHTML-p1price3.innerHTML
  }

  
  
function heart4(){
    if(heart44.style.color=='red'){
      heart44.style.color='black'
    }
    else{
      heart44.style.color='red'
    }
  }
  function inc4(){
  
    pqtn4.innerHTML=+pqtn4.innerHTML+1
    p1price4.innerHTML=+p1price4.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
  }
  
  function dec4(){
    if(pqtn4.innerHTML==0){
      pqtn4.innerHTML=pqtn4.innerHTML
      total.innerHTML=+total.innerHTML
      p1price4.innerHTML=p1price4.innerHTML
    }
    else{  pqtn4.innerHTML=+pqtn4.innerHTML-1
      total.innerHTML=+total.innerHTML-250
      p1price4.innerHTML=+p1price4.innerHTML-250}
  
  }
  function remove4(){
  part44.style.display='none'
  total.innerHTML=+total.innerHTML-p1price4.innerHTML
  }
  
  
let maincontiner =document.querySelector('.mamoroy-game-blocks')
document.querySelector('.control-button span').onclick=function(){
  let yourName=prompt('كتب اسمك أزعامه')
if (yourName==null || yourName=='') {
  document.querySelector('.name span').innerHTML='unknown';
}else{
  document.querySelector('.name span').innerHTML=yourName;
}
document.querySelector('.control-button').remove()
allowedtime();
}
let blocks=document.querySelector('.mamoroy-game-blocks')
let arrblocks=Array.from(blocks.children)
let duration=1000
// make arandom arrry
let emp=Array(20)
for (var i = 0; i < arrblocks.length; i++) {
  emp[i]=Math.round(Math.random()*23)
}
//add random arry to the game blocks
for (var i = 0; i < arrblocks.length; i++) {
  arrblocks[i].style.order=emp[i]
  arrblocks[i].addEventListener('click',function(){
    
    flipblock(this)
  })
}
// add class flipped
function flipblock(selectedblock){
  selectedblock.classList.add('is-flipped')
  let allflippedblocks=arrblocks.filter(function(flippedblock){
 return flippedblock.classList.contains('is-flipped')
})
if (allflippedblocks.length===2) {
 //stop clicking
 stopclicking();
 
 blockmatch(allflippedblocks[0],allflippedblocks[1]);
  }
 
  document.querySelector('.click-audio').play()
}
function stopclicking(){
  blocks.classList.add('no-clicking')
  setTimeout(function(){
    blocks.classList.remove('no-clicking')
  },duration)
}

//match blocks
let triesElemnt=document.querySelector('.tries span')
function blockmatch(fristblock,secondblock){
  if (fristblock.dataset.technology===secondblock.dataset.technology) {
    
    fristblock.classList.add('is-matched')
    secondblock.classList.add('is-matched')
    
    let matched=document.querySelectorAll('.is-matched')
let arrmatched=Array.from(matched)
if (arrmatched.length===24) {
    win();
    
  }

    
    
    fristblock.classList.remove('is-flipped')
    secondblock.classList.remove('is-flipped')
    document.querySelector('.audio-match').play()
    
  }else{
   triesElemnt.innerHTML=parseInt(triesElemnt.innerHTML)+1 
   
    setTimeout(function(){
      fristblock.classList.remove('is-flipped')
    secondblock.classList.remove('is-flipped')
    },duration)
    document.querySelector('.audio-no-match').play()
    
  }
  
}

let timerspan=document.querySelector('.counter span');

let maxnum=120;
function allowedtime(){
function timer(){
  timerspan.style.color='red'
 document.querySelector('#woring').play()
}
let counter=setInterval(function(){
  maxnum=maxnum-1
  timerspan.innerHTML=maxnum
  if (maxnum===0) {
    clearInterval(counter)
  
    failed();
  }
 if (maxnum===6) {
   timer();
 } 
 if (maxnum===5) {
   timer()
 } 
 if (maxnum===4) {
   timer()
 } 
 if (maxnum===3) {
   timer()
 } 
 if (maxnum===2) {
   timer()
 } 
 if (maxnum===1) {
   timer()
 } 
},duration)}
function failed(){
  let test=document.getElementById('control-failed').style.display='inline-block'
  
}

function win(){
  
  let test=document.getElementById('control-win')
  test.style.display='inline-block'
 test.firstElementChild.innerHTML=test.firstElementChild.innerHTML+' & you have '+(120-parseInt(timerspan.innerHTML))+' S and '+triesElemnt.innerHTML+' wrongs'
 timerspan.remove()
 maxnum='&'
}
document.getElementById('restart1').onclick=function(){
  document.location.reload(true)
}

document.getElementById('restart2').onclick=function(){
  document.location.reload(true)
}

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
function blockmatch(fristblock,secondblock){
  let triesElemnt=document.querySelector('.tries span')
  if (fristblock.dataset.technology===secondblock.dataset.technology) {
    
    fristblock.classList.add('is-matched')
    secondblock.classList.add('is-matched')
    
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

function allowedtime(){let timerspan=document.querySelector('.counter span');
let maxnum=60;
function timer(){
  timerspan.style.color='red'
 document.querySelector('#woring').play()
}
let counter=setInterval(function(){
  maxnum=maxnum-1
  timerspan.innerHTML=maxnum
  if (maxnum===0) {
    clearInterval(counter)
   blocks.classList.add('noclick')
    failed();
  }
 if (maxnum===6) {
   timer()
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
},1000)}
function failed(){
  let test=document.getElementById('control-failed').style.display='inline-block'
 
  
}

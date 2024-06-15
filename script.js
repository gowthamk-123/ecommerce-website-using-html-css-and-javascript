const scriptURL =
'https://script.google.com/macros/s/AKfycbwujWAKQDGvuvl7gmjFRDyeC3hiMOhJDbODB-UsNUCbtcx140xTlLpUZR4oDIKmqlr6IQ/exec'
   const form = document.forms['form-google-sheet']

   form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, {
               method: 'POST',
               body: new FormData(form)
           })
           .then(response => alert(
               "Thanks for you valuable feedback!!!"))
           .catch(error => console.error('Error!', error.message))
   })


var MainImg=document.getElementById("MainImg");
var smalling =document.getElementById("small-img");

smalling[0].onclick = function(){
    MainImg.src=small[0].src;

}
smalling[1].onclick = function(){
    MainImg.src=small[1].src;

}
smalling[2].onclick = function(){
    MainImg.src=small[2].src;

}
smalling[3].onclick = function(){
    MainImg.src=small[3].src;

}


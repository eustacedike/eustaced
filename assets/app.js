function trys (a,b,c,d) {
  var x = document.getElementById(a);
  var other2 = document.getElementById(b);
  var other3 = document.getElementById(c);
  var other4 = document.getElementById(d);
  
x.classList.replace("flexible-gone","flexible");
    
    other2.classList.replace("flexible","flexible-gone");
    other3.classList.replace("flexible","flexible-gone");
    other4.classList.replace("flexible","flexible-gone");
    

      
  }

  function darkMode () {
    document.getElementById('hero').classList.toggle("d_hero");
    document.getElementById('flexible-1').classList.toggle("d_lexx");
    document.getElementById('flexible-2').classList.toggle("d_lexx");
    document.getElementById('flexible-3').classList.toggle("d_lexx");
    document.getElementById('flexible-4').classList.toggle("d_lexx");
    document.getElementById('set').classList.toggle("d_set");
    document.getElementById('menu').classList.toggle("d_menu");
    document.getElementById('the-man').classList.toggle("d_the-man");

    
    if (document.getElementById('set').innerHTML === '<img src="./assets/icons/sun.png" class="sun" alt="">') {
      document.getElementById('set').innerHTML = '<img src="./assets/icons/moon.png" class="moon" alt="">'
    } else {
      document.getElementById('set').innerHTML = '<img src="./assets/icons/sun.png" class="sun" alt="">'
    };
    
    
  }

  function dropDown (ch, dd1, newAnim) {
    var chev = document.getElementById(ch);
    chev.classList.toggle('chevup');

    var drops = document.getElementById(dd1);

    drops.classList.replace("flexible-gone","flexible");
    drops.classList.toggle('longDrop');
    drops.classList.remove(newAnim);

if (drops.style.height === 'auto') {
  drops.style.height = '50px';
} else {
  drops.style.height = 'auto';
}   
    
  }


  var i = 0;
var txt = 'Hi, My name is Eustace Dike and I am a frontend developer'; /* The text */
// var speed = 150; /* The speed/duration of the effect in milliseconds */

console.log(txt.length);

function clear () {
  document.getElementById("boxxd").innerHTML = "";
}

function typeWriter() {
  if (i < txt.length) {
    
    document.getElementById("boxxd").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 105);
  } 
  else {
    setTimeout(typeWriter,4000);
    i = 0;
    setTimeout(clear,2000);
  }
}

setTimeout(typeWriter,4000);






  
  
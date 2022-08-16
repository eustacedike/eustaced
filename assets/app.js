function trys (a,b,c,d) {
  var x = document.getElementById(a);
  var other2 = document.getElementById(b);
  var other3 = document.getElementById(c);
  var other4 = document.getElementById(d);
  
x.classList.replace("flexible-gone","flexible");
    // x.classList.toggle("flexible");
    other2.classList.replace("flexible","flexible-gone");
    other3.classList.replace("flexible","flexible-gone");
    other4.classList.replace("flexible","flexible-gone");
    
    // other2.className = "flexible-gone";
    // other3.className = "flexible-gone";
    // other4.className = "flexible-gone";

      
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

    // var xet = document.getElementById('set');
    if (document.getElementById('set').innerHTML === '<img src="./assets/icons/sun.png" class="sun" alt="">') {
      document.getElementById('set').innerHTML = '<img src="./assets/icons/moon.png" class="moon" alt="">'
    } else {
      document.getElementById('set').innerHTML = '<img src="./assets/icons/sun.png" class="sun" alt="">'
    };
    
    // if (document.getElementById('briefcase').innerHTML === '<img src="./icons8-briefcase-250.png" alt=""><h3>EXPERIENCE</h3>')
    // {document.getElementById('briefcase').innerHTML = '<img src="./icons8-student-center-90.png" alt=""></img><h3>bla bla bla</h3>'}
    // else {document.getElementById('briefcase').innerHTML = '<img src="./icons8-briefcase-250.png" alt=""><h3>EXPERIENCE</h3>'};
  }

  function dropDown (ch, dd1) {
    var chev = document.getElementById(ch);
    chev.classList.toggle('chevup');

    var drops = document.getElementById(dd1);

    drops.classList.replace("flexible-gone","flexible");
    drops.classList.toggle('longDrop');

if (drops.style.height === 'auto') {
  drops.style.height = '50px';
} else {
  drops.style.height = 'auto';
}

    // drops.style.height = 'auto';
    
  }

  
  
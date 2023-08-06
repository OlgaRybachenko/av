let t, a;
function example(e){
 clearTimeout(t);
  var w = e.width;
 if (a) {
   t = setInterval(function () {
   if (w <= 450) clearTimeout(t); 
     e.style.cursor = 'zoom-in';
     e.style.borderRadius = '1px';
     e.style.boxShadow = '2px 2px 5px #fff'
     e.width = w--;
  }, 5);
 }else {
   t = setInterval(function () {
   if (w >= 650) clearTimeout(t);
    e.style.cursor = 'zoom-out';
    e.style.borderRadius = '5px';
    e.style.boxShadow = '2px 2px 5px #888'
    e.width = w++;
  }, 5);
 }
 a = !a;
}
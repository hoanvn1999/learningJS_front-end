var x1 = document.getElementsByTagName('h1');
console.log(x1);

var p1 = document.getElementsByTagName('p');
console.log(p1[1]);

var p2 = document.getElementsByTagName('p');
console.log(p2[1].innerHTML);
p2[1].innerHTML = "Web đã bị hack";
console.log(p2[1].innerHTML);

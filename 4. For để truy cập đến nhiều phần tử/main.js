var x = document.getElementsByTagName('h4');
for (var index = 0; index < x.length; index++) {
    console.log(x[index].innerHTML);
    
    x[index].innerHTML = `Hoan`;
}
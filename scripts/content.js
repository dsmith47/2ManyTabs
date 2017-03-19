//Build-A-Bar
bar = document.createElement('div');
bar.innerHTML = 'THIS IS A DIV';

bar.style.display="block";
bar.style.position="fixed";
bar.style.left=0;
bar.style.top=0;

bar.style.height="20px";
bar.style.width="100%";

//Move the rest of the document to make room for bar
document.body.style['margin-top'] = "20px";
//(int)document.body.style['margin-top'] + 10 + "px";

//Add the bar
document.body.appendChild(bar);

console.log("CONTENT loaded");



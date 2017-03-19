bar = document.createElement('div');
bar.innerHTML = 'THIS IS A DIV';

bar.style.display="block";
bar.style.position="fixed";
bar.style.left=0;
bar.style.top=0;

bar.style.height="20px";
bar.style.width="100%";

document.body.appendChild(bar);

console.log("CONTENT loaded");



//Stats for nav element
var elemH = 15;
var elemW = 120;
//Stats for entire nav bar
var barH = elemH;

//Build-A-Bar
bar = document.createElement('div');


bar.style.display="block";
bar.style.position="fixed";
bar.style.left=0;
bar.style.top=0;

bar.style.height=barH+"px";
bar.style.width="100%";

bar.style['background-color']="white";

//Load our current set of tabs
chrome.storage.local.get("tabs", function(results){
  console.log(results);
  for (i in results['tabs']){
    e = document.createElement('div');
    e.innerHTML = results['tabs'][i];
    e.style['white-space']="nowrap";
    e.style['overflow']="hidden";

    //Border and padding to free border
    e.style['border-style']="solid";
    e.style['border-width']="1px";

    e.style.height=elemH+"px";
    e.style.width=elemW+"px";
   
    e.style.display="inline-block"; 
    //e.style.position='absolute';
    //e.style.left= elemW * i + "px";
    //e.style.top=0+"px";

    bar.appendChild( e );
  }


  barH = (elemH+2) * (results['tabs'].length /  ( document.body.offsetWidth  / elemW | 0 ) +1 |0 );
  console.log( barH );

  //Move the rest of the document to make room for bar
  bar.style.height = barH+'px';
  document.body.style['margin-top'] = barH+"px";
  //Add the bar
  document.body.appendChild(bar);
});





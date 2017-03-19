//Stats for nav element
var elemH = 15;
var elemW = 75;
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
    console.log( results['tabs'][i] );
    e = document.createElement('div');
    e.innerHTML = results['tabs'][i];
    e.style['white-space']="nowrap";
    e.style['overflow']="hidden";
    e.style.height=elemH+"px";
    e.style.width=elemW+"px";
    
    e.style.position='absolute';
    e.style.left= elemW * i + "px";
    e.style.top=0+"px";

    bar.appendChild( e );
  }


  //Move the rest of the document to make room for bar
  document.body.style['margin-top'] = "20px";
  //Add the bar
  document.body.appendChild(bar);
  console.log("CONTENT loaded");
});




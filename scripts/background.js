//Access our tabs and add our data to them
function storeTabs(){
  chrome.tabs.query({} ,function(results){
    titles=[]
    for (i in results){
      titles.push( results[i]['title'] );
    }
    //Store our titles list
    chrome.storage.local.set({"tabs":titles});
  } );
}
//Load a new tab list whenever tabs are updated
chrome.tabs.onUpdated.addListener( function() {
  storeTabs();
  //Update all the nav bars
  chrome.tabs.query({},function(tabs){
    for (i in tabs){
      chrome.tabs.sendMessage( tabs[i].id, "update", function(response){} );
    }
  });
});



//Run when background script first runs
storeTabs();

//Access our tabs and add our data to them
chrome.tabs.query({} ,function(results){
  titles=[]
  for (i in results){
    titles.push( results[i]['title'] );
  }
  //Store our titles list
  chrome.storage.local.set({"tabs":titles});
} );

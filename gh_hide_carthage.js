var els = document.getElementsByClassName("file-header");
Array.prototype.forEach.call(els, function(el){
  if(el.getAttribute('data-path').indexOf('Carthage/') !== -1){
    el.parentElement.style.display = "none";
  }
});

// Bookmarklet generated from http://mrcoles.com/bookmarklet/
//
// javascript:(function()%7Bvar%20els%20%3D%20document.getElementsByClassName(%22file-header%22)%3BArray.prototype.forEach.call(els%2C%20function(el)%7Bif(el.getAttribute('data-path').indexOf('Carthage%2F')%20!%3D%3D%20-1)%7Bel.parentElement.style.display%20%3D%20%22none%22%3B%7D%7D)%7D)()

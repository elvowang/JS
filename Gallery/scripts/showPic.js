function showPic(whichPic) {

  var source = "images/fireworks.jpg";//whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");

  placeholder.setAttribute("src", source);
  // alert(description.nodeValue);
  // alert(description.childNodes[0].nodeValue);
  var title = whichPic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = title;
}

function popUp(winURL) {
  window.open(winURL, "newPopUp", "width=320, height=480");
}

(function() {
  document.getElementsByClassName("clz")[0].setAttribute("href", "images/coffee.jpg")
})();

window.onload = popUp("http://www.google.com");
// function countBodyChild() {
//   var bodyNode = document.getElementsByTagName("body")[0];
//   alert(bodyNode.childNodes.length);
//   alert(bodyNode.nodeType);
// }


// window.onload = countBodyChild;
// window.event? window.event.cancelBubble = true : e.stopPropagation();

var x = 1;

function a () {
  return x + x + 3;
}

window.onload = function () {
  var div = document.createElement('div')
  
  div.innerHTML = a()
  
  document.body.appendChild(div)
}
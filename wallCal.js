var widthInput = prompt("Width");
var heightInput = prompt("Height");
if (widthInput >= 0 || heightInput >= 0) {} else {
  window.alert("Invalid Input");
  widthInput = prompt("Width");
  heightInput = prompt("Height");
}
function calculateArea(width, height) {
  var area = width * height;
  return area;
}
function calculatePeri(width, height) {
  var perim = (width * 2) + (height * 2);
  return perim;
}
var wallOneA = calculateArea(widthInput, heightInput);
var wallOneP = calculatePeri(widthInput, heightInput);
window.alert(wallOneA + " " + "cm squared");
window.alert(wallOneP + " " + "cm");

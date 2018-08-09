const background = document.getElementsByClassName('Background');
var ctx = background.getContext("2d");
const mainCharacter = new Image();
mainCharacter.src = '/Images/mainCharacter.png';

background.onClick = function(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  ctx.drawImage(mainCharacter,x,y);
}

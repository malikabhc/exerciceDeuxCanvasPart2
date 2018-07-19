var draw = document.getElementById('alienCanvas');
var ctx = draw.getContext('2d');
//Fond bleu
ctx.fillStyle = '#0000FF'
ctx.fillRect(10, 10, 380, 380);
//Haut de la soucoupe
ctx.beginPath();
ctx.fillStyle = '#FFFFFF';
ctx.moveTo(140, 200);
ctx.quadraticCurveTo(200, 40, 260, 220);
ctx.fill();
//premier arc de cercle de la soucoupe (supérieur)
ctx.beginPath();
ctx.fillStyle = "#E0E1F3";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,130,300,200);
ctx.fill();
//Deuxième arc de cercle de la soucoupe (inférieur)
ctx.beginPath();
ctx.fillStyle = "#E0E1F3";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,280,300,200);
ctx.fill();

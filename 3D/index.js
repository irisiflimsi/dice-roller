function d(d) {
    return Math.floor(Math.random() * d) + 1;
}

function randDeg(n,f) {
    return (2 + d(n)) * f * 30;
}

var d4 = document.getElementById('d4-1');
var d61 = document.getElementById('d6-1');
var d62 = document.getElementById('d6-2');
var d8 = document.getElementById('d8-1');
var da = document.getElementById('da-1');
var dc = document.getElementById('dc-1');
var dk = document.getElementById('dk-1');

d4.onclick = function() { d4click(d4); }
d61.onclick = function() { d6click(d61); }
d62.onclick = function() { d6click(d62); }
d8.onclick = function() { d8click(d8); }
da.onclick = function() { daclick(da); }
dc.onclick = function() { dcclick(dc); }
dk.onclick = function() { dkclick(dk); }

daclick = function(o) {
    var ry2 = randDeg(4,12);
    var rz2 = randDeg(4,12);
    var ry1 = randDeg(4,12);
    switch (d(10)) {
    case 1:
	break;
    case 2:
	ry2 += 48;
	rz2 += 216;
	ry1 += 132;
	break;
    case 3:
	ry2 += 48;
	rz2 += 144;
	ry1 += 312;
	break;
    case 4:
	ry2 += 48;
	rz2 += 72;
	ry1 += 132;
	break;
    case 5:
	ry2 += 48;
	rz2 += 216;
	ry1 += 312;
	break;
    case 6:
	ry2 += 48;
	rz2 += 144;
	ry1 += 132;
	break;
    case 7:
	ry2 += 48;
	rz2 += 72;
	ry1 += 312;
	break;
    case 8:
	ry2 += 48;
	rz2 += 288;
	ry1 += 132;
	break;
    case 9:
	ry2 += 48;
	rz2 += 288;
	ry1 += 312;
	break;
    case 10:
	ry1+=180;
	break;
    }
    o.style.transform =
	'rotateX(' + ry2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + ry1 + 'deg)';
}

dkclick = function(o) {
    var ry2 = randDeg(4,12);
    var rz2 = randDeg(4,12);
    var ry1 = randDeg(4,12);
    var rz1 = randDeg(4,12);
    switch (d(20)) {
    case 1:
	break;
    case 2:
	ry1 += 138;
	rz1 += 300;
	break;
    case 3:
	ry2 += 318;
	rz2 += 60;
	ry1 += 318;
	rz1 += 300;
	break;
    case 4:
	ry2 += 138;
	rz2 += 300;
	ry1 += 318;
	rz1 += 60;
	break;
    case 5:
	ry2 += 318;
	rz2 += 300;
	ry1 += 318;
	rz1 += 180;
	break;
    case 6:
	ry2 += 318;
	rz2 += 300;
	ry1 += 138;
	rz1 += 60;
	break;
    case 7:
	ry1 += 318;
	rz1 += 60;
	break;
    case 8:
	ry1 += 138;
	rz1 += 180;
	break;
    case 9:
	ry2 += 318;
	rz2 += 300;
	ry1 += 318;
	rz1 += 300;
	break;
    case 10:
	ry2 += 318;
	rz2 += 300;
	ry1 += 138;
	rz1 += 180;
	break;
    case 11:
	ry2 += 318;
	rz2 += 60;
	ry1 += 318;
	rz1 += 180;
	break;
    case 12:
	ry2 += 318;
	rz2 += 60;
	ry1 += 138;
	rz1 += 300;
	break;
    case 13:
	ry1 += 318;
	rz1 += 180;
	break;
    case 14:
	ry1 += 138;
	rz1 += 60;
	break;
    case 15:
	ry2 += 318;
	rz2 += 60;
	ry1 += 318;
	rz1 += 60;
	break;
    case 16:
	ry2 += 138;
	rz2 += 300;
	ry1 += 318;
	rz1 += 180;
	break;
    case 17:
	ry2 += 318;
	rz2 += 300;
	ry1 += 318;
	rz1 += 60;
	break;
    case 18:
	ry2 += 318;
	rz2 += 300;
	ry1 += 138;
	rz1 += 300;
	break;
    case 19:
	rz2 += 180;
	ry1 += 42;
	rz1 += 120;
	break;
    case 20:
	ry1 += 180;
	break;
    }
    o.style.transform =
	'rotateX(' + ry2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + ry1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

dcclick = function(o) {
    var rz2 = randDeg(4,12);
    var ry1 = randDeg(4,12);
    var rz1 = randDeg(4,12);
    switch (d(12)) {
    case 1:
	break;
    case 2:
	rz2 += 180;
	ry1 += 63.5;
	rz1 += 72;
	break;
    case 3:
	rz2 += 180;
	ry1 += 243.5;
	rz1 += 144;
	break;
    case 4:
	rz2 += 180;
	ry1 += 63.5;
	break;
    case 5:
	rz2 += 180;
	ry1 += 63.5;
	rz1 += 216;
	break;
    case 6:
	rz2 += 180;
	ry1 += 63.5;
	rz1 += 288;
	break;
    case 7:
	rz2 += 180;
	ry1 += 243.5;
	rz1 += 288;
	break;
    case 8:
	rz2 += 180;
	ry1 += 243.5;
	rz1 += 216;
	break;
    case 9:
	rz2 += 180;
	ry1 += 243.5;
	break;
    case 10:
	rz2 += 180;
	ry1 += 63.5;
	rz1 += 144;
	break;
    case 11:
	rz2 += 180;
	ry1 += 243.5;
	rz1 += 72;
	break;
    case 12:
	ry1 += 180;
    }
    o.style.transform =
	'rotateZ(' + rz2 + 'deg) rotateX(' + ry1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d8click = function(o) {
    var rz2 = randDeg(4,12);
    var ry1 = randDeg(4,12);
    var rz1 = randDeg(4,12);
    switch (d(8)) {
    case 1: 
	break;
    case 2:
	rz2 += 240;
	ry1 += 109.5
	rz1 += 300;
	break;
    case 3: 
	rz2 += 240;
	ry1 += 289.5
	rz1 += 60;
	break;
    case 4:
	rz2 += 180;
	ry1 += 70.5;
	break;
    case 5: 
	rz2 += 180;
	ry1 += -109.5
	break;
    case 6: 
	rz2 += 120;
	ry1 += 109.5
	rz1 += 60;
	break;
    case 7:
	rz2 += 120;
	ry1 += 289.5
	rz1 += 300;
	break;
    case 8: 
	ry1 += 180
	break;
    }
    o.style.transform =
	'rotateZ(' + rz2 + 'deg) rotateX(' + ry1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d6click = function(o) {
    var rz2 = randDeg(4,12);
    var ry1 = randDeg(4,12);
    var rz1 = randDeg(4,12);
    switch (d(6)) {
    case 1: 
	break;
    case 2:
	rz2 += 90;
	ry1 += 90;
	break;
    case 3: 
	rz2 += 180;
	ry1 += 90;
	rz1 += 90;
	break;
    case 4: 
	rz2 += 90;
	ry1 += 270;
	rz1 += 90;
	break;
    case 5: 
	rz2 += 180;
	ry1 += 270;
	break;
    case 6: 
	ry1 += 180;
	rz1 += 90;
	break;
    }
    o.style.transform =
	'rotateZ(' + rz2 + 'deg) rotateX(' + ry1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d4click = function (o) {
    var rz2 = randDeg(4,12);
    var ry1 = randDeg(4,12);
    var rz1 = randDeg(4,12);
    switch (d(4)) {
    case 1: 
	break;
    case 2:
	rz2 += 300;
	ry1 += 109.5;
	rz1 += -120;
	break;
    case 3:
	rz2 += 60;
	ry1 += 109.5;
	rz1 += 120;
	break;
    case 4:
	rz2 += 180;
	ry1 += 109.5;
	break;
    }
    o.style.transform =
	'rotateZ(' + rz2 + 'deg) rotateX(' + ry1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

function d(d) {
    return Math.floor(Math.random() * d) + 1;
}

function randDeg() {
    return (2 + d(4)) * 360;
}

function prepare() {
    document.getElementById('d4-1').onclick = function() { d4click(this); };
    document.getElementById('d6-1').onclick = function() { d6click(this); };
    document.getElementById('d6-2').onclick = function() { d6click(this); };
    document.getElementById('d8-1').onclick = function() { d8click(this); };
    document.getElementById('da-1').onclick = function() { daclick(this); };
    document.getElementById('dc-1').onclick = function() { dcclick(this); };
    document.getElementById('dk-1').onclick = function() { dkclick(this); };
}

daclick = function(o) {
    var rx2 = randDeg();
    var rz2 = randDeg();
    var rx1 = randDeg();
    switch (d(10)) {
    case 1:
	break;
    case 2:
	rx2 += 48;
	rz2 += 216;
	rx1 += 132;
	break;
    case 3:
	rx2 += 48;
	rz2 += 144;
	rx1 += 312;
	break;
    case 4:
	rx2 += 48;
	rz2 += 72;
	rx1 += 132;
	break;
    case 5:
	rx2 += 48;
	rz2 += 216;
	rx1 += 312;
	break;
    case 6:
	rx2 += 48;
	rz2 += 144;
	rx1 += 132;
	break;
    case 7:
	rx2 += 48;
	rz2 += 72;
	rx1 += 312;
	break;
    case 8:
	rx2 += 48;
	rz2 += 288;
	rx1 += 132;
	break;
    case 9:
	rx2 += 48;
	rz2 += 288;
	rx1 += 312;
	break;
    case 10:
	rx1+=180;
	break;
    }
    o.style.transform =	'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg)';
}

dkclick = function(o) {
    var rx2 = randDeg();
    var rz2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(20)) {
    case 1:
	break;
    case 2:
	rx1 += 138;
	rz1 += 300;
	break;
    case 3:
	rx2 += 318;
	rz2 += 60;
	rx1 += 318;
	rz1 += 300;
	break;
    case 4:
	rx2 += 138;
	rz2 += 300;
	rx1 += 318;
	rz1 += 60;
	break;
    case 5:
	rx2 += 318;
	rz2 += 300;
	rx1 += 318;
	rz1 += 180;
	break;
    case 6:
	rx2 += 318;
	rz2 += 300;
	rx1 += 138;
	rz1 += 60;
	break;
    case 7:
	rx1 += 318;
	rz1 += 60;
	break;
    case 8:
	rx1 += 138;
	rz1 += 180;
	break;
    case 9:
	rx2 += 318;
	rz2 += 300;
	rx1 += 318;
	rz1 += 300;
	break;
    case 10:
	rx2 += 318;
	rz2 += 300;
	rx1 += 138;
	rz1 += 180;
	break;
    case 11:
	rx2 += 318;
	rz2 += 60;
	rx1 += 318;
	rz1 += 180;
	break;
    case 12:
	rx2 += 318;
	rz2 += 60;
	rx1 += 138;
	rz1 += 300;
	break;
    case 13:
	rx1 += 318;
	rz1 += 180;
	break;
    case 14:
	rx1 += 138;
	rz1 += 60;
	break;
    case 15:
	rx2 += 318;
	rz2 += 60;
	rx1 += 318;
	rz1 += 60;
	break;
    case 16:
	rx2 += 138;
	rz2 += 300;
	rx1 += 318;
	rz1 += 180;
	break;
    case 17:
	rx2 += 318;
	rz2 += 300;
	rx1 += 318;
	rz1 += 60;
	break;
    case 18:
	rx2 += 318;
	rz2 += 300;
	rx1 += 138;
	rz1 += 300;
	break;
    case 19:
	rz2 += 180;
	rx1 += 42;
	rz1 += 120;
	break;
    case 20:
	rx1 += 180;
	break;
    }
    o.style.transform =	'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

dcclick = function(o) {
    var rz2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(12)) {
    case 1:
	break;
    case 2:
	rz2 += 180;
	rx1 += 63.5;
	rz1 += 72;
	break;
    case 3:
	rz2 += 180;
	rx1 += 243.5;
	rz1 += 144;
	break;
    case 4:
	rz2 += 180;
	rx1 += 63.5;
	break;
    case 5:
	rz2 += 180;
	rx1 += 63.5;
	rz1 += 216;
	break;
    case 6:
	rz2 += 180;
	rx1 += 63.5;
	rz1 += 288;
	break;
    case 7:
	rz2 += 180;
	rx1 += 243.5;
	rz1 += 288;
	break;
    case 8:
	rz2 += 180;
	rx1 += 243.5;
	rz1 += 216;
	break;
    case 9:
	rz2 += 180;
	rx1 += 243.5;
	break;
    case 10:
	rz2 += 180;
	rx1 += 63.5;
	rz1 += 144;
	break;
    case 11:
	rz2 += 180;
	rx1 += 243.5;
	rz1 += 72;
	break;
    case 12:
	rx1 += 180;
    }
    o.style.transform =	'rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d8click = function(o) {
    var rz2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(8)) {
    case 1: 
	break;
    case 2:
	rz2 += 240;
	rx1 += 109.5
	rz1 += 300;
	break;
    case 3: 
	rz2 += 240;
	rx1 += 289.5
	rz1 += 60;
	break;
    case 4:
	rz2 += 180;
	rx1 += 70.5;
	break;
    case 5: 
	rz2 += 180;
	rx1 += -109.5
	break;
    case 6: 
	rz2 += 120;
	rx1 += 109.5
	rz1 += 60;
	break;
    case 7:
	rz2 += 120;
	rx1 += 289.5
	rz1 += 300;
	break;
    case 8: 
	rx1 += 180
	break;
    }
    o.style.transform =	'rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d6click = function(o) {
    var rz2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(6)) {
    case 1: 
	break;
    case 2:
	rz2 += 90;
	rx1 += 90;
	break;
    case 3: 
	rz2 += 180;
	rx1 += 90;
	rz1 += 90;
	break;
    case 4: 
	rz2 += 90;
	rx1 += 270;
	rz1 += 90;
	break;
    case 5: 
	rz2 += 180;
	rx1 += 270;
	break;
    case 6: 
	rx1 += 180;
	rz1 += 90;
	break;
    }
    o.style.transform =	'rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d4click = function (o) {
    var rz2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(4)) {
    case 1: 
	break;
    case 2:
	rz2 += 300;
	rx1 += 109.5;
	rz1 += -120;
	break;
    case 3:
	rz2 += 60;
	rx1 += 109.5;
	rz1 += 120;
	break;
    case 4:
	rz2 += 180;
	rx1 += 109.5;
	break;
    }
    o.style.transform =	'rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

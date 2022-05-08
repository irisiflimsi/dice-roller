function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function dropl(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    if (data.length < 5) {
	var el = document.getElementById(data).cloneNode(true);
	el.id += "-" + Date.now();
	el.onclick = function() { roll(el); }
	ev.target.appendChild(el);
    }
}

function dropr(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    if (data.length > 4)
	document.getElementById(data).remove();
}

function d(d) {
    return Math.floor(Math.random() * d) + 1;
}

function m() {
    var r = 0;
    for (var d = -1; d <= 1; d += 2) {
        while (true) {
            if (Math.floor(Math.random() * 5) == 0) {
                break;
            }
            r += d;
        }
    }
    return r;
}

function randDeg() {
    return (2 + d(4)) * 360;
}

function roll(el) {
    var child = el.firstElementChild.firstElementChild;
    switch (el.id.substr(0,2)) {
    case "d4":
	d4click(child); break;
    case "d6":
	d6click(child); break;
    case "d8":
	d8click(child); break;
    case "da":
	daclick(child); break;
    case "dc":
	dcclick(child); break;
    case "dk":
	dkclick(child); break;
    case "dm":
	dmclick(child,el.id.substr(2,1)); break;
    }
}

function rot(degY, trY = 0) {
    return '% { transform: translate3d(189px,176px,0px) rotateY(' + degY + 'deg) translateZ(' + trY + ') translateZ(304px) } ';
}

// from and to are positions
function move(from, to) {
    var ret = '';
    if (from <= -3) {
        ret += 0 + rot(-90);
        if (to <= -3) {
            ret += 100 + rot(-90);
        }
        if (to > -3 && to < 3) {
            ret += ((-2.25 - from)/(to - from) * 100) + rot(-90);
            ret += 100 + rot(to * 40);
        }
        if (to >= 3) {
            ret += ((-2.25 - from)/(to - from) * 100) + rot(-90);
            ret += ((0 - from)/(to - from) * 100) + rot(0);
            ret += ((2.25 - from)/(to - from) * 100) + rot(90);
            ret += 100 + rot(90);
        }
    }
    if (from > -3 && from < 3) {
        ret += 0 + rot(from * 40);
        if (to <= -3) {
            ret += ((-2.25 - from)/(to - from) * 100) + rot(-90);
            ret += 100 + rot(-90);
        }
        if (to > -3 && to < 3) {
            ret += 100 + rot(to * 40);
        }
        if (to >= 3) {
            ret += ((2.25 - from)/(to - from) * 100) + rot(90);
            ret += 100 + rot(90);
        }
    }
    if (from >= 3) {
        ret += 0 + rot(90);
        if (to <= -3) {
            ret += ((2.25 - from)/(to - from) * 100) + rot(90);
            ret += ((0 - from)/(to - from) * 100) + rot(0);
            ret += ((-2.25 - from)/(to - from) * 100) + rot(-90);
            ret += 100 + rot(-90);
        }
        if (to > -3 && to < 3) {
            ret += ((2.25 - from)/(to - from) * 100) + rot(90);
            ret += 100 + rot(to * 40);
        }
        if (to >= 3) {
            ret += 100 + rot(90);
        }
    }
    return ret;
}

dmclick = function(o,l) {
    var od = o.od ? o.od : 0;
    var nd = Math.min(33,Math.max(-33,m()));
    for (var i = Math.min(od,nd) - 2; i <= Math.max(od,nd) + 2; i++) {
        var el = o.getElementsByClassName('pm' + i)[0];
        el.style.backgroundImage = 'url("' + l + 'pm' + i + '.png")';
        el.style.animation = null;
        var style = document.createElement("style");
        var innerHTML = '@keyframes pmfrom' + i + 'to' + (i + nd - od) + ' { ';
        // i is a dice value. od was on position 0, nd will be on position 0.
        innerHTML += move(i - od, i - nd);
        innerHTML += '}';
        style.innerHTML = innerHTML;
        el.appendChild(style);
        el.style.animation =
            'pmfrom' + i + 'to' + (i + nd - od) + ' 1s linear 0s 1 normal';
        el.style.animationFillMode = "both";
        el.offsetWidth;
    }
    o.offsetWidth;
    // This is because I get animation to work with to = from only once. (?)
    if (od == nd) {
        new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play();
    }
    o.od = nd;
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
	rx1 += 138; rz1 += 300; break;
    case 3:
	rx2 += 318; rz2 += 60; rx1 += 318; rz1 += 300; break;
    case 4:
	rx2 += 138; rz2 += 300; rx1 += 318; rz1 += 60; break;
    case 5:
	rx2 += 318; rz2 += 300; rx1 += 318; rz1 += 180; break;
    case 6:
	rx2 += 318; rz2 += 300; rx1 += 138; rz1 += 60; break;
    case 7:
	rx1 += 318; rz1 += 60; break;
    case 8:
	rx1 += 138; rz1 += 180; break;
    case 9:
	rx2 += 318; rz2 += 300; rx1 += 318; rz1 += 300; break;
    case 10:
	rx2 += 318; rz2 += 300; rx1 += 138; rz1 += 180; break;
    case 11:
	rx2 += 318; rz2 += 60; rx1 += 318; rz1 += 180; break;
    case 12:
	rx2 += 318; rz2 += 60; rx1 += 138; rz1 += 300; break;
    case 13:
	rx1 += 318; rz1 += 180; break;
    case 14:
	rx1 += 138; rz1 += 60; break;
    case 15:
	rx2 += 318; rz2 += 60; rx1 += 318; rz1 += 60; break;
    case 16:
	rx2 += 138; rz2 += 300; rx1 += 318; rz1 += 180; break;
    case 17:
	rx2 += 318; rz2 += 300; rx1 += 318; rz1 += 60; break;
    case 18:
	rx2 += 318; rz2 += 300; rx1 += 138; rz1 += 300; break;
    case 19:
	rz2 += 180; rx1 += 42; rz1 += 120; break;
    case 20:
	rx1 += 180; break;
    }
    o.style.transform =	'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

daclick = function(o) {
    var rx2 = randDeg();
    var rz2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(10)) {
    case 1:
	break;
    case 2:
	rx2 += 48; rz2 += 216; rx1 += 132; break;
    case 3:
	rx2 += 48; rz2 += 144; rx1 += 312; break;
    case 4:
	rx2 += 48; rz2 += 72; rx1 += 132; break;
    case 5:
	rx2 += 48; rz2 += 216; rx1 += 312; break;
    case 6:
	rx2 += 48; rz2 += 144; rx1 += 132; break;
    case 7:
	rx2 += 48; rz2 += 72; rx1 += 312; break;
    case 8:
	rx2 += 48; rz2 += 288; rx1 += 132; break;
    case 9:
	rx2 += 48; rz2 += 288; rx1 += 312; break;
    case 10:
	rx1+=180; break;
    }
    o.style.transform =	'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

dcclick = function(o) {
    var rz2 = randDeg();
    var rx2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(12)) {
    case 1:
	break;
    case 2:
	rz2 += 180; rx1 += 63.5; rz1 += 72; break;
    case 3:
	rz2 += 180; rx1 += 243.5; rz1 += 144; break;
    case 4:
	rz2 += 180; rx1 += 63.5; break;
    case 5:
	rz2 += 180; rx1 += 63.5; rz1 += 216; break;
    case 6:
	rz2 += 180; rx1 += 63.5; rz1 += 288; break;
    case 7:
	rz2 += 180; rx1 += 243.5; rz1 += 288; break;
    case 8:
	rz2 += 180; rx1 += 243.5; rz1 += 216; break;
    case 9:
	rz2 += 180; rx1 += 243.5; break;
    case 10:
	rz2 += 180; rx1 += 63.5; rz1 += 144; break;
    case 11:
	rz2 += 180; rx1 += 243.5; rz1 += 72; break;
    case 12:
	rx1 += 180; break;
    }
    o.style.transform =	'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d8click = function(o) {
    var rz2 = randDeg();
    var rx2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(8)) {
    case 1: 
	break;
    case 2:
	rz2 += 240; rx1 += 109.5; rz1 += 300; break;
    case 3: 
	rz2 += 240; rx1 += 289.5; rz1 += 60; break;
    case 4:
	rz2 += 180; rx1 += 70.5; break;
    case 5: 
	rz2 += 180; rx1 += -109.5; break;
    case 6: 
	rz2 += 120; rx1 += 109.5; rz1 += 60; break;
    case 7:
	rz2 += 120; rx1 += 289.5; rz1 += 300; break;
    case 8: 
	rx1 += 180; break;
    }
    o.style.transform =	'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d6click = function(o) {
    var rz2 = randDeg();
    var rx2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(6)) {
    case 1: 
	break;
    case 2:
	rz2 += 90; rx1 += 90; break;
    case 3: 
	rz2 += 180; rx1 += 90; rz1 += 90; break;
    case 4: 
	rz2 += 90; rx1 += 270; rz1 += 90; break;
    case 5: 
	rz2 += 180; rx1 += 270; break;
    case 6: 
	rx1 += 180; rz1 += 90; break;
    }
    o.style.transform =	'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

d4click = function (o) {
    var rz2 = randDeg();
    var rx2 = randDeg();
    var rx1 = randDeg();
    var rz1 = randDeg();
    switch (d(4)) {
    case 1:
	break;
    case 2:
	rz2 += 300; rx1 += 109.5; rz1 += -120; break;
    case 3:
	rz2 += 60; rx1 += 109.5; rz1 += 120; break;
    case 4:
	rz2 += 180; rx1 += 109.5; break;
    }
    o.style.transform =	'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

function load() {
    var style = document.createElement("style");
    var innerHTML; // local is better than DOM directly.
    for (var i = -35; i <= 35; i++) {
        for (var j = -35; j <= 35; j++) {
            innerHTML += '@keyframes pmfrom' + i + 'to' + j + ' { '
                + move(i, j)
                + '} ';
        }
    }
    style.innerHTML = innerHTML;
    document.body.appendChild(style);
    for (let k = 0; k < localStorage.length; k++) {
        var kk = localStorage.key(k);
        var el = document.getElementById(kk.substring(0,kk.indexOf("-"))).cloneNode(true);
        if (el === undefined) {
            localStorage.removeItem(kk);
            continue;
        }
        el.id = kk;
        el.style = "position:absolute;width:200px;height:200px;"
        el.style.top = parseInt(localStorage.getItem(el.id).slice(0,4));
        el.style.left = parseInt(localStorage.getItem(el.id).slice(4,8));
        el.onclick = function() { roll(el); }
        document.getElementById("left").appendChild(el);
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

// Only one drag possible; globally
var dragX;
var dragY;
function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    dragX = ev.clientX - ev.target.getBoundingClientRect().x;
    dragY = ev.clientY - ev.target.getBoundingClientRect().y;
}

function dropl(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    var el = document.getElementById(data);
    if (data.length < 5) {
        el = el.cloneNode(true);
        el.id += "-" + Date.now();
    }
    el.style = "position:absolute;width:200;height:200px;"
    el.style.top = event.clientY - dragY;
    el.style.left = event.clientX - dragX;
    el.onclick = function() { roll(el); }
    ev.target.appendChild(el);
    localStorage[el.id] = ("000" + el.style.top).slice(-6,-2) + ("000" + el.style.left).slice(-6,-2);
}

function dropr(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    if (data.length > 4) {
        document.getElementById(data).remove();
        localStorage.removeItem(data);
    }
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

function rot(degY) {
    return '% { transform: translate3d(189px,176px,0px) rotateY(' + degY + 'deg) translateZ(304px) } ';
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
            if (to == from) { // To feedback identical roll
                ret += 33 + rot(to * 40 - 10);
                ret += 67 + rot(to * 40 + 10);
            }
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
        el.style.animation = 'pmfrom' + (i - od) + 'to' + (i - nd) + ' 1s linear 0s 1 normal';
        el.style.animationFillMode = "both";
        o.replaceChild(el.cloneNode(true), el);
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
    o.style.transform = 'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
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
    o.style.transform = 'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
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
    o.style.transform = 'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
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
    o.style.transform = 'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
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
    o.style.transform = 'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
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
    o.style.transform = 'rotateX(' + rx2 + 'deg) rotateZ(' + rz2 + 'deg) rotateX(' + rx1 + 'deg) rotateZ(' + rz1 + 'deg)';
}

var cont = 6350
function showmore() {
    showbtn = document.querySelector('.show')
    if (showbtn.innerText == "SHOW MORE") {
        cont = 9500
        document.querySelector('.more').style.display = "block"
        showbtn.innerText = "SHOW LESS"
    }
    else {
        cont = 6350
        document.querySelector('.more').style.display = "none"
        showbtn.innerText = "SHOW MORE"

    }
}
function scrltop() {
    window.scrollTo(0, 0)
}
function homescrl() {
    window.scrollTo(0, 0)
}
var transleft = document.querySelectorAll('.left');
var transright = document.querySelectorAll('.right');

var v = window.innerWidth
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (v > 1023) {
        if ((document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)) {
            document.querySelector('.about-video').style.left = 0
        }
        if ((document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000)) {
            transleft[0].style.left = 0
            transright[0].style.left = "46.5rem"
        }
        if ((document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800)) {
            transleft[1].style.left = 0
            transright[1].style.left = "46.5rem"
        }
        if ((document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500)) {
            transleft[2].style.left = 0
            transright[2].style.left = "46.5rem"
        }
        if ((document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000)) {
            transleft[3].style.left = 0
        }
        if ((document.body.scrollTop > 5500 || document.documentElement.scrollTop > 5500)) {
            document.querySelectorAll('.cleft')[0].style.left = 0
            document.querySelectorAll('.cright')[0].style.left = 0
        } if ((document.body.scrollTop > 5900 || document.documentElement.scrollTop > 5900)) {
            document.querySelectorAll('.cleft')[1].style.left = 0
            document.querySelectorAll('.cright')[1].style.left = 0
        }
    }
    if (v > 481 && v<=1023) {
        if ((document.body.scrollTop > 550 || document.documentElement.scrollTop > 550)) {
            document.querySelector('.about-video').style.left = 0
            document.querySelector('.about-video').style.top = "7%"
        }
        if ((document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400)) {
            transleft[0].style.left = 0
            transright[0].style.left = 0
        }
        if ((document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000)) {
            transleft[1].style.left = 0
            transright[1].style.left = 0
        }
        if ((document.body.scrollTop > 2650 || document.documentElement.scrollTop > 2650)) {
            transleft[2].style.left = 0
            transright[2].style.left = 0
        }
        if ((document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200)) {
            transleft[3].style.left = 0
        }
        if ((document.body.scrollTop > cont || document.documentElement.scrollTop > cont)) {
            document.querySelectorAll('.cleft')[0].style.left = 0
            document.querySelectorAll('.cright')[0].style.left = 0
        } if ((document.body.scrollTop > cont+300 || document.documentElement.scrollTop > cont+300)) {
            document.querySelectorAll('.cleft')[1].style.left = 0
            document.querySelectorAll('.cright')[1].style.left = 0
        }
    }


    if (v < 481) {
        if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
            document.querySelector('.about-video').style.left = "3%"
            document.querySelector('.about-video').style.top = "8%"

        }
        if ((document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900)) {
            transleft[0].style.left = "2%"
            transright[0].style.left = "2%"
        }
        if ((document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500)) {
            transleft[1].style.left = "2%"
            transright[1].style.left = "2%"
        }
        if ((document.body.scrollTop > 2950 || document.documentElement.scrollTop > 2950)) {
            transleft[2].style.left = "2%"
            transright[2].style.left = "2%"
        }
        if ((document.body.scrollTop > 3400 || document.documentElement.scrollTop > 3400)) {
            transleft[3].style.left = "2%"
        }
        if ((document.body.scrollTop > cont || document.documentElement.scrollTop > cont)) {
            document.querySelectorAll('.cleft')[0].style.left = "1.75rem"
            document.querySelectorAll('.cright')[0].style.left = "1.75rem"
            
        } if ((document.body.scrollTop > (cont + 200) || document.documentElement.scrollTop > (cont + 200))) {
            document.querySelectorAll('.cleft')[1].style.left = "1.5rem"
            document.querySelectorAll('.cright')[1].style.left = "1.5rem"
        }
    }
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('.navbar').style.backgroundColor = "black"
        document.querySelector('.taptotop').style.display = "block"
    }
    else {
        document.querySelector('.navbar').style.backgroundColor = "rgba(0,0,0,0.5)"
        document.querySelector('.taptotop').style.display = "none"
    }
}

mybtn = document.querySelector('.mybtn')

var disp = document.querySelector('.navbar').children[2]
if (v < 480) {
    function navbardisp() {
        if (disp.classList.contains("nav-items")) {
            disp.classList.add("list3")
            disp.classList.remove("nav-items")
            mybtn.innerText = "X"
        }
        else {
            mybtn.innerText = "+"
            disp.classList.add("nav-items")
            disp.classList.remove("list3")
        }
    }
}
if (v > 480 && v < 1024) {
    function navbardisp() {
        if (disp.classList.contains("nav-items")) {
            disp.classList.add("list2")
            disp.classList.remove("nav-items")
            mybtn.innerText = "X"
        }
        else {
            mybtn.innerText = "+"
            disp.classList.add("nav-items")
            disp.classList.remove("list2")
        }
    }
}

if (v < 481) {
    function aboutscrl() {
        window.scrollTo(0, 600)
    }
    function placesscrl() {
        window.scrollTo(0, 1750)
    }
    function snapscrl() {
        window.scrollTo(0, 3880)
    }
    function contactscrl() {
        window.scrollTo(0, cont)
    }
}
else if (v > 480 && v < 1023) {
    function aboutscrl() {
        window.scrollTo(0, 650)
    }
    function placesscrl() {
        window.scrollTo(0, 1820)
    }
    function snapscrl() {
        window.scrollTo(0, 3950)
    }
    function contactscrl() {
        window.scrollTo(0, cont)
    }

}
else {
    function aboutscrl() {
        window.scrollTo(0, 660)
    }
    function placesscrl() {
        window.scrollTo(0, 1550)
    }
    function snapscrl() {
        window.scrollTo(0, 3700)
    }
    function contactscrl() {
        window.scrollTo(0, 6700)
    }
}
// gallery captions and nav pages
$(document).ready(function() {
    $("#navAviation").click(function() {
        $(".aviation").fadeTo(500, 1);
        $(".aviation").css("z-index", "2")
        $(".sports").fadeTo(500, 0);
        $(".sports").css("z-index", "0")
        $(".travelling").fadeTo(500, 0);
        $(".travelling").css("z-index", "0")
        $(".music").fadeTo(500, 0);
        $(".music").css("z-index", "0")
    })
    $("#navSports").click(function() {
        $(".aviation").fadeTo(500, 0);
        $(".aviation").css("z-index", "0")
        $(".sports").fadeTo(500, 1);
        $(".sports").css("z-index", "2")
        $(".travelling").fadeTo(500, 0);
        $(".travelling").css("z-index", "0")
        $(".music").fadeTo(500, 0);
        $(".music").css("z-index", "0")
    })
    $("#navTravelling").click(function() {
        $(".aviation").fadeTo(500, 0);
        $(".aviation").css("z-index", "0")
        $(".sports").fadeTo(500, 0);
        $(".sports").css("z-index", "0")
        $(".travelling").fadeTo(500, 1);
        $(".travelling").css("z-index", "2")
        $(".music").fadeTo(500, 0);
        $(".music").css("z-index", "0")
    })
    $("#navMusic").click(function() {
        $(".aviation").fadeTo(500, 0);
        $(".aviation").css("z-index", "0")
        $(".sports").fadeTo(500, 0);
        $(".sports").css("z-index", "0")
        $(".travelling").fadeTo(500, 0);
        $(".travelling").css("z-index", "0")
        $(".music").fadeTo(500, 1);
        $(".music").css("z-index", "2")
    })
})

// askme generate reply

$("#askme").submit(function(e) {
    e.preventDefault();
    $("#reply").remove()
    if (e.target.name.value == '' && e.target.email.value == '' && e.target.message.value == '') {
        let reply = `<p id='reply' class="text-center">Please send me a message :(</p>`;
        $("form").append(reply)
    } else {
        let tempName = e.target.name.value;
        let reply = `<p id='reply' class="text-center">Cheers ${tempName}! An air mail will be sent to you soon :)</p>`;
        $("form").append(reply)
        e.target.name.value = ''
        e.target.email.value = ''
        e.target.message.value = ''
    }
})

//navbar scrolling

var navItems = document.getElementsByClassName('nav-link');
for (let i = 0; i < navItems.length; i++) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            navItems[i].classList.add('scrollNavItems',
                'scrollNavItems:hover');
        } else {
            navItems[i].classList.remove('scrollNavItems')
        }
    })
}

var navLogo = document.getElementsByClassName('navbar-brand')[0];
var navBar = document.querySelector('nav');
var navCollapse = document.getElementsByClassName('collapse')[0];
var navTog = document.getElementsByClassName('navbar-toggler')[0];


window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        navLogo.classList.add('scrollNavLogo', 'scrollNavLogo:hover');
        navBar.classList.add('scrollBar');
        navCollapse.classList.add('scrollCollapse');
        navTog.classList.add('scrollNavTog');
    } else {
        navLogo.classList.remove('scrollNavLogo');
        navBar.classList.remove('scrollBar');
        navCollapse.classList.remove('scrollCollapse');
        navTog.classList.remove('scrollNavTog');
    }
})
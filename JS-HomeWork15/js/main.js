let mainNav = $(`<div></div>`).addClass(`top-block-nav`).attr('id', 'up');

let mainNavItem1 = $(`<a></a>`).text(`Most popular posts`).addClass(`top-block-nav-item`);
let mainNavItem2 = $('<a></a>').text(`Most popular clients`).addClass(`top-block-nav-item`);
let mainNavItem3 = $('<a></a>').text(`Top rated`).addClass(`top-block-nav-item`);
let mainNavItem4 = $('<a></a>').text(`Hot news`).addClass(`top-block-nav-item`);
let mainNavItem5 = $('<i></i>').addClass(`fas fa-search top-block-search`);

$(mainNavItem1).attr('href', '#posts');
$(mainNavItem2).attr('href', '#clients');
$(mainNavItem3).attr('href', '#rated');
$(mainNavItem4).attr('href', '#news');
$(mainNavItem5).attr('href', '#');

$(mainNav).append(mainNavItem1);
$(mainNav).append(mainNavItem2);
$(mainNav).append(mainNavItem3);
$(mainNav).append(mainNavItem4);
$(mainNav).append(mainNavItem5);

$(`.top-block`).append(mainNav);

$(`.top-block-nav-item`).on(`click`, function () {
    event.preventDefault();
    let id = $(this).attr('href');
    let idPosition = $(id).offset().top;
    $('body,html').animate({'scrollTop': `${idPosition}`}, 1000);
});


const windowHeight = $(window).height();
$(window).on(`scroll`, function () {
    if (pageYOffset >= windowHeight) {
        $(`#btn-up`).css(`display`, `block`);
    } else {
        $(`#btn-up`).css(`display`, `none`);
    }
});
$(`#btn-up`).on(`click`, function () {
    event.preventDefault();
    $('body,html').animate({'scrollTop': `0`}, 1000);
});


let postsHide = $(`<button></button>`).text(`Popular Clients - Show/Hide`).addClass(`btn-toggle-content`);
$(`.popular-posts-block`).after(postsHide);
$(postsHide).on(`click`, function () {
    $(`#clients`).slideToggle();
});

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });


    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed = new Typed(".typing", {
        strings: ["Student..", "CP Enthusiast.."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});


// Codeforces Live Rating
const cfRatingHigh = document.querySelector('#cfRatingHigh');
const cfRatingCurr = document.querySelector('#cfRatingCurr');

async function getCFRating() {
    const res = await fetch("https://codeforces.com/api/user.rating?handle=029aman")
    const data = await res.json();
    return data;
}

async function callCF() {
    var rating = await getCFRating();
    var maxR=0;
    for(let a of rating.result){
        maxR= Math.max(maxR, a.newRating);
    }
    cfRatingCurr.innerHTML = rating.result[rating.result.length-1].newRating;
    cfRatingHigh.innerHTML = maxR; 
}
callCF();
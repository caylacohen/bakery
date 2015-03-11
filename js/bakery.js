/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var bakeryApp = angular.module('bakeryApp', []);

bakeryApp.service('Cupcakes', function (){
    var cupcakes = this;
    cupcakes.currentCupcake = null;

    cupcakes.cupcakes = [
        {
            name: 'Chocolate Chocolate',
            description: 'Chocolate cupcake with dark chocolate buttercream frosting.',
            imageUrl: 'img/cupcakes/pumpkin-spice.JPG'
        },
        {
            name: 'Chocolate Peanut Butter',
            description: 'Chocolate cupcake with peanut butter buttercream frosting.',
            imageUrl: 'img/cupcakes/pumpkin-spice.JPG'
        },
        {
            name: 'The Vanilla',
            description: 'Classic vanilla cupcake with vanilla buttercream frosting.',
            imageUrl: 'img/cupcakes/pumpkin-spice.JPG'
        },
        {
            name: 'Red Velvet',
            description: 'Red Velvet cupcake with cream cheese frosting. Great for Valentines day!',
            imageUrl: 'img/cupcakes/pumpkin-spice.JPG'
        },
        {
            name: 'Pumpkin Spice',
            description: 'Pumpkin Spice cupcake with frosting.',
            imageUrl: 'img/cupcakes/pumpkin-spice.JPG'
        },
        {
            name: 'You Choose',
            description: 'You pick the cake and frosting..',
            imageUrl: 'img/cupcakes/pumpkin-spice.jpg'
        }
    ];

});

bakeryApp.controller('CupcakePortfolioController', function(Cupcakes){
    var portfolio = this;
    portfolio.cupcakes = Cupcakes;

    portfolio.setCurrentCupcake = function(cupcake) {
        portfolio.cupcakes.currentCupcake = cupcake;
    };
});

bakeryApp.controller('CupcakeDetailController', function(Cupcakes) {
    var detail = this;
    detail.cupcakes = Cupcakes;
});

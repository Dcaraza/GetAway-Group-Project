//sideNav

const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});


//Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    intervald: 6000,

});

//Autocomplete

const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
    data: {
        "New York": null,
        "Paris, France": null,
        "Egypt": null,
        "Tokyo": null,
        "Rio de Janeiro": null,
        "Italy": null,
        "Miami, FL": null,
        "Hawaii": null,
        "Cuba": null,
        "Hialeah": null,
    }
})

//Material Box

const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

//Scrollspy

const ss = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ss, {});
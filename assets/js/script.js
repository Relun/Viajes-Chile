//  smooth scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

            window.location.hash = hash;
            });
        }
    });
});
    
// $(document).ready(function () {
//     $("a").click(function () {
//         var cat = this.hash
//         $("html, body").animate({
//                 scrollTop: $(cat).offset().top
//             },
//             800
//         )
//     })
// })

// tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
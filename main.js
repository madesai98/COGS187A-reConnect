var page = 0, lastPage = 5;

$('#prev').click(function() {
    if (page == 0) return;
    moveToPage(--page);
});

$('#next').click(function() {
    if (page == lastPage) return;
    moveToPage(++page);
});

$('#add').click(function() {
    $(this).before($(this).prev().clone().val(''));
    var input = document.getElementsByClassName('location');
    for(var i = 0; i < input.length; i++) new google.maps.places.Autocomplete(input[i]);
});

function moveToPage(page) {
    $('#prev').html('Previous');
    $('#next').html('Next');
    $('.wrapper').css("left", -page * 100 + "vw");
    if (page == 0) $('#prev').html('Go Back');
    if (page == lastPage) $('#next').html('Finish');
}

moveToPage(0);

var input = document.getElementsByClassName('location');
for(var i = 0; i < input.length; i++) new google.maps.places.Autocomplete(input[i]);
for (let i = 0; i < 16; i++) {
    $('.grid').append('<div class=boxes></div>');
}


$('.grid').on('click', '.boxes', function() {
    let display = $(this);

    let newDisplay = $(display).toggleClass('lighterBox');
    
});
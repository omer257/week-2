$('.red-div').css('background-color', 'red');
$('#brown-div').css('background-color', 'brown');
$('h1').css('background-color', 'blue');
$("ul li:first").css('background-color', 'blue');
$("ul li:nth-child(2)").css('background-color', 'green');

$('#btn-add').on('click', function () {
    var userInput = '<li>' + $('#my-input').val() + '</li>';
    $('.students').append(userInput);
    $('li').on('click', function () {
        $('.students').find('li').remove();
    });
});

$('li').on('click', function () {
    $('.students').find('li').remove();
});
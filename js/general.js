var $tabs = $('.tabs');

$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
});
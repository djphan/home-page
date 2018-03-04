const template_path = 'src/templates';
$(function() {
    $('div.navbar').load( template_path + '/navbar.html');

    $('.navbar__link--left > i').on('click', function() {
        console.log('help');
        $('.nav-link-right').toggleClass('active');
    });
});
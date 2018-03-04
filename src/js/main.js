const template_path = 'src/templates';
$(function() {
    $('div.navbar').load( template_path + '/navbar.html');
    $('div.section__content--social-and-other').load( template_path + '/placeholder.html');
    $('div.footer').load( template_path + '/footer.html');
});
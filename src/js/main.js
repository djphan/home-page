const template_path = 'src/templates';
$(function() {
    $('div.navbar').load( template_path + '/navbar.html');
    $('div.section__content--work-history').load( template_path + '/work.html');
    $('div.section__content--social-and-other').load( template_path + '/placeholder.html');
    $('footer').load( template_path + '/footer.html');
});
var navBarHTML =
'<nav>'+
  '<div id="navbar" class="nav-wrapper blue-grey darken-2">' +
    '<a href="#start" class="brand-logo" style="margin-left:1%">djphan.me</a>' +
    '<a href="#" data-activates="navmobile" class="button-collapse"><i class="mdi-navigation-menu"></i></a>' +

    '<ul class="right hide-on-med-and-down">' +
      '<li><a href="#aboutme" class="active">About Me</a></li>' +
      '<li><a href="#skills">Skills</a></li>' +
      '<li><a href="#projects">Projects</a></li>' +
      '<li><a href="#history">Work History</a></li>' +
      '<li><a href="#contact">Contact Me</a></li>' +
    '</ul>' +

    '<ul class="side-nav" id="navmobile">' +
      '<li><a href="#aboutme" class="active">About Me</a></li>' +
      '<li><a href="#skills">Skills</a></li>' +
      '<li><a href="#projects">Projects</a></li>' +
      '<li><a href="#history">Work History</a></li>' +
      '<li><a href="#contact">Contact Me</a></li>' +
    '</ul>' +
  '</div>' +
'</nav>';

$('#siteNavBar').html(navBarHTML);

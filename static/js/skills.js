var skills1HTML =
'<div class="container">' +
  '<h3 class="row"> My Programming Skills </h3>' +

  '<div class="row">' +
    '<div class="col m7 s10 offset-s1 content">' +
      '<h5> Summary: </h5>' +
      '<ul class="altern">' +
        '<li>' +
          'Languages: <span>C</span>, <span>C++</span>, <span>Java</span>, <span>Python</span>, <span>Batch</span>, <span>Javascript</span>, <span>Matlab/Octave</span>, <span>R</span>, and <span>SQL</span>' +
        '</li><br/>' +
        '<li>' +
          'Database architectures: <span>MongolDB</span>, <span>SQLite3</span>, <span>MySQL</span>, <span>Postgres</span>, and <span>Oracle</span>' +
        '</li><br/>' +
        '<li>' +
           'Programming practices: <span>Agile programming</span>, <span>Scrum</span>, <span>UML design</span>, <span>MVC design architecture</span>, <span>version control</span>, <span>test driven development<span> and <span>object oriented</span> design' +
        '</li><br/>' +
        '<li>' +
          'Version control systems: <span>Git</span>, <span>Github</span>, and </span>Perforce</span>' +
        '</li><br/>' +
        '<li>' +
          'Experience using issue trackers like <span>JIRA or GitHub Issue Tracker</span> and <span>Confluence</span> (wiki style) systems for documentation' +
        '</li><br/>' +
        '<li>' +
          'Avid learner of new technologies and frameworks. Willing to take on personal projects and attend various local hackathons' +
        '</li><br/>' +
      '</ul>' +
    '</div>' +

    '<div class="col m5 s10 offset-s1 content">' +
      '<a onclick="Materialize.toast(\'Working on djphan.me.\', 4000)">' +
        '<img src="static/img/projimg.png" style="height:100%; width:100%" class="circle center">' +
      '</a>' +
    '</div>' +
  '</div><br/>' +

  '<div class="row">' +
    '<a href="javascript:goToSlide(\'.skills_slider\', 0)" class="waves-effect waves-light btn blue"><i class="mdi-navigation-arrow-back left"></i>Skills</a>' +
  '</div>' +
'</div>'


$('#skills1').html(skills1HTML);

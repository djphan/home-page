var aboutme1HTML =
'<div class="container">' +
  '<h3 class="row">About Me</h3>' +

  '<div class="row">' +
    '<div class="content col m7 s10 offset-s1">' +
      '<ul class ="altern">' +
        '<li>My name is Daniel, I\'m a programmer and scientist with a background in bioinformatics</li><br/>' +
        '<li>My programming interests include <span>software development</span>, <span>web design</span>, and <span>data analytics</span></li><br/>' +
        '<li>My research interests include <span>genomics</span>, <span>systems biology</span>, and combining <span>genetics and computer science</span> in an interdisciplinary fashion</li><br/>' +
        '<li>This web resume is a <span>portfolio</span> and <span>sandbox</span> for me to play around with some of the current technologies I see online. I\'m avid learner and always looking to add to my skill set</li><br/>' +
        '<li>Check out some of my other professional profiles such as my <a href="https://github.com/djphan"> GitHub </a> or <a href="https://ca.linkedin.com/in/djphan"> Linkedin. </a>'+
      '</ul> <br/>' +
    '</div>' +

    '<div class="col m5 s10 offset-s1 center">' +
      '<a onclick="Materialize.toast(\'Post-coffee energy for the day.\', 4000)"><img src="static/img/aboutme.jpg" style="width:100%; height:100%" class="circle"></a>' +
    '</div>' +
  '</div> <br/>' +

  '<div class="row">' +
    '<a href="javascript:nextSlide(\'.aboutme_slider\')" class="waves-effect waves-light btn blue">' +
      '<i class="mdi-navigation-arrow-forward right"></i>My Education'  +
    '</a>' +
  '</div> <br/><br/>' +
'</div>'


var aboutme2HTML =
'<div class="container">' +
  '<h3 class="row"> About My Education </h3>' +

  '<div class="row">' +
    '<div class="content col m6 s10 offset-s1"><div class="card"><div class="card-content">' +
        '<div class="card-title"><h5 class="teal-text"> 2013 - 2015 (University of Alberta) </h5></div>' +
        '<span class="blue-text" style="font-size:15pt"> BSc. Specialization in Computer Science </span> <br/>' +
        '<ul class="altern">' +
          '<li> Educational highlights: learning about <span>project management</span>, <span>object oriented programming</span>, <span>databases</span>, <span class>MVC architecture</span>, and <span>bioinformatics</span> applications</li><br/>' +
          '<li> Languages learned: <span>Python</span>, <span>C</span>, <span>C++</span>, <span>Java</span>, <span>SQL</span>, <span>HTML/CSS</span>, and <span>Javascript</span></li>' +
        '</ul>' +
      '</div></div></div>' +

    	'<div class="content col m6 s10 offset-s1"><div class="card"><div class="card-content">' +
        '<div class="card-title"><h5 class="teal-text"> 2008 - 2013 (University of Alberta) </h5></div>' +
        '<span class="blue-text" style="font-size:15pt"> BSc. Honors in Molecular Biology </span>' +
      		'<ul class="altern">' +
      		   '<li>'+
                'Educational highlights: completed <span>two research thesis projects</span>, <span>poster presentations</span>, <span>grant review</span> experience, <span>manuscript and article</span> writing, and <span>molecular biology laboratory</span> experience' +
      			 '</li><br/>' +
             '<li>' +
    				    'Scholarships earned: <span class>Jason Lang</span>, <span class>Roland Stansfield Young Memorial Academic Excellence</span>, and <span>Faculty of Science Academic of Excellence</span>' +
  	          '</li>' +
        	 '</ul>' +
        '</div></div></div> </div>' +

        '<div class="row">' +
        		'<a href="javascript:prevSlide(\'.aboutme_slider\')" class="waves-effect waves-light btn blue">' +
        				'<i class="mdi-navigation-arrow-back left"></i>About me' +
        		'</a>' +
        '</div></div>	<br/><br/>' +
'</div>'

$('#aboutme1').html(aboutme1HTML);
$('#aboutme2').html(aboutme2HTML);

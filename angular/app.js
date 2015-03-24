(function(){
	var app = angular.module('CV', [ ]);

	app.controller('TitlesController', function(){
		this.usual = listCommon;
	});

	app.controller('ExperienceController', function(){
		this.experiences = listExperience;
	});

	app.controller('SkillsController', function(){
		this.skills = listSkills;
	});

	app.controller('EducationController', function(){
		this.education = listEducation;
	});

	app.controller('ExtracurricularController', function(){
		this.extra = listExtra;
	});

	var listCommon = {
		logo: 'images/logo.png',
		logoName: 'Liz Villegas',
		position: 'Front end Developer & Designer',
		first: 'A little bit about me',
		firstAbout: 'I have spent almost six years working on creating pages. I enjoy working with people who love his work and always looking for good results as a team. I think humor, fun and creativity are the ingredients to be in a good working environment. I love sports, especially soccer and karate, i am black belt and I have had the opportunity to represent my state and my country proudly.',
		second: 'Professional Experience',
		imageSecond: 'images/experience.png',
		third: 'Skills',
		imageThird: 'images/skills.png',
		phone: '+52 1 811.370.0785',
		phoneImage: 'images/phone.png',
		mail: 'liz.villegas@mil57.mx',
		mailImage: 'images/mail.png',
		website: 'www.mil57.mx',
		education: 'Education',
		objective: 'Objectives',
		objectiveInfo: 'I want to keep learning new tools that could help me in the Developments in which I participate.',
		interest: 'I’m interested in',
		interestInfo: 'Design, UI, UX, Front-end, apps, mobile, teacher, trainer and/or Sports Psychologist.',
		extracurricular: 'Extracurricular',
		extracurricularInfo: 'I have represented Mexico in karate since 2002',
		want: 'Want to know more?',
		wantInfo: 'If you’d like to know more and see some live examples of my work take a look at my website: ',
		wantInfo2: 'Or just get in touch I’ll be happy to answer your questions.',
	}
	var listExperience = [
		{
			workName: 'DataFactory',
			date: '(May 2014 - Current)',
			position: 'Layout Designer',
			description: 'Front end of projects using SASS, LESS, HTML5, jQuery, bootstrap, xsl, json, ajax. Programs: crunch, TortoiseSVN, winSCP, sublime.',
		},
		{
			workName: 'DataFactory',
			date: '(December 2013 - May 2014)',
			position: 'Freelance Layout Designer',
			description: 'I participated in HTMLCENTER, made the layout of different modules usign LESS and HTML.',
		},
		{
			workName: 'IBM',
			date: '(December 2013 - May 2014)',
			position: 'UI Consultant',
			description: 'I participated in a big project for a bank. I created an interface using a mockup that was provided by the design area, was presented to the client and then backend took control of the assets. ',
		},
		{
			workName: 'Avanade/Accenture',
			date: '(November 2012 - November 2013)',
			position: 'Senior UI',
			description: 'Web Design, Graphic Design, Interface and User Experience. I  was in major projects: such as front-end for big companies like Gates Foundation and Microsoft.',
		},
		{
			workName: 'Definity First',
			date: '(July 2011 - November 2012)',
			position: 'UI Developer',
			description: 'Web Design, knowledge of HTML5, CSS3, JavaScript, jQuery, knowledge of Visual Studio and SharePoint Designer, responsible for the user interface.',
		},
		{
			workName: 'Espacios de México',
			date: '(July 2010 - July 2011)',
			position: 'Web Developer',
			description: 'Knowledge of Joomla, participate in the creation of two important pages INDE and Impuls. Basic knowledge of Excel databases and PHP.',
		},
		{
			workName: 'SysOp',
			date: '(October 2009 - July 2010)',
			position: 'Web Design',
			description: 'Consulting with over 40 clients, using design programs such as photoshop, flash, dreamweaver, illustrator.',
		}
	]
	var listSkills = [
		{
			skill: 'HTML & CSS (HTML5 & CSS3)',
			percentage:'95%',
		},
		{
			skill: 'PSD & VECTORS',
			percentage:'85%',
		},
		{
			skill: 'ENGLISH / JOOMLA',
			percentage:'80%',
		},
		{
			skill: 'JQUERY / JAVASCRIPT',
			percentage:'70%',
		},
		{
			skill: 'VISUAL STUDIO',
			percentage:'60%',
		},
		{
			skill: 'SHAREPOINT DESIGNER',
			percentage:'60%',
		},
		{
			skill: 'XSL/JSON/AJAX',
			percentage:'50%',
		},
		{
			skill: 'PHP / cPanel',
			percentage:'40%',
		},
		{
			skill: 'KNOCKOUT, ANGULAR',
			percentage:'35%',
		},
	]
	var listEducation = [
		{
			title: 'Degree in Digital Graphic Design',
			extraInfo: 'Graduated with honors',
			school: 'Universidad Regiomontana',
			city: 'Monterrey, N.L., México.',
		},
		{
			title: 'Certificate  - English Course',
			extraInfo: '',
			school: 'ILSC Education Group',
			city: 'Vancouver, BC, Canadá.',
		},
		{
			title: 'Masters in Sports Psychology',
			extraInfo: '',
			school: 'Universidad Regiomontana',
			city: 'Monterrey, N.L., México.',
		}
	]
	var listExtra = [
		{
			title: '3rd Place in North American Cup',
			place: 'Las Vegas, Nevada.',
		},
		{
			title: 'Participation in Pan American Championship',
			place: 'Managua, Nicaragua.',
		},
		{
			title: 'Participation in the International Open',
			place: 'Wasqueal, France.',
		},
		{
			title: 'Participation in World Championship Shoto Kan',
			place: 'Chicago, Illinois.',
		},
		{
			title: 'Participation in Pan American Championship',
			place: 'Quito, Ecuador.',
		},
		{
			title: '1st Place Individual Kumite Junior Olympics',
			place: 'Honolulu, Hawaii.',
		},
		{
			title: '1st Place Team Kumite Junior Olympics',
			place: 'Honolulu, Hawaii.',
		}
	]
})();
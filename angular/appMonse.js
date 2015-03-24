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
		logoName: 'Deyanira A.',
		position: 'Architecture',
		first: 'A little bit about me',
		firstAbout: 'I am a person who likes to investigate and verify, meet people, cultures, ways of thinking. Diversity is an important part in my life, this aspect allows me to translate my ideas according to what the world and people may need. I am not superman but I think the qualities that gave me my career gives me the opportunity to create and solve.',
		second: 'Professional Experience',
		imageSecond: 'images/experience.png',
		third: 'Skills',
		imageThird: 'images/skills.png',
		phone: '+52 1 55.49.72.5001',
		phoneImage: 'images/phone.png',
		mail: 'deyanira.alcala@mil57.mx',
		mailImage: 'images/mail.png',
		website: 'www.mil57.mx/DeyaPortafolio_en',
		education: 'Education',
		objective: 'Objectives',
		objectiveInfo: 'Develop challenging work to increase my skills and experience in professional and personal level. Contribute to the development of humanity through my knowledge.',
		interest: 'I’m interested in',
		interestInfo: 'Design, construction and management of architectural projects. Project management.',
		extracurricular: 'Extracurricular',
		//extracurricularInfo: 'I have represented Mexico in karate since 2002',
		want: 'Want to know more?',
		wantInfo: 'If you’d like to know more and see some live examples of my work take a look at: ',
		wantInfo2: 'Or just get in touch I’ll be happy to answer your questions.',
	}
	var listExperience = [
		{
			workName: 'Constructora Rio Tiber',
			date: '(November 2014 - Current)',
			position: 'Jr. Architect',
			description: 'I’m currently working on a construction company engaged in different industries including interior design, architecture and construction of hotels and houses around the Mexican republic.',
		},
		{
			workName: 'Mil57',
			date: '(January 2013 - Current)',
			position: 'Designer',
			description: 'Develop and realize client’s ideas through graphic and architectural design. Accomplish logo designs, renders, architectural plans, facilities criteria and branding.',
		},
		{
			workName: 'Sustainable Hostel: Ecological community “Izcuintle”',
			date: '(July 2014)',
			position: 'Jr. Architect Internship',
			description: 'Preliminary architectural design, brochure design for submission to donors, proposal of sustainability strategies',
		},
		{
			workName: 'MedicIN',
			date: '(May 2014)',
			position: 'Graphic designer. ',
			description: 'Corporate identity (logos/business cards/ brochures) business plan and marketing strategies.',
		}
	]
	var listSkills = [
		{
			skill: 'AutoCAD',
			percentage:'85%',
		},
		{
			skill: 'English',
			percentage:'85%',
		},
		{
			skill: 'Photoshop',
			percentage:'80%',
		},
		{
			skill: 'Illustrator',
			percentage:'75%',
		},
		{
			skill: 'Sketchup + vRay',
			percentage:'65%',
		},
		{
			skill: 'Revit',
			percentage:'60%',
		},
		{
			skill: '3d Max',
			percentage:'50%',
		},
		{
			skill: 'Rhino',
			percentage:'40%',
		}
	]
	var listEducation = [
		{
			title: 'Degree in Architecture',
			extraInfo: '2009/2014',
			school: 'Monterrey Institute of Technology and Higher Education',
			city: 'Distrito Federal, México.',
		},
		{
			title: 'Degree in Art History',
			extraInfo: '2008/2009',
			school: 'University of the Cloister of Sor Juana',
			city: 'Distrito Federal, México.',
		}
	]
	var listExtra = [
		{
			title: 'Team semiprofessional soccer Dragonas (LMF)',
			place: '2012 season',
		},
		{
			title: 'Member of the representative football soccer team of Monterrey Institute of Technology and Higher Education',
			place: '(2005 - 2007) & (2010 – 2011).',
		}
	]
})();
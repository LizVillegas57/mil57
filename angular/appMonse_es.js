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
		position: 'Arquitectura',
		first: 'Acerca de mí',
		firstAbout: 'Soy una persona a la que le gusta investigar y comprobar, conocer distintas culturas o formas de pensar. La diversidad es una parte importante en mi vida, este aspecto me permite plasmar mis ideas de acuerdo con lo que el mundo y las personas pueden necesitar. No soy superman pero creo que las cualidades que me brindó mi carrera me dan la oportunidad de crear y solucionar.',
		second: 'Experiencia Profesional',
		imageSecond: 'images/experience.png',
		third: 'Habilidades',
		imageThird: 'images/skills.png',
		phone: '+52 1 55.49.72.5001',
		phoneImage: 'images/phone.png',
		mail: 'deyanira.alcala@mil57.mx',
		mailImage: 'images/mail.png',
		website: 'www.mil57.mx/DeyaPortafolio',
		education: 'Educación',
		objective: 'Objetivos',
		objectiveInfo: 'Desarrollar labores desafiantes que incrementen mis habilidades y experiencia en el ámbito profesional y personal. Contribuir al desarrollo de la humanidad por medio de mis conocimientos.',
		interest: 'Áreas de Interés',
		interestInfo: 'Diseño arquitectónico, urbanismo, sustentabilidad, construcción, gestión y administración de proyectos.',
		extracurricular: 'Extracurricular',
		//extracurricularInfo: 'I have represented Mexico in karate since 2002',
		want: '¿Quieres saber más?',
		wantInfo: 'Si quieres saber más visita esta página: ',
		wantInfo2: 'O ponte en contacto conmigo.',
	}
	var listExperience = [
		{
			workName: 'Constructora Río Tiber',
			date: '(Noviembre 2014 - Actual)',
			position: 'Arquitecto Jr.',
			description: 'Actualmente estoy trabajando en una empresa constructora dedicada a diferentes industrias, incluyendo el diseño de interiores, arquitectura y construcción de hoteles y casas alrededor de la República Mexicana.',
		},
		{
			workName: 'Mil57',
			date: '(Enero 2013 - Actual)',
			position: 'Diseñadora',
			description: 'Desarrollar y hacer realidad las ideas de los clientes a través del diseño gráfico y arquitectónico. Realizar diseños de logotipo, renders, planos arquitectónicos, criterios instalaciones y branding ',
		},
		{
			workName: 'Anteproyecto para albergue sustentable "Comunidad Ecológica Izcuintle"',
			date: '(Julio 2014)',
			position: 'Arquitecto Jr. (Prácticas)',
			description: 'Diseño arquitectónico preliminar, diseño de folletos para su presentación a los donantes, la propuesta de estrategias de sostenibilidad',
		},
		{
			workName: 'MedicIN',
			date: '(Mayo 2014)',
			position: 'Diseñadora Gráfica',
			description: 'Estrategias de identidad corporativa (logotipos / tarjetas de visita / folletos) del plan de negocio y de marketing.',
		}
	]
	var listSkills = [
		{
			skill: 'AutoCAD',
			percentage:'85%',
		},
		{
			skill: 'Inglés',
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
			title: 'Arquitectura',
			extraInfo: '2009/2014',
			school: 'Intstituto Tecnológico y de Estudios Superiores de Monterrey. (CEM)',
			city: 'Distrito Federal, México.',
		},
		{
			title: 'Diplomado en Historia del arte',
			extraInfo: '2008/2009',
			school: 'Universidad del Claustro de Sor Juana',
			city: 'Distrito Federal, México.',
		}
	]
	var listExtra = [
		{
			title: 'Equipo de fútbol semiprofesional Dragonas (LMF)',
			place: 'Temporada 2012',
		},
		{
			title: 'Miembro del equipo representativo del fútbol del Intstituto Tecnológico y de Estudios Superiores de Monterrey. (CEM)',
			place: '(2005 - 2007) & (2010 – 2011).',
		}
	]
})();
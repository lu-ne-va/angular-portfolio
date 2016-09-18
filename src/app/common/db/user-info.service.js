'use strict';

export default function userInfo() {

	const byDefault = {
		personal : {
			name: 'John Smith',
			place: 'Portland, Oregon, USA',

			lang: 'English'
		},
		skills : [
			{
				name: 'PHP',
				level: 'medium'
			},
			{
				name: 'javascript',
				level: 'low'
			},
			{
				name: 'c#',
				level: 'hard'
			}

		],
		portfolio : {
			technologies: ['PHP', 'Ruby', 'Javascript'],
			projects: [
				{
					name: 'NavalPlan',
					technologies: [ 'PHP', 'Ruby'],
					link: '#'
				},
				{
					name: 'MyTime',
					technologies: ['Javascript'],
					link: '#'
				},
				{
					name: 'Formidable',
					technologies: ['PHP', 'Ruby'],
					link: '#'
				},
				{
					name: 'MyTime',
					technologies: ['Javascript'],
					link: '#'
				},
				{
					name: 'Monsoon',
					technologies: ['ActionScript'],
					link: '#'
				}
			]
		},
		experience  : [
			{
				technology: 'PHP',
				edge: '6 years'
			},
			{
				technology: 'Ruby',
				edge: '7 years'
			},
			{
				technology: 'Javascript',
				edge: '4 years'
			},
			{
				technology: 'ActionScript',
				edge: '3 years'
			}
		],
		preferredEnvironment : 'Git, GitHub, vim, emacs, Jenkins, Mac OSX',

		feedback : [
			{
				title: 'The most amazing …',
				text: '… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore',
				author: 'Martin'
			},
			{
				title: 'In clients I look for …',
				text: '… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				author: 'Martin'
			},
			{
				title: 'Note',
				text: '… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore'
			}
		]

	};

	let personal = JSON.parse(localStorage.getItem( 'userInfo-personal' ));
	if (!personal) {
		localStorage.setItem( 'userInfo-personal', JSON.stringify(byDefault.personal) );
		personal = byDefault.personal;
	}
	let skills = JSON.parse(localStorage.getItem( 'userInfo-skills' ));
	if (!skills) {
		localStorage.setItem( 'userInfo-skills', JSON.stringify(byDefault.skills) );
		skills = byDefault.skills;
	}
	let portfolio = JSON.parse(localStorage.getItem( 'userInfo-portfolio' ));
	if (!portfolio) {
		localStorage.setItem( 'userInfo-portfolio', JSON.stringify(byDefault.portfolio) );
		portfolio = byDefault.portfolio;
	}
	let experience = JSON.parse(localStorage.getItem( 'userInfo-experience' ));
	if (!experience) {
		localStorage.setItem( 'userInfo-experience', JSON.stringify(byDefault.experience) );
		experience = byDefault.experience;
	}
	let preferredEnvironment = JSON.parse(localStorage.getItem( 'userInfo-preferredEnvironment' ));
	if (!preferredEnvironment) {
		localStorage.setItem( 'userInfo-preferredEnvironment', JSON.stringify(byDefault.preferredEnvironment) );
		preferredEnvironment = byDefault.preferredEnvironment;
	}
	let feedback = JSON.parse(localStorage.getItem( 'userInfo-feedback' ));
	if (!feedback) {
		localStorage.setItem( 'userInfo-feedback', JSON.stringify(byDefault.feedback) );
		feedback = byDefault.feedback;
	}


	return  {
		getPersonalInfo() {
			return personal;
		},
		updatePersonalInfo(newPersonal) {
			localStorage.setItem( 'userInfo-personal', JSON.stringify(newPersonal));
			personal = newPersonal;
		},
		getSkills() {
			return skills;
		},
		updateSkills(newSkills) {
			localStorage.setItem( 'userInfo-skills', JSON.stringify(newSkills));
			skills = newSkills;
		},


		getPortfolio() {
			return portfolio;
		},
		getExperience() {
			return experience;
		},
		getPreferredEnvironment() {
			return preferredEnvironment;
		},
		getFeedback() {
			return feedback;
		}
	};
}



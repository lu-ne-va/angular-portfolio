'use strict';

export default class About {
	constructor (userInfo) {
		this._ = {userInfo};
		this.userAbout = userInfo.getPersonalInfo();
		this.userSkills = userInfo.getSkills();
		this.nameEdit = false;
		this.placeEdit = false;
		this.langEdit = false;
		this.skillsAdd = false;
	}
	changeNameStateToEdit() {
		this.nameEdit = true;
	}
	changeNameStateToRead() {
		this.nameEdit = false;
	}
	changeName(userName) {

		if(userName) {
			this.userAbout.name = userName;
			this._.userInfo.updatePersonalInfo(this.userAbout);
		}

		this.nameEdit = false;
	}
	changePlaceStateToEdit() {
		this.placeEdit = true;
	}

	changePlaceStateToRead() {
		this.placeEdit = false;
	}
	changePlace(userPlace) {

		if(userPlace) {
			this.userAbout.place = userPlace;
			this._.userInfo.updatePersonalInfo(this.userAbout);
		}

		this.placeEdit = false;
	}
	changeLangStateToEdit() {
		this.langEdit = true;
	}

	changeLangStateToRead() {
		this.langEdit = false;
	}
	changeLang(userLang) {

		if(userLang) {
			this.userAbout.lang = userLang;
			this._.userInfo.updatePersonalInfo(this.userAbout);
		}

		this.langEdit = false;
	}
	changeSkillStateToAdd() {
		this.skillsAdd = true;
	}

	changeSkillStateToRead() {
		this.skillsAdd = false;
	}
	addSkill(newSkill, newSkillLevel) {

		if(newSkill && newSkillLevel) {
			let newSkillObj = {
				name: newSkill,
				level: newSkillLevel
			};
			this.userSkills.push(newSkillObj);
			this._.userInfo.updateSkills(this.userSkills);
			this.skillsAdd = false;
		}

	}
	deleteSkill(index) {
		this.userSkills.splice(index, 1);
		this._.userInfo.updateSkills(this.userSkills);
	}

	printPage() {
		window.print();
	}
};

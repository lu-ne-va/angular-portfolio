'use strict';

export default class MoreController {
	constructor (userInfo) {
		// debugger;
		this._ = {userInfo};
		this.portfolio = userInfo.getPortfolio();
		this.experience = userInfo.getExperience();
		this.preferredEnvironment = userInfo.getPreferredEnvironment();
		this.feedback = userInfo.getFeedback();
	}
	getStringFromArr(arr) {
		return arr.join(', ');
	}
};

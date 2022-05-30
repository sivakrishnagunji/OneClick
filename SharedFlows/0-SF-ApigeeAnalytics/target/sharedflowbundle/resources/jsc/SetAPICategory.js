 setAPICategory = function setAPICategory(){ // eslint-disable-line no-undef
	var apiName = context.getVariable("apiproxy.name").toLowerCase();

	if (apiName.indexOf("internal") === -1) {
		context.setVariable("apiCategory", "External");
	} else {
		context.setVariable("apiCategory", "Internal");
	}
};

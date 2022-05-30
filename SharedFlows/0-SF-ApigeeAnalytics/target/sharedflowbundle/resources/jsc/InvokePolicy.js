 try {
	setAPICategory(); // eslint-disable-line no-undef
} catch (err){
	context.setVariable("errorJSON", "a42_generic_internal_server_error");
	throw "internalConfigError";
}
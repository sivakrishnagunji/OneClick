RouteToTarget = function RouteToTarget() { // eslint-disable-line no-undef
	var isTargetError = false;
	var targetURL = "";
	var targetsEndpointPropertiesApi = context.getVariable("targets_endpoint_properties_api");
	var targetsEndpointPropertiesDefault = context.getVariable("targets_endpoint_properties_default");
	var targetsEndpointProperties;
	context.setVariable("target.copy.pathsuffix", false);
	if (targetsEndpointPropertiesApi !== null) {
		targetsEndpointProperties = targetsEndpointPropertiesApi;
	} else {
		targetsEndpointProperties = targetsEndpointPropertiesDefault;
	}
	targetsEndpointProperties = JSON.parse(targetsEndpointProperties);
	if (targetsEndpointProperties === null) {
		isTargetError = true;
		context.setVariable("isTargetError", isTargetError);
		context.setVariable("errorJSON", "a42_generic_internal_config_error");
		throw isTargetError;
	}
	var targetType = "";
	var stub = context.getVariable("request.header.target-stub");
	if (stub !== null){
		stub.toLowerCase();
	} else {
		stub = "false";
	}
	if (stub === "true") {
		targetType = "TARGET_STUB";
	} else {
		targetType = "TARGET_DEFAULT";
	}
	var protocol = "";
	if (targetsEndpointProperties[targetType].TARGET_SSL_ENABLED === true) {
		protocol = "https";
	} else {
		protocol = "http";
	}
	var targetHost = targetsEndpointProperties[targetType].TARGET_HOST;
	var targetPort = targetsEndpointProperties[targetType].TARGET_PORT;
	var basepath = targetsEndpointProperties[targetType].TARGET_BASEPATH;
	var targetResourcePath = context.getVariable("proxy.pathsuffix");
	if (targetResourcePath === null) {
		targetResourcePath = "/";
	}
	var targetQueryParameters = context.getVariable("request.querystring");
	if (targetQueryParameters === null) {
		targetQueryParameters = "";
	}

	function createTargetURL() {
		if (targetQueryParameters === "") {
			targetURL = protocol + "://" + targetHost + ":" + targetPort + basepath + targetResourcePath;
		} else {
			targetURL = protocol + "://" + targetHost + ":" + targetPort + basepath + targetResourcePath + "?" + targetQueryParameters;
		}
	}

	function setContextVariables() {
		context.setVariable("ROUTING.target.type", targetType);
		context.setVariable("ROUTING.target.host", targetsEndpointProperties[targetType].TARGET_HOST);
		context.setVariable("ROUTING.target.port", targetsEndpointProperties[targetType].TARGET_PORT);
		context.setVariable("ROUTING.target.enabled", targetsEndpointProperties[targetType].TARGET_ENABLED);
		context.setVariable("ROUTING.ssl.ciphers", targetsEndpointProperties[targetType].TARGET_SSL_CIPHERS);
		context.setVariable("ROUTING.target.ssl.enabled", targetsEndpointProperties[targetType].TARGET_SSL_ENABLED);
		context.setVariable("ROUTING.target.ssl.client.auth.enabled", targetsEndpointProperties[targetType].TARGET_SSL_CLIENT_AUTH_ENABLED);
		context.setVariable("ROUTING.target.ssl.key.store", targetsEndpointProperties[targetType].TARGET_SSL_KEY_STORE);
		context.setVariable("ROUTING.target.ssl.key.alias", targetsEndpointProperties[targetType].TARGET_SSL_KEY_ALIAS);
		context.setVariable("ROUTING.target.ssl.trust.store", targetsEndpointProperties[targetType].TARGET_SSL_TRUST_STORE);
		context.setVariable("ROUTING.ssl.protocols", targetsEndpointProperties[targetType].TARGET_SSL_PROTOCOLS);
		context.setVariable("ROUTING.ssl.ignore.validation.errors", targetsEndpointProperties[targetType].TARGET_SSL_IGNORE_VALIDATION_ERRORS);

		context.setVariable("target.url", targetURL);
	}
	createTargetURL();
	setContextVariables();

};
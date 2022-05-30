
var routeToTargetServerSpec = require('../jsc/RouteToTargetServer/RouteToTargetServer');
describe('RouteToTargetServer Suite', function() {
    beforeEach(function(){
        var Context = function(){
        };
        Context.prototype = {
            setVariable: function(propertyName, propertyValue){
            this[propertyName] = propertyValue;
            },
            getVariable: function(propertyName){
              return this[propertyName];
            }
        };
        context = new Context();
    });
     
    it ('Positive: RouteToTargetServer case 1', function() {
        context.setVariable("targets_endpoint_properties_api","{\"TARGET_DEFAULT\": {\"TARGET_HOST\": \"apixdev.developer.vodafone.com\",\"TARGET_PORT\": \"443\",\"TARGET_BASEPATH\": \"\",\"TARGET_ENABLED\": true,\"TARGET_SSL_ENABLED\": true,\"TARGET_SSL_CIPHERS\": \"\",\"TARGET_SSL_CLIENT_AUTH_ENABLED\": false,\"TARGET_SSL_KEY_STORE\": \"\",\"TARGET_SSL_KEY_ALIAS\": \"\",\"TARGET_SSL_TRUST_STORE\": \"\",\"TARGET_SSL_PROTOCOLS\": \"TLSv1.1,TLSv1.2\",\"TARGET_SSL_IGNORE_VALIDATION_ERRORS\": \"false\"},\"TARGET_STUB\": {\"TARGET_HOST\": \"apixdev.developer.vodafone.com\",\"TARGET_PORT\": \"80\",\"TARGET_ENABLED\": true,\"TARGET_SSL_ENABLED\": true,\"TARGET_SSL_CIPHERS\": \"\",\"TARGET_SSL_CLIENT_AUTH_ENABLED\": false,\"TARGET_SSL_KEY_STORE\": \"myKeystore\",\"TARGET_SSL_KEY_ALIAS\": \"stagingKey\",\"TARGET_SSL_TRUST_STORE\": \"\", \"TARGET_SSL_PROTOCOLS\": \"\",\"TARGET_SSL_IGNORE_VALIDATION_ERRORS\": \"false\"}}");
  
        context.setVariable("targets_endpoint_properties_default",null);
		context.setVariable("request.header.vf-target-stub","false");
		context.setVariable("proxy.pathsuffix","");
		context.setVariable("request.querystring", "");
        
       expect(routeToTarget()).toBe();
       expect(context.getVariable("target.url")).toBe("https://apixdev.developer.vodafone.com:443");
    });
	
	it ('Positive: RouteToTargetServer case 2', function() {
        context.setVariable("targets_endpoint_properties_api","{\"TARGET_DEFAULT\": {\"TARGET_HOST\": \"apixdev.developer.vodafone.com\",\"TARGET_PORT\": \"443\",\"TARGET_ENABLED\": true,\"TARGET_SSL_ENABLED\": true,\"TARGET_SSL_CIPHERS\": \"\",\"TARGET_SSL_CLIENT_AUTH_ENABLED\": false,\"TARGET_SSL_KEY_STORE\": \"\",\"TARGET_SSL_KEY_ALIAS\": \"\",\"TARGET_SSL_TRUST_STORE\": \"\",\"TARGET_SSL_PROTOCOLS\": \"TLSv1.1,TLSv1.2\",\"TARGET_SSL_IGNORE_VALIDATION_ERRORS\": \"false\"},\"TARGET_STUB\": {\"TARGET_HOST\": \"apixdev.developer.vodafone.com\",\"TARGET_PORT\": \"80\",\"TARGET_BASEPATH\": \"\",\"TARGET_ENABLED\": true,\"TARGET_SSL_ENABLED\": false,\"TARGET_SSL_CIPHERS\": \"\",\"TARGET_SSL_CLIENT_AUTH_ENABLED\": false,\"TARGET_SSL_KEY_STORE\": \"myKeystore\",\"TARGET_SSL_KEY_ALIAS\": \"stagingKey\",\"TARGET_SSL_TRUST_STORE\": \"\", \"TARGET_SSL_PROTOCOLS\": \"\",\"TARGET_SSL_IGNORE_VALIDATION_ERRORS\": \"false\"}}");
  
        context.setVariable("targets_endpoint_properties_default",null);
		context.setVariable("request.header.vf-target-stub","true");
		context.setVariable("proxy.pathsuffix","");
		context.setVariable("request.querystring", "");
        
       expect(routeToTarget()).toBe();
       expect(context.getVariable("target.url")).toBe("http://apixdev.developer.vodafone.com:80");
    });
	
	it ('Positive: RouteToTargetServer case 3', function() {
        context.setVariable("targets_endpoint_properties_default","{\"TARGET_DEFAULT\": {\"TARGET_HOST\": \"apixdev.developer.vodafone.com\",\"TARGET_PORT\": \"443\",\"TARGET_BASEPATH\": \"\",\"TARGET_ENABLED\": true,\"TARGET_SSL_ENABLED\": true,\"TARGET_SSL_CIPHERS\": \"\",\"TARGET_SSL_CLIENT_AUTH_ENABLED\": false,\"TARGET_SSL_KEY_STORE\": \"\",\"TARGET_SSL_KEY_ALIAS\": \"\",\"TARGET_SSL_TRUST_STORE\": \"\",\"TARGET_SSL_PROTOCOLS\": \"TLSv1.1,TLSv1.2\",\"TARGET_SSL_IGNORE_VALIDATION_ERRORS\": \"false\"},\"TARGET_STUB\": {\"TARGET_HOST\": \"apixdev.developer.vodafone.com\",\"TARGET_PORT\": \"80\",\"TARGET_ENABLED\": true,\"TARGET_SSL_ENABLED\": true,\"TARGET_SSL_CIPHERS\": \"\",\"TARGET_SSL_CLIENT_AUTH_ENABLED\": false,\"TARGET_SSL_KEY_STORE\": \"myKeystore\",\"TARGET_SSL_KEY_ALIAS\": \"stagingKey\",\"TARGET_SSL_TRUST_STORE\": \"\", \"TARGET_SSL_PROTOCOLS\": \"\",\"TARGET_SSL_IGNORE_VALIDATION_ERRORS\": \"false\"}}");
  
        context.setVariable("targets_endpoint_properties_api",null);
		context.setVariable("request.header.vf-target-stub",null);
		context.setVariable("proxy.pathsuffix", null);
		context.setVariable("request.querystring", null);
        
       expect(routeToTarget()).toBe();
       expect(context.getVariable("target.url")).toBe("https://apixdev.developer.vodafone.com:443/");
    });
	
	it ('Positive: RouteToTargetServer case 4', function() {
        context.setVariable("targets_endpoint_properties_default","{\"TARGET_DEFAULT\": {\"TARGET_HOST\": \"apixdev.developer.vodafone.com\",\"TARGET_PORT\": \"443\",\"TARGET_BASEPATH\": \"\",\"TARGET_ENABLED\": true,\"TARGET_SSL_ENABLED\": true,\"TARGET_SSL_CIPHERS\": \"\",\"TARGET_SSL_CLIENT_AUTH_ENABLED\": false,\"TARGET_SSL_KEY_STORE\": \"\",\"TARGET_SSL_KEY_ALIAS\": \"\",\"TARGET_SSL_TRUST_STORE\": \"\",\"TARGET_SSL_PROTOCOLS\": \"TLSv1.1,TLSv1.2\",\"TARGET_SSL_IGNORE_VALIDATION_ERRORS\": \"false\"},\"TARGET_STUB\": {\"TARGET_HOST\": \"apixdev.developer.vodafone.com\",\"TARGET_PORT\": \"80\",\"TARGET_ENABLED\": true,\"TARGET_SSL_ENABLED\": true,\"TARGET_SSL_CIPHERS\": \"\",\"TARGET_SSL_CLIENT_AUTH_ENABLED\": false,\"TARGET_SSL_KEY_STORE\": \"myKeystore\",\"TARGET_SSL_KEY_ALIAS\": \"stagingKey\",\"TARGET_SSL_TRUST_STORE\": \"\", \"TARGET_SSL_PROTOCOLS\": \"\",\"TARGET_SSL_IGNORE_VALIDATION_ERRORS\": \"false\"}}");
  
        context.setVariable("targets_endpoint_properties_api",null);
		context.setVariable("request.header.vf-target-stub",null);
		context.setVariable("proxy.pathsuffix", "/asd");
		context.setVariable("request.querystring", "abc=qwe");
        
       expect(routeToTarget()).toBe();
       expect(context.getVariable("target.url")).toBe("https://apixdev.developer.vodafone.com:443/asd?abc=qwe");
    });
	
	it ('negative: RouteToTargetServer', function() {
        context.setVariable("targets_endpoint_properties_default",null);
  
        context.setVariable("targets_endpoint_properties_api",null);
		context.setVariable("request.header.vf-target-stub","true");
		context.setVariable("proxy.pathsuffix", null);
		context.setVariable("request.querystring", null);
        
       expect(routeToTarget).toThrow();
       expect(context.getVariable("errorJSON")).toBe("a42_generic_internal_config_error");
    });
	
});
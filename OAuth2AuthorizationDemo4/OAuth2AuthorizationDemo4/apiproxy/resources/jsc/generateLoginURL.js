authorizeEndpoint = "https://dev-a5a7msjg.us.auth0.com/authorize";
client_id = "Fu6vvIzfPgV3kqSHSMMhW4JjwMwvzuvB";
client_secret = "vXcuFlMBIXjPRkHoSQnkf61rF88epD2tt3B12H5Zn-E150pmJszX-o4nYgygbFZl";
state = "email";
scope = "openid%20profile%20email"
response_type = "code"

redirect_uri = "https://amer-api-partner38-dev.apigee.net/oauth2authorizationdemo4/redirect?grant_type=client_credentials";

url = authorizeEndpoint + "?client_id=" + client_id + "&response_type=" + response_type + "&state=" + state + "&scope=" + scope + "&redirect_uri=" + redirect_uri;

context.setVariable("login.url", url);
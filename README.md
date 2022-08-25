# Description
With this tool you can configure keycloak.

Do not use this tool on production environments. Only for local running keycloaks servers. 

# Features
- Create clients 
- Create users
- Create roles
- Assign roles to users

# Usage
With docker you can spin up a keycloak server in no time. See the following command:
```docker run -d --name some-keycloak -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:18.0.2 start-dev```
<br/>
<br/>
Than you can create a ``config.json``. Here is an example:

````
{
  "connectionConfig": {
    "baseUrl": "http://localhost:8080/"
  },
  "realmName": "my-app",
  "adminUsername": "admin",
  "adminPw": "admin",
  "clients": [
    {
      "clientId": "my-app-frontend",
      "rootUrl": "http://localhost:3000/",
      "redirectUris": ["http://localhost:3000/"]
    },
    {
      "clientId": "my-app-backend",
      "bearerOnly": true
    }
  ],
  "users": [
    {
      "email": "max.mustermann@test.de",
      "password": "123456",
      "roles": ["USER"]
    },
    {
      "email": "tom.mustermann@test.de",
      "password": "123456",
      "roles": ["ADMIN"]
    }
  ],
  "roles": [{ "name": "USER" }, { "name": "ADMIN" }]
}
````
<br/>
<br/>
Finally you can run this tool with the following command:

`npx keycloak-configurator --config config.json`

> You can also run only ```npx keycloak-configurator``` without the config parameter. Than it will take the config.json depicted above as default.

> To use the defaults but specify only the baseUrl run ```npx keycloak-configurator connectionConfig:baseUrl http://localhost:8084/```

# FAQ
## Keycloak has already an export feature. Why do I need this tool?
True, but for example keycloaks export feature will not export the users.
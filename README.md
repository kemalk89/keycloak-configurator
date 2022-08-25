# Keycloak configurator
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![npm version](https://img.shields.io/npm/v/keycloak-configurator.svg?style=flat)](https://www.npmjs.com/package/keycloak-configurator)
## Description
With this tool you can configure keycloak.

**Do not use this tool on production environments. Only for local running keycloaks servers.** 

## Motivation
Lets say you would like to create a webapp. On the frontend you would like to implement a Single Page Application. On the backend you provide an API. 
<br/>
What about Auth? Well, for this concern I like using keycloak. With docker you can spin up a local keycloak instance in no time. The only problem is it gets tedious to always create your users, assign roles, etc. With this tool I can init keycloak **repeatably** with one single command.

> As mentioned above do not use this tool for production.


## Features
- Create clients 
- Create users
- Create roles
- Assign roles to users

## Usage
With docker you can spin up a keycloak server in no time. See the following command:
```docker run -d --name some-keycloak -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:18.0.2 start-dev```
<br/>
<br/>
Than run ```npx keycloak-configurator```. This command will use the default config file [default-config.json](./default-config.json).
<br/>
<br/>
To use the defaults but specify only the baseUrl run ```npx keycloak-configurator --connectionConfig:baseUrl http://localhost:8084/```
<br/>
<br/>
Of course you can pass a custom config.json with this command:
`npx keycloak-configurator --config my-config.json`. Copy & Paste the [default-config.json](./default-config.json) as a starting point.

# FAQ
## Keycloak has already an export feature. Why do I need this tool?
True, but for example keycloaks export feature will not export the users.
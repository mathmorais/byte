<div align="center">
  <img style="margin: 0" alt="byte" src="./assets/logo.svg" />
</div>

#

## Table of Contents

- [Overview](#overview)
  - [About](#about)
  - [Demo](#demo)
  - [Technologies](#technologies)
- [How to use](#how-to-use)
- [Contact](#contact)


## Demo

<img alt="" src="#">

<img alt="" src="#">

## About

Byte is a simple blog with the focus on technology articles, inside the webpage is possible to see articles with differents topics.



Currently only an account with admin role is allowed to create articles, for now the only way to set this role is changing them on the database. I think that the best option for solve this, is to create a different application with a admin dashboard or something like that.

## Techs

- Docker 
- Docker compose
- Git 
- Node
- Yarn  

## Start

### Development 

In the development enviroment you can just run with node scripts, you can check them inside the **package.json**

> Obs: In these method we don't will to use docker so, the database (**mongodb**) will need to installed on your machine.

```bash
  # Will start the client on your localhost
  yarn client:dev 

  # Will start the node server, necessary to have the database (mongodb) installed
  yarn server:dev
```

### Production 

In the production enviroment you will only need docker and docker compose installed on your machine.

```bash
  # Will start all the nescessary things to start the application
  docker-compose up
```

## Contact

- GitHub [@mathmorais](https://github.com/mathmorais)

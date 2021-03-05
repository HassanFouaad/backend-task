[ Description. ](#desc)

[ SQL Script. ](#sql)

[ Required Middlewares](#pag)

[ How To Run?. ](#run)



<a name="desc"></a>
## 1. Description
This is Nodejs backend task for DAWAM Agency
Authored by Hassan Fouad


<a name="sql"></a>
## 2. SQL Script
SQL (DDL Script) that describes the schema could be found in script.sql


<a name="pag"></a>
## 3. Pagination Middleware
I have coded two different pagination middleware
in /middlewares/pagination.js

#### paginationwithCondition accepts sequelize orm query 
#### paginationwithRaw accepts  sql raw query 


<a name="run"></a>
## 4. How To Run
#### 1- Please Check .env.example in repo files
#### 2- Set your server port
#### 3- Set Postgresql DB configuration
#### 4- Run npm run migrate
#### 5- Run npm run seed to generate category parent
#### 6- Run npm install
#### 7- Run npm run dev to start development Server

-- DDL data definistion language responsible for structure of data --> create, alter, drop, truncate
-- DML data manipulation language responsible for changing data insert, update, delete, slect
--dql data query language select
-- dcl data control language --> privelages, grant , revoke
-- TCL transaction control language  commit, rollback, savepoint
create database `uber`;
create table 'drivers'(
   id    int   not null auto_increment,
   name  varchar(50) not null,
   email varchar(100) not null,
   password varchar(100) mot null,
   status enum('online', 'offline') default 'offline',
   createdAT timestamp default current_timestamp 
   updatedAT timestamp default current_timestamp on update current_timestamp
);
create table  `car`(
   id int not null auto_increment primary key,
   model varchar(50) not null,
   numberOfLicsence varchar(8) not null unique,
   driverID int not null unique,
   createdAt timestamp default current_timestamp,
   updatedat timestamp default current_timestamp on update current_timestamp,
   foreign key (driverID) refrence drivers(id)
);
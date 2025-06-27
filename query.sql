-- DDL data definistion language responsible for structure of data --> create, alter, drop, truncate
-- DML data manipulation language responsible for changing data insert, update, delete, slect
--dql data query language select
-- dcl data control language --> privelages, grant , revoke
 -- TCL transaction control language  commit, rollback, savepoint
 CREATE DATABASE IF NOT EXISTS 'uber';
 use 'uber';
 create table 'drivers'(
    id int(11) NOT null AUTO_INCREMENT primary key,
    NAME VARCHAR(50) NOT null,
    email VARCHAR(50) NOT null,
    status ENUM('active', 'inactive', 'suspended') not null default 'active', --must be small letters 
    dob DATE,
    createdAt timestamp default current_timestamp,
    updateAt timestamp default current_timestamp on update current_timestamp,
 )

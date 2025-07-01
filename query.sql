-- DDL data definistion language responsible for structure of data --> create, alter, drop, truncate
-- DML data manipulation language responsible for changing data insert, update, delete, slect
--dql data query language select
-- dcl data control language --> privelages, grant , revoke
-- TCL transaction control language  commit, rollback, savepoint
create database `uber`;
create table `drivers`(
   id    int   not null auto_increment,
   name  varchar(50) not null,
   email varchar(100) not null,
   password varchar(100) not null,
   status enum('online', 'offline') default 'offline',
   createdAT timestamp default current_timestamp 
   updatedAT timestamp default current_timestamp on update current_timestamp
);
create table  `cars`(
   id int not null auto_increment primary key,
   model varchar(50) not null,
   numberOfLicsence varchar(8) not null unique,
   driverID int not null unique,
   createdAt timestamp default current_timestamp,
   updatedat timestamp default current_timestamp on update current_timestamp,
   foreign key (driverID) refrence drivers(id)
);

insert into `cars` values('null', 'x5', 'abcd-123',1 );
insert into drivers values("null", "Ahmed", "ahmed@gmail.com", "1234");

update drivers set name  = "Ahmed"; -- will update the name in the entire database then RUN;
delete from drivers; -- also must RUN will delete the whole data within the table;
drop table Orders; --delete the entire table
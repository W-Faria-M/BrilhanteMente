-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database BrilhanteMente;

use BrilhanteMente;

create table usuario (
	id int primary key auto_increment,
    nome varchar(45),
    nomeUsuario varchar(45),
    senha varchar(45));

create table formulario (
	id int auto_increment,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(id),
    primary key (id, fkUsuario),
    estado varchar(45),
    idade int,
    nmrFilhos int,
    nmrFilhosPlan int);

create table post (
	id int primary key auto_increment,
    titulo varchar(100),
    descricao varchar(250),
    fkUsuario int,
    foreign key (fkUsuario) references usuario(id));

create table curtida (
	id int primary key auto_increment,
    fkPost int,
    fkUsuario int,
    foreign key (fkPost) references post(id),
    foreign key (fkUsuario) references post(fkUsuario));
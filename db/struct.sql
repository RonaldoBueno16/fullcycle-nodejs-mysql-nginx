USE fullcycle;

CREATE TABLE `usuarios` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(50) NOT NULL COLLATE 'utf8_unicode_ci',
	PRIMARY KEY (`id`) USING BTREE
);

INSERT INTO `usuarios` (`id`, `nome`) VALUES
	(1, 'Geralt'),
	(2, 'Joao Garcia'),
	(3, 'Leonardo Nunes'),
	(4, 'Nicole Fonseca'),
	(5, 'Joao Damasco');
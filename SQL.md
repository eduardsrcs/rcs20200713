## Create database

[Setting Character Sets and Collations](https://mariadb.com/kb/en/setting-character-sets-and-collations/)

**SQL:**

    CREATE DATABASE rcs 
      CHARACTER SET = 'utf8'
      COLLATE = 'utf8_general_ci';

[Supported Character Sets and Collations](https://mariadb.com/kb/en/supported-character-sets-and-collations/)

## Create user

[How To Create MariaDB User And Grant Privileges](https://phoenixnap.com/kb/how-to-create-mariadb-user-grant-privileges)

**SQL:**

    CREATE USER 'rcsuser'@localhost IDENTIFIED BY 'userRcs01';

    GRANT ALL PRIVILEGES ON rcs.* TO 'rcsuser'@localhost IDENTIFIED BY 'userRcs01';

    FLUSH PRIVILEGES;

    SHOW GRANTS FOR 'rcsuser'@localhost;

### Remove MariaDB User Account

    DROP USER 'rcsuser'@localhost;

Also, [CREATE USER](MarkdownLivePreview: Toggle) on MariaDB docs page.

## Create table

[MariaDB - Create Tables](https://www.tutorialspoint.com/mariadb/mariadb_create_tables.htm)
on tutorialspoint

    CREATE TABLE users (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(63) NOT NULL,
      surname VARCHAR(63) NOT NULL,
      email VARCHAR(63) NOT NULL
      creation_date DATE,
      PRIMARY KEY ( id )
    );

### Created by PHPMyAdmin:

    CREATE TABLE `rcs`.`users` (
      `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
      `name` VARCHAR(127) NOT NULL ,
      `surname` VARCHAR(127) NULL ,
      `email` VARCHAR(127) NOT NULL ,
      `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
      PRIMARY KEY (`id`))
      ENGINE = InnoDB;

### Change something in table structure:

    ALTER TABLE `users`
      CHANGE `surname` `surname` VARCHAR(127) NULL DEFAULT NULL;
or:

    ALTER TABLE `users`
      CHANGE `email` `email` VARCHAR(127) NOT NULL;

### Insert record:

    INSERT INTO `users` (
        `id`, `name`, `surname`, `email`, `creation_date`)
      VALUES (
        NULL, 'Eduards', NULL, 'e@m.v', current_timestamp());

### Delete record:

    "DELETE FROM `users` WHERE `users`.`id` = 2"
-- MySQL Script generated by MySQL Workbench
-- 02/21/16 12:34:47
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cities` (
  `code` VARCHAR(3) NOT NULL,
  `name` VARCHAR(20) NULL,
  `description` VARCHAR(250) NULL,
  `lat` DECIMAL NULL,
  `lng` DECIMAL NULL,
  `langauge` VARCHAR(10) NULL,
  `country` VARCHAR(3) NULL,
  `population` INT NULL,
  `currency` VARCHAR(3) NULL,
  `timeZone` VARCHAR(3) NULL,
  PRIMARY KEY (`code`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`attractions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`attractions` (
  `code` VARCHAR(3) NOT NULL,
  `name` VARCHAR(30) NULL,
  `type` VARCHAR(20) NULL,
  `description` VARCHAR(250) NULL,
  `dateOpened` DATE NULL,
  `architect` VARCHAR(30) NULL,
  `lat` DECIMAL NULL,
  `lng` DECIMAL NULL,
  `wikiLink` VARCHAR(100) NULL,
  `cities_code` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`code`),
  INDEX `fk_attractions_cities_idx` (`cities_code` ASC),
  CONSTRAINT `fk_attractions_cities`
    FOREIGN KEY (`cities_code`)
    REFERENCES `mydb`.`cities` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`transports`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`transports` (
  `code` VARCHAR(3) NOT NULL,
  `name` VARCHAR(45) NULL,
  `lat` DECIMAL NULL,
  `lng` DECIMAL NULL,
  `postcode` VARCHAR(8) NULL,
  `wikiLink` VARCHAR(100) NULL,
  `cities_code` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`code`),
  INDEX `fk_transports_cities1_idx` (`cities_code` ASC),
  CONSTRAINT `fk_transports_cities1`
    FOREIGN KEY (`cities_code`)
    REFERENCES `mydb`.`cities` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`photos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`photos` (
  `ID` INT NOT NULL,
  `link` VARCHAR(100) NULL,
  `alt` VARCHAR(45) NULL,
  `author` VARCHAR(100) NULL,
  `attractions_code` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_photos_attractions1_idx` (`attractions_code` ASC),
  CONSTRAINT `fk_photos_attractions1`
    FOREIGN KEY (`attractions_code`)
    REFERENCES `mydb`.`attractions` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

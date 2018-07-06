/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50622
Source Host           : localhost:3306
Source Database       : playground

Target Server Type    : MYSQL
Target Server Version : 50622
File Encoding         : 65001

Date: 2018-07-06 15:24:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `todolist`
-- ----------------------------
DROP TABLE IF EXISTS `todolist`;
CREATE TABLE `todolist` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `todo` varchar(255) DEFAULT NULL,
  `done` char(8) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todolist
-- ----------------------------
INSERT INTO `todolist` VALUES ('2', 'updated todo', '1', null, null);
INSERT INTO `todolist` VALUES ('3', 'swimming', '0', null, null);
INSERT INTO `todolist` VALUES ('4', 'diving', '0', null, null);

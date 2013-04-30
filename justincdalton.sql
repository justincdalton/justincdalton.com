-- phpMyAdmin SQL Dump
-- version 3.5.8.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 30, 2013 at 01:35 AM
-- Server version: 5.5.31-0ubuntu0.13.04.1
-- PHP Version: 5.4.9-4ubuntu2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `justincdalton`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_contents`
--

CREATE TABLE IF NOT EXISTS `about_contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(50) NOT NULL,
  `Content` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `about_contents`
--

INSERT INTO `about_contents` (`id`, `Title`, `Content`) VALUES
(1, 'Web Developer', 'There are two things I value when I’m coding more than anything else: simplicity and elegance. Implementing code with those two principles in mind not only leads to more efficient, less buggy code, it also makes maintainability much easier for the other developers on my team (and my future self). I take that same approach to the website interfaces I develop, focusing on simple and understandable page design.'),
(2, 'Board Gamer', 'Growing up, I often imagined commanding fleets of starships, traveling the world as a Portuguese explorer, or organizing the construction of a great cathedral! Well, maybe not that last one, but the point is that while I may never actually get to do those things, with modern board games I can feel like I have! My wife and I love collecting and playing designer board games together, but most of all we love defeating each other in the latest conquest.'),
(3, 'Music Lover', 'If you see me heading to work on the subway in NYC, chances are I’ll have my headphones on listening to music podcasts and the latest albums on Spotify. I am always searching for sounds I’ve never heard before and learning everything I can about them. I see this search as a sort of musical adventure, searching for lost gems in the vast sonic jungle. Hmm, maybe I should start a project about that...'),
(4, 'Project Dabbler', 'Propelled by the impulse of curiosity (as well as boredom), I am constantly coming up with various mini-projects. Whether I’m installing custom roms on my Nexus 4, picking up new programming languages, or learning everything there is to know about European football, there is always something piquing my interest. Think of me as a professional dabbler, always ready to take on a new project!');

-- --------------------------------------------------------

--
-- Table structure for table `contact_links`
--

CREATE TABLE IF NOT EXISTS `contact_links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Text` varchar(50) NOT NULL,
  `Url` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `contact_links`
--

INSERT INTO `contact_links` (`id`, `Text`, `Url`) VALUES
(1, 'Email', 'mailto:jdalton15@gmail.com'),
(2, 'LinkedIn', 'http://www.linkedin.com/in/justincdalton'),
(3, 'Twitter', 'https://twitter.com/justincdalton'),
(4, 'Google+', 'https://plus.google.com/115562852321524427237/about/p/pub');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

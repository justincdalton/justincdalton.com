-- phpMyAdmin SQL Dump
-- version 3.5.8.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 08, 2013 at 10:46 PM
-- Server version: 5.5.31-0ubuntu0.13.04.1
-- PHP Version: 5.4.9-4ubuntu2.1

SET FOREIGN_KEY_CHECKS=0;
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

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(250) NOT NULL,
  `Description` varchar(2000) NOT NULL,
  `LinkUrl` varchar(250) NOT NULL,
  `LinkText` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `Title`, `Description`, `LinkUrl`, `LinkText`) VALUES
(1, 'Taskstream', '<p>Taskstream is an education and assessment management system where I am currently a full-stack .Net developer. My technical skills have led me to become one of the primary resources for front-end development within the company. This has been vitally important over the past few months as we have undergone a major site redesign.</p><p>I have also become directly involved with the User Experience group and have recently begun facilitating usability studies. I love this involvement and find my interaction with our users to be truly invaluable for my development process.</p>', 'https://www1.taskstream.com/solutions/', 'More about Taskstream'),
(2, 'AG Giving', '<p>During my time at the General Council of the Assemblies of God, I was a part of many projects, but few were as important and far reaching as AG Giving.  The site provides a central point to donate to the organization’s many charities and ministries.</p><p>During the development of AG Giving, I was the primary architect of a domain driven framework used to access several data repositories and the AG payment processing system. I was also very focused on keeping the donation process simple and direct from a design and usability perspective.</p>', 'http://giving.ag.org/', 'Visit AG Giving');

-- --------------------------------------------------------

--
-- Table structure for table `slides`
--

CREATE TABLE IF NOT EXISTS `slides` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `Image` varchar(250) NOT NULL,
  `Caption` varchar(1000) NOT NULL,
  `DisplayOrder` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `slides`
--

INSERT INTO `slides` (`id`, `project_id`, `Image`, `Caption`, `DisplayOrder`) VALUES
(1, 1, 'dashboard.png', 'The recently released dashboard provides easy access to a new level of course and program tracking', 1),
(2, 1, 'home-tile.png', 'The redesigned program home page allows for easy access to commonly used evaluation features', 2),
(3, 1, 'folio.png', 'The brand new portfolio gallery allows users to quickly edit and share their work', 3),
(4, 1, 'style.png', 'A wonderful new gallery of styles provides a visceral way to select a portfolio theme', 4),
(5, 1, 'style-customize.png', 'Theme customization is effortless and simple with the new portfolio styles', 5),
(6, 2, 'ag-giving-home.png', 'The AG Giving home page allows you to quickly find a cause or minister to support', 1),
(7, 2, 'ag-giving-message.png', 'It''s quick and easy to select a donation amount and support disaster recovery', 2);
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

import { IconType } from 'react-icons';
import {
  FaApple,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaGoogle,
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaMedium,
  FaMicrosoft,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaSpotify,
  FaSteam,
  FaTelegram,
  FaTiktok,
  FaTumblr,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export const getIcon = (url: string): IconType => {
  if (url.includes('facebook')) {
    return FaFacebook;
  } else if (url.includes('twitter')) {
    return FaTwitter;
  } else if (url.includes('instagram')) {
    return FaInstagram;
  } else if (url.includes('linkedin')) {
    return FaLinkedin;
  } else if (url.includes('github')) {
    return FaGithub;
  } else if (url.includes('youtube')) {
    return FaYoutube;
  } else if (url.includes('twitch')) {
    return FaTwitch;
  } else if (url.includes('line')) {
    return FaLine;
  } else if (url.includes('reddit')) {
    return FaReddit;
  } else if (url.includes('pinterest')) {
    return FaPinterest;
  } else if (url.includes('tumblr')) {
    return FaTumblr;
  } else if (url.includes('spotify')) {
    return FaSpotify;
  } else if (url.includes('apple')) {
    return FaApple;
  } else if (url.includes('google')) {
    return FaGoogle;
  } else if (url.includes('microsoft')) {
    return FaMicrosoft;
  } else if (url.includes('steam')) {
    return FaSteam;
  } else if (url.includes('tiktok')) {
    return FaTiktok;
  } else if (url.includes('whatsapp')) {
    return FaWhatsapp;
  } else if (url.includes('t.me')) {
    return FaTelegram;
  } else if (url.includes('discord')) {
    return FaDiscord;
  } else if (url.includes('snapchat')) {
    return FaSnapchat;
  } else if (url.includes('medium')) {
    return FaMedium;
  } else {
    return FaGlobe;
  }
};

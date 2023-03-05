import { fab, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

export const getIcon = (url: string): IconDefinition => {
  if (url.includes('facebook')) {
    return fab.facebook;
  } else if (url.includes('twitter')) {
    return fab.faTwitter;
  } else if (url.includes('instagram')) {
    return fab.faInstagram;
  } else if (url.includes('linkedin')) {
    return fab.faLinkedin;
  } else if (url.includes('github')) {
    return fab.faGithub;
  } else if (url.includes('youtube')) {
    return fab.faYoutube;
  } else if (url.includes('twitch')) {
    return fab.faTwitch;
  } else if (url.includes('reddit')) {
    return fab.faReddit;
  } else if (url.includes('pinterest')) {
    return fab.faPinterest;
  } else if (url.includes('tumblr')) {
    return fab.faTumblr;
  } else if (url.includes('vimeo')) {
    return fab.faVimeo;
  } else if (url.includes('soundcloud')) {
    return fab.faSoundcloud;
  } else if (url.includes('spotify')) {
    return fab.faSpotify;
  } else if (url.includes('apple')) {
    return fab.faApple;
  } else if (url.includes('google')) {
    return fab.faGoogle;
  } else if (url.includes('microsoft')) {
    return fab.faMicrosoft;
  } else if (url.includes('steam')) {
    return fab.faSteam;
  } else if (url.includes('tiktok')) {
    return fab.faTiktok;
  } else if (url.includes('whatsapp')) {
    return fab.faWhatsapp;
  } else if (url.includes('t.me')) {
    return fab.faTelegram;
  } else if (url.includes('discord')) {
    return fab.faDiscord;
  } else if (url.includes('snapchat')) {
    return fab.faSnapchat;
  } else if (url.includes('medium')) {
    return fab.faMedium;
  } else {
    return fas.faGlobe;
  }
};

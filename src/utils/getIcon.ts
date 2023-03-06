import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitch,
  faLine,
  faReddit,
  faPinterest,
  faTumblr,
  faSpotify,
  faApple,
  faGoogle,
  faMicrosoft,
  faSteam,
  faTiktok,
  faWhatsapp,
  faTelegram,
  faDiscord,
  faSnapchat,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const getIcon = (url: string): IconDefinition => {
  if (url.includes('facebook')) {
    return faFacebook;
  } else if (url.includes('twitter')) {
    return faTwitter;
  } else if (url.includes('instagram')) {
    return faInstagram;
  } else if (url.includes('linkedin')) {
    return faLinkedin;
  } else if (url.includes('github')) {
    return faGithub;
  } else if (url.includes('youtube')) {
    return faYoutube;
  } else if (url.includes('twitch')) {
    return faTwitch;
  } else if (url.includes('line')) {
    return faLine;
  } else if (url.includes('reddit')) {
    return faReddit;
  } else if (url.includes('pinterest')) {
    return faPinterest;
  } else if (url.includes('tumblr')) {
    return faTumblr;
  } else if (url.includes('spotify')) {
    return faSpotify;
  } else if (url.includes('apple')) {
    return faApple;
  } else if (url.includes('google')) {
    return faGoogle;
  } else if (url.includes('microsoft')) {
    return faMicrosoft;
  } else if (url.includes('steam')) {
    return faSteam;
  } else if (url.includes('tiktok')) {
    return faTiktok;
  } else if (url.includes('whatsapp')) {
    return faWhatsapp;
  } else if (url.includes('t.me')) {
    return faTelegram;
  } else if (url.includes('discord')) {
    return faDiscord;
  } else if (url.includes('snapchat')) {
    return faSnapchat;
  } else if (url.includes('medium')) {
    return faMedium;
  } else {
    return faGlobe;
  }
};

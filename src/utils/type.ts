export type LinkInfo = {
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string;
  links: LinkInfo[];
  bgImage: string;
  fontFamily: string;
};

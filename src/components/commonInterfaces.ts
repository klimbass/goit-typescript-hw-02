export interface ImageObj {
  id: string;
  likes: number;
    alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

export interface ImageModalData {
  url: string;
  likes: number;
  alt: string;
  author: {
    name: string;
    url: string;
  };
}
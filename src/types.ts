export interface Images {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes?: number;
  created_at?: string;
  alt_description?: string;
}

export interface FetchImagesResponse {
  results: Images[];
  total: number;
  total_pages: number;
}

export type OnImageClick = (image: Images) => void;

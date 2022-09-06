export interface UserLogin {
  username?: string;
}

export interface Photos {
  data: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[];
  loading: boolean;
  error: any;
}

export interface Album {
  data: {
    title: string;
    id: number;
    userId: number;
  }[];
  loading: boolean;
  error: any;
}

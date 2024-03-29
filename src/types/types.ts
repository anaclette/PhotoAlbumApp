export interface Auth {
  username?: string | null;
}

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  index: number;
};

export type Album = {
  title: string;
  id: number;
  userId: number;
};

export interface Photos {
  data: Photo[];
  loading: boolean;
  error: any;
}

export interface Albums {
  data: Album[];
  loading: boolean;
  error: any;
}

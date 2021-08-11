export interface IVolumeInfo {
  title: string;
  authors: string[];
  publishedDate: string;
  publisher: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  language: string;
  previewLink: string;
  description: string;
  pageCount: number;
}

export interface IBook {
  id: string;
  volumeInfo: IVolumeInfo;
}

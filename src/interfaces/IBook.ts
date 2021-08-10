export interface IVolumeInfo {
  title: string;
  authors: string[];
  publishedDate: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  language: string;
  previewLink: string;
}

export interface IBook {
  id: string;
  volumeInfo: IVolumeInfo;
}

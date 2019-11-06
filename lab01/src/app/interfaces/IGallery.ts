import { IPhoto } from './IPhoto';

export class IGallery {
  galleryId?: string;
  title: string;
  dateCreated: string;
  thumbURL: string;
  description: string;
  bgColor: string;
  tags?: any;
  photos: IPhoto[];
}

{{{{{}}}}}
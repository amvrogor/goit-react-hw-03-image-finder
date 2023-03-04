import { Image, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  hit: { webformatURL, largeImageURL, tags },
}) => {
  return (
    <ImageItem>
      <Image src={webformatURL} alt={tags} />
    </ImageItem>
  );
};

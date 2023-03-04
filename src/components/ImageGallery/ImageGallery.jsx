import { Component } from 'react';
import { toast } from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';
import { pixaBayAPI } from 'components/Services/PixaBayApi';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    hits: [],
    error: '',
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });

      pixaBayAPI(this.props.value.trim().toLowerCase(), this.state.page)
        .then(data => {
          if (data.hits.length === 0) {
            return toast.error(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          this.setState({
            hits: [...this.state.hits, ...data.hits],
            status: 'resolved',
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  handleLoad = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    console.log(this.state.page);
  };

  render() {
    const { status, hits, error } = this.state;

    // if (status === 'pending') return <Loader />;

    if (status === 'resolved')
      return (
        <ImageList>
          {hits.map(hit => (
            <ImageGalleryItem key={hit.id} hit={hit} />
          ))}

          <Button onLoad={this.handleLoad} />
        </ImageList>
      );

    if (status === 'rejected') return <h1>{error.message}</h1>;
  }
}

/* <ul class="gallery">
  <!-- Набор <li> с изображениями -->
</ul> */

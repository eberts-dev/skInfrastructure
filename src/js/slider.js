import Splide from '@splidejs/splide';

  new Splide ('#one', {
    direction: 'ttb',
    type: 'loop',
    arrows: false,
    height: '518px',
  } ).mount();

  new Splide ('#two', {
    type: 'loop',
    arrows: true,
    width: '760px',
  } ).mount();

 
  
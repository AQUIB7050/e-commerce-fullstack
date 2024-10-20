import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {MainCarouselData} from './MainCarouselData'

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const MainCarousel = () => {
    
    const items = MainCarouselData.map(i => <img className="cursor-pointer" role="presentation" src={i.image} alt=''/>);

    return( <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        //controlsStrategy="alternate"
        //responsive={responsive}
        //mouseTracking
    />);
   
};

export default MainCarousel;
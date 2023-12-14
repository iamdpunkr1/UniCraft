import frame from '../assets/carousel/frame.png'
import frame1 from '../assets/carousel/frame2_5.png'
import frame2 from '../assets/carousel/frame3.png'
import frame3 from '../assets/carousel/frame4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    {
        id: 1,
        image: frame,
        title: 'Frame 1',
    },
    {
        id: 2,
        image: frame1,
        title: 'Frame 2',
    },
    {
        id: 3,
        image: frame2,
        title: 'Frame 3',
    },
    {
        id: 4,
        image: frame3,
        title: 'Frame 4',
    },
    {
        id: 5,
        image: frame1,
        title: 'Frame 5',
    },
]
const Carousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
      };

  return (
    <div className="my-[80px] ">
    <Slider {...settings}>
        {images.map((image) => (
            <div key={image.id} className='rounded'>
                <img src={image.image} alt={image.title} width={"360px"}  />
            </div>
        ))}
    </Slider>
    <div className="flex justify-center items-center gap-2.5 mt-10">
        <button className="text-gray-600 text-xl font-satoshi-bold w-72 h-16 px-8 py-4 rounded-lg shadow-inner border border-gray-600 justify-center items-center gap-2.5 inline-flex">View Recent Work</button>
    </div>
    </div>
  )
}

export default Carousel
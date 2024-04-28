import { Carousel } from 'antd';

// data source
const items = [
    {
        key: '01',
        title: 'AQF Represents AQA',
        subtitle: 'Assurance Quality Apparels',
        imgURL: '/images/img01.jpg'
    },
    {
        key: '02',
        title: 'Assurance Quality Apparels',
        subtitle: 'Believe in  Quality, Commitment & Service',
        imgURL: '/images/img02.jpg'
    },
    {
        key: '03',
        title: 'AQA',
        subtitle: 'Designing | Sourcing | Manufacturing',
        imgURL: '/images/img03.jpg'
    },
    {
        key: '04',
        title: 'AQA',
        subtitle: 'Your Global Partner in Textile Business',
        imgURL: '/images/img04.jpg'
    },
    {
        key: '05',
        title: 'AQF Represents AQA',
        subtitle: 'Assurance Quality Apparels',
        imgURL: '/images/img05.jpg'
    },
    {
        key: '06',
        title: 'Assurance Quality Apparels',
        subtitle: 'Believe in  Quality | Commitment | Service',
        imgURL: '/images/img06.jpg'
    },
    {
        key: '07',
        title: 'AQA',
        subtitle: 'Designing | Sourcing | Manufacturing',
        imgURL: '/images/img07.jpg'
    },
    {
        key: '08',
        title: 'AQA',
        subtitle: 'Your Global Partner in Textile Business',
        imgURL: '/images/img08.jpg'
    },

];


const Hero = () => {
    return (
        <Carousel autoplay={true} fade={true}>
            {items.map((item) => (
                <div
                    key={item.key}
                    className="h-screen w-screen relative overflow-hidden"
                    data-aos="fade-up"
                >
                    <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div>
                    <img src={item.imgURL} alt="" className="object-cover h-full w-full" />
                    <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
                        <h1 className="text-5xl font-sans font-bold leading-tight mb-5">
                            {item.title}
                        </h1>
                        <p className="text-lg font-sans font-medium leading-loose mb-2">
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Hero;
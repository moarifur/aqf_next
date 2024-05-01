const DiscoverUs = () => {
    return (
        <div className='bg-gradient-to-r from-[#3e2334] via-[#0f1225] to-[#2c2c2c] h-auto'>
            <h1 className='p-9 text-center text-5xl text-white font-extrabold font-serif'>Discover Us</h1>

            {/* About Us and Company */}
            <div className="container md:flex gap-x-9 p-5">

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">
                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-10 md:mt-5'>About Us</h1>
                        <p className='text-center text-neutral-600 font-serif'>At the helm of AQA is Mr. Lodi, a
                            visionary leader with 18 years of experience
                            in the garment industry. He is passionate about delivering top-notch products
                            and building strong relationships with our clients.</p>
                    </div>
                    <img
                        src='/images/ceo.jpg'
                        width="512" height="512"
                        className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                        alt=""/>
                </div>

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">
                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-10 md:mt-5'>A Glimpse Inside</h1>
                        <p className='text-center text-neutral-600 font-serif'>Our state-of-the-art facilities
                            provide our team with the perfect environment to create exceptional garments. We believe in
                            fostering a collaborative and efficient work atmosphere, ensuring every step of the
                            production process is seamless.</p>
                    </div>
                    <img
                        src='/images/factory.png'
                        width="512" height="512"
                        className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                        alt=""/>
                </div>
            </div>

            {/* R&D */}
            {/*Intro & Step 01*/}
            <div className="container md:flex gap-x-9 p-5">

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">

                    <video className='md:w-1/2 md:h-[300px] rounded-none object-cover' muted autoPlay loop>
                        <source src='/videos/R&D.mp4'/>
                    </video>

                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-10 md:mt-5'>Our R&D Process</h1>
                        <p className='text-center text-neutral-600 font-serif'>
                            Here at AQA, we take pride in our comprehensive Research & Development process,
                            which guarantees we meet and exceed your expectations.
                        </p>
                    </div>

                </div>

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">
                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-1 md:mt-5'>Step 01</h1>
                        <h1 className='font-bold text-center text-gray-700 mb-3 md:mb-5 md:mt-1'>Style Research &
                            Development</h1>
                        <p className='text-center text-neutral-600 font-serif'>
                            Our dedicated team stays ahead of the curve by constantly researching and analyzing
                            the latest trends. We work closely with you to understand your specific needs and translate
                            them into a stylish and functional design.
                        </p>
                    </div>
                    <img
                        src='/images/step01.jpg'
                        className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                        alt=""/>
                </div>
            </div>

            {/*Step 02 & Step 03*/}
            <div className="container md:flex gap-x-9 p-5">

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">
                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-1 md:mt-5'>Step 02</h1>
                        <h1 className='font-bold text-center text-gray-700 mb-3 md:mb-5 md:mt-1'> Sample
                            Development</h1>
                        <p className='text-center text-neutral-600 font-serif'>
                            Based on your vision and requirements, we develop samples that perfectly capture your design
                            intent. This collaborative process ensures you are involved every step of the way.
                        </p>
                    </div>
                    <img
                        src='/images/step02.jpg'
                        className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                        alt=""/>
                </div>

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">
                    <img
                        src='/images/step03.jpg'
                        className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                        alt=""/>
                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-1 md:mt-5'>Step 03</h1>
                        <h1 className='font-bold text-center text-gray-700 mb-3 md:mb-5 md:mt-1'> Material Range</h1>
                        <p className='text-center text-neutral-600 font-serif'>
                            We source high-quality materials that match your specifications and budget. Our extensive
                            network of suppliers allows us to offer a wide variety of fabrics to choose from.
                        </p>
                    </div>
                </div>
            </div>

            {/*Step 04 & Step 05*/}
            <div className="container md:flex gap-x-9 p-5">

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">
                    <img
                        src='/images/step04.jpg'
                        className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                        alt=""/>
                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-1 md:mt-5'>Step 04</h1>
                        <h1 className='font-bold text-center text-gray-700 mb-3 md:mb-5 md:mt-1'>Production</h1>
                        <p className='text-center text-neutral-600 font-serif'>
                            Our skilled production team meticulously brings your garments to life, ensuring every detail
                            is crafted with precision and care.
                        </p>
                    </div>
                </div>

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">
                    <img
                        src='/images/step05.jpg'
                        className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                        alt=""/>
                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-1 md:mt-5'>Step 05</h1>
                        <h1 className='font-bold text-center text-gray-700 mb-3 md:mb-5 md:mt-1'> Quality Assurance</h1>
                        <p className='text-center text-neutral-600 font-serif'>
                            Our rigorous quality control process guarantees that only the finest garments leave our
                            facilities. We conduct thorough inspections at every stage of production.
                        </p>
                    </div>
                </div>
            </div>

            {/*Step 06 & Step 07*/}
            <div className="container md:flex gap-x-9 p-5">

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">
                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-1 md:mt-5'>Step 06</h1>
                        <h1 className='font-bold text-center text-gray-700 mb-3 md:mb-5 md:mt-1'>Finished Goods & Shipment</h1>
                        <p className='text-center text-neutral-600 font-serif'>
                            Once your garments have passed our stringent quality checks, we meticulously pack and ship them to your designated location, ensuring timely delivery.
                        </p>
                    </div>
                    <img
                        src='/images/step06.jpg'
                        className='md:w-1/2 md:h-[300px] rounded-none object-cover'
                        alt=""/>
                </div>

                <div className="bg-neutral-300 rounded-xl p-0 md:flex md:w-1/2 mb-5">

                    <video className='md:w-1/2 md:h-[300px] rounded-none object-cover' muted autoPlay loop>
                        <source src='/videos/step07.mp4'/>
                    </video>

                    <div className="p-3">
                        <h1 className='font-bold text-center text-2xl mb-3 md:mb-10 md:mt-5'>Step 07</h1>
                        <p className='text-center text-neutral-600 font-serif'>
                            At AQA, we believe that the journey doesn't end with delivering the final product. Building strong, lasting relationships with our customers is paramount to our success.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DiscoverUs;

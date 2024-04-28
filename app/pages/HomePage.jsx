import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import DiscoverUs from "@/app/components/DiscoverUs";
import OurProducts from "@/app/components/OurProducts";
import Footer from "@/app/components/Footer";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <DiscoverUs />
            <OurProducts />
            <Footer />
        </>
    );
};

export default HomePage;
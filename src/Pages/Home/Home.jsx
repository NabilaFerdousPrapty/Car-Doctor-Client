import About from "../About/About";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;
import Footer from "../components/Footer/Footer";
import HomeCard from "../components/Card/HomeCard";
import NavigationBar from "../components/NavBar/NavigationBar";

export default () => {
    return (
        <>
            <NavigationBar name="Home"/>
            <HomeCard/>
            <Footer/>
        </>
    );
};
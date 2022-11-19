import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import AboutUs from './pages/about-us';
import ContactUs from "./pages/contact-us";
function App() {
    return <>
        <Header />

        <Routes>
            <Route path={"/home"} element={<Home />} />
            <Route path={"/about"} element={<AboutUs />} />
            <Route path={"/contact"} element={<ContactUs />} />

            <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
    </>
}

export default App;
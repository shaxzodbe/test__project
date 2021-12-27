import './App.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Header from "./components/Header";
import Section from "./components/Section";
import Product from "./components/Product";
import Sales from "./components/Sales";
import Footer from "./components/Footer";
import Furniture from "./components/Furniture";
import Article from "./components/Article";
import Gallery from "./components/Gallery";

function App() {
    return (
        <div className="wrapper">
            <div className="wrapper__inner">
                <Sidebar/>
                <div className="wrapper__main">
                    <Navbar/>
                    <Header />
                    <Section />
                    <Product />
                    <Sales />
                    <Furniture />
                     <Article />
                    <Gallery />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;

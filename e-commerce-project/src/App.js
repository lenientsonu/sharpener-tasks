import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
import ContactPage from "./pages/Contact";
import ProductPage from "./pages/ProductDetail";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import productsArr from "./store/productArr";

function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/store' exact>
                        <StorePage products={productsArr} />
                    </Route>
                    <Route path='/store/:productId'>
                        <ProductPage products={productsArr} />
                    </Route>
                    <Route path='/about'>
                        <AboutPage />
                    </Route>
                    <Route path='/contact'>
                        <ContactPage />
                    </Route>
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;

import Footer from "./Footer";
import Navbar from "./header/Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;
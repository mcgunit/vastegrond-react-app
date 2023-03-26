import React, { useEffect } from "react";

/* Custom Components */
import Header from "./Header";
import Footer from "./Footer";

/* Services*/
import useSongs from "../../services/useSongs";

const Main = () => {
    const { getAllSongs } = useSongs();

    useEffect(() => {
        getAllSongs();
    }, []);


    return (
        <div className="app-container">
            <Header />

            <Footer />
        </div>
        
    );

    
}

export default Main;
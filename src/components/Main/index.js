import React from "react";

import SplitPane from "react-split-pane"

/* Custom Components */
import Header from "./Header";
import Footer from "./Footer";
import SongsList from "../SongsList";
import SongText from "../SongText";


const Main = () => {

    return (
        <div className="app-container">
            <Header />
                <div className="mainContent">
                    <SplitPane split="vertical"  defaultSize={"60%"} primary="primary">
                        <div>
                            <SongsList />
                        </div>
                        {/* <div>
                            <SongText />
                        </div> */}
                        
                    </SplitPane>
                </div>
            <Footer />
        </div>
        
    );

    
}

export default Main;
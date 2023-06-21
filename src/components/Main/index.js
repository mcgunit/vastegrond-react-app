import React,{useContext, useEffect, useState} from "react";

import SplitPane from "react-split-pane"
import Button from '@mui/material/Button';

/* Context */
import { AppContext } from "../../context/App.Context";

/* Custom Components */
import Header from "./Header";
import Footer from "./Footer";
import SongsList from "../SongsList";
import SongText from "../SongText";


const Main = () => {
    const {APP, dispatch} = useContext(AppContext)
    const [showSonglist, setShowSonglist] = useState(true)

    useEffect(() => {
        //console.log(!APP.showSonglist);
        setShowSonglist(APP.showSonglist);
    }, [APP.showSonglist])

    const handleshowListbutton = () => {
        dispatch({type: "showSonglist", payload: true })
    }

    return (
        <div className="app-container">
            <Header />
                <div className="mainContent">
                    <Button onClick={handleshowListbutton} variant="contained">
                            Show List
                    </Button>
                    <div>
                                {showSonglist && <SongsList />}
                            </div>
                            <div>
                            {!showSonglist && <SongText />}
                                
                    </div>
                </div>
            <Footer />
        </div>
        
    );

    
}

export default Main;
import React, { useEffect, useContext, useState } from "react";

/* Material ui components */
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";


/* Context */
import { AppContext } from "../../context/App.Context";

const SongText = () => {
    const { APP, dispatch } = useContext(AppContext);
    const [ text, setText ] = useState("");

    useEffect(() => {
        let isS = true;

        if(isS) {
            let selectedSong = APP.selectedSong;
            let songsList = APP.songs.songsList;

            if(Array.isArray(songsList) && songsList.length > 0) {
                songsList.forEach((song) => {
                    if(song.name === selectedSong) {
                        setText(song.text);
                    }
                })
            }
            
        }
        
        return () => isS = false;
    }, [APP.selectedSong]);



    return (


        <Paper
            elevation={3}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                width: "50%",
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
        >
            <Typography variant="body2" style={{whiteSpace: "pre-line"}}>
                {text}
            </Typography>
                
            
        </Paper>

    );

    
}

export default SongText;
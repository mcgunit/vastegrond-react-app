import React, { useEffect, useContext, useState } from "react";

/* Material ui components */
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LyricsIcon from '@mui/icons-material/Lyrics';


/* Context */
import { AppContext } from "../../context/App.Context";

const SongsList = () => {
    const { APP, dispatch } = useContext(AppContext);
    const [ songs, setSongs ] = useState([]);

    useEffect(() => {
        let isS = true;

        if(isS) {
            if(Array.isArray(APP.songs.songsList) && APP.songs.songsList.length > 0) {
                setSongs(APP.songs.songsList);
            }
        }
        
        return () => isS = false;
    }, [APP]);


    const handleSongSelected = (e,name) => {
        console.log(e)
        console.log(name)
        dispatch({type: "setSelectedSong", payload: name})
    }

    return (


        <List component="nav" aria-label="main mailbox folders">
            {songs.map(song => {
                return(
                    <ListItemButton
                    // selected={selectedIndex === 0}
                    onClick={(event) => handleSongSelected(event, song.name)}
                  >
                    <ListItemIcon>
                      <LyricsIcon />
                    </ListItemIcon>
                    <ListItemText primary={song.name} />
                  </ListItemButton>
        
        // <Grid container spacing={2}>
        //     {songs.map(song => {
        //         return(
        //             <Grid key={song.name} item alignContent="center">
        //                 <IconButton onClick={handleSongSelected} value={song.name}>
        //                     <Paper
        //                         elevation={3}
        //                         sx={{
        //                             display: "flex",
        //                             justifyContent: "center",
        //                             alignItems: "center",
        //                             textAlign: "center",
        //                             height: 60,
        //                             width: 150,
        //                             backgroundColor: (theme) =>
        //                                 theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        //                             }}
        //                     >
        //                         <Typography variant="caption">
        //                             {song.name}
        //                         </Typography>
        //                     </Paper>
        //                 </IconButton>
        //             </Grid>
                )
            })
            }
            </List>
        // </Grid>
    );

    
}

export default SongsList;
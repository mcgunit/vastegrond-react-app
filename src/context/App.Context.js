import React, { useCallback, useContext, useReducer, useEffect, useState } from "react";

import useSongs from "../services/useSongs";


const AppContext = React.createContext({});

const initialApp = {
  songs: [],
  selectedSong: ""
};


function reducer(APP, action) {
  switch (action.type) {
    case "updateSongsList":
      return {...APP, songs: action.payload}
    case "setSelectedSong":
        return {...APP, selectedSong: action.payload}
    default:
      console.log("APP context action unknown", action);
      throw new Error();
  }
}

const AppProvider = props => {
  const [APP, dispatch] = useReducer(reducer, initialApp);
  const { children } = props;
  const { getAllSongs } = useSongs();
  
  useEffect(() => {
    let isS = true;
    if(isS){
      getAllSongs()
      .then((songs) => {
        asyncDispatch({type: "updateSongsList", payload: songs});
      })
      .catch((err) => {
        console.error(err);
      });
    }
    return () => isS = false;
  }, []);


 
  // ******************************************************
  
  // comes from https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch
  
  // !!! important !!! usecallback bloks access to the current workspace
  const asyncDispatch = useCallback(async action => {
    switch (action.type) {
      case "updateSongsList": {
        dispatch(action);
        break;
      }
      case "setSelectedSong":{
        dispatch(action);
        break;
      }
      default:
        // Not a special case, dispatch the action
        dispatch(action);
    }
  }, []); // The empty array causes this callback to only be created once per component instance

  return (
    <AppContext.Provider
      value={{
        APP,
        dispatch: asyncDispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
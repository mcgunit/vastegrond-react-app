import SETTINGS from "./settings";

const useSongs = () => {
    const getAllSongs = async () => {
        fetch(
            `${SETTINGS.API_URL}songs/`,
            {
                method: "GET",
            }
        )
        //.then(result => result.json())
        .then((songs) => {
            console.log("Songs: ", songs);
        })
        .catch((error) => {
            console.error("Error at fetching songs: ", error);
        })
    };
  
  
    return {
        getAllSongs
    };
};
  
export default useSongs;
  
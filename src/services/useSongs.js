import SETTINGS from "./settings";

const useSongs = () => {
    const getAllSongs = async () => {
        return new Promise((resolve, reject) => {
            fetch(
                `${SETTINGS.API_URL}songs/getsongs`,
                {
                    method: "GET"
                }
            )
            .then(result => result.json())
            .then((songs) => {
                //console.log(songs);
                resolve(songs);
            })
            .catch((error) => {
                console.error("Error at fetching songs: ", error);
                reject(error);
            })
        })
        
    };
  
  
    return {
        getAllSongs
    };
};
  
export default useSongs;
  
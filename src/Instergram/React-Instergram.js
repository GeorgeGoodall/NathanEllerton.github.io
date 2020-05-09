import axios from 'axios'

const getImage = async (imageID, authCode) => {
    const uri = 'https://graph.instagram.com/'+imageID+'?fields=media_url&access_token='+authCode
    const response = await axios.get(uri);
    return response;
}

export {getImage};
import axios from 'axios'

export const fetchMessage = async function (){
    const response = await axios.get('/ping')
    return response.data.value
}
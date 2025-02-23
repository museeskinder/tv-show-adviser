import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY_PARAM = "?api_key=f47cd32fdcf9215196469654c7e2bbef";

export class TvShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        console.log(response.data.results);
        return response.data.results;
    }   
}
import axios from 'axios';
import { BASE_URL, API_KEY_PARAM } from './config';

export class TvShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        return response.data.results;
    }   

    static async fetchRecommendation(tvShowId) {
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
        return response.data.results;
    }

    static async fetchSearch(title) {
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
        return response.data.results;
    }
}

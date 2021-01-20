import FetchData from './FetchData'

const API_BASE = 'https://www.thesportsdb.com/api/v1/json/1/'
const ENDPOINT = 'search_all_leagues.php'
const API_URL = API_BASE + ENDPOINT

async function GetLeagues(query) {
    const response = await FetchData(`${API_URL}${query}`)
    const data = await response.json()
    return data
}

export default GetLeagues
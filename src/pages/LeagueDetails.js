import GetPathInfo from '../utils/GetPathInfo'
import GetLeagues from '../utils/GetLeagues'

const { query } = GetPathInfo()

const LeagueDetails = async () => {
    const queryArray = query.split('&')
    const reqQuery = queryArray[0] 
    const indexQuery = queryArray[1].split('=')[1]
    const response = await GetLeagues(reqQuery)
    const leagues = response.countrys
    const view = `
        <div class="details container">
            <div class="details__left-container">
                <div class="card-details">
                    <h2 class="card-details__title">${leagues[indexQuery]['strSport']}</h2>
                    <h4 class="card-details__subtitle">${leagues[indexQuery]['strLeague']}</h4>
                    <h4 class="card-details__subtitle">${leagues[indexQuery]['strCountry']}</h4>
                    <h4 class="card-details__subtitle">
                        <a class="card-details__link" target="_blank" href="http://${leagues[indexQuery]['strWebsite']}">${leagues[indexQuery]['strWebsite']}</a>
                    </h4>
                    <p class="card-details__description">${leagues[indexQuery]['strDescriptionEN']}</p>
                </div>
            </div>
            <div class="details__right-container">

            </div>
        </div>
    `
    return view
}

export default LeagueDetails
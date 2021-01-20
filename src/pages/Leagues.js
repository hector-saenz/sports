import getPathInfo from '../utils/GetPathInfo'
import GetLeagues from '../utils/GetLeagues'

const { query } = getPathInfo()

const Leagues = async () => {
    const response = await GetLeagues(query)
    const leagues = response.countrys
    const view = `
        <div class="leagues container">
            <h1 class="leagues__title">${leagues[0]['strCountry']}'s leagues</h1>
            <div class="leagues__all">
            ${leagues.map((data, index) => `
                <div class="leagues-card">
                    <h3 class="leagues-card__title">${data['strSport']}</h3>
                    <h5 class="leagues-card__subtitle">${data['strLeague']}</h5>
                    <div class="leagues-card__description-container">
                        <p class="leagues-card__description">${data['strDescriptionEN']}</p>
                    </div>
                    <span class="leagues-card__see-more"><a class="leagues-card__see-more-link" href="/leagueDetails?c=${data['strCountry'].toLowerCase()}&i=${index}">Ver más</a></span>
                </div>
            `).join('')}
            </div>
        </div>
    `
    return view
}

export default Leagues
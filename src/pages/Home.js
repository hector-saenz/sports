const countries = [
    'England',
    'Brazil',
    'Spain',
    'Portugal',
    'Mexico',
    'Germany',
    'France',
    'Italy'
]

const Home = () => {
    const view = `
        <div class="home container">
            <h1 class="home__title">
                Sports leagues of each country
            </h1>
            <div class="home__all">
            ${countries.map(country => `
                <div class="card">
                    <h3 class="card__title"><a class="card__title-link" href="/leagues?c=${country.toLowerCase()}">${country}</a></h3>
                </div>
            `).join('')}
            </div>
        </div>
    `
    return view
}

export default Home
// Templates
import Header from '../templates/Header'
import Footer from '../templates/Footer'

// Utils
import Render from '../utils/Render'
import Router from '../routes/Router'
import Routes from '../routes/Routes'

const App = async () => {
    const headerHTML = document.getElementById('header') || null
    const mainHTML = document.getElementById('main') || null
    const footerHTML = document.getElementById('footer') || null
    
    Render(Header(), headerHTML)
    Render(await Router(Routes)(), mainHTML)
    Render(Footer(), footerHTML) 
}
 
export default App
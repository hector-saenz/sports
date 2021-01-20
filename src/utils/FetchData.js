async function FetchData(url) {
    try {
        const response = await fetch(url)
        return response
    } catch(err) {
        console.log('Ocurrió un error')
    }
}

export default FetchData
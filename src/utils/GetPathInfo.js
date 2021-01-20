function GetPathInfo() {
    const path = window.location.pathname
    const query = window.location.search || null
    return {
        path,
        query
    }
}

export default GetPathInfo
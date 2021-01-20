const Render = (element, container) => {
    const temporal = document.createElement('div')
    temporal.innerHTML = element
    const newElement = temporal.firstElementChild
    container.appendChild(newElement)
}

export default Render
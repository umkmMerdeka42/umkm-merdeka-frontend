class Dashboard extends HTMLElement {
    connectedCallback() {
        this.render()
    }


    render() {
        this.innerHTML = /* html */`
        
        `
    }
}

customElements.define('dashboard-page', Dashboard);
class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = 'Felipe'


        //estilizar o component
        const style = document.createElement("style");

        //enivar para a shadow
    }
}

customElements.define("titulo-dinamico", TituloDinamico)
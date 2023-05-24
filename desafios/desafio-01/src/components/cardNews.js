class Cardnews extends HTMLElement {
    constructor(){
        super();

        //crie uma shadow
        const shadow = this.attachShadow({mode: "open"});
        
        //adicione os elementos HTML a Shadow
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){

    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const newTitle = document.createElement("h1");
    newTitle.textContent = this.getAttribute("title");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content")

    cardLeft.appendChild(autor);
    cardLeft.appendChild(newTitle);
    cardLeft.appendChild(newsContent);


    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newImg = document.createElement("img");
    newImg.src = this.getAttribute("photo") || "./assets/alternative.png";
    newImg.alt = "Não foi possível carregar a imagem"

    cardRight.appendChild(newImg)
    
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    
    return componentRoot
    }

    style(){
    const style = document.createElement("style")
    style.textContent = `
    .card {
        width: 80%;
        box-shadow: 8px 7px 18px 2px rgba(0,0,0,0.54);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card__left > h1 {
        margin-top: 15px;
        font-size: 25px;
    }
    
    .card__left > p {
        color: gray;
    }
    
    .card__left > span {
        font-weight: 400;
    }
    `;
    return style
    }
}


customElements.define("card-news", Cardnews);
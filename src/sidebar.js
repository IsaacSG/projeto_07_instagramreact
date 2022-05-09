function Sugestão(props){
    return (
        <div class = "sugestao">
            <div class = "usuario">
                <img src = {props.image} />
                <div class = "nome">
                    {props.user}
                </div>
                <div class = "razao">
                    {props.razao}
                </div>
            </div>
            <div class = "seguir">
                Seguir
            </div>
        </div>
    );
}

export default function SideBar(){
    return (
        <div class = "sidebar">
            <div class="usuario">
                <img src="./instagram/assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestão
                image = "./instagram/assets/img/bad.vibes.memes.svg"
                user = "bad.vibes.memes"
                razao = "Segue você"
                />

                <Sugestão
                image = "./instagram/assets/img/chibirdart.svg"
                user = "chibirdart"
                razao = "Segue você"
                />

                <Sugestão
                image = "./instagram/assets/img/razoesparaacreditar.svg"
                user = "razoesparaacreditar"
                razao = "Novo no Instagram"
                />

                <Sugestão
                image = "./instagram/assets/img/adorable_animals.svg"
                user = "adorable_animals"
                razao = "Segue você"
                />

                <Sugestão
                image = "./instagram/assets/img/smallcutecats.svg"
                user = "smallcutecats"
                razao = "Segue você"
                />
            </div>
        </div>
    );
}
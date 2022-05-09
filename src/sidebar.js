import Links from "./links";

function Sugestão(props){
    return (
        <div class = "sugestao">
            <div class = "usuario">
                <img src = {props.image} />
                <div class = "texto">
                    <div class = "nome">
                        {props.user}
                    </div>
                    <div class = "razao">
                        {props.razao}
                    </div>
                </div>
            </div>
            <div class = "seguir">
                Seguir
            </div>
        </div>
    );
}

function Usuario(props){
    return (
        <div class = "usuario">
            <img src = {props.image} />
            <div class = "texto">
                <strong>{props.user}</strong>
                {props.name}
            </div>
        </div>
    );
}

export default function SideBar(){
    return (
        <div class = "sidebar">
            
            <Usuario 
            image = "./instagram/assets/img/catanacomics.svg"
            user = "catanacomics"
            name = "Catana"
            />

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
            <Links />
        </div>
    );
}
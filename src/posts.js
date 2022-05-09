function Usuario(props){
    return (
        <div class = "usuario">
            <img src = {props.image}/>
            {props.user}
        </div>
    );
}

function Conteudo(props){
    return (
        <div class = "conteudo">
            <img src = {props.image} />
        </div>
    );
}

export default function Post(){
    return (
        <div class = "posts">
            <div class = "post">
            <div class = "topo">
                <Usuario
                image = "./instagram/assets/img/meowed.svg"
                user = "meowed"
                />

                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <Conteudo
                image ="./instagram/assets/img/gato-telefone.svg"
                 />

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src="assets/img/respondeai.svg" />
                  <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>

              <div class="post">
              <div class="topo">
                <Usuario 
                  image ="assets/img/barked.svg"
                  user ="barked"
                  />

                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                </div>

              <Conteudo
                image ="assets/img/dog.svg"
              />

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src="assets/img/adorable_animals.svg" />
                  <div class="texto">
                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}
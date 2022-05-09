function StoriesItem(props){
    return (
        <div class = "story">
            <div class = "imagem">
                <img src={props.image} />
            </div>
            <div class = "usuario">{props.user}</div>
        </div>
    );
}

export default function Stories(){
   const my_stories = [{image:'./instagram/assets/9gag.svg', user:'./instagram/assets/9gag.svg',},
   {image:'./instagram/assets/img/meowed.svg', user:'meowed'},
   {image: './instagram/assets/img/barked.svg'
   ,user:'barked'}, 
   {image: './instagram/nathanwpylestrangeplanet.svg',
   user: 'nathanwpylestrangeplanet'},
   {image: './instagram/assets/img/wawawicomics.svg',
   user: 'wawawicomics'},
   {image: './instagram/assets/img/respondeai.svg',
   user: 'respondeai'},
   {image: './instagram/assets/img/filomoderna.svg',
   user: 'filomoderna'},
   {image: './instagram/assets/img/memeriagourmet.svg',
   user: 'memeriagourmet'}]

    return (
    <div class = "stories">
        {my_stories.map(storie => <StoriesItem image={storie.image} user={storie.user}/>)}
            
         <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
}
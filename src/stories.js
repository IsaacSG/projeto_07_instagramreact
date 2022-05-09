function StoriesItem(props){
    return (
        <div class = "story">
            <img src={props.image} />
            <div class = "usuario">{props.user}</div>
        </div>
    );
}

export default function Stories(){
    return (
    <div class = "stories">
        <StoriesItem 
            image = "./instagram/assets/9gag.svg"
            user = "9gag"
         />
         <StoriesItem 
            image = "./instagram/assets/img/meowed.svg"
            user = "meowed"
         />
         <StoriesItem 
            image = "./instagram/assets/img/barked.svg"
            user = "barked"
         />
         <StoriesItem 
            image = "./instagram/nathanwpylestrangeplanet.svg"
            user = "nathanwpylestrangeplanet"
         />
         <StoriesItem 
            image = "./instagram/assets/img/wawawicomics.svg"
            user = "wawawicomics"
         />
         <StoriesItem 
            image = "./instagram/assets/img/respondeai.svg"
            user = "respondeai"
         />
         <StoriesItem 
            image = "./instagram/assets/img/filomoderna.svg"
            user = "filomoderna"
         />
         <StoriesItem 
            image = "./instagram/assets/img/memeriagourmet.svg"
            user = "memeriagourmet"
         />
         <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
}
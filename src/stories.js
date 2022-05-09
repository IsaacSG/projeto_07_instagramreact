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
            image = "assets/9gag.svg"
            user = "9gag"
         />
         <StoriesItem 
            image = "assets/9gag.svg"
            user = "9gag"
         />
         <StoriesItem 
            image = "assets/9gag.svg"
            user = "9gag"
         />
         <StoriesItem 
            image = "assets/9gag.svg"
            user = "9gag"
         />
         <StoriesItem 
            image = "assets/9gag.svg"
            user = "9gag"
         />
         <StoriesItem 
            image = "assets/9gag.svg"
            user = "9gag"
         />
         <StoriesItem 
            image = "assets/9gag.svg"
            user = "9gag"
         />
         <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
}
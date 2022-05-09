import Stories from "./stories";
import Post from "./posts";

export default function Corpo(){
    return (
        <div class = "corpo">
            <div class = "esquerda">
                <Stories />
                <div class = "posts">
                    <Post />
                </div>
            </div>
        </div>
    );
}
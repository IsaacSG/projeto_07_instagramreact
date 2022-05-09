import Stories from "./stories";
import Post from "./posts";
import SideBar from "./sidebar";

export default function Corpo(){
    return (
        <ul class = "corpo">
            <div class = "esquerda">
                <Stories />
                <Post />
            </div>
            <SideBar />
        </ul>
    );
}
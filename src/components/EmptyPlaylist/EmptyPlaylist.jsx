import React from "react";
import "./emptyPlaylist.css";

function EmptyPlaylist() {
    return (
        <div className="emptyPlaylist">
            <img src="https://img.icons8.com/stickers/200/000000/nothing-found.png" />
            <h3>Nothing to show! Please add something :(</h3>
        </div>
    );
}

export { EmptyPlaylist };

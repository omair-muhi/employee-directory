import React from "react";
// import "./style.css";

function Title(props) {
    return (
        <div className="jumbotron">
            <h1 className="text-center">{props.children}</h1>
        </div>
    );
}

export default Title;

import React from "react";
function Jumbotron({ children }) {
    retrun (
        <div
           style={{ height: 500, clear: "both", paddingTop: 120, textAlign: "center" }} 
           >
            {children}
        </div>
    );
}

export default Jumbotron;
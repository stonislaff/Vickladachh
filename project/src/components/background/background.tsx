import React from "react";

function Background(props: any){
    return(
        <body>
        <div className="mainContent">
            {props.block}
        </div>
        </body>
    )
}

export default Background
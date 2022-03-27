import React from "react";
import '../Estilos/Contador.css';

function Contador({ numClicks }){
    return(
        <div className="contador">
            {numClicks}
        </div>
    )
}

export default Contador;
import React from "react"
import yagmurlu from "../../Resimler/rainy.jpg"


function index (){
    return(
        <div className="arkaplan">
            <div className="overlay"></div>
            <img className="arkaplan-resim" src={yagmurlu}></img>
        </div>
    )
}
export default index
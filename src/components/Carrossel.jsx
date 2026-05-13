import { useState } from "react";
import "./Carrossel.css";

export function Carrossel({ data }) {

    return (
    <div className="Carrossel">
        <ul className="bg">    
            {data.map((item, index) => {
                return (
                    <li>
                        <img src={item.src} alt={item.alt} key={index} className={item.alt} />
                        <div>
                            <h2>{item.title}</h2>
                            <h1>{item.alt}</h1>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}
import { useState } from "react";
import "./Carrossel.css";

export function Carrossel({ data }) {

    return (
    <div className="Carrossel">
        <ul className="bg">    
            {data.map((item, index) => {
                return (
                    <li>
                        <img src={item.src} alt={data.alt} key={index} />
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
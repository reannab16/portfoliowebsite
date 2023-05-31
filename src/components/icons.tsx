import React from "react";

export function Flower({className}:any) {
    return (
        <img className={className} src="new.svg" alt="flowerSVG" width={300} height={300} />
    )
}

export function Panda({className}:any) {
    return (
        <img className={className} src="2.svg" alt="pandaSVG" width={300} height={300} />
    )
}

export function Cherry({className}:any) {
    return (
        <img className={className} src="cherry.svg" alt="cherryBlossomSVG" width={100} height={100} />
    )
}

export function Me({className}:any) {
    return (
        <img className={className} src="me.svg" alt="me" width={200} height={200} />
    )
}

export function OldPortfolio({className}:any) {
    return (
        <img className={className} src="Portfolio0.png" alt="old Portfolio" width={100} height={100} />
    )
}

export function TicTacToe({className}:any) {
    return (
        <img className={className} src="tictactoe.png" alt="old Portfolio" width={100} height={100} />
    )
}
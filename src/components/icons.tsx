import React from "react";
import Image from 'next/image'

export function Flower({className}:any) {
    return (
        <Image className={className} src="blossom2.svg" alt="flowerSVG" width={300} height={300} />
    )
}

export function Panda({className}:any) {
    return (
        <Image className={className} src="2.svg" alt="pandaSVG" width={300} height={300} />
    )
}
import React from "react";
import Image from 'next/image'

export function Flower({className}:any) {
    return (
        <Image className={className} src="1.svg" alt="flowerSVG" width={100} height={100} />
    )
}

export function Panda({className}:any) {
    return (
        <Image className={className} src="2.svg" alt="pandaSVG" width={200} height={200} />
    )
}
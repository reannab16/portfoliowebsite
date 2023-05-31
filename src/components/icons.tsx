import React from "react";
import Image from 'next/image'

export function Flower({className}:any) {
    return (
        <Image className={className} src="new.svg" alt="flowerSVG" width={300} height={300} />
    )
}

export function Panda({className}:any) {
    return (
        <Image className={className} src="2.svg" alt="pandaSVG" width={300} height={300} />
    )
}

export function Cherry({className}:any) {
    return (
        <Image className={className} src="cherry.svg" alt="cherryBlossomSVG" width={100} height={100} />
    )
}

export function Me({className}:any) {
    return (
        <Image className={className} src="me.svg" alt="me" width={200} height={200} />
    )
}
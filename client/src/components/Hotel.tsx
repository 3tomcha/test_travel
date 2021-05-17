import React, { useEffect, useState } from 'react';

type HotelProps = {
    name: string
}
const Hotel = (props: HotelProps) => {
    return (
        <div>{props.name}</div>
    )
}

export default Hotel;
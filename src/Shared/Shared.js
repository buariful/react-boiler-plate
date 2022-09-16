import React from 'react';
import { useState } from 'react';

const Shared = () => {
    const [limit, setLimit] = useState(null)

    if (limit) {
        console.log(limit)
    }
    return [limit, setLimit]

};

export default Shared;
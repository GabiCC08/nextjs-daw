import React from 'react';
import Link from "next/link";

const Navigation = () => {

    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/post/1/Comment1'>Post 1</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation
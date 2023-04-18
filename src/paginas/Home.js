import React from 'react';
import ResponsiveAppBar from "../utils/navbar";
import FixedContainer from "../utils/container";

export default function Home() {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <FixedContainer></FixedContainer>
        </div>
    );
}

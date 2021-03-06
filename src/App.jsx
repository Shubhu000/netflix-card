import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';


const App = () => (
    <>
    <h1 className = 'heading_style'>Top 3 Netflix Series</h1>
    {Sdata.map((val, index) =>{
        return(
            <Cards 
            key = {val.id}
            imgsrc = {val.imgsrc}
            title = {val.title}
            sname = {val.sname}
            link = {val.link}
            />
            );
    })}
    </>
);

export default App;
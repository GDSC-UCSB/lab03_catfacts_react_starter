import React, { useState, useEffect } from 'react';
import { getNewCatFact } from "../../api/catFactsAPI";
import { InfinitySpin } from 'react-loader-spinner'
import CatClipart from "../../assets/cat-clipart.png"
import "./CatFacts.css";

const CatFacts = () => {
    const [catFact, setCatFact] = useState({ loading: true });

    const updateFact = () => {
        setCatFact({ loading: true });
        setTimeout(() => {
            getNewCatFact().then((data) => {
                setCatFact(data);
            });
        }, 500);
    }

    useEffect(() => {
        updateFact();
    }, []);

    if (catFact.error) return (
        <div className="cat-facts-container">Error: {catFact.error}</div>
    )

    return (
        <div className="cat-facts-container">
            <img src={CatClipart} alt={"Cute cat"} />
            <div className="cat-fact">
                <h2>Did you know?</h2>
                <p>{ catFact.loading ? <InfinitySpin width='150' color="#4fa94d"/> : catFact.fact }</p>
                <button onClick={updateFact} disabled={catFact.loading}>Get New Fact</button>
            </div>
        </div>
    )
}

export default CatFacts;
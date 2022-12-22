import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('APP is running')

    const handleShowParagraph = useCallback(() => {
        if (!allowToggle) return
        setShowParagraph(prevValue => !prevValue)
    }, [allowToggle])

    const handleAllowToggle = () => {
        setAllowToggle(true)
    }

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={handleAllowToggle}>Allow Toggle</Button>
            <Button onClick={handleShowParagraph}>Toggle Paragraph</Button>
        </div>
    );
}

export default App;

import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log('APP is running')

    const handleShowParagraph = useCallback(() => {
        setShowParagraph(prevValue => !prevValue)
    }, [])

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={false} />
            <Button onClick={handleShowParagraph}>Toggle Paragraph</Button>
        </div>
    );
}

export default App;

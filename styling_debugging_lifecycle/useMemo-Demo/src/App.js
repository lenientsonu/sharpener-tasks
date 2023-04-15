import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
    const [listTitle, setListTitle] = useState("My List");
    const [isAscending, setAscending] = useState(true);

    const changeTitleHandler = useCallback(() => {
        setListTitle("New Title");
    }, []);

    const changeSort = useCallback(() => {
        setAscending(!isAscending);
    }, [isAscending]);

    const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

    return (
        <div className='app'>
            <DemoList title={listTitle} items={listItems} isAscending={isAscending} />
            <Button onClick={changeTitleHandler}>Change List Title</Button>
            <Button onClick={changeSort}>{isAscending ? 'Change to descending order' : 'Change to ascending order'}</Button>
        </div>
    );
}

export default App;

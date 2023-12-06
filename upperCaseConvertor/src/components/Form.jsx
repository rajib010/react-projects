    import React, { useState } from "react";

    function Form() {
        const [text, setText] = useState("Enter Text Here...");

        const handleOnChange = (event) => {
            setText(event.target.value);
            console.log("text changed");
        }

        const toUpperCase = (e) => {
            console.log("Hi there");
            let newText = text.toUpperCase();
            setText(newText);
            e.preventDefault();
        }

        return (
            <form>
                <h1>Upper Case Converter</h1>
                <textarea value={text} onChange={handleOnChange} cols="30" rows="10"></textarea>
                <button onClick={toUpperCase}>Convert</button>
            </form>
        )
    }

    export default Form;

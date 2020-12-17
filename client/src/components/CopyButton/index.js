import React, { useState, useEffect, useRef } from "react";
import { UncontrolledAlert } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CopyButton = (props) => {

    //usestate to copy 
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    // //function to copy
    // function copyToClipboard(e) {
    //     textAreaRef.current.select();
    //     document.execCommand('copy');
    //     e.target.focus();
    //     setCopySuccess(<UncontrolledAlert color="success" fade={true}>Copied!</UncontrolledAlert>);
    // };

    // New function to copy
    function copyTime() {

        // STEP 1: In order to copy text to the clipboard, we need to create a text area and do like 4 other steps because Javascript is dumb and doesn't have a command to simply copy a string
        const el = document.createElement('textarea');

        // STEP 2: Set the value of the text area to the string we want to copy
        el.value = props.textToCopy;

        // STEP 3: Append the element to our document for a sec
        document.body.appendChild(el);

        // STEP 4: Select the element 
        el.select()

        // STEP 5: Copy that shiz
        document.execCommand('copy');

        // STEP: Obliterate that element. We no longer need it
        document.body.removeChild(el);

        // Display the beautiful alert that Prabin made. Go Prabin!
        setCopySuccess(<UncontrolledAlert color="success" fade={true}>Copied!</UncontrolledAlert>);

    }

    return (
        <div>
            <button type="button" className=" btn btn-lg btn-outline-secondary mr-2" onClick={copyTime}>
                <i className="far fa-copy "></i> Copy
            </button>
            {copySuccess}
        </div>
    );

}

export default CopyButton;
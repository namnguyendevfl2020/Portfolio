
import { useEffect, useState } from "react";

export default function mailto() {  

    return (
        <form action="mailto:chriscoyier@gmail.com" method="GET" target="_blank">
            <h1 className="title">Start Email to chriscoyier@gmail.com</h1>
            <div className="field"><label className="label" htmlFor="subject">Email Subject</label>
                <input name="subject" id="subject" type="text" className="input" value="Example Email Subject"/></div>
            <div className="field"><label className="label" htmlFor="body">Email Body</label>
                <textarea className="textarea" name="body" id="body">Example Email Body</textarea></div>
            <div><input type="submit" value="Create Email" className="button is-primary"/></div>
        </form>
    )
}

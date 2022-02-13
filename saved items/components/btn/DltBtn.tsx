import React from "react"
import { deleteCard, listCards, deleteDeck, listDecks } from "../utils/api";
import { useRouteMatch, useHistory } from "react-router-dom";

interface DltProps {
    cardId: number;
    deckId: number;
    setDecks: React.Dispatch<React.SetStateAction<any>>;
    setCards: React.Dispatch<React.SetStateAction<any>>;
    option: string;
    countCards: number;
    setCountCards: React.Dispatch<React.SetStateAction<any>>;
}


//implement this Dlt component to dlt a card or deck
export default function Dlt (props: DltProps) {
    const { 
        cardId, 
        deckId, 
        setDecks, 
        option, 
        setCards, 
        countCards, setCountCards 
    } = props
    
    const { url } = useRouteMatch();
    const history = useHistory();
    const handleDelete = () => {
        const abortController = new AbortController();
        const cardDelete = () => {
            const dltCard = deleteCard(cardId,abortController.signal);
            dltCard.then(() => listCards(deckId, abortController.signal)
                                .then((response) => setCards(() => response)));
            setCountCards(() => countCards + 1)
        };
        const deckDelete = () => {
            const dltDeck = deleteDeck(deckId, abortController.signal);
            dltDeck.then(() =>   listDecks(abortController.signal)
                                .then((response) => {
                                    setDecks(() => response)
                                }));
            history.push("/")
        }
        const cardMessage = `
            Delete this card?
                        
            You will not be able to recover it.`;
        const deckMessage = `
            Delete this deck?
                    
            You will not be able to recover it.`;

        //set up the appropriate message and delete method according to the "option" passed in
        const message = option === "deck" ? deckMessage : cardMessage
        const destroy = option === "deck" ? deckDelete : cardDelete
        const confirm = window.confirm(message);
        if (confirm === false) history.push(`${url}`);
        else destroy();
        return () => abortController.abort();
    };    
    return (
        <button  className="btn btn-danger" onClick = {handleDelete} >
            <span className = "oi oi-trash" />
        </button>
    )
}
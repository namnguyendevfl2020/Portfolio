import React from "react";
import Link from 'next/link'
// import { linkUrls } from "../utils/urls"

//implement this Btn component to reuse in multiple places 

interface Card {
    id: number;
    front: string;
    back: string;
    deckId: number;
  }
  
interface Deck {
    id: number;
    name: string;
    description: string;
    cards: Card[];
}

type Option = string;


interface BtnProps {
    deck: Deck;
    option: Option;
    card: Card;
}
const Btn = ({deck, option, card}: BtnProps) => {
    const BASE_URL = linkUrls(deck, card);
    //set up the btn style and url for different btn functions
    const state = (() => {
        switch (option) {
            case "create-deck": return {
                url: `${BASE_URL.deckCreate}`,
                title: 'Create Deck',
                iconClassName: "oi oi-plus",
            }
            case "view": return {
                url: `${BASE_URL.deckView}`,
                title: ' View',
                iconClassName: "oi oi-eye"
            }
            case "edit": return {
                url: `${BASE_URL.deckEdit}`,
                title: ' Edit',
                iconClassName: "oi oi-pencil"
            }
            case "study": return {
                url: `${BASE_URL.deckStudy}`,
                title: ' Study',
                iconClassName: "oi oi-book"
            }
            
            case "add-card": return {
                url: `${BASE_URL.cardCreate}`,
                title: 'Add Cards',
                iconClassName: "oi oi-plus"
            }
            case "edit-card": return {
                url: `${BASE_URL.cardEdit}`,
                title: 'Edit Card',
                iconClassName: "oi oi-pencil"
            }
            default:
        }
    })()
    //set up the icon style and url for different btn functions
    const btnClassName =(() => {
        if (option === 'view' || option === "edit" || option === "edit-card" || option === "create-deck") {
            return "mr-2 btn btn-secondary"
        }
        return "mr-2 btn btn-primary"
    })()
    return (
        <Link to={state.url}>
            <button className ={btnClassName} >
                <span className = {state.iconClassName} /> {state.title}
            </button>
        </Link>
    )
  }
export default Btn
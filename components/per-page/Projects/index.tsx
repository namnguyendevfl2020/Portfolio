import Image from "next/image";
import { StyledBtnContainer, StyledProject, StyledTech } from "./ProjectsStyles";
import flashcard from "./images/Flashcard_Dashboard.png";
import movies from "./images/We_love_movies.png";
import restaurant from "./images/restaurant.png";

const data = [
    {
        id: 1,
        name: "Flashcard o matic",
        description: "This app helps users create decks of flash cards. Additionally, they can edit or delete any deck or card.",
        techs: "HTML, CSS, Bootstrap, Javascript, Typescript, Next.js, Node.js, Express, PostgreSQL, Vercel",
        image: flashcard,
        demo: "https://namnguyen-flashcards.vercel.app",
        code: "https://github.com/namnguyendevfl2020/flashcards",
    },
    {
        id: 2,
        name: "We love movies",
        description: "This app provides users with information about movies and theaters. Users can learn movie details as well as reviews from other users and look up where to watch the movie.",
        techs: "HTML, CSS, Bootstrap, Javascript, React.js, Node.js, Express, PostgreSQL, Heroku",
        image: movies,
        demo: "https://namnguyen-movies.herokuapp.com/",
        code: "https://github.com/namnguyendevfl2020/Movies",
    },
    {
        id: 3,
        name: "Restaurant reservation",
        description: "This app is designed for restaurant personels to add customer information when the customer calls to request a reservation",
        techs: "HTML, CSS, Bootstrap, Javascript, React.js, Node.js, Express, PostgreSQL, Vercel",
        image: restaurant,
        demo: "https://namnguyen-restaurant-reservation.vercel.app/",
        code: "https://github.com/namnguyendevfl2020/restaurant-reservation",
    }
]

export default function Projects() {

    const renderedProjects = data.map((project,idx) => {
        const { id, name, description, techs, image, demo, code } = project;
        const technologies = techs && techs.split(",") || [];
        const renderedTech = technologies.map((tech,techIdx) => {
            return (
                    <div key = {techIdx} className='m-2 px-2 py-1' style = {{borderBottom: "1px solid "}}>
                        {tech}
                    </div>
            )
        })
        return (
            <div key = {idx} className="row my-2 " style = {{borderBottom: "1px solid"}}>
                <div className="col-12 col-lg d-flex align-items-center justify-content-center justify-content-lg-start">
                    <Image src = {image} alt = {name} width="500" height="250" />
                </div>
                <div className="col-12 col-lg justify-content-center">
                <StyledProject>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <StyledTech>
                        <div className='d-flex flex-wrap justify-content-center'>{renderedTech}</div>
                    </StyledTech>
                    <StyledBtnContainer className='w-100'>
                        <div className='d-flex justify-content-center'>
                            <a className="p-2 border-outline-none btn btn-primary my-3 me-2" href={demo} target="_blank" rel="noreferrer">
                                Demo
                            </a>
                            <a className="p-2 btn btn-primary my-3 ms-2" href={code} target="_blank" rel="noreferrer">
                                Code
                            </a>
                        </div>
                    </StyledBtnContainer>
                </StyledProject>
                </div>
            </div>
        )
    })
    return (<>
    <div className="">
       {renderedProjects}
    </div>
    </>)
}
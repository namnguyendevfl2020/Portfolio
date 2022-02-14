import Image from "next/image"
import { StyledBtnContainer, StyledProject, StyledTech } from "./ProjectsStyles"
import flashcard from "./Flashcard_Dashboard.png";
import movies from "./We_love_movies.png";
import restaurant from "./restaurant.png";

const data = [
    {
        id: 1,
        name: "Flashcard-o-matic",
        description: "This app help users create decks of flash cards. Additionally, they can edit or delete any deck or card.",
        techs: "Html, CSS, Bootstrap, Javascript, Typescript, Nextjs, Node.js, Express, PosgrelSql, Vercel",
        image: flashcard,
        demo: "https://flashcards-omega.vercel.app",
        code: "https://github.com/namnguyendevfl2020/flashcards",
    },
    {
        id: 2,
        name: "We love movies",
        description: "This app provides users with information about movies and theaters. Users can learn movie details as well as reviews from other users and look up where to watch the movie.",
        techs: "Html, CSS, Bootstrap, Javascript, React.js, Node.js, Express, PosgrelSql, Heroku",
        image: movies,
        demo: "https://namnguyen-movies-frontend.herokuapp.com",
        code: "https://github.com/namnguyendevfl2020/Movies",
    },
    {
        id: 3,
        name: "Restaurant reservation",
        description: "This app is designed for restaurant personels to add customer information when a customer calls to request a reservation",
        techs: "Html, CSS, Bootstrap, Javascript, React.js, Node.js, Express, PosgrelSql, Vercel",
        image: restaurant,
        demo: "https://final-capstone-2-front-end.vercel.app/dashboard",
        code: "https://github.com/namnguyendevfl2020/restaurant-reservation",
    }
]

export default function Projects() {

    const renderedProjects = data.map((project,idx) => {
        const { id, name, description, techs, image, demo, code } = project;
        const technologies = techs && techs.split(",") || []
        const renderedTech = technologies.map((tech,techIdx) => {
            return (
                    <div key = {techIdx} className='m-2 px-2 py-1' style = {{borderBottom: "1px solid "}}>
                        {tech}
                    </div>
            )
        })
        return (
            <div key = {idx} className="row my-2" style = {{borderBottom: "1px solid"}}>
            <div className="col d-flex align-items-center">
                <Image src = {image} width="500" height="250" />
            </div>
            <div className="col">
            <StyledProject>
                <h3>{name}</h3>
                <p>{description}</p>
                <StyledTech>
                    <div className='d-flex flex-wrap justify-content-center'>{renderedTech}</div>
                </StyledTech>
                <StyledBtnContainer className='w-100'>
                    <div className='d-flex justify-content-center'>
                        <a className="p-2 border-outline-none btn btn-primary my-3 me-2" href={demo} target="_blank">
                            Demo
                        </a>
                        <a className="p-2 btn btn-primary my-3 ms-2" href={code} target="_blank">
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
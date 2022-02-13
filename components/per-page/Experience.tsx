
export default function Experience () {
    const thinkfulTitle = `Full-stack Web Developer Training | 8/2021 - Present`
    const thinkfulSubtitle = `Thinkful - Remote `
    const subinternshipTitle = `Subinternship, Internal Medicine | 02/2019 - 02/2020 `
    const subinternshipSubtitle = ` Larkin Community Hospital | Miami, Fl`
    const subinternshipTasks = [
        `Took patient histories and performed physical exams.`,
        `Discussed reasonable diagnoses and treatments with the attending.`,
        `Wrote patient notes after rounding with the attending.`
    ]
    const renderedSubInternTasks = subinternshipTasks.map((task, idx) => {
        return (<>
            <div key = {idx} className="d-flex ps-5 py-0">
                <p><span className="py-0 my-0">-</span></p>
                <p className="txt-gray-6 ps-2 py-0 my-0"> {task}
                </p>
            </div>
        </>)
    })
    return (<>
        <section>
            <h2 className="fw-7 letter-spacing-tight">Experiences</h2>
            <h3 className="txt-xl fw-6 pt-3"> {thinkfulTitle} </h3>
            <h3 className="txt-lg fw-6"> {thinkfulSubtitle}</h3>
            <div className="d-flex ps-5">
                <p><span className="">-</span></p>
                <p className="txt-gray-6 ps-2">
                    <span className = ""> Learned industry best practices and web development standards with a focus on HTML5, CSS, Javascript, React, Node, Express, Postgrel, Knex, data structures and algorithm.</span>
                </p>
            </div>
        </section>
        <section>
            <h3 className="txt-xl fw-6">{subinternshipTitle}</h3>
            <h3 className="txt-lg fw-6">{subinternshipSubtitle}</h3>
            {renderedSubInternTasks}
        </section>
    </>)
}
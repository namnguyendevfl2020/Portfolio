export default function Education () {
    const ecfmgTitle = `Certificate, ECFMG | 09/05/2019`
    const mdTitle = `Doctor of Medicine | 09/2008 - 09/2014`
    const schoolTitle = `University of Medicine and Pharmacy in Ho Chi Minh city - Ho Chi Minh city, VietNam`
    return (<>
        <h2 className="fw-7 letter-spacing-tight">Education</h2>
        <h3 className="txt-xl fw-6 pt-3"> {ecfmgTitle} </h3>
        <div>
            <p className="txt-gray-6">
                <span className="ps-5">-</span>
                <span className = "px-2"> Passed a series of USMLE exams including USMLE step 1 and step 2</span>
            </p>
            
        </div>
        <h3 className="txt-xl fw-6">{mdTitle}</h3>
        <h3 className="txt-lg fw-6">{schoolTitle}</h3>
    </>)
}
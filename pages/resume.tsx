export default function Resume() {
    const src="https://docs.google.com/document/d/e/2PACX-1vSd_X2Kc7LGxpSJQufKEcs6FK9y8yO0feBWF_sbr9ArcsQn12av43MrcNQyjLNCxLrNmstWtlC569cL/pub?embedded=true"
    return (<>
    <div className="resume-div p-0">
    <iframe className="resume p-0" src={src}></iframe>
    </div>
    </>)
}

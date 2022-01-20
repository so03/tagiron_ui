export default function DeclareStatusBudge(props: any) {
    const declarationStatus = props.declarationStatus;
    if (declarationStatus === "Yet") {
        return null;
    }
    let text = null
    if (declarationStatus === "Waiting") {
        text = "Waiting...";
    } else if (declarationStatus === "Now") {
        text = "Declaring now...";
    }

    return (
        <div className="inline text-sm">{text}</div>
    )
}

export default function RoomMemberItem(props: any) {
    const name = props.name
    return (
        <li className="animate-slide-in">
            {name}
        </li>
    )
}
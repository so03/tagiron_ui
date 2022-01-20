export default function RoomUserInfo(props: any) {
    const userInfo = props.userInfo;
    return (
        <div className="container mx-auto flex-col justify-center items-center">
            <p className="text-center">Your id: {userInfo.id}</p>
            <p className="text-center">Your name: {userInfo.name}</p>
        </div>
    );
}
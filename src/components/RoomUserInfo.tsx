import React from "react";
import { UserInfo } from "../models/UserInfo";

type Props = {
    userInfo: UserInfo
}

export const RoomUserInfo: React.VFC<Props> = (props) => {
    const userInfo = props.userInfo;
    return (
        <div className="container mx-auto flex-col justify-center items-center">
            <p className="text-center">Your id: {userInfo.id}</p>
            <p className="text-center">Your name: {userInfo.name}</p>
        </div>
    );
}
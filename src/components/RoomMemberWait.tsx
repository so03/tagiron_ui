import useForm from "../hooks/useForm";
import BaseButton from "./BaseButton";

export default function RoomMemberWait(props: any) {
    const removeMember = props.removeMember;
    const { submit, isLoading } = useForm({ id: props.userInfoId });
    const handleRemove = async (e: any) => {
        await submit(e);
    };
    return (
        <div className="grid gap-4 justify-center">
            <div>Waiting other members...</div>
            <div className="text-center">
                <BaseButton text="Remove" onClick={handleRemove} />
                <p>{isLoading ? "Removing now..." : ""}</p>
            </div>
        </div>
    );
}

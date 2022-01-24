import React from "react";
import useForm from "../hooks/useForm";
import BaseButton from "./BaseButton";
import BaseInput from "./BaseInput";

type Props = {
  saveMember: () => {};
};

export const RoomMemberForm: React.VFC<Props> = (props) => {
  const saveMember = props.saveMember;
  const { isLoading, form, handleInputForm, submit } = useForm({ name: "" }, saveMember);
  const handleSubmit = async (e: any) => {
    await submit(e);
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 p-4 rounded-md grid gap-4 bg-indigo-200">
      <BaseInput
        type="text"
        name="name"
        value={form.name}
        placeholder="Enter your name here."
        onChange={handleInputForm}
      />
      <div className="text-center">
        <BaseButton type="submit" text={isLoading ? "Sending..." : "Join!"} />
      </div>
    </form>
  );
};

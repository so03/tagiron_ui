import { Room } from "./Room";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: Room,
  title: "room",
} as ComponentMeta<typeof Room>;

const Template: ComponentStory<typeof Room> = (args) => <Room {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  userInfo: {
    id: "hoge",
    name: "sasaki sou",
  },
  members: [
    {
      name: "sasaki",
    },
    {
      name: "sawada",
    },
  ],
};

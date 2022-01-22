import { Room } from './Room';

export default {
  component: Room,
  title: "room",
};

const Template = (args: any) => <Room {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  text: "sample default",
};

export const Hello: any = Template.bind({});
Hello.args = {
  text: "sample Hello",
};

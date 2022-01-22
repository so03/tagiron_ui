import { SampleText } from "./SampleText";

export default {
    component: SampleText,
    title: "sample-text"
}

const Template = (args: any) => <SampleText {...args} />;

export const Default: any = Template.bind({});
Default.args = {
    text: "sample default"
};

export const Hello: any = Template.bind({});
Hello.args = {
    text: "sample Hello"
};
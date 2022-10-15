import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";
import { Envelope } from "phosphor-react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/textInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key={1}>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" key={2} />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputInputProps> = {
    args: {
        children: ( <TextInput.Input placeholder="Type your e-mail address" /> )
    }
};

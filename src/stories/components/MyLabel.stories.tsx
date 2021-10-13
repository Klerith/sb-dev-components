import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    //   backgroundColor: { control: 'color' },
      // primary: { control: 'select', options: [true, false] }
  
    },
} as ComponentMeta<typeof MyLabel>;


const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args } />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  size: 'normal',
  allCaps: false
};

export const AllCaps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllCaps.args = {
  size: 'normal',
  allCaps: true
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllCaps.args = {
  size: 'normal',
  color: 'secondary'
};

export const Terciary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllCaps.args = {
  size: 'normal',
  color: 'tertiary'
};


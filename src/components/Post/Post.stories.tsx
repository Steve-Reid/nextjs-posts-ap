import React from 'react';
import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post,
};

const Template = () => (
  <Post
    content="I’m working in Figma trying to design a new website that shows all of my tweets!"
    date="22/3/2021"
  />
);

export const Default = Template.bind({});

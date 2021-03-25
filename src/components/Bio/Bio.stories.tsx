import React from 'react';
import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = () => (
  <Bio
    imagePath="https://pbs.twimg.com/profile_images/503598295365599232/jL6ZtIhR_400x400.jpeg"
    name="Steve Reid"
    tagline="Learning by doing!"
    position="Fullstack Developer @ On The Money Ltd"
  />
);

export const Default = Template.bind({});

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from './../../docs/sdp-ripple.png';

const theme = create({
  brandImage: `/${logo}`,
  brandTitle: 'Ripple - Storybook'
});

addons.setConfig({
  theme
});

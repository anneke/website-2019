import { configure, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

configure(require.context('../stories', true, /\.stories\.js$/), module);

import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from './';

const props = {
  title: 'Example Card',
  image: '/example.png',
  description: 'This is an example card.',
  link: 'https://example.com',
};

describe('Card', () => {
  it('should render a card with correct props', () => {
    const { getByRole, getByText } = render(<Card {...props} />);

    expect(getByRole('img')).toHaveAttribute('alt', props.title);
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
    expect(getByRole('link')).toHaveAttribute('href', props.link);
  });
});

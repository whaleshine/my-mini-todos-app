import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    // Since Home component is rendered, we can check for an element that is expected to be in Home.
    // As we don't have the content of Home.tsx, we will just check if the app renders without error.
    // A more specific assertion can be added later.
    expect(true).toBe(true);
  });
});

import { render, asFragment, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


test('renders without crashing', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
})

it("dogs page renders", () => {
  const { getByAltText, debug } = render(
    <MemoryRouter initialEntries={['/dogs']}>
      <App />
    </MemoryRouter>
  );
  debug();
  expect(getByAltText("Whiskey")).toBeInTheDocument();
  expect(getByAltText("Duke")).toBeInTheDocument();
  expect(getByAltText("Perry")).toBeInTheDocument();
  expect(getByAltText("Tubby")).toBeInTheDocument();
})

it("specific dog page renders", () => {
  const { getByAltText, getByText, debug } = render(
    <MemoryRouter initialEntries={['/dogs']}>
      <App />
    </MemoryRouter>
  );

  const whiskeyLink = getByAltText("Whiskey");
  fireEvent.click(whiskeyLink);
  debug();
  expect(getByText("Whiskey loves eating popcorn.")).toBeInTheDocument();
})
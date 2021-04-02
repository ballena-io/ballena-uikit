import React from 'react';
import { renderWithTheme } from '../../testHelpers';
import FallingBunnies from '../../components/FallingBunnies/FallingBunnies';

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<FallingBunnies count={1} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div>
        <div
          class="sc-gsTCUz jYheWP"
        >
          <svg
            class="sc-bdfBwQ ecRzkS"
            color="text"
            height="32"
            viewBox="0 0 30 26"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              height="26"
              href="/images/ballena/logo.png"
            />
          </svg>
        </div>
      </div>
    </DocumentFragment>
  `);
});

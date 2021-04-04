import React from 'react';
import { renderWithTheme } from '../../testHelpers';
import Toggle from '../../components/Toggle/Toggle';

const handleChange = jest.fn();

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="md" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlfnbm fEBdZf"
        scale="md"
      >
        <input
          checked=""
          class="sc-gsTCUz ZFluG"
          scale="md"
          type="checkbox"
        />
        <div
          class="sc-bdfBwQ cQDAMV"
          scale="md"
        />
      </div>
    </DocumentFragment>
  `);
});

it('renders correctly scale sm', () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="sm" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlfnbm bEyOHJ"
        scale="sm"
      >
        <input
          checked=""
          class="sc-gsTCUz kauJpW"
          scale="sm"
          type="checkbox"
        />
        <div
          class="sc-bdfBwQ dTMOJR"
          scale="sm"
        />
      </div>
    </DocumentFragment>
  `);
});

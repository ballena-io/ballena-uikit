import React from 'react';
import { renderWithTheme } from '../../testHelpers';
import Toggle from '../../components/Toggle/Toggle';

const handleChange = jest.fn();

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="md" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlfnbm liWvkx"
        scale="md"
      >
        <input
          checked=""
          class="sc-gsTCUz bpVkmW"
          scale="md"
          type="checkbox"
        />
        <div
          class="sc-bdfBwQ fidNJG"
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
        class="sc-dlfnbm bPkygX"
        scale="sm"
      >
        <input
          checked=""
          class="sc-gsTCUz bxxPoK"
          scale="sm"
          type="checkbox"
        />
        <div
          class="sc-bdfBwQ bQIBRa"
          scale="sm"
        />
      </div>
    </DocumentFragment>
  `);
});

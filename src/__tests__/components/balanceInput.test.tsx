import React from 'react';

import BalanceInput from '../../components/BalanceInput/BalanceInput';
import { renderWithTheme } from '../../testHelpers';

const handleChange = jest.fn();

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<BalanceInput value="14" currencyValue="15 USD" onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsTCUz sc-hKgILt jLyPtw tAeiD"
      >
        <input
          class="sc-dlfnbm sc-eCssSg hCLIJX dgtdWg"
          placeholder="0.0"
          scale="md"
          type="number"
          value="14"
        />
        <div
          class="sc-bdfBwQ eHtbc"
          color="textSubtle"
          font-size="12px"
        >
          15 USD
        </div>
      </div>
    </DocumentFragment>
  `);
});

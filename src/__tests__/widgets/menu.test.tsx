import noop from 'lodash/noop';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithTheme } from '../../testHelpers';
import { LangType, Menu, menuConfig } from '../../widgets/Menu';

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        ballePriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-hiSbYr innQvm"
      >
        <nav
          class="sc-gWHgXt kmImMa"
        >
          <div
            class="sc-bdfBwQ sc-gsTCUz iwJkGQ ckYhbt"
          >
            <button
              aria-label="Toggle menu"
              class="sc-kEjbxe gSpWKH sc-iqHYGH gOUsNC"
              scale="md"
            >
              <svg
                class="sc-fubCfw jNjWDf"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="ballena.io home page"
              class="sc-crrsfI blBAFL"
              href="/"
            >
              <svg
                class="sc-fubCfw bxnML desktop-icon"
                color="text"
                viewBox="0 0 116 26"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image
                  height="26"
                  href="/images/ballena/logoWithText.png"
                />
              </svg>
            </a>
          </div>
          <div
            class="sc-bdfBwQ sc-gsTCUz iwJkGQ cShFkN"
          >
            <a
              class="sc-jrAGrp ljvRFL"
              href="https://charts.bogged.finance/?token=0x9714C04b34E6300964161c3aC37b86451E79152d"
              target="_blank"
            >
              <svg
                class="sc-fubCfw lePvUh"
                color="text"
                viewBox="0 0 26 26"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="13"
                  cy="13"
                  fill="#ebf8ff"
                  r="12.57"
                />
                <path
                  d="M13,26A13,13,0,1,1,26,13,13,13,0,0,1,13,26ZM13,.85A12.15,12.15,0,1,0,25.15,13,12.16,12.16,0,0,0,13,.85Z"
                  fill="#00b5eb"
                />
                <path
                  d="M20.78,21.26a13.73,13.73,0,0,0-2-.14,16.29,16.29,0,0,0-2.13.14l-.18,0-.18,0-.18,0h0l-.18,0-.19,0-.13,0h-.05l-.19,0-.18,0-.19,0-.19,0-.19,0-.19,0-.19,0h0l-.14,0h0l-.09,0h-.4l-.08,0-.19,0-.19,0h0l-.19,0-.19,0-.19,0-.19,0-.18,0L12,22l-.19,0-.17,0-.18,0H9.35a9.71,9.71,0,0,1-2.76-.61l-.31-.13a10.23,10.23,0,0,0,1.19.85h0l.29.17h0a9.18,9.18,0,0,0,3.82.82A14.1,14.1,0,0,0,13.75,23h0l1.12-.28c.52-.12,1.06-.25,1.6-.36a16.41,16.41,0,0,1,4.43-.28c.24-.21.48-.43.7-.66h0A7.44,7.44,0,0,0,20.78,21.26Z"
                  fill="#00b5eb"
                />
                <path
                  d="M16.92,24.39a12.19,12.19,0,0,1-10.12-1l.21,0,1.22.16,1.47.24,1.36.23,1.21.2.85.11.88.09c.44,0,.89.05,1.33.06l1,0Z"
                  fill="#00b5eb"
                />
                <path
                  d="M20.52,22.42a13,13,0,0,1-1.71,1.13c-.71.15-1.42.29-2.14.38l-.26,0a12.8,12.8,0,0,1-1.52,0c-.48,0-1,0-1.43-.07h0l-.17,0c-.36,0-.72-.07-1.08-.13a4.72,4.72,0,0,1-.65-.15l-.15-.05h0l.44,0a4,4,0,0,0,.6,0,12.5,12.5,0,0,0,1.84-.23c.7-.13,1.39-.3,2.08-.5a12.62,12.62,0,0,1,1.75-.36,12.44,12.44,0,0,1,2.2-.12Z"
                  fill="#00b5eb"
                />
                <path
                  d="M9.06,23.38l-.26,0L8,23.2l-.4-.08C7.27,23.06,7,23,6.7,23l-.57-.06a12.39,12.39,0,0,1-1.81-1.51l.32,0a3.78,3.78,0,0,1,.88.22c.17.06.33.13.48.2l.48.22.19.1a11,11,0,0,0,1.27.68l1,.44Z"
                  fill="#00b5eb"
                />
                <path
                  d="M17.45,19.44a4.78,4.78,0,0,1-.33,1.39.16.16,0,0,1-.16.11c-.42,0-.84.1-1.26.16l-1.06.19h0a2.25,2.25,0,0,1-.49.09c-.22.05-.44.08-.66.12,0,0,0,0,0,0l-.41.07s0,0,0,0h0l-.12,0h0a0,0,0,0,1-.05,0h0l-.14,0h0l-.13,0h0a0,0,0,0,1,0,0h0c-.44.07-.87.12-1.31.15s-.75,0-1.12,0H10s0-.06,0-.08l.6-.68a9.31,9.31,0,0,0,1.18-1.8A16.3,16.3,0,0,0,13,16.49l0-.12c.14-.44.26-.87.36-1.31a10.45,10.45,0,0,0,.24-1.57.74.74,0,0,0,0-.26c-.23-.62-1.41-.51-1.92-.45-.76.08-1.5.31-2.26.44a6.35,6.35,0,0,1-3.67-.54,3.84,3.84,0,0,1-1-.66,2.62,2.62,0,0,1-.5-.65l0-.06H4.3a3.82,3.82,0,0,0,.57.11,3.16,3.16,0,0,0,1.52-.27,8.81,8.81,0,0,0,1-.49C7.91,10.35,8.42,10,9,9.71h.05a1.92,1.92,0,0,1,.33-.14A3.63,3.63,0,0,1,10,9.35a3.68,3.68,0,0,1,.87-.09,4.32,4.32,0,0,1,1.19.16l.33.11.09,0a.09.09,0,0,0,0-.05,1.09,1.09,0,0,1,0-.36c0-.13,0-.25,0-.38a4.58,4.58,0,0,1,.3-1.45,6.17,6.17,0,0,1,.63-1.19c.25-.37.55-.7.79-1.08a3.37,3.37,0,0,0,.19-.32,3.4,3.4,0,0,0,.38-1.11A14.53,14.53,0,0,0,14.89,2s0-.06,0-.09a.15.15,0,0,1,.08,0l.3.15a2.08,2.08,0,0,1,1,.94A4,4,0,0,1,16.6,4a5.82,5.82,0,0,1,.13,1.17,9.92,9.92,0,0,1-.34,2.6,6.22,6.22,0,0,1-.56,1.39,4.67,4.67,0,0,0-.65,3.06,12.94,12.94,0,0,0,1.21,2.65l.24.56c.19.47.37.95.51,1.43a9.15,9.15,0,0,1,.29,1.36A5.9,5.9,0,0,1,17.45,19.44Z"
                  fill="#1d3149"
                />
              </svg>
              <div
                class="sc-pFZIQ kLrxOT"
                color="textSubtle"
              >
                $0.23
              </div>
            </a>
            <div>
              <button
                class="sc-kEjbxe gjhA-DO"
                scale="sm"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="sc-cBNfnY dOmfSk"
        >
          <div
            class="sc-iwyYcG czZGUO"
          >
            <div
              class="sc-fFubgz huBPHA"
            >
              <div
                class="sc-bqyKva cAOthW"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                  target="_self"
                >
                  <svg
                    class="sc-fubCfw bxnML"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18,21.67a.77.77,0,0,0,.76.78H8.62V16.2a2.31,2.31,0,0,1,2.29-2.33H13.2a2.31,2.31,0,0,1,2.3,2.33v6.25h2.67a.78.78,0,0,0,.77-.78V12H5.18Z"
                      fill="none"
                      transform="translate(0)"
                    />
                    <path
                      d="M13.2,15.42H10.91a.77.77,0,0,0-.76.78v6.25H14V16.2A.78.78,0,0,0,13.2,15.42Z"
                      fill="none"
                      transform="translate(0)"
                    />
                    <polygon
                      fill="none"
                      points="21.31 10.43 21.28 10.4 20.57 9.74 20.57 9.74 20.46 9.64 18.95 8.24 18.76 8.06 12.05 1.82 5.37 7.98 5.15 8.18 3.65 9.56 3.25 9.93 2.74 10.4 2.71 10.43 2.69 10.45 21.33 10.45 21.33 10.45 21.31 10.43"
                    />
                    <path
                      d="M24,11.2a.78.78,0,0,0-.25-.6l-.21-.2L12.57.2a.33.33,0,0,0-.1-.06.57.57,0,0,0-.13-.08L12.2,0l-.14,0-.14,0-.15,0-.13.07-.1.07L.46,10.4l-.21.2a.78.78,0,0,0-.25.6H0v0a.43.43,0,0,1,0,0,.13.13,0,0,0,0,.06v0H0a.76.76,0,0,0,.74.6H3.65v9.67A2.32,2.32,0,0,0,5.94,24H18.17a2.31,2.31,0,0,0,2.29-2.33V12h2.76a.78.78,0,0,0,.78-.77v0ZM14,22.45H10.15V16.2a.77.77,0,0,1,.76-.78H13.2a.78.78,0,0,1,.77.78Zm5-.78a.78.78,0,0,1-.77.78H15.5V16.2a2.31,2.31,0,0,0-2.3-2.33H10.91A2.31,2.31,0,0,0,8.62,16.2v6.25H5.94a.77.77,0,0,1-.76-.78V12H18.94ZM2.69,10.45v0l0,0,.51-.47.4-.37,1.5-1.38L5.37,8l6.68-6.16,6.71,6.24.19.18,1.51,1.4.11.1h0l.71.66,0,0,0,0H2.69Z"
                      transform="translate(0)"
                    />
                  </svg>
                  <div
                    class="sc-dQppl ibSLUg"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="sc-bqyKva dKJAtv"
                role="button"
              >
                <a
                  href="/farms"
                  target="_self"
                >
                  <svg
                    class="sc-fubCfw bxnML"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2,8.27A3.73,3.73,0,1,0,13.83,12h0A3.68,3.68,0,0,0,10.2,8.27ZM12.41,12A2.21,2.21,0,1,1,10.2,9.73,2.24,2.24,0,0,1,12.41,12Z"
                      fill="none"
                      transform="translate(0 0)"
                    />
                    <path
                      d="M21.06,1.84H2.93c-.8,0-1.13.33-1.13,1.15V21c0,.84.32,1.17,1.14,1.17H21c.84,0,1.16-.33,1.16-1.18V3C22.2,2.17,21.88,1.84,21.06,1.84Zm-4.19,10.8H15.06a5,5,0,0,1-1,2.41l1.28,1.32a.66.66,0,0,1,0,.92.62.62,0,0,1-.89,0L13.19,16a4.82,4.82,0,0,1-2.36,1v1.86a.63.63,0,1,1-1.25,0V17a4.82,4.82,0,0,1-2.36-1L5.94,17.3a.62.62,0,0,1-.89,0,.66.66,0,0,1,0-.92l1.28-1.31a5.1,5.1,0,0,1-1-2.42H3.48a.65.65,0,0,1,.06-1.29h1.8A5,5,0,0,1,6.32,9L5,7.63a.66.66,0,0,1,0-.92.62.62,0,0,1,.89,0L7.21,8A4.82,4.82,0,0,1,9.57,7V5.17a.64.64,0,0,1,.63-.65.64.64,0,0,1,.63.65V7a4.81,4.81,0,0,1,2.35,1l1.28-1.31a.61.61,0,0,1,.89,0,.66.66,0,0,1,0,.92L14.07,8.94a5.06,5.06,0,0,1,1,2.42h1.88a.65.65,0,0,1-.06,1.29Zm3.52,3a.89.89,0,1,1-1.78,0V8.3a.9.9,0,0,1,1-.82.91.91,0,0,1,.8.82v7.38Z"
                      fill="none"
                      transform="translate(0 0)"
                    />
                    <path
                      d="M21.23,0H2.8A2.72,2.72,0,0,0,0,2.86c0,.2,0,.42,0,.61s0,7.67,0,7.91c0,.42,0,.85,0,1.27,0,.21,0,7.71,0,7.91a5.27,5.27,0,0,0,0,1.19A2.7,2.7,0,0,0,2.66,24C4.85,24,7,24,9.24,24h12a2.72,2.72,0,0,0,2.72-2.12,3.63,3.63,0,0,0,.08-.73V2.85A2.72,2.72,0,0,0,21.23,0Zm1,21c0,.85-.32,1.18-1.16,1.18H2.94c-.82,0-1.14-.33-1.14-1.17V3c0-.82.33-1.15,1.13-1.15H21.06c.82,0,1.14.33,1.14,1.17Z"
                      transform="translate(0 0)"
                    />
                    <path
                      d="M19.59,7.48a.9.9,0,0,0-1,.82v7.38a.91.91,0,0,0,.19.59.89.89,0,0,0,1.59-.59V8.3A.91.91,0,0,0,19.59,7.48Z"
                      transform="translate(0 0)"
                    />
                    <path
                      d="M16.93,11.35H15.05a5.06,5.06,0,0,0-1-2.42l1.28-1.31a.66.66,0,0,0,0-.92.61.61,0,0,0-.89,0L13.18,8a4.81,4.81,0,0,0-2.35-1V5.17a.64.64,0,0,0-.63-.65.64.64,0,0,0-.63.65V7A4.82,4.82,0,0,0,7.21,8L5.93,6.71a.62.62,0,0,0-.89,0,.66.66,0,0,0,0,.92L6.32,9a5,5,0,0,0-1,2.41H3.54a.65.65,0,0,0-.06,1.29H5.35a5.1,5.1,0,0,0,1,2.42L5.05,16.38a.66.66,0,0,0,0,.92.62.62,0,0,0,.89,0L7.22,16a4.82,4.82,0,0,0,2.36,1v1.85a.63.63,0,1,0,1.25,0V17a4.82,4.82,0,0,0,2.36-1l1.28,1.32a.62.62,0,0,0,.89,0,.66.66,0,0,0,0-.92l-1.28-1.32a5,5,0,0,0,1-2.41h1.81a.65.65,0,0,0,.06-1.29Zm-3.1.65A3.64,3.64,0,1,1,10.2,8.27,3.68,3.68,0,0,1,13.83,12Z"
                      transform="translate(0 0)"
                    />
                    <path
                      d="M10.2,9.73A2.27,2.27,0,1,0,12.41,12h0A2.24,2.24,0,0,0,10.2,9.73Z"
                      transform="translate(0 0)"
                    />
                  </svg>
                  <div
                    class="sc-dQppl ibSLUg"
                  >
                    Vaults
                  </div>
                </a>
              </div>
              <div
                class="sc-bqyKva dKJAtv"
                role="button"
              >
                <a
                  href="/staking"
                  target="_self"
                >
                  <svg
                    class="sc-fubCfw bxnML"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2,0H2.85A2.73,2.73,0,0,0,0,2.64H0V20.56a5.92,5.92,0,0,0,0,1.19A2.7,2.7,0,0,0,2.72,24H21.21a2.72,2.72,0,0,0,2.71-2.12,6,6,0,0,0,.08-.73V2.85A2.72,2.72,0,0,0,21.42,0Zm1,21c0,.85-.32,1.18-1.15,1.18H3c-.81,0-1.13-.33-1.13-1.17V3c0-.82.33-1.15,1.12-1.15H21c.81,0,1.13.33,1.13,1.17Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M19.56,7.48a.89.89,0,0,0-1,.77v7.43a1,1,0,0,0,.19.59.88.88,0,0,0,1.25.15.86.86,0,0,0,.34-.74V8.3A.91.91,0,0,0,19.56,7.48Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M14.62,16.57a8.23,8.23,0,0,0-1.13-.08,9.09,9.09,0,0,0-1.24.08H12l-.1,0h-.11l-.1,0h-.11l-.11,0H11.4l-.1,0-.11,0-.11,0-.11,0-.11,0h0l-.08,0h-.33l-.11,0-.11,0h0l-.11,0L10,17H9.87l-.11,0H9.65l-.1,0H8a5.28,5.28,0,0,1-1.6-.35l-.17-.07a6.05,6.05,0,0,0,.69.49h0l.16.1h0a5.15,5.15,0,0,0,2.21.48,8.79,8.79,0,0,0,1.25-.11h0l.65-.16.93-.21a9.63,9.63,0,0,1,2.56-.17,4.86,4.86,0,0,0,.41-.38h0A4.45,4.45,0,0,0,14.62,16.57Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M12.51,18.64a6.86,6.86,0,0,1-2.28.38,7,7,0,0,1-3.57-1h.12l.71.1.85.14.78.13.7.11.49.07.51,0c.26,0,.51,0,.77,0a5.76,5.76,0,0,0,.59,0Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M14.47,17.33a7.35,7.35,0,0,1-1,.65c-.41.09-.82.17-1.23.23H12.1a8.72,8.72,0,0,1-.88,0l-.83-.05h-.11l-.62-.08A2.62,2.62,0,0,1,9.28,18L9.2,18h0l.26,0h.35a7.5,7.5,0,0,0,1.06-.14,12.28,12.28,0,0,0,1.2-.28,5.85,5.85,0,0,1,1-.21,7.79,7.79,0,0,1,1.28-.08Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M7.84,17.89l-.14,0-.5-.09L7,17.73l-.49-.07-.33,0a7.35,7.35,0,0,1-1.05-.87h.19a2.39,2.39,0,0,1,.51.13l.28.12.27.12.11.06a5.72,5.72,0,0,0,.73.39l.57.26Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M12.59,15.29a2.4,2.4,0,0,1-.19.8c0,.05,0,.07-.09.07-.25,0-.49.06-.73.09l-.61.11h0a1.7,1.7,0,0,1-.28.06l-.38.07h0l-.24,0H10a0,0,0,0,1,0,0h0l-.08,0h0s0,0,0,0H9.75q-.37.06-.75.09H8.3s0,0,0-.05l.34-.39a5.08,5.08,0,0,0,.69-1A10.27,10.27,0,0,0,10,13.58l0-.07c.08-.25.15-.5.21-.76a5.54,5.54,0,0,0,.13-.91.26.26,0,0,0,0-.15c-.13-.36-.81-.29-1.11-.26s-.87.18-1.31.26a3.69,3.69,0,0,1-2.12-.32A2,2,0,0,1,5.25,11,1.44,1.44,0,0,1,5,10.62l0,0H5a1.94,1.94,0,0,0,.33.07,1.91,1.91,0,0,0,.88-.16,5.85,5.85,0,0,0,.56-.28c.32-.18.61-.4,1-.56h0a.77.77,0,0,1,.19-.08l.39-.12a2.07,2.07,0,0,1,.5,0,2.3,2.3,0,0,1,.69.09l.19.06.05,0a0,0,0,0,0,0,0,.74.74,0,0,1,0-.21V9.11a2.75,2.75,0,0,1,.18-.84,3.4,3.4,0,0,1,.36-.68c.15-.22.32-.41.46-.63a1.18,1.18,0,0,0,.11-.19,2,2,0,0,0,.22-.64c0-.31,0-.63,0-.94a.11.11,0,0,1,0-.05l.05,0,.17.08a1.26,1.26,0,0,1,.57.55,2,2,0,0,1,.19.54,3.05,3.05,0,0,1,.07.67A5.44,5.44,0,0,1,12,8.51a4,4,0,0,1-.32.81,2.64,2.64,0,0,0-.38,1.77,7.83,7.83,0,0,0,.7,1.53c0,.11.09.22.14.33a7.39,7.39,0,0,1,.29.83,4.18,4.18,0,0,1,.17.78A3,3,0,0,1,12.59,15.29Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M21.2,24H2.85A2.73,2.73,0,0,1,0,21.36H0V3.44A5.92,5.92,0,0,1,0,2.25,2.7,2.7,0,0,1,2.72,0H21.21a2.72,2.72,0,0,1,2.71,2.12,6,6,0,0,1,.08.73v18.3A2.72,2.72,0,0,1,21.42,24Zm1-21c0-.85-.32-1.18-1.15-1.18H3C2.22,1.82,1.9,2.15,1.9,3V21c0,.82.33,1.15,1.12,1.15H21c.81,0,1.13-.33,1.13-1.17Z"
                      transform="translate(0)"
                    />
                  </svg>
                  <div
                    class="sc-dQppl ibSLUg"
                  >
                    Staking
                  </div>
                </a>
              </div>
              <div
                class="sc-bqyKva dKJAtv"
                role="button"
              >
                <a
                  href="https://ballena.medium.com/"
                  target="_self"
                >
                  <svg
                    class="sc-fubCfw bxnML"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.15,16.46v5.13c0,1.33-.76,2.41-1.72,2.41H1.74C.78,24,0,22.92,0,21.59V2.41C0,1.08.78,0,1.74,0H8.43c1,0,1.72,1.08,1.72,2.41V7.54c0,.22-.13.4-.28.4H8.92c-.16,0-.29-.18-.29-.4v-5c0-.21-.13-.4-.29-.4H1.85c-.17,0-.3.19-.3.4V21.47c0,.21.13.4.3.4H8.31c.16,0,.29-.19.29-.4v-5c0-.22.13-.4.29-.4h1C10,16.06,10.15,16.24,10.15,16.46Z"
                    />
                    <path
                      d="M14.11,16.06h1c.16,0,.29.18.29.4v5c0,.21.13.4.29.4h6.47c.16,0,.29-.19.29-.4V2.53c0-.21-.13-.4-.29-.4H15.69c-.16,0-.29.19-.29.4v5c0,.22-.13.4-.29.4h-1c-.15,0-.28-.18-.28-.4V2.41c0-1.33.78-2.41,1.74-2.41h6.69C23.22,0,24,1.08,24,2.41V21.59c0,1.33-.78,2.41-1.74,2.41H15.57c-.92,0-1.74-1.08-1.74-2.41V16.46C13.85,16.24,14,16.06,14.11,16.06Z"
                    />
                    <path
                      d="M8,12v2.1c0,.11,0,.15-.1.14H7c-.06,0-.09,0-.09-.11V9.88c0-.1,0-.12.1-.12h.92c.09,0,.12,0,.12.14C8,10.6,8,11.3,8,12Z"
                    />
                    <path
                      d="M6.31,12v2.1c0,.11,0,.13-.1.13-.3,0-.3,0-.3-.37v-4c0-.12,0-.16.13-.15.28,0,.28,0,.28.35Z"
                    />
                    <path
                      d="M8.59,9.78h7.67s.07,0,.07-.11V7.74c0-.09.08-.12.13-.07l3.36,4.22a.12.12,0,0,1,0,.14l-3.2,4.08a.09.09,0,0,1-.14-.08V14.32a.1.1,0,0,0-.08-.1H8.59s-.07,0-.07-.1V9.87a.07.07,0,0,1,.07-.09Z"
                    />
                  </svg>
                  <div
                    class="sc-dQppl ibSLUg"
                  >
                    Migration
                  </div>
                </a>
              </div>
              <div
                class="sc-bqyKva dKJAtv"
                role="button"
              >
                <a
                  href="https://docs.ballena.io"
                  target="_blank"
                >
                  <svg
                    class="sc-fubCfw bxnML"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.71,5.38,17.51.24A1.13,1.13,0,0,0,16.82,0H1A.91.91,0,0,0,0,.81V23.19A.91.91,0,0,0,1,24H23a.91.91,0,0,0,1-.81V6A.73.73,0,0,0,23.71,5.38ZM17.79,2.76l2.88,2.38H17.79ZM2,22.38V1.62H15.84V6a.91.91,0,0,0,1,.81h5.23V22.38Z"
                    />
                    <path
                      d="M18,8.89H6a.6.6,0,0,0-.65.54A.6.6,0,0,0,6,10H18a.6.6,0,0,0,.65-.54A.6.6,0,0,0,18,8.89Z"
                    />
                    <path
                      d="M18,11.48H6a.6.6,0,0,0-.65.53.6.6,0,0,0,.65.54H18a.6.6,0,0,0,.65-.54A.6.6,0,0,0,18,11.48Z"
                    />
                    <path
                      d="M18,14.06H6a.55.55,0,1,0,0,1.08H18a.55.55,0,1,0,0-1.08Z"
                    />
                  </svg>
                  <div
                    class="sc-dQppl ibSLUg"
                  >
                    Docs
                  </div>
                </a>
              </div>
              <div
                class="sc-bqyKva dKJAtv"
                role="button"
              >
                <a
                  href="https://vote.ballena.io"
                  target="_blank"
                >
                  <svg
                    class="sc-fubCfw bxnML"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.53,8.18C18.76,6.75,17,5.33,15.19,3.9a.68.68,0,0,0-.78-.1c-2.11.88-4.25,1.71-6.36,2.61a9,9,0,0,0-4,3.27,2.23,2.23,0,0,0-.38,1.24,6.49,6.49,0,0,0,.41,1.6.56.56,0,0,0,.38.31c.88,0,1.75,0,2.74,0-.17-.41-.3-.74-.43-1.08-.2-.55-.07-.86.52-1a9.24,9.24,0,0,0,3-1.5c.64-.47,1-.43,1.53.18a6.51,6.51,0,0,0,3,2.13.63.63,0,0,1,.4,1A6.65,6.65,0,0,1,12,15.65c-.75.36-1.48.74-2.2,1.14a4.58,4.58,0,0,0-.92.64,1,1,0,0,0-.32,1.22,1.25,1.25,0,0,0,1.29.68,2.56,2.56,0,0,0,.83-.23c1.17-.56,2.38-1.07,3.49-1.72a25.16,25.16,0,0,0,3.7-2.53c1.89-1.67,2.48-4,2.9-6.27C20.81,8.46,20.65,8.28,20.53,8.18Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M10.29,20.49a2.49,2.49,0,0,1-3.08-2,2.32,2.32,0,0,1,1.23-2.32c.85-.53,1.76-1,2.65-1.44l1-.53,0-.08H0V24H15.34V18.23c-1.29.63-2.52,1.25-3.77,1.83A5.36,5.36,0,0,1,10.29,20.49Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M23.75,5.42c-1.34-1-2.7-2.09-4.06-3.13L16.69,0,15,2.08c.29.25.53.48.79.69C17.54,4.19,19.28,5.63,21.09,7a20.69,20.69,0,0,0,2.42,1.35c.2-.92.37-1.64.49-2.37A.73.73,0,0,0,23.75,5.42Z"
                      transform="translate(0)"
                    />
                    <path
                      d="M8.94,12.83c1.4,0,2.8,0,4.21,0,.18,0,.37-.16.52-.23l-2.83-2.17L8.21,11.81a4.25,4.25,0,0,0,.3.74A.62.62,0,0,0,8.94,12.83Z"
                      transform="translate(0)"
                    />
                  </svg>
                  <div
                    class="sc-dQppl ibSLUg"
                  >
                    Vote
                  </div>
                </a>
              </div>
              <div
                class="sc-kstrdz bpxVKN"
              >
                <div
                  class="sc-bqyKva dKJAtv"
                  role="button"
                >
                  <div
                    class="sc-hBEYos bomIyf"
                  >
                    <svg
                      class="sc-fubCfw bxnML"
                      color="text"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"
                      />
                    </svg>
                    <div
                      class="sc-dQppl ibSLUg"
                    >
                      Audits
                    </div>
                    <svg
                      class="sc-fubCfw bxnML"
                      color="text"
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="sc-fodVxV jmjiri"
                />
              </div>
            </div>
            <div
              class="sc-kfzAmx hexZSU"
            >
              <div
                class="sc-bBXqnf bsuXCq"
              >
                <div
                  class="sc-hHftDr ilRWpO"
                >
                  <a
                    aria-label="Github"
                    class="sc-pFZIQ sc-dIUggk jbeWlA jjJLgo"
                    color="primary"
                    href="https://github.com/ballena-io"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <svg
                      class="sc-fubCfw bxnML"
                      color="icon"
                      style="cursor: pointer;"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,0A12.15,12.15,0,0,0,0,12.3,12.27,12.27,0,0,0,8.2,24c.6.1.83-.26.83-.59s0-1.26,0-2.29c-3,.57-3.8-.75-4-1.45a4.41,4.41,0,0,0-1.23-1.73c-.42-.23-1-.8,0-.82a2.42,2.42,0,0,1,1.84,1.26,2.54,2.54,0,0,0,3.5,1,2.58,2.58,0,0,1,.76-1.65c-2.67-.31-5.46-1.37-5.46-6.07A4.88,4.88,0,0,1,5.61,8.35a4.53,4.53,0,0,1,.12-3.26s1-.32,3.3,1.26a11.18,11.18,0,0,1,6,0c2.3-1.6,3.3-1.26,3.3-1.26a4.53,4.53,0,0,1,.12,3.26,4.8,4.8,0,0,1,1.23,3.31c0,4.72-2.8,5.76-5.47,6.07A3,3,0,0,1,15,20c0,1.64,0,3,0,3.38s.22.71.83.59A12.3,12.3,0,0,0,24,12.3,12.15,12.15,0,0,0,12,0Z"
                        transform="translate(0 0)"
                      />
                    </svg>
                  </a>
                  <div
                    class="sc-idOhPF bimqSu"
                  >
                    <svg
                      class="sc-fubCfw hMiuNI"
                      color="icon"
                      style="cursor: pointer;"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.11,18.41v0h0L4.59,16.17A.3.3,0,0,1,4.46,16V5.65L9.11,8Z"
                      />
                      <polygon
                        points="9.67 13.5 9.67 8.81 13.85 15.58 9.67 13.5"
                      />
                      <polygon
                        points="11.53 10.74 14.73 5.58 19.42 7.91 14.61 15.74 11.53 10.74"
                      />
                      <path
                        d="M19.54,18.41v0h0L15,16.16l4.52-7.35Z"
                      />
                    </svg>
                    <div
                      class="sc-bkzZxe fnSjZs"
                    >
                      <a
                        aria-label="English"
                        class="sc-pFZIQ sc-dIUggk hTTmwb jjJLgo"
                        color="icon"
                        href="https://ballena.medium.com"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        English
                      </a>
                      <a
                        aria-label="Español"
                        class="sc-pFZIQ sc-dIUggk hTTmwb jjJLgo"
                        color="icon"
                        href="https://ballenaioe.medium.com"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Español
                      </a>
                    </div>
                  </div>
                  <div
                    class="sc-idOhPF bimqSu"
                  >
                    <svg
                      class="sc-fubCfw hMiuNI"
                      color="icon"
                      style="cursor: pointer;"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z"
                      />
                    </svg>
                    <div
                      class="sc-bkzZxe fnSjZs"
                    >
                      <a
                        aria-label="English"
                        class="sc-pFZIQ sc-dIUggk hTTmwb jjJLgo"
                        color="icon"
                        href="https://t.me/ballenaenglish"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        English
                      </a>
                      <a
                        aria-label="Español"
                        class="sc-pFZIQ sc-dIUggk hTTmwb jjJLgo"
                        color="icon"
                        href="https://t.me/ballenaspanish"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Español
                      </a>
                    </div>
                  </div>
                  <div
                    class="sc-idOhPF bimqSu"
                  >
                    <svg
                      class="sc-fubCfw hMiuNI"
                      color="icon"
                      style="cursor: pointer;"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z"
                      />
                    </svg>
                    <div
                      class="sc-bkzZxe fnSjZs"
                    >
                      <a
                        aria-label="English"
                        class="sc-pFZIQ sc-dIUggk hTTmwb jjJLgo"
                        color="icon"
                        href="https://twitter.com/ballenaio"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        English
                      </a>
                      <a
                        aria-label="Español"
                        class="sc-pFZIQ sc-dIUggk hTTmwb jjJLgo"
                        color="icon"
                        href="https://twitter.com/BallenaioE"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Español
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="sc-fKFyDc crsDte"
              >
                <div
                  class="sc-idOhPF bimqSu"
                >
                  <button
                    class="sc-kEjbxe cQiAIs"
                    scale="md0"
                  >
                    <div
                      class="sc-pFZIQ itViXh"
                      color="icon"
                    >
                      EN
                    </div>
                  </button>
                  <div
                    class="sc-bkzZxe fnSjZs"
                  >
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English0
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English1
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English2
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English3
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English4
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English5
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English6
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English7
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English8
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English9
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English10
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English11
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English12
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English13
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English14
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English15
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English16
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English17
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English18
                    </button>
                    <button
                      class="sc-kEjbxe fcPGIf sc-iqHYGH gOUsNC"
                      scale="md"
                      style="min-height: 32px; height: auto;"
                    >
                      English19
                    </button>
                  </div>
                </div>
                <button
                  class="sc-kEjbxe cQiAIs sc-dmlrTW hPiNdq"
                  scale="md0"
                >
                  <svg
                    class="sc-fubCfw bxnML"
                    color="icon"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z"
                    />
                    <path
                      d="M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z"
                    />
                    <path
                      d="M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z"
                    />
                    <path
                      d="M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z"
                    />
                    <path
                      d="M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z"
                    />
                    <path
                      d="M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z"
                    />
                    <path
                      d="M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            class="sc-citwmv dvWtEU"
          >
            body
          </div>
          <div
            class="sc-dlfnbm sc-jcVebW kgrCKx cjyahb"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});

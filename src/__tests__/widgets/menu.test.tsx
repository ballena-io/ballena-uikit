import React from 'react';
import noop from 'lodash/noop';
import { BrowserRouter } from 'react-router-dom';
import { renderWithTheme } from '../../testHelpers';
import { Menu, menuConfig, LangType } from '../../widgets/Menu';

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
        cakePriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bYEvPH cNGsRF"
      >
        <nav
          class="sc-kLgntA dpNHCE"
        >
          <div
            class="sc-bdfBwQ sc-gsTCUz iwJkGQ ckYhbt"
          >
            <button
              aria-label="Toggle menu"
              class="sc-pFZIQ bbzmsw sc-jrAGrp feWWVW"
              scale="md"
            >
              <svg
                class="sc-gKsewC kIBFDq"
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
              class="sc-kEjbxe hTKwD"
              href="/"
            >
              <svg
                class="sc-gKsewC iGUOBs mobile-icon"
                color="text"
                viewBox="0 0 30 26"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image
                  height="26"
                  href="/images/ballena/logo.png"
                />
              </svg>
              <svg
                class="sc-gKsewC iGUOBs desktop-icon"
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
              class="sc-fubCfw kAsmGF"
              href="https://bscscan.com/tx/0xa93afa8423564b93e6ce7e61e0c236e128a9bcf1b1d9e139ccfed5c04e3f82c7"
              target="_blank"
            >
              <svg
                class="sc-gKsewC bBefuS"
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
                class="sc-iBPRYJ bcFJuZ"
                color="textSubtle"
              >
                Price
              </div>
            </a>
            <div>
              <button
                class="sc-pFZIQ eSzTXS"
                scale="sm"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="sc-iktFzd dABFdo"
        >
          <div
            class="sc-kfzAmx kRrOVp"
          >
            <div
              class="sc-kstrdz bYqKmK"
            >
              <div
                class="sc-crrsfI hhvfZD"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="sc-gKsewC bBefuS"
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
                      fill="#49befa"
                      transform="translate(0)"
                    />
                  </svg>
                  <div
                    class="sc-iqHYGH hEViZq"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="sc-crrsfI dQwqIm"
                role="button"
              >
                <a
                  href="/farms"
                >
                  <svg
                    class="sc-gKsewC bBefuS"
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
                      fill="#59baeb"
                      transform="translate(0 0)"
                    />
                    <path
                      d="M19.59,7.48a.9.9,0,0,0-1,.82v7.38a.91.91,0,0,0,.19.59.89.89,0,0,0,1.59-.59V8.3A.91.91,0,0,0,19.59,7.48Z"
                      fill="#59baeb"
                      transform="translate(0 0)"
                    />
                    <path
                      d="M16.93,11.35H15.05a5.06,5.06,0,0,0-1-2.42l1.28-1.31a.66.66,0,0,0,0-.92.61.61,0,0,0-.89,0L13.18,8a4.81,4.81,0,0,0-2.35-1V5.17a.64.64,0,0,0-.63-.65.64.64,0,0,0-.63.65V7A4.82,4.82,0,0,0,7.21,8L5.93,6.71a.62.62,0,0,0-.89,0,.66.66,0,0,0,0,.92L6.32,9a5,5,0,0,0-1,2.41H3.54a.65.65,0,0,0-.06,1.29H5.35a5.1,5.1,0,0,0,1,2.42L5.05,16.38a.66.66,0,0,0,0,.92.62.62,0,0,0,.89,0L7.22,16a4.82,4.82,0,0,0,2.36,1v1.85a.63.63,0,1,0,1.25,0V17a4.82,4.82,0,0,0,2.36-1l1.28,1.32a.62.62,0,0,0,.89,0,.66.66,0,0,0,0-.92l-1.28-1.32a5,5,0,0,0,1-2.41h1.81a.65.65,0,0,0,.06-1.29Zm-3.1.65A3.64,3.64,0,1,1,10.2,8.27,3.68,3.68,0,0,1,13.83,12Z"
                      fill="#59baeb"
                      transform="translate(0 0)"
                    />
                    <path
                      d="M10.2,9.73A2.27,2.27,0,1,0,12.41,12h0A2.24,2.24,0,0,0,10.2,9.73Z"
                      fill="#59baeb"
                      transform="translate(0 0)"
                    />
                  </svg>
                  <div
                    class="sc-iqHYGH hEViZq"
                  >
                    Vaults
                  </div>
                </a>
              </div>
              <div
                class="sc-dQppl kVjqMM"
              >
                <div
                  class="sc-crrsfI dQwqIm"
                  role="button"
                >
                  <svg
                    class="sc-gKsewC bBefuS"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    />
                  </svg>
                  <div
                    class="sc-iqHYGH hEViZq"
                  >
                    More
                  </div>
                  <svg
                    class="sc-gKsewC iGUOBs"
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
                <div
                  class="sc-bqyKva jJwFJZ"
                />
              </div>
            </div>
            <div
              class="sc-dIUggk hajyYa"
            >
              <button
                class="sc-pFZIQ daSZot sc-hBEYos hvfepY"
                scale="md"
              >
                <svg
                  class="sc-gKsewC iGUOBs"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="sc-jJEJSO eEyHJ"
          >
            body
          </div>
          <div
            class="sc-dlfnbm sc-hiSbYr kgrCKx klxusr"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});

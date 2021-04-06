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
        class="sc-kLgntA hmuPEi"
      >
        <nav
          class="sc-iktFzd grEdDx"
        >
          <div
            class="sc-bdfBwQ sc-gsTCUz iwJkGQ ckYhbt"
          >
            <button
              aria-label="Toggle menu"
              class="sc-gKsewC ZqGQC sc-iBPRYJ gJmiPM"
              scale="md"
            >
              <svg
                class="sc-hKgILt kEuOWF"
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
              class="sc-fubCfw hNSRmn"
              href="/"
            >
              <svg
                class="sc-hKgILt jamBdP mobile-icon"
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
                class="sc-hKgILt jamBdP desktop-icon"
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
            class="sc-bdfBwQ sc-gsTCUz iwJkGQ ckYhbt"
          >
            <div>
              <button
                class="sc-gKsewC jGFjHM"
                scale="sm"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="sc-jJEJSO hYddnZ"
        >
          <div
            class="sc-fKFyDc kASSBr"
          >
            <div
              class="sc-crrsfI laFgBV"
            >
              <div
                class="sc-jrAGrp bdWccI"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="sc-hKgILt jVEZqh"
                    color="text"
                    viewBox="0 0 149.28 141.1"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M107.48,118H93.23a4.75,4.75,0,0,0-4.75,4.75V161h23.76V122.76A4.76,4.76,0,0,0,107.48,118Z"
                      fill="none"
                      transform="translate(-25.36 -29.45)"
                    />
                    <path
                      d="M57.57,156.28A4.77,4.77,0,0,0,62.33,161H79V122.76A14.27,14.27,0,0,1,93.23,108.5h14.25a14.28,14.28,0,0,1,14.26,14.26V161h16.64a4.77,4.77,0,0,0,4.76-4.75V103H57.57Z"
                      fill="none"
                      transform="translate(-25.36 -29.45)"
                    />
                    <polygon
                      fill="none"
                      points="132.55 63.88 132.34 63.69 127.95 59.67 127.95 59.66 127.29 59.06 117.9 50.46 116.71 49.37 74.98 11.15 33.39 48.86 32.02 50.1 22.71 58.55 20.23 60.8 17.04 63.69 16.82 63.89 16.71 63.99 132.67 63.99 132.66 63.98 132.55 63.88"
                    />
                    <path
                      d="M174.59,97.31c0-.11,0-.23,0-.34s-.1-.36-.15-.53a4.64,4.64,0,0,0-1.3-2.08l-1.33-1.22L103.57,30.66a5.63,5.63,0,0,0-.62-.37,4.48,4.48,0,0,0-.81-.49,5.39,5.39,0,0,0-.88-.22,5.46,5.46,0,0,0-.89-.13,5.31,5.31,0,0,0-.89.13,4.6,4.6,0,0,0-.89.21,5.47,5.47,0,0,0-.8.48,4.06,4.06,0,0,0-.63.38L28.24,93.14l-1.33,1.21a4.64,4.64,0,0,0-1.21,1.76,4.36,4.36,0,0,0-.26.87c0,.07,0,.13,0,.19a4.34,4.34,0,0,0-.06.62v.81A4.35,4.35,0,0,0,29.71,103H48.07v53.34a14.28,14.28,0,0,0,14.26,14.26h76.06a14.28,14.28,0,0,0,14.26-14.26V103h17.64a4.35,4.35,0,0,0,4.35-4.35v-.81A3.91,3.91,0,0,0,174.59,97.31ZM112.24,161H88.48V122.76A4.75,4.75,0,0,1,93.23,118h14.25a4.76,4.76,0,0,1,4.76,4.75Zm30.9-4.75a4.77,4.77,0,0,1-4.76,4.75H121.74V122.76a14.28,14.28,0,0,0-14.26-14.26H93.23A14.27,14.27,0,0,0,79,122.76V161H62.33a4.77,4.77,0,0,1-4.76-4.76V103h85.57ZM42.07,93.44l.11-.1.22-.2,3.19-2.89L48.07,88l9.31-8.45,1.37-1.24L100.34,40.6l41.73,38.22,1.19,1.09,9.39,8.6.66.6h0l4.39,4,.21.19.11.1h-116Z"
                      transform="translate(-25.36 -29.45)"
                    />
                  </svg>
                  <div
                    class="sc-pFZIQ cyJFUw"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="sc-jrAGrp iOgCIp"
                role="button"
              >
                <a
                  href="/farms"
                >
                  <svg
                    class="sc-hKgILt jVEZqh"
                    color="text"
                    viewBox="0 0 160.93 156.9"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M168.48,253.62c-.1-2.76-.12-5.53,0-8.29.07-1.55.07-50.49,0-51.71s0-2.65,0-4c.06-10.9,7.77-18.68,18.68-18.68q61.8,0,123.6,0c10.77,0,18.58,7.85,18.59,18.61q0,59.81,0,119.62a19.56,19.56,0,0,1-.55,4.83c-2.1,8.39-9.2,13.79-18.22,13.8q-40.12,0-80.24,0c-14.7,0-29.39.06-44.09,0a18,18,0,0,1-17.47-14.71,37.2,37.2,0,0,1-.28-7.75C168.51,304,168.52,255,168.48,253.62ZM248.8,315.8h60.71c5.63,0,7.78-2.13,7.78-7.72V190.64c0-5.51-2.16-7.67-7.65-7.67H188.05c-5.4,0-7.59,2.18-7.59,7.54V308.13c0,5.51,2.15,7.67,7.64,7.67Z"
                      transform="translate(-168.4 -170.94)"
                    />
                    <path
                      d="M305.13,249.43c0,8,0,16,0,24a5.86,5.86,0,0,1-3.92,5.71,6,6,0,0,1-6.7-1.87,5.76,5.76,0,0,1-1.33-3.84q0-24.1,0-48.22a6,6,0,0,1,11.94,0C305.17,233.29,305.13,241.36,305.13,249.43Z"
                      transform="translate(-168.4 -170.94)"
                    />
                    <path
                      d="M281.46,245.17H269.32a32.63,32.63,0,0,0-6.55-15.78l8.59-8.6a4.21,4.21,0,0,0-6-6l-8.6,8.6A32.65,32.65,0,0,0,241,216.87V204.73a4.22,4.22,0,0,0-8.44,0v12.14a32.59,32.59,0,0,0-15.78,6.56l-8.59-8.6a4.22,4.22,0,0,0-6,6l8.6,8.6a32.54,32.54,0,0,0-6.55,15.78H192.16a4.22,4.22,0,1,0,0,8.43H204.3a32.54,32.54,0,0,0,6.55,15.78l-8.6,8.59a4.22,4.22,0,1,0,6,6l8.59-8.6a32.69,32.69,0,0,0,15.78,6.56V294a4.22,4.22,0,0,0,8.44,0V281.9a32.65,32.65,0,0,0,15.77-6.56l8.6,8.6a4.22,4.22,0,1,0,6-6l-8.59-8.59a32.63,32.63,0,0,0,6.55-15.78h12.14a4.22,4.22,0,1,0,0-8.43Zm-44.65,28.59a24.38,24.38,0,1,1,24.37-24.38A24.41,24.41,0,0,1,236.81,273.76Z"
                      transform="translate(-168.4 -170.94)"
                    />
                    <path
                      d="M236.81,234.56a14.83,14.83,0,1,0,14.82,14.82A14.83,14.83,0,0,0,236.81,234.56Z"
                      transform="translate(-168.4 -170.94)"
                    />
                  </svg>
                  <div
                    class="sc-pFZIQ cyJFUw"
                  >
                    Vaults
                  </div>
                </a>
              </div>
              <div
                class="sc-kEjbxe gTxQxW"
              >
                <div
                  class="sc-jrAGrp iOgCIp"
                  role="button"
                >
                  <svg
                    class="sc-hKgILt jVEZqh"
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
                    class="sc-pFZIQ cyJFUw"
                  >
                    More
                  </div>
                  <svg
                    class="sc-hKgILt jamBdP"
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
                  class="sc-iqHYGH gzGyYh"
                />
              </div>
            </div>
            <div
              class="sc-hHftDr hLoBfO"
            >
              <button
                class="sc-gKsewC jxrIVv sc-dQppl bFyzuT"
                scale="md"
              >
                <svg
                  class="sc-hKgILt jamBdP"
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
            class="sc-hiSbYr kylPqV"
          >
            body
          </div>
          <div
            class="sc-dlfnbm sc-gWHgXt kgrCKx IZmxf"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});

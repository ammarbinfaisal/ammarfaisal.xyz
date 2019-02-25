import React from 'react'

const Share = props => {
  const { postTitle, url } = props
  return (
    <div className="social-share" style={{ margin: '4rem 0' }}>
      <h4 className="is-size-4">Share</h4>
      <ul
        className="is-flex"
        style={{ listStyle: 'none', alignItems: 'center', flexWrap: 'wrap' }}
      >
        {/* FACEBOOK */}
        <li>
          <a
            href={encodeURI(`https://www.facebook.com/sharer.php?u=${url}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="facebook-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-facebook-square fa-w-14 fa-3x"
            >
              <path
                fill="currentColor"
                d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
              />
            </svg>
          </a>
        </li>

        {/* TWITTER */}
        <li>
          <a
            href={encodeURI(
              `https://twitter.com/intent/tweet?text=${postTitle}&url=${url}`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="twitter-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-twitter-square fa-w-14 fa-3x"
            >
              <path
                fill="currentColor"
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
              />
            </svg>
          </a>
        </li>

        {/* GOOGLE PLUS */}
        <li>
          <a
            href={`https://plus.google.com/share?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="google-plus-square"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-google-plus-square fa-w-14 fa-3x"
            >
              <path
                fill="currentColor"
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z"
              />
            </svg>
          </a>
        </li>

        {/* WHATSAPP */}
        <li>
          <a
            href={`https://api.whatsapp.com/send?text=${postTitle}%20${url}`}
            data-action="share/whatsapp/share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="whatsapp"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-whatsapp fa-w-14 fa-3x"
            >
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>
          </a>
        </li>

        {/* MAIL */}
        <li>
          <a
            href={`mailto:?subject=${postTitle}&body=Hi, I found this blog post written by Anushka and thought you might like it ${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              data-prefix="far"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-envelope fa-w-16 fa-3x"
            >
              <path
                fill="currentColor"
                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Share

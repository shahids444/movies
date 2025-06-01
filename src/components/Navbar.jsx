function Navbar() {
    return (
        <div>
             <section>
      <aside>
        <div className="aside">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="white" />
          </svg>
          <p>Home</p>
        </div>
        <div className="aside">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.8 9.8L5.97 18.03L14.2 14.2L18.03 5.97L9.8 9.8ZM13.08 12.77C12.87 13.06 12.57 13.25 12.22 13.31C12.15 13.32 12.07 13.33 12 13.33C11.72 13.33 11.46 13.25 11.23 13.08C10.94 12.87 10.75 12.57 10.69 12.22C10.63 11.87 10.71 11.51 10.92 11.23C11.13 10.94 11.43 10.75 11.78 10.69C12.13 10.63 12.48 10.71 12.77 10.92C13.06 11.13 13.25 11.43 13.31 11.78C13.37 12.13 13.29 12.48 13.08 12.77ZM12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
              fill="white"
            />
          </svg>
          <p>Explore</p>
        </div>
        <div className="aside">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z"
              fill="white"
            />
          </svg>

          <p>Subscriptions</p>
        </div>
        <div className="line">
        </div>

        <div className="aside">
             <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 7L17 10.5L11 14V7ZM18 20H4V6H3V21H18V20ZM21 18H6V3H21V18ZM7 17H20V4H7V17Z"
              fill="white"
            />
          </svg>
          <p>Library</p>
        </div>
        <div className="aside">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM22 12C22 17.51 17.51 22 12 22C6.49002 22 2.00002 17.51 2.00002 12H3.00002C3.00002 16.96 7.04002 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C8.81002 3 5.92002 4.64 4.28002 7.38C4.17002 7.56 4.06002 7.75 3.97002 7.94C3.96002 7.96 3.95002 7.98 3.94002 8H8.00002V9H1.96002V3H2.96002V7.74C3.00002 7.65 3.03002 7.57 3.07002 7.49C3.18002 7.27 3.30002 7.07 3.42002 6.86C5.22002 3.86 8.51002 2 12 2C17.51 2 22 6.49 22 12Z"
              fill="white"
            />
          </svg>
          <p>History</p>
        </div>
        <div className="aside">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8L16 12L10 16V8ZM21 3V21H3V3H21ZM20 4H4V20H20V4Z" fill="white"/>
</svg>

          <p>Your Videos</p>
          
        </div>
        <div className="aside">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" fill="white"/>
</svg>

          <p>Watch Later</p>
        </div>
        <div className="aside">
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.77 11H14.54L16.06 6.06C16.38 5.03 15.54 4 14.38 4C13.8 4 13.24 4.24 12.86 4.65L7 11H3V21H7H8H17.43C18.49 21 19.41 20.33 19.62 19.39L20.96 13.39C21.23 12.15 20.18 11 18.77 11ZM7 20H4V12H7V20ZM19.98 13.17L18.64 19.17C18.54 19.65 18.03 20 17.43 20H8V11.39L13.6 5.33C13.79 5.12 14.08 5 14.38 5C14.64 5 14.88 5.11 15.01 5.3C15.08 5.4 15.16 5.56 15.1 5.77L13.58 10.71L13.18 12H14.53H18.76C19.17 12 19.56 12.17 19.79 12.46C19.92 12.61 20.05 12.86 19.98 13.17Z"
              fill="white"
            />
          </svg>
          <p>Liked Videos</p>
        </div>
       
        <div className="aside">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.7L5.59998 9.40001L6.29998 8.70001L11.9 14.3L17.5 8.70001L18.2 9.40001L12 15.7Z"
              fill="white"
            />
          </svg>
          <p>Show More</p>
        </div>
        <div className="line"></div>
        <h4>SUBSCRIPTIONS</h4>
        <div className="aside">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_10744_468)">
<g clip-path="url(#clip1_10744_468)">
<rect width="24" height="24" fill="url(#pattern0_10744_468)"/>
</g>
</g>

</svg>
<p>James Gouse</p>
        </div>
      </aside>
    </section>

    <section id="main">
        
    </section>
 
        </div>
    )
}

export default Navbar

import { useState } from "react";
import styles from "./css/Page1.module.css";
function Page1() {
  // const [pageVisits, setPageVisits] = useState(0);
  const [showAnchor, setShowAnchor] = useState(false);
  // const incrementctr = () => {
  //   setPageVisits(pageVisits + 1);
  // };
  //const anchorStyle = styles.anchorStyle;
  // const doSomething = () => {
  //   console.log("do something");
  // };
  return (
    <>
      <div>
        <h1
          onMouseEnter={(event) => {
            event.currentTarget.classList.add(styles.text_activated);
            setShowAnchor(true);
          }}
          onMouseLeave={(event) => {
            event.currentTarget.classList.remove(styles.text_activated);
            setShowAnchor(false);
          }}
        >
          Hi, I'm xyz.{" "}
          {showAnchor && (
            <>
              <a
                href="https://www.google.com"
                className={styles.anchorStyle}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = "#960000";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = "#000";
                }}
              >
                Google
              </a>

              <a
                href="https://www.youtube.com"
                className={styles.anchorStyle}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = "#960000";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = "#000";
                }}
              >
                YouTube
              </a>

              <a
                href="https://www.github.com"
                className={styles.anchorStyle}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = "#960000";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = "#000";
                }}
              >
                GitHub
              </a>
            </>
          )}
        </h1>
        {/* <p>Page visits: {pageVisits}</p>
        <button onClick={() => incrementctr}>Increment</button>
        {pageVisits == 0 ? <p>bruh</p> : <p>wow updated!!</p>} */}
      </div>
    </>
  );
}

export default Page1;

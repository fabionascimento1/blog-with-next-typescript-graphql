import React, { useState, useEffect } from "react";
import { ReadingProgress_ } from "./styles";

const ReadingProgress = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  const scrollListener = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    setReadingProgress((window.pageYOffset / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <ReadingProgress_>
      <div id="progress-container">
        <div
          className={`reading-progress-bar`}
          style={{ width: `${readingProgress}%` }}
        />
      </div>
    </ReadingProgress_>
  );
};

export default ReadingProgress;

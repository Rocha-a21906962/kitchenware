import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


// Wrapper component that fixes any unintended scrolling issues when moving 
// from page to page
// 
// (which might be truly annoying when, e.g., we click on a recipe that is way 
// further down on the recipe feed: once the recipe page got opened, it would
// already be scrolled all the way down to the end of its page!)
//
// Solution taken from https://stackoverflow.com/a/54343182

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
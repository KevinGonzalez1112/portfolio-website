// Required Imports 

import { useEffect } from "react";

import { useLocation } from "react-router-dom";

/*
    Creating a Custom Component that will be used scroll to the top of the window when a 
    new page is navigated to.  
*/

const ScrollToTop = () => 
{
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }, [pathname]);

    return null;
}

export default ScrollToTop;
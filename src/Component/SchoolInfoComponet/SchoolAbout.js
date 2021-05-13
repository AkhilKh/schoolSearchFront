import React from 'react';
import '../SchoolInfoComponet/SchoolAbout.css';
import '../Common.css';
import ReactPlayer from 'react-player';


function SchoolAbout (props) {
    return (
        <div className="about_section">
            <h1 className="h1_font">About</h1>
            {/* <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        title='video'/> */}

<ReactPlayer
        url="https://www.youtube.com/watch?v=9em32dDnTck"
      />
      
            <span style={{marginTop: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                 nulla pariatur. Excepteur sin t occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                  id es t laborum</span>
                  <h3> Website
                      <a href="/" style={{margin: "10px"}}>www.sjbsvm.com </a>
                      </h3>
                  <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                      </ul>

        </div>
    )

}

export default SchoolAbout;
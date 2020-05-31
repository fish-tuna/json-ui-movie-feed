import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <a href={null}>Home &nbsp;| &nbsp; </a>
        <a href={null}>Terms and Conditions &nbsp;| &nbsp; </a>
        <a href={null}>Privacy Policy &nbsp;| &nbsp; </a>
        <a href={null}>Collection Statement &nbsp;| &nbsp; </a>
        <a href={null}>Help &nbsp;| &nbsp; </a>
        <a href={null}>Manage Account</a>
        <p>
          <br />
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
      </div>
      <div className="social-media">
        <a href={null}>
          <img src="https://www.iconsdb.com/icons/preview/white/facebook-xxl.png"></img>
        </a>
        <a href={null}>
          <img src="https://www.iconsdb.com/icons/preview/white/twitter-xxl.png"></img>
        </a>
        <a href={null}>
          <img src="https://www.iconsdb.com/icons/preview/white/instagram-6-xxl.png"></img>
        </a>
      </div>
      <div className="download-links">
        <a href={null}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"></img>
        </a>
        <a href={null}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png"></img>
        </a>
        <a href={null}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/320px-Get_it_from_Microsoft_Badge.svg.png"></img>
        </a>
      </div>
    </div>
  );
}

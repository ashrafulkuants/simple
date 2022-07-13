import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
  }
  checkIsMobile=()=>{
    if(window.innerWidth<426){
      this.setState({isMobile:true})
    }}
  componentDidMount(){
    this.checkIsMobile()
  }
  render() {

    return (
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-top-left flex">
              <div className="kuants-logo">
                <Link to='/'>
                  {this.state.isMobile ? <img src="/assets/mobile-assets/footer_logo.png" alt="kunats_logo" className="image-logo" />
                    : <img
                      src="/assets/footer_logo.png"
                      alt="kunats_logo"
                      className="image-logo"
                    />}
                </Link>
              </div>
              <div className="kuants-list">
                <ul>
                  <li className="heading">
                    <p>Kuants Wealth Private Limited
                    </p>
                  </li>
                  <p>
                    AMFI Registered Mutual Fund Distributor
                  </p>

                  {/* </li> */}
                  <li>
                    <p>
                      <Link className="list-content" to="/about">
                        About us
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link className="list-content" to="/terms-and-conditions">
                        Privacy Policy
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link className="list-content" to="/library">
                        Library
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-top-right flex">
              <div className="app-list">
                <ul>
                  <li className="heading">
                    <p>Application</p>
                  </li>
                  <li>
                    <p>
                      <a className="list-content" href="https://angel.co/company/kuants-1" target="_blank" rel="noreferrer">
                        Careers
                      </a>
                    </p>
                  </li>

                  <li>
                    <p>
                      <Link className="list-content" to="/calculator">
                        Calculator
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link className="list-content" to="/terms-and-conditions">
                        Terms and Conditions
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link className="list-content" to="/partner-program">
                        Partner Program
                      </Link>
                    </p>
                  </li>

                </ul>
              </div>
              <div className="follow-list">
                <p className="heading">Follow us:</p>
                <div className="social-icon-container">
                  <div>
                    <a href="https://www.facebook.com/KuantsOfficial/" target="_blank" rel="noreferrer">
                      {this.state.isMobile ? <img src="/assets/mobile-assets/facebook.png" alt="facebook"></img>
                        : <img src="/assets/facebook.png" alt="facebook"></img>}
                    </a>
                  </div>
                  <div>
                    <a href="https://www.youtube.com/channel/UC3jqnRSEE-hGrRi162kKKJQ" target="_blank" rel="noreferrer">
                      {this.state.isMobile ? <img src="/assets/mobile-assets/youtube.png" alt="youtube"></img>
                        : <img src="/assets/youtube.png" alt="youtube"></img>}</a>
                  </div>
                  <div>
                    <a href="https://twitter.com/KuantsOfficial" target="_blank" rel="noreferrer">
                      {this.state.isMobile ? <img src="/assets/mobile-assets/twitter.png" alt="twitter"></img>
                        : <img src="/assets/twitter.png" alt="twitter"></img>}
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/kuantsofficial/" target="_blank" rel="noreferrer">
                      {this.state.isMobile ? <img src="/assets/mobile-assets/instagram.png" alt="instagram"></img>
                        : <img src="/assets/instagram.png" alt="instagram"></img>}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom flex">
            <div className="footer-bottom-left">
              <p>All rights reserved.</p>
              <p>
                <span className="bottom-text">Registered Office:</span> 2nd floor, DLF
                centre, Sansad Marg, New Delhi 110001
                <br />
                Tel: +91-11-49546000
              </p>
              <p>
                {" "}
                <span className="bottom-text">Corporate Office:</span> 8th Floor Q-Tower, A-8, Sector 68, Noida, Uttar Pradesh 201301
              </p>
              <p> ARN number: 192489</p>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Footer;

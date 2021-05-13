import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer>
        <div className="top">
          <div className="line"></div>
          <div className="icon">
            <p><i class="fas fa-paw"></i></p>
          </div>
          <div className="line"></div>
        </div>

        <div className="main_content">
          <div className="newsletter">
            <div className="left">
              <h3>Subscribe Paws!</h3>
              <p>Subscribe to our monthly newsletter</p>
            </div>
            <div className="input">
              <input type="text" placeholder="Your email..." />
              <button>Send</button>
            </div>
            <div className="right_social_handlers">
              <p><i className="fab fa-instagram"></i></p>
              <p><i className="fab fa-twitter"></i></p>
              <p><i className="fab fa-facebook-f"></i></p>
              <p><i className="fab fa-linkedin-in"></i></p>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer

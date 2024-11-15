import React from 'react'

export default function Footer() {
  return (
    <footer className="main-footer">
    <div className="footer-top"></div>
    <div className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-col">
              <h4 className="footer-title">
                About us <span className="title-under"></span>
              </h4>
              <div className="footer-content">
                <p>
                  <strong>We Donate</strong> ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis
                  viverra elementum semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum
                  semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col">
              <h4 className="footer-title">
                LAST TWEETS <span className="title-under"></span>
              </h4>
              <div className="footer-content">
                <ul className="tweets list-unstyled">
                  <li className="tweet">
                    20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar{" "}
                    <a href="http://t.co/fTSazikPd4">http://t.co/fTSazikPd4</a>
                  </li>
                  <li className="tweet">
                    20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar{" "}
                    <a href="http://t.co/fTSazikPd4">http://t.co/fTSazikPd4</a>
                  </li>
                  <li className="tweet">
                    20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar{" "}
                    <a href="http://t.co/fTSazikPd4">http://t.co/fTSazikPd4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col">
              <h4 className="footer-title">
                Contact us <span className="title-under"></span>
              </h4>
              <div className="footer-content">
                <div className="footer-form">
                  <form action="php/mail.php" className="ajax-form">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder="E-mail" required />
                    </div>
                    <div className="form-group">
                      <textarea name="message" className="form-control" placeholder="Message" required></textarea>
                    </div>
                    <div className="form-group alerts">
                      <div className="alert alert-success" role="alert"></div>
                      <div className="alert alert-danger" role="alert"></div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-submit pull-right">
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container text-right">
        We Donate &copy; copyrights 2015 - by{" "}
        <a href="http://www.ouarmedia.com" target="_blank" rel="noopener noreferrer">
          Ouarmedia
        </a>
      </div>
    </div>
  </footer>


  )
}

import React from 'react'

function header() {
  return (
    <div><section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent" style={{backgroundColor:"chocolate"}}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
        <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
        <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat: 11:00 AM - 23:00 PM</span></i>
      </div>
    </section>
      <header id="header" className="fixed-top d-flex align-items-center header-transparent" style={{backgroundColor:"rgba(26, 24, 22, 0.85)"}}>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div className="logo me-auto">
            <h1><a href="index.html">Delicious</a></h1>
            <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
              <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
              <li><a className="nav-link scrollto" href="#events">Events</a></li>
              <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
              <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#book-a-table" className="book-a-table-btn scrollto">Book a table</a>
        </div>
      </header>
      <section id="hero">
        <div className="hero-container">
          <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active" style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <div>
                      <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                      <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <div>
                      <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                      <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <div>
                      <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                      <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </section></div>
  )
}

export default header
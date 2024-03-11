function Footer() {
  return (
    <footer>
      <div className="text-container">
        <h2>
          <img src="Images/map.png" alt="map" width="40px" /> SRMIST DELHI NCR
          CAMPUS, GHAZIABAD UP
        </h2>
        <p></p>
        <p>
          SRM IST, Delhi NCR Campus, was established in the year 1997. The
          campus has more than 5000 students pursuing their career in various
          fields. The Delhi-NCR campus excels at providing the ambiance and
          serenity to allow a focused approach towards learning for its students
          with a ‘green’ campus. The world-class infrastructure provides an
          excellent blend of relevance and rigor to teaching with robust
          industry interactions and research aimed at solving real-life
          problems.
        </p>
        <p>
          <a href="https://www.srmup.in/" className="btn">
            <span className="btn-text">Visit University Site</span>
          </a>
          <a
            href="https://www.google.com/maps/place/SRM+Institute+of+Science+and+Technology+NCR+Campus/@28.7975489,77.5369214,15z/data=!4m6!3m5!1s0x390cf51f5aadb701:0x39add03eb3926d26!8m2!3d28.7975489!4d77.5369214!16s%2Fg%2F11gd1rxkwj?entry=ttu"
            className="btn"
          >
            <img
              src="Images/placeholder.png"
              className="btn-img"
              alt="Google Maps"
            ></img>
            <span className="btn-text">Google Maps</span>
          </a>
        </p>
      </div>
      <div className="map-container">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.3866712971326!2d77.53434647529548!3d28.797548875574968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51f5aadb701%3A0x39add03eb3926d26!2sSRM%20Institute%20of%20Science%20and%20Technology%20NCR%20Campus!5e0!3m2!1sen!2sin!4v1707643710550!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe> */}
        <img src="Images/srm.jpg"></img>
      </div>
    </footer>
  );
}

export default Footer;

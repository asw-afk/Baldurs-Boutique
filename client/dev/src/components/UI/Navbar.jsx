import PropTypes from 'prop-types';

export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-gradient w-100">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 fs-5">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  links: PropTypes.array,
  map: PropTypes.func,
}
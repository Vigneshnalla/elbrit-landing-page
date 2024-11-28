import React, { Component } from "react";
import PropTypes from "prop-types"; // For prop validation
import "./Footer.css";
import elbrit from "../Assets/elbrit.png";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PinDropIcon from "@mui/icons-material/PinDrop";

// ContactItem Component
class ContactItem extends Component {
  render() {
    const { Icon, label, value } = this.props;

    return (
      <p className="contact-item">
        {/* The icon will be aligned to the left */}
        <span className="icon">
          {Icon && <Icon fontSize="large" />} {/* Render the Icon only if it's passed */}
        </span>

        {/* The label and value will be aligned to the right */}
        <div className="contact-info">
          <span className="label">{label}</span>
          <span className="number">{value}</span>
        </div>
      </p>
    );
  }
}

ContactItem.propTypes = {
  Icon: PropTypes.elementType, // Icon can be optional now
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

// Footer Component
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {/* Contact Section */}
        <div className="contact">
          <ContactItem
            Icon={PhoneIcon}
            label="Phone Number"
            value="+974 3118 1843"
          />
          <ContactItem
            Icon={AttachEmailIcon}
            label="Email Address"
            value="Elbrithealth@gmail.com"
          />
          <ContactItem
            Icon={PinDropIcon}
            label="Office Location"
            value="Ambassador Street, Zone 61"
          />
        </div>

        {/* Footer Information Section */}
        <div className="footer-info">
          <img src={elbrit} alt="Elbrit Icon" />
          <p>
            <span className="label">
              Your health, physical and emotional well-being is important to
              us. We are always by your side and have made it even easier for
              you to find the necessary vitamins.
            </span>
          </p>
        </div>

        <p>© Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </footer>
    );
  }
}

export default Footer;

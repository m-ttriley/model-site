import React from 'react';

const ContactRow = ({ label, emails, isInverted }) => {
  return (
    <div className="contact-row">
      <div className="contact-label">
        <span>{label}</span>
      </div>
      <div className="contact-info">
        {emails.map((email, index) => (
          <a style={{ 'color': isInverted ? 'white' : 'black' }} key={index} href={`mailto:${email}?`} rel="noreferrer" target="_blank">{email}</a>))}
      </div>
    </div>
  );
};

export default ContactRow;
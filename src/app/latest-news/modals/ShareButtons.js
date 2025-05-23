import React from 'react';

const ShareButtons = ({ title, url }) => {
  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`Lihat artikel ini: *${title} | ZRDigitalTech* - ${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'noopener');
  };

  const socialIcons = [
    { platform: 'whatsapp', iconClass: 'fab fa-whatsapp', color: '#fff' },
    { platform: 'facebook', iconClass: 'fab fa-facebook-f', color: '#fff' },
    { platform: 'linkedin', iconClass: 'fab fa-linkedin-in', color: '#fff' }
  ];

  return (
    <div>
      <div className="social-icons-wrapper d-flex align-items-center">
        <p className="mb-0 mr-3">Bagikan:</p>
        <ul className="social-icons mb-0">
          {socialIcons.map(({ platform, iconClass, color }) => (
            <li className="mb-0" key={platform}>
              <a onClick={() => handleShare(platform)} target="_blank" rel="noopener">
                <i className={iconClass} style={{ color }}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShareButtons;

import React from 'react';
import '../css/Test04.css'; // CSS 파일 임포트
const TeamMember = ({ name, role, imgSrc, socialLinks }) => (
    <div className="column">
      <div className="card">
        <div className="img-container">
          <img src={imgSrc} alt={name} />
        </div>
        <h2>{name}</h2>
        <p>{role}</p>
        <div className="social">
          {socialLinks.twitter && <a href={socialLinks.twitter}>Twitter</a>}
          {socialLinks.linkedin && <a href={socialLinks.linkedin}>LinkedIn</a>}
          {socialLinks.github && <a href={socialLinks.github}>GitHub</a>}
          {socialLinks.email && <a href={`mailto:${socialLinks.email}`}>Email</a>}
        </div>
      </div>
    </div>
  );

const Test04 = () => {
  const teamMembers = [
    {
      name: 'James Turner',
      role: 'Founder',
      imgSrc: '/images/member-1.png',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      name: 'Luna Hall',
      role: 'Developer',
      imgSrc: '/images/member-2.png',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      name: 'Hope Carpenter',
      role: 'Designer',
      imgSrc: '/images/member-3.png',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#',
        email: '#'
      }
    }
  ];

  return (
    <div id="container">
      <h1>Our Team</h1>
      <div className="row">
        {teamMembers.map(member => (
          <TeamMember 
            key={member.name} 
            name={member.name} 
            role={member.role} 
            imgSrc={member.imgSrc} 
            socialLinks={member.socialLinks} 
          />
        ))}
      </div>
    </div>
  );
};

export default Test04;
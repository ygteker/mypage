import { FC } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const contact = {
    name: 'Yagiz Gunes Teker',
    email: 'gunes.teker@gmail.com',
    phone: '162-402-4737',
    linkedin: 'https://www.linkedin.com/in/gunesteker',
    github: 'https://github.com/ygteker',
  };

  return (
    <div className="h-screen flex">
      <div className="contact-website space-y-4 m-auto">
        <h2>{contact.name}</h2>
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        {contact.linkedin && (
          <p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        )}
        {contact.github && (
          <p>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;

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
    <div className="min-h-screen bg-slate-400">
      <div className="contact-website">
        <header>
          <h1>Contact Information</h1>
        </header>
        <h2>{contact.name}</h2>
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>Phone: {contact.phone}</p>
        {contact.linkedin && (
          <p>
            LinkedIn:{' '}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        )}
        {contact.github && (
          <p>
            GitHub:{' '}
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;

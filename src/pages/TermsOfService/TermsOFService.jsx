import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './TermsOfService.css';

const TermsOfService = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`terms-of-service-container ${theme}-theme`}>
      <header className="terms-of-service-header">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: October 26, 2023</p>
      </header>

      <div className="terms-content">
        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to Gyanoday. These Terms of Service ("Terms") govern your use of our website, mobile application, and all related services (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Service.</p>
        </section>

        <section>
          <h2>2. Use of the Service</h2>
          <p>You agree to use the Service only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the Service. Prohibited behavior includes harassment, transmitting obscene or offensive content, and disrupting the normal flow of the Service.</p>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <p>To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and are fully responsible for all activities that occur under your account.</p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>The content, features, and functionality of the Service, including but not limited to text, graphics, logos, and software, are the exclusive property of Gyanoday and are protected by international copyright, trademark, and other intellectual property laws.</p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>Gyanoday and its affiliates will not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. We do not guarantee the accuracy, completeness, or usefulness of any information on the Service.</p>
        </section>

        <section>
          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at anshulmunjal01@gmail.com.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
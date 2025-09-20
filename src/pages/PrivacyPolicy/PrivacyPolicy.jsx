import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans antialiased">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-slate-300">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </header>

        {/* Policy Content Sections */}
        <section className="space-y-12">
          
          {/* Section 1: Information We Collect */}
          <div className="p-8 bg-slate-800 rounded-2xl shadow-lg border-2 border-slate-700">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">1. Information We Collect</h2>
            <p className="text-slate-300 mb-4">
              We may collect personal identification information from users in a variety of ways, including, but not limited to, when users visit our site, fill out a form, and in connection with other activities, services, features, or resources we make available.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>
                <strong className="text-slate-200">Personal Information:</strong> We may collect your name, email address, and phone number when you submit a form.
              </li>
              <li>
                <strong className="text-slate-200">Non-Personal Information:</strong> We may collect non-personal identification information about users whenever they interact with our site. This may include the browser name, the type of computer, and technical information about users' means of connection to our site.
              </li>
            </ul>
          </div>

          {/* Section 2: How We Use Collected Information */}
          <div className="p-8 bg-slate-800 rounded-2xl shadow-lg border-2 border-slate-700">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">2. How We Use Collected Information</h2>
            <p className="text-slate-300">
              The information we collect is used to improve our services, personalize user experience, and respond to your inquiries or feedback. We do not sell, trade, or rent users' personal identification information to others.
            </p>
          </div>

          {/* Section 3: How We Protect Your Information */}
          <div className="p-8 bg-slate-800 rounded-2xl shadow-lg border-2 border-slate-700">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">3. How We Protect Your Information</h2>
            <p className="text-slate-300">
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
            </p>
          </div>

          {/* Section 4: Your Acceptance of These Terms */}
          <div className="p-8 bg-slate-800 rounded-2xl shadow-lg border-2 border-slate-700">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">4. Your Acceptance of These Terms</h2>
            <p className="text-slate-300">
              By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site. Your continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.
            </p>
          </div>
        </section>

        {/* Footer with Timestamp */}
        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>Last updated: September 20, 2025</p>
        </footer>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
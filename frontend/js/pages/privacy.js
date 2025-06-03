import { icons } from '../utils/icons.js';

export async function renderPrivacyPage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <div class="container py-5 mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="mb-4">Privacy Policy</h1>
          
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h2 class="h4 mb-3">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Service request details</li>
                <li>Payment information</li>
                <li>Device information</li>
                <li>Communication records</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process and fulfill service requests</li>
                <li>Communicate with you about services</li>
                <li>Improve our services</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>Service providers and contractors</li>
                <li>Payment processors</li>
                <li>Legal authorities when required</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
              
              <h2 class="h4 mb-3 mt-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Receive a copy of your information</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">6. Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to improve user experience and analyze service usage. You can control cookie settings through your browser.</p>
              
              <h2 class="h4 mb-3 mt-4">7. Children's Privacy</h2>
              <p>Our services are not directed to children under 13. We do not knowingly collect information from children under 13.</p>
              
              <h2 class="h4 mb-3 mt-4">8. Changes to Privacy Policy</h2>
              <p>We may update this policy periodically. We will notify you of material changes through our website or email.</p>
              
              <h2 class="h4 mb-3 mt-4">9. Contact Us</h2>
              <p>For privacy-related inquiries, please contact us at:</p>
              <ul>
                <li>Email: privacy@dern-support.com</li>
                <li>Phone: +998 (77) 777-7777</li>
                <li>Address: 123, Tashkent, Uzbekistan</li>
              </ul>
            </div>
          </div>
          
          <p class="text-center text-secondary">
            Last updated: March 1, 2025
          </p>
        </div>
      </div>
    </div>
  `;
  
  // Update document title
  document.title = 'Privacy Policy - Dern-Support';
}
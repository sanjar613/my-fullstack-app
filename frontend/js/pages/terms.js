import { icons } from '../utils/icons.js';

export async function renderTermsPage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <div class="container py-5 mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="mb-4">Terms of Service</h1>
          
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h2 class="h4 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using Dern-Support's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              
              <h2 class="h4 mb-3 mt-4">2. Service Description</h2>
              <p>Dern-Support provides IT technical support services, including but not limited to:</p>
              <ul>
                <li>Hardware repair and maintenance</li>
                <li>Software troubleshooting and support</li>
                <li>Network setup and configuration</li>
                <li>Data recovery services</li>
                <li>IT consultation</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">3. User Responsibilities</h2>
              <p>Users of Dern-Support services agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of their account credentials</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Not engage in any unauthorized access or use of the service</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">4. Service Availability</h2>
              <p>While we strive to provide uninterrupted service, we do not guarantee that our services will be available at all times. We reserve the right to modify or discontinue services with or without notice.</p>
              
              <h2 class="h4 mb-3 mt-4">5. Payment Terms</h2>
              <p>Users agree to pay all fees associated with the services they receive. Fees will be clearly communicated before service delivery. Payment terms may vary based on service type and user category (individual or business).</p>
              
              <h2 class="h4 mb-3 mt-4">6. Warranty and Liability</h2>
              <p>Services are provided "as is" without any warranty. Dern-Support shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services.</p>
              
              <h2 class="h4 mb-3 mt-4">7. Data Protection</h2>
              <p>We handle user data in accordance with our Privacy Policy. Users are responsible for backing up their data before service delivery.</p>
              
              <h2 class="h4 mb-3 mt-4">8. Termination</h2>
              <p>We reserve the right to terminate or suspend access to our services for violations of these terms or for any other reason we deem appropriate.</p>
              
              <h2 class="h4 mb-3 mt-4">9. Changes to Terms</h2>
              <p>We may modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
              
              <h2 class="h4 mb-3 mt-4">10. Contact Information</h2>
              <p>For questions about these terms, please contact us at:</p>
              <ul>
                <li>Email: legal@dern-support.com</li>
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
  document.title = 'Terms of Service - Dern-Support';
}
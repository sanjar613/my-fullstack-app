import { icons } from '../utils/icons.js';

export function createFooter() {
  const footerContainer = document.getElementById('footer-container');
  
  footerContainer.innerHTML = `
    <footer class="footer mt-auto py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h5 class="mb-3">Dern-Support</h5>
            <p>Your trusted partner for all IT technical support needs. We provide expert solutions for businesses and individuals.</p>
            <div class="d-flex gap-3 mt-4">
              <a href="#" class="text-secondary" aria-label="Facebook">
                ${icons.facebook}
              </a>
              <a href="#" class="text-secondary" aria-label="Twitter">
                ${icons.twitter}
              </a>
              <a href="#" class="text-secondary" aria-label="Instagram">
                ${icons.instagram}
              </a>
              <a href="#" class="text-secondary" aria-label="LinkedIn">
                ${icons.linkedin}
              </a>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-6">
            <h5 class="mb-3">Company</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="about">About Us</a></li>
              <li class="mb-2"><a href="#">Our Team</a></li>
              <li class="mb-2"><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div class="col-lg-2 col-md-6">
            <h5 class="mb-3">Services</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#">Hardware Repair</a></li>
              <li class="mb-2"><a href="#">Software Support</a></li>
              <li class="mb-2"><a href="#">Network Setup</a></li>
              <li class="mb-2"><a href="#">Data Recovery</a></li>
              <li class="mb-2"><a href="#">IT Consultation</a></li>
            </ul>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <h5 class="mb-3">Contact Us</h5>
            <ul class="list-unstyled">
              <li class="mb-2 d-flex align-items-center">
                ${icons.mapPin}
                <span class="ms-2">123, Tashkent, Uzbekistan</span>
              </li>
              <li class="mb-2 d-flex align-items-center">
                ${icons.phone}
                <span class="ms-2">+998 (77) 777-7777</span>
              </li>
              <li class="mb-2 d-flex align-items-center">
                ${icons.mail}
                <span class="ms-2">support@dern-support.com</span>
              </li>
              <li class="mb-2 d-flex align-items-center">
                ${icons.clock}
                <span class="ms-2">Mon-Fri: 8:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr class="my-4">
        
        <div class="row">
          <div class="col-md-6 mb-3 mb-md-0">
            <p class="mb-0">© 2025 Dern-Support</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="privacy" class="text-decoration-none me-3">Privacy Policy</a>
            <a href="terms" class="text-decoration-none me-3">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
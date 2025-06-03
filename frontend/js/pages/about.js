import { icons } from '../utils/icons.js';

export async function renderAboutPage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <div class="container py-5 mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="mb-4">About Dern-Support</h1>
          
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h2 class="h4 mb-3">Our Story</h2>
              <p>Founded in 2025, Dern-Support emerged from a simple vision: to make expert IT support accessible to everyone. What started as a small team of passionate technicians has grown into a comprehensive technical support platform serving both individuals and businesses.</p>
              
              <h2 class="h4 mb-3 mt-4">Our Mission</h2>
              <p>We strive to provide exceptional IT support services that empower our clients to maximize their technology investments. Our mission is to deliver prompt, reliable, and cost-effective solutions while maintaining the highest standards of customer service.</p>
              
              <h2 class="h4 mb-3 mt-4">Our Values</h2>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 text-primary me-3">
                      ${icons.checkCircle}
                    </div>
                    <div>
                      <h3 class="h5 mb-2">Excellence</h3>
                      <p class="mb-0">We pursue excellence in every service we provide, ensuring the highest quality solutions for our clients.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 text-primary me-3">
                      ${icons.shield}
                    </div>
                    <div>
                      <h3 class="h5 mb-2">Integrity</h3>
                      <p class="mb-0">We operate with complete transparency and honesty, building trust with our clients through ethical practices.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 text-primary me-3">
                      ${icons.clock}
                    </div>
                    <div>
                      <h3 class="h5 mb-2">Reliability</h3>
                      <p class="mb-0">We deliver consistent, dependable service when our clients need it most.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 text-primary me-3">
                      ${icons.users}
                    </div>
                    <div>
                      <h3 class="h5 mb-2">Customer Focus</h3>
                      <p class="mb-0">We put our clients first, ensuring their success through personalized support and solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 class="h4 mb-3 mt-4">Our Team</h2>
              <p>Our team consists of certified IT professionals with diverse expertise in hardware, software, networking, and cybersecurity. We continuously invest in training and development to stay ahead of technological advances.</p>
              
              <div class="row g-4 mt-2">
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" class="card-img-top" alt="John Smith">
                    <div class="card-body text-center">
                      <h3 class="h5 mb-1">John Smith</h3>
                      <p class="text-secondary mb-2">CEO & Founder</p>
                      <p class="small">15+ years of experience in IT industry leadership and technical support management.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100">
                    <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg" class="card-img-top" alt="Sarah Johnson">
                    <div class="card-body text-center">
                      <h3 class="h5 mb-1">Sarah Johnson</h3>
                      <p class="text-secondary mb-2">Technical Director</p>
                      <p class="small">Expert in network infrastructure and cloud solutions with multiple certifications.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100">
                    <img src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" class="card-img-top" alt="Michael Chen">
                    <div class="card-body text-center">
                      <h3 class="h5 mb-1">Michael Chen</h3>
                      <p class="text-secondary mb-2">Support Manager</p>
                      <p class="small">Specialized in customer service excellence and technical team leadership.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 class="h4 mb-3 mt-4">Our Location</h2>
              <p>Located in the heart of Cityville's IT Park, our modern facility is equipped with state-of-the-art diagnostic and repair tools. We also provide remote support services to clients worldwide.</p>
              
              <div class="row align-items-center mt-4">
                <div class="col-md-6">
                  <h2 class="h4 mb-3">Contact Us</h2>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <div class="d-flex align-items-center">
                        ${icons.mapPin}
                        <span class="ms-2">123, Tashkent, Uzbekistan</span>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="d-flex align-items-center">
                        ${icons.phone}
                        <span class="ms-2">+998 (77) 777-7777</span>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="d-flex align-items-center">
                        ${icons.mail}
                        <span class="ms-2">support@dern-support.com</span>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex align-items-center">
                        ${icons.clock}
                        <span class="ms-2">Mon-Fri: 8:00 AM - 7:00 PM</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex gap-3 justify-content-md-end mt-4 mt-md-0">
                    <a href="#" class="btn btn-outline-primary">
                      ${icons.messageCircle} Chat with Us
                    </a>
                    <a href="/support-request" onclick="return navigateTo('/support-request')" class="btn btn-primary">
                      ${icons.plus} Submit Request
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Update document title
  document.title = 'About Us - Dern-Support';
}
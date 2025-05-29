import { icons } from '../utils/icons.js';

export async function renderHomePage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h1 class="display-4 fw-bold mb-4 fade-in">Expert IT Support When You Need It</h1>
            <p class="lead mb-5 fade-in">We provide comprehensive technical support for businesses and individuals, solving your IT problems quickly and efficiently.</p>
            <div class="d-flex flex-wrap justify-content-center gap-3 fade-in">
              <a href="/register" onclick="return navigateTo('/register')" class="btn btn-primary btn-lg px-4 py-3 pulse">Get Started</a>
              <a href="#services" class="btn btn-outline-light btn-lg px-4 py-3">Our Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Key Features Section -->
    <section class="py-5" id="services">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold">Our Services</h2>
            <p class="lead text-secondary">We offer a wide range of IT support services to keep your technology running smoothly.</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-4">
                  ${icons.laptop}
                </div>
                <h3 class="h4 mb-3">Hardware Support</h3>
                <p class="mb-0">Expert diagnosis and repair for computers, laptops, printers, and other devices to get you back up and running.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-4">
                  ${icons.code}
                </div>
                <h3 class="h4 mb-3">Software Solutions</h3>
                <p class="mb-0">Troubleshooting and support for operating systems, applications, and custom software implementations.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-4">
                  ${icons.wifi}
                </div>
                <h3 class="h4 mb-3">Network Setup</h3>
                <p class="mb-0">Installation, configuration, and troubleshooting of home and business networks for optimal performance.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-4">
                  ${icons.server}
                </div>
                <h3 class="h4 mb-3">Server Management</h3>
                <p class="mb-0">Setup and maintenance of servers, including cloud solutions, with focus on security and performance.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-4">
                  ${icons.shield}
                </div>
                <h3 class="h4 mb-3">Security Services</h3>
                <p class="mb-0">Protect your data with comprehensive security solutions, including antivirus, firewall, and backup solutions.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-4">
                  ${icons.database}
                </div>
                <h3 class="h4 mb-3">Data Recovery</h3>
                <p class="mb-0">Professional recovery of lost or corrupted data from various storage devices with high success rates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- How It Works Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold">How It Works</h2>
            <p class="lead text-secondary">Getting support from Dern-Support is quick and simple.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style="width: 80px; height: 80px;">
              <h3 class="text-white mb-0">1</h3>
            </div>
            <h4>Submit a Request</h4>
            <p>Fill out our quick support request form with details about your issue.</p>
          </div>
          
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style="width: 80px; height: 80px;">
              <h3 class="text-white mb-0">2</h3>
            </div>
            <h4>Get a Quote</h4>
            <p>Our technicians will review your issue and provide an estimate for the service.</p>
          </div>
          
          <div class="col-md-4 text-center">
            <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style="width: 80px; height: 80px;">
              <h3 class="text-white mb-0">3</h3>
            </div>
            <h4>Problem Solved</h4>
            <p>Our experts will fix your issue promptly and efficiently.</p>
          </div>
        </div>
        
        <div class="text-center mt-5">
          <a href="/register" onclick="return navigateTo('/register')" class="btn btn-primary btn-lg px-4">Get Started Now</a>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold">Customer Testimonials</h2>
            <p class="lead text-secondary">Hear what our satisfied customers have to say about our services.</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="testimonial h-100">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="John Smith" class="testimonial-avatar">
              <div class="testimonial-content">
                <p>The team at Dern-Support saved my business when our server crashed. They recovered our data and had us back online within hours. Extremely professional service!</p>
              </div>
              <h5 class="testimonial-name">John Smith</h5>
              <p class="testimonial-role">Small Business Owner</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="testimonial h-100">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sarah Johnson" class="testimonial-avatar">
              <div class="testimonial-content">
                <p>I was having issues with my laptop for weeks before contacting Dern-Support. Their technician identified and fixed the problem quickly. Excellent service and fair pricing!</p>
              </div>
              <h5 class="testimonial-name">Sarah Johnson</h5>
              <p class="testimonial-role">Freelance Designer</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="testimonial h-100">
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Michael Chen" class="testimonial-avatar">
              <div class="testimonial-content">
                <p>Our company needed to set up a secure network for our new office. Dern-Support handled everything from start to finish, ensuring all our devices were properly connected and secured.</p>
              </div>
              <h5 class="testimonial-name">Michael Chen</h5>
              <p class="testimonial-role">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-5 bg-warning text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <h2 class="fw-bold">Ready to solve your IT issues?</h2>
            <p class="lead mb-0">Sign up today and get your first consultation free.</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a href="/register" onclick="return navigateTo('/register')" class="btn btn-light btn-lg px-4">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  `;
  
  // Update document title
  document.title = 'Dern-Support - IT Technical Support Services';
}
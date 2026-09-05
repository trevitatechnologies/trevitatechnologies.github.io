/**
 * Trevita Technologies Website JavaScript Logic
 * Contains navigation handling, dynamic showcase tab switching,
 * form submission, and scroll-reveal effects.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. Mobile Menu Toggle
  // ==========================================
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-links-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
      
      // Animate hamburger lines
      const spans = menuToggle.querySelectorAll('span');
      if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.querySelectorAll('span').forEach(span => span.style.transform = 'none');
        menuToggle.querySelectorAll('span')[1].style.opacity = '1';
      });
    });
  }

  // ==========================================
  // 2. Active Navigation Highlight on Scroll
  // ==========================================
  const sections = document.querySelectorAll('section');
  
  const options = {
    threshold: 0.3,
    rootMargin: '0px 0px -20% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  // ==========================================
  // 3. Dynamic Vertical Tabs Switching
  // ==========================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const showcaseContainer = document.getElementById('showcase-content-pane');

  // Define contents for the showcase panel dynamically
  const verticalContents = {
    'cloud-ai': `
      <div class="showcase-info">
        <h3>Cloud &amp; AI Consulting</h3>
        <p>
          We design and execute future-proof cloud environments. As transformation consultants, we unlock intelligence and scalability for your workforce by tailoring cloud deployments and integrating powerful generative AI models.
        </p>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
          Partnering with global cloud leaders to provide certified solutions:
        </p>
        <div class="partners-logos">
          <div class="partner-logo">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px;">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#4285F4"/>
            </svg>
            Google Cloud
          </div>
          <div class="partner-logo">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px;">
              <path d="M0 3.449L9.75 0l5.85 17.519L4.875 24 0 3.449zm24 .052L14.25.043 8.4 17.562 19.125 24 24 3.501z" fill="#0078D4"/>
            </svg>
            Microsoft Azure
          </div>
        </div>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <h4>Cloud Strategy</h4>
          <p>Tailored modernization paths, total cost assessments, and hybrid integration architectures.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            </svg>
          </div>
          <h4>Google Cloud Setup</h4>
          <p>Expert deployments in BigQuery, Google Kubernetes Engine, and GCP AI engines.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="15" y1="3" x2="15" y2="21"></line>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="3" y1="15" x2="21" y2="15"></line>
            </svg>
          </div>
          <h4>Azure Integrations</h4>
          <p>Robust enterprise environments leveraging Microsoft Entra, Synapse, and Azure AI.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h4>AI Engineering</h4>
          <p>Custom large language models, retrieval augmented generation, and smart workflow automation.</p>
        </div>
      </div>
    `,
    'future-vert': `
      <div class="showcase-info">
        <h3>Next-Gen Enterprise</h3>
        <p>
          We are actively scoping our next strategic verticals designed to address tomorrow's enterprise challenges. By combining decentralized logic, edge compute, and advanced security frameworks, we help you prepare for the next shift in global infrastructure.
        </p>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
          Underlying research vectors currently in prototyping:
        </p>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
          <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary);">
            <span style="color: var(--accent-tertiary);">✦</span> Zero-Trust Cyber Assurance Architectures
          </li>
          <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary);">
            <span style="color: var(--accent-tertiary);">✦</span> Smart Energy &amp; Autonomous IoT Systems
          </li>
          <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary);">
            <span style="color: var(--accent-tertiary);">✦</span> Real-Time Analytics &amp; Microsecond Stream Processing
          </li>
        </ul>
      </div>
      <div class="services-grid">
        <div class="service-card" style="border-style: dashed; opacity: 0.85;">
          <div class="service-icon" style="color: var(--accent-tertiary); background: rgba(6, 182, 212, 0.1);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h4>Cybersecurity Edge</h4>
          <p>Decentralized identity, zero-trust cloud infrastructure, and compliance framework automation.</p>
        </div>
        <div class="service-card" style="border-style: dashed; opacity: 0.85;">
          <div class="service-icon" style="color: var(--accent-tertiary); background: rgba(6, 182, 212, 0.1);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
          </div>
          <h4>Enterprise IoT</h4>
          <p>Smart factory architectures, automated device orchestration, and real-time edge streaming pipelines.</p>
        </div>
      </div>
    `
  };

  if (tabButtons && showcaseContainer) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button class
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Apply smooth transition by fading out content, replacing it, and fading back in
        showcaseContainer.style.opacity = '0';
        showcaseContainer.style.transform = 'translateY(10px)';
        showcaseContainer.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

        setTimeout(() => {
          const verticalKey = btn.getAttribute('data-vertical');
          showcaseContainer.innerHTML = verticalContents[verticalKey] || '';
          
          showcaseContainer.style.opacity = '1';
          showcaseContainer.style.transform = 'translateY(0)';
        }, 250);
      });
    });
  }

  // ==========================================
  // 4. Contact Form Interaction
  // ==========================================
  const consultForm = document.getElementById('consultation-form');
  const successAlert = document.getElementById('form-success-alert');
  const resetBtn = document.getElementById('btn-reset-form');
  const submitBtn = document.getElementById('btn-submit-form');

  if (consultForm && successAlert && submitBtn) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Disable submission button and display a sending state
      submitBtn.disabled = true;
      const origText = submitBtn.innerHTML;
      submitBtn.innerHTML = `Sending Request... <span class="spinner" style="display:inline-block; animation: spin 1s linear infinite; margin-left: 5px;">✦</span>`;

      // Extract form data
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const countryCode = document.getElementById('form-country-code').value;
      const phone = document.getElementById('form-phone').value;
      const company = document.getElementById('form-company').value;
      const interest = document.getElementById('form-interest').value;
      const message = document.getElementById('form-message').value;

      const payload = {
        name: name,
        email: email,
        phone: `${countryCode} ${phone}`,
        company: company,
        interest: interest,
        message: message,
        timestamp: new Date().toISOString()
      };

      const endpoint = window.CONFIG && window.CONFIG.formEndpoint;

      if (endpoint && endpoint.trim() !== "") {
        // Send a real POST request to Apps Script Web App
        // Format body as url-encoded parameters for maximum compatibility with doPost(e)
        const formBody = [];
        for (const property in payload) {
          const encodedKey = encodeURIComponent(property);
          const encodedValue = encodeURIComponent(payload[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        const bodyData = formBody.join("&");

        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: bodyData,
          mode: 'no-cors' // Use no-cors to prevent preflight OPTIONS check blocking
        })
        .then(() => {
          // Since we use no-cors, the response is opaque and we can't inspect status/body,
          // but we can assume the browser successfully sent the request.
          successAlert.classList.add('show');
          consultForm.reset();
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          alert('There was a problem submitting your request. Please try again or email us directly at solutions@trevita.ai.');
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        });
      } else {
        // Fallback: Simulate network request delay (800ms)
        setTimeout(() => {
          successAlert.classList.add('show');
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
          consultForm.reset();
        }, 800);
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        successAlert.classList.remove('show');
      });
    }
  }

  // ==========================================
  // 5. Scroll Reveal Effect
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});

// Embedded style animations helper for spinner icon
const styleElem = document.createElement('style');
styleElem.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleElem);

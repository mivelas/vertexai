import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [result, setResult] = useState("");
// @ts-ignore
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "78013d37-a48f-4258-a681-3d02cf30e4f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
    return (
      <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="glass-card success-card">
            <CheckCircle size={64} className="success-icon" />
            <h2>Strategy Session Booked!</h2>
            <p>Thank you for reaching out to Nexalist AI. We'll be in touch within 24 hours to schedule your discovery call.</p>
            <button onClick={() => setFormState('idle')} className="btn btn-primary">Send Another Message</button>
          </div>
        </div>
      </section>
    );
    
  };


  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title">Ready to <span className="gradient-text">Evolve?</span></h2>
          <p className="contact-text">
            Schedule a confidential discovery call with the Nexalist team to discuss your business goals and AI roadmap.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">info@nexalistai.com</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Inquiries</span>
              <span className="detail-value">SW Florida • Remote</span>
            </div>
          </div>
        </div>

        <div className="glass-card contact-form-card">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input type="email" id="email" name="email" required placeholder="your.email@company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service of Interest</label>
              <select id="service" name="service" required>
                <option value="">Select a service...</option>
                <option value="strategy">AI Strategic Planning</option>
                <option value="training">Corporate Training</option>
                <option value="audit">Readiness Audit</option>
                <option value="solution">Custom Solution Design</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your organization's AI objectives..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit" disabled={formState === 'submitting'}>
              {formState === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
            </button>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

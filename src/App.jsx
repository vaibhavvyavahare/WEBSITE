import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Globe,
  Smartphone,
  Zap,
  ChevronRight,
  Mail,
  Users,
  Award,
  AlertTriangle,
  Lightbulb,
  Phone,
  MapPin,
  ExternalLink,
  Scale
} from 'lucide-react';
import './App.css';

const App = () => {
  const team = [
    { name: 'Aditya Mhaske', roll: 'RBT25ME22', initials: 'AM' },
    { name: 'Parsh Gugale', roll: 'RBT25ME22', initials: 'PG' },
    { name: 'Pranav Vyavahare', roll: 'RBT25ME35', initials: 'PV' },
    { name: 'Satyajeet Bhandwale', roll: 'RBT25ME38', initials: 'SB' },
  ];

  const objectives = [
    {
      title: 'Digital Awareness',
      desc: 'Creating widespread knowledge about responsible digital usage.',
      icon: <Eye className="icon" />
    },
    {
      title: 'Cyber Education',
      desc: 'Educating people about sophisticated threats like phishing.',
      icon: <Shield className="icon" />
    },
    {
      title: 'Safe Practices',
      desc: 'Promoting the use of strong passwords and firewalls.',
      icon: <Lock className="icon" />
    },
    {
      title: 'Crime Reduction',
      desc: 'Working towards significantly reducing online fraud cases.',
      icon: <Zap className="icon" />
    },
  ];

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar glass">
        <div className="logo hvr-float">
          <Shield className="logo-icon" />
          <span>Cyber Sathi <span className="gradient-text">NGO</span></span>
        </div>
        <div className="nav-links">
          <a href="#about">Our Mission</a>
          <a href="#objectives">Objectives</a>
          <a href="#team">Our Team</a>
          <button className="btn-primary">Join Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering <span className="gradient-text">Digital Sathi</span> for a Safer Tomorrow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cyber Sathi NGO is dedicated to fostering digital literacy and enhancing cyber security awareness across all sectors of society. We believe in a secure digital ecosystem for everyone.
          </motion.p>
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="btn-primary">Explore Initiatives <ChevronRight size={18} /></button>
            <button className="btn-secondary">Our Impact</button>
          </motion.div>
        </div>
        <div className="hero-visual">
          <div className="floating-card glass">
            <Lock size={40} className="floating-icon" />
            <h3>Secure Access</h3>
          </div>
          <div className="floating-card glass alt">
            <Shield size={40} className="floating-icon" />
            <h3>Public Safety</h3>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="about" className="problem-section">
        <div className="header-box">
          <span className="badge">Our Mission</span>
          <h2>Addressing the <span className="gradient-text">Digital Divide</span></h2>
        </div>
        <div className="problem-grid">
          <motion.div
            className="problem-card glass"
            whileHover={{ y: -5 }}
          >
            <AlertTriangle className="card-icon warning" />
            <h3>Awareness Gap</h3>
            <p>Rapid digitization has left many vulnerable to cyber threats due to a lack of formal security education.</p>
          </motion.div>
          <motion.div
            className="problem-card glass"
            whileHover={{ y: -5 }}
          >
            <Zap className="card-icon danger" />
            <h3>Emerging Threats</h3>
            <p>From social engineering to financial fraud, we provide the tools and knowledge to mitigate modern cyber risks.</p>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="objectives-section">
        <center>
          <span className="badge">Core Strategy</span>
          <h2>What We Aim To <span className="gradient-text">Achieve</span></h2>
        </center>
        <div className="objectives-grid">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              className="obj-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper">{obj.icon}</div>
              <h3>{obj.title}</h3>
              <p>{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section glass">
        <div className="benefits-content">
          <h2>Empowering the <span className="gradient-text">Rural Backbone</span></h2>
          <ul className="benefits-list">
            <li><Lightbulb color="var(--primary)" /> Improves overall digital literacy across villages</li>
            <li><Lightbulb color="var(--primary)" /> Enables secure online banking and UPI payments</li>
            <li><Lightbulb color="var(--primary)" /> Increases confidence in using modern technology</li>
            <li><Lightbulb color="var(--primary)" /> Protects hard-earned money from cyber criminals</li>
          </ul>
        </div>
        <div className="benefits-stats">
          <div className="stat-item">
            <h4>100%</h4>
            <p>Commitment</p>
          </div>
          <div className="stat-item">
            <h4>SAFE</h4>
            <p>Browsing</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <center>
          <span className="badge">Our Leadership</span>
          <h2>The Team Behind <span className="gradient-text">Cyber Sathi</span></h2>
        </center>
        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="team-card glass"
              whileHover={{ y: -10 }}
            >
              <div className="avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <p className="roll">{member.roll}</p>
              <div className="team-socials">
                <Mail size={16} />
                <Globe size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cyber Laws Section */}
      <section id="laws" className="laws-section">
        <center>
          <span className="badge">Legal Framework</span>
          <h2>Understanding <span className="gradient-text">Cyber Laws</span></h2>
          <p className="section-desc">Key provisions of the Information Technology Act, 2000 for digital safety.</p>
        </center>
        <div className="laws-grid">
          <motion.div className="law-card glass" whileHover={{ y: -5 }}>
            <div className="law-header">
              <Scale size={24} className="law-icon" />
              <h3>Section 66</h3>
            </div>
            <h4>Hacking & Identity Theft</h4>
            <p>Penalizes unauthorized access to computer systems and the fraudulent use of digital signatures or passwords.</p>
          </motion.div>

          <motion.div className="law-card glass" whileHover={{ y: -5 }}>
            <div className="law-header">
              <Scale size={24} className="law-icon" />
              <h3>Section 66D</h3>
            </div>
            <h4>Cheating by Personation</h4>
            <p>Deals with cheating by personation using computer resources, such as fake profiles or fraudulent emails.</p>
          </motion.div>

          <motion.div className="law-card glass" whileHover={{ y: -5 }}>
            <div className="law-header">
              <Scale size={24} className="law-icon" />
              <h3>Section 66E</h3>
            </div>
            <h4>Privacy Violation</h4>
            <p>Penalizes the intentional capturing or publishing of private images without consent, protecting personal dignity.</p>
          </motion.div>

          <motion.div className="law-card glass" whileHover={{ y: -5 }}>
            <div className="law-header">
              <Scale size={24} className="law-icon" />
              <h3>Section 67</h3>
            </div>
            <h4>Obscene Content</h4>
            <p>Prohibits publishing or transmitting obscene material in electronic form to maintain digital decorum.</p>
          </motion.div>
        </div>
      </section>

      {/* Resources / Contact Section */}
      <section id="resources" className="resources-section">
        <center>
          <span className="badge">Emergency Support</span>
          <h2>Cyber Safety <span className="gradient-text">Resources</span></h2>
        </center>
        <div className="resources-grid">
          <motion.div className="resource-card glass" whileHover={{ y: -5 }}>
            <Phone className="res-icon" />
            <h3>National Helpline</h3>
            <p>For immediate assistance in financial frauds</p>
            <div className="res-info">
              <span className="res-val">1930</span>
              <span className="res-sub">Available 24/7</span>
            </div>
          </motion.div>

          <motion.div className="resource-card glass" whileHover={{ y: -5 }}>
            <MapPin className="res-icon" />
            <h3>Pune Cyber Cell</h3>
            <p>City Police Cyber Station, Shivajinagar</p>
            <div className="res-info">
              <span className="res-val">020-29710097</span>
              <span className="res-sub">Shivajinagar, Pune - 411005</span>
            </div>
          </motion.div>

          <motion.div className="resource-card glass" whileHover={{ y: -5 }}>
            <ExternalLink className="res-icon" />
            <h3>Official Portal</h3>
            <p>Lodge a formal complaint online</p>
            <div className="res-info">
              <span className="res-val">cybercrime.gov.in</span>
              <span className="res-sub">Govt of India Initiative</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="f-logo">
            <Shield size={32} color="var(--primary)" />
            <span>Cyber Sathi NGO</span>
          </div>
          <p>© 2026 Cyber Sathi NGO. Committed to Digital Safety.</p>
          <div className="f-links">
            <span>Policies</span>
            <span>Programs</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

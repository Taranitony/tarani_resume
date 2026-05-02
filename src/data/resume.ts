export const personal = {
  name: 'Tarani Antony Prabhu JK',
  title: 'Security Engineer & IT Professional',
  tagline: 'Building Security-as-Code | SOC Analyst | GenAI-Powered Tooling',
  location: 'Chennai, India',
  email: 'antonymariyan7@gmail.com',
  phone: '+91-82483 75358',
  linkedin: 'https://linkedin.com/in/tarani-antony-8a2013205',
  github: 'https://github.com/Tarani07',
  summary:
    'IT professional with 4+ years in endpoint security, identity management, and firewall operations. I build my own security tools using AI to automate what others do manually — from patch management to access audits. Currently transitioning into a dedicated security role.',
  targetRoles: ['SOC Analyst', 'Security Engineer', 'Security Operations Engineer'],
}

export const skills = [
  {
    category: 'Security Operations',
    items: ['SOC Operations', 'SIEM & Log Analysis', 'DLP Planning & Roadmapping', 'Anomaly Detection', 'Threat Monitoring', 'Incident Response', 'Shadow IT Discovery', 'Risk Assessment', 'IT Audit', 'Vulnerability Management'],
  },
  {
    category: 'Identity & Access Management',
    items: ['JumpCloud', 'Google Workspace Admin', 'Microsoft 365', 'User Provisioning & Deprovisioning', 'Access Reviews', 'Least-Privilege Enforcement', 'HRMS API Integration', 'SSO & MFA Management'],
  },
  {
    category: 'Endpoint Security & EDR',
    items: ['Jamf Protect (EDR)', 'Jamf Trust (ZTNA)', 'eScan', 'MDM Policy Enforcement', 'Patch Management', 'macOS/Windows Hardening', 'FileVault', 'BitLocker', 'Gatekeeper', 'SIP Enforcement'],
  },
  {
    category: 'Firewall & Network Security',
    items: ['FortiGate Firewall Management', 'pfSense Firewall', 'Application Filtering', 'VPN Group Configuration', 'Whitelist/Blacklist Policies', 'Network Segmentation', 'Network Protocol Security', 'Traffic Analysis', 'Slack Alert Automation'],
  },
  {
    category: 'IT Infrastructure & Operations',
    items: ['IT Infrastructure Management', 'Asset Management', 'OS Administration (macOS/Windows)', 'System Maintenance & Optimization', 'System Planning & Capacity Management', 'Software Onboarding & Offboarding', 'Operational Management', 'Multi-site IT Support'],
  },
  {
    category: 'Cloud & SaaS Governance',
    items: ['Google Workspace', 'Microsoft 365 (Exam 70-346)', 'SaaS Spend Management', 'Shadow IT Discovery', 'Software Asset Inventory', 'Procurement Controls', 'Subscription Lifecycle Management'],
  },
  {
    category: 'Security Engineering & AI',
    items: ['GenAI-Assisted Tool Development', 'Prompt Engineering', 'AI-Driven Problem Solving', 'Bash & Shell Scripting', 'Python Scripting', 'API & Zapier Automation', 'Workflow Automation', 'React/TypeScript', 'Supabase', 'Claude AI API', 'REST API Integration', 'Linux', 'ISO 27001', 'SOC 2'],
  },
]

export const experience = [
  {
    title: 'Associate IT Admin',
    company: 'SurveySparrow',
    location: 'Chennai, India',
    period: 'Feb 2024 – Present',
    award: 'Dashing Debut Award 2024 · Rising Star Award 2025',
    highlights: [
      'MDM Migration & SSO Integration: Led a full MDM platform migration from Hexnode to JumpCloud across 320 endpoints with zero downtime. Integrated all company applications — including internal tools — with SSO, centralising authentication and eliminating credential sprawl.',
      'Security Policy & Compliance: Deployed organisation-wide security policies using JumpCloud Custom Policies and Command framework. Enforced automated OS update policies, reducing unpatched endpoint risk across the fleet.',
      'In-House Patch Management (Installomator): Designed and built a macOS patch management pipeline using JumpCloud scripting, replacing the need for paid patch management software. The tool automatically updates applications across 300 Mac endpoints and sends real-time Slack reports on patch status — directly preventing security vulnerabilities from outdated software.',
      'Automated IGA & Access Review Tool: Built an in-house Identity Governance tool that integrates with the HRMS to pull exit employee data and performs automated access reviews across 60+ SaaS applications via API and CSV. The tool flags active accounts of departed users and generates audit-ready reports for SOC 2 and ISO 27001 — reducing a 4-week manual process to a few hours and eliminating the need for a third-party IGA product.',
      'Fleet Monitoring Platform (SparrowVision): Developed a real-time device visibility platform that monitors system performance, installed applications, browser usage, asset location, USB and port connections, crash reports, and user activity (login, shutdown, restart). This gave the IT and security team complete endpoint observability, enabling faster incident response.',
      'Developer Security Controls: Addressed the security risk of developers requiring root access by creating Bash and Windows scripts that detect unauthorised software installations and immediately notify the security team via Slack. Complemented by Jamf Protect for EDR-level threat detection and software blocking.',
      'SaaS Spend Governance (SpendNest): Built a SaaS spend intelligence tool that maps subscription costs per business unit using HRMS integration. Auto-syncs on team or project changes and surfaces shadow IT and unused licences — enabling finance and security teams to govern software spend proactively.',
      'Firewall & DLP: Administered FortiGate firewall with weekly policy reviews, application filtering, VPN group management, and Slack-integrated downtime alerting. Currently leading the ISO 27001-aligned DLP roadmap — classifying data flows and defining enforcement policies across endpoint, identity, and SaaS layers.',
    ],
  },
  {
    title: 'Intern → Associate IT Admin',
    company: 'Skill Lync',
    location: 'Chennai, India',
    period: 'Mar 2021 – Jan 2024',
    award: null,
    highlights: [
      'Google Workspace & Identity Management: Set up and administered Google Workspace for 1,000+ employees across Chennai, Hyderabad, and Pune — managing user provisioning, access control, group policies, and offboarding. Conducted quarterly access reviews to maintain least-privilege posture.',
      'Hardware Procurement & Infrastructure Planning: Researched requirements and procured customised high-performance systems for the video production and editing team — a key project that led to conversion from intern to full-time employee.',
      'NAS & Storage Infrastructure: Identified and resolved organisation-wide storage challenges by deploying a Synology NAS solution, providing centralised, scalable, and secure file storage across all teams.',
      'License Server & VPN Setup: Deployed a SoftEther VPN server enabling secure remote access to Catia and SolidWorks license servers, supporting engineering teams across multiple locations.',
      'Ticketing System: Designed and launched an internal IT helpdesk using Google Forms with a built-in reporting dashboard — streamlining request tracking and reducing IT response time.',
      'Endpoint Security & Asset Management: Managed and secured 3,040 endpoints (3,000 Windows + 40 Mac) using eScan. Implemented a formal asset management and system scrap procedure to track the full hardware lifecycle across the organisation.',
      'Multi-site IT Operations: Travelled to Hyderabad to set up IT infrastructure for student labs and facilities, handling device deployment, network configuration, and security setup on-site.',
      'Firewall & Network Security: Administered pfSense firewall across multiple locations with application filtering, VPN access controls, and traffic policy enforcement for real-time network security and incident visibility.',
    ],
  },
]

export const projects = [
  {
    name: 'SparrowVision',
    subtitle: 'Device Health Monitoring & Fleet Security Platform',
    description:
      'Self-hosted, full-stack security monitoring platform providing real-time visibility into device health, security posture, and compliance across 300 Mac endpoints — updated every 5 minutes.',
    tech: ['React', 'TypeScript', 'Supabase', 'Python', 'Claude AI API', 'Slack'],
    highlights: [
      'Tracks FileVault, BitLocker, Firewall, SIP, Gatekeeper, MDM, and antivirus compliance per device.',
      'Threshold-based Slack alerts for critical security events.',
      'Claude AI API integration for automated device health diagnosis.',
      'Remote remediation: kill processes, clear cache, deploy updates.',
      'SOC 2 and ISO 27001 compliance scoring dashboards.',
    ],
    icon: '🛡️',
  },
  {
    name: 'Access Review Tool',
    subtitle: 'Automated Identity Auditing',
    description:
      'Replaced a 4-week manual IGA process across 60 SaaS tools with an automated audit pipeline pulling HRMS exit data and reconciling against active users via API.',
    tech: ['Python', 'HRMS API', 'REST API', 'Automation'],
    highlights: [
      'Pulls exit data from HRMS and cross-references active user accounts.',
      'Generates compliance-ready audit reports in hours instead of weeks.',
      'Covers 60 SaaS tools in a single automated run.',
    ],
    icon: '🔍',
  },
  {
    name: 'Installomator',
    subtitle: 'Automated Patch Management',
    description:
      'Automated macOS patch management pipeline deployed via JumpCloud scripting, replacing ManageEngine Desktop Central across 300 Mac endpoints.',
    tech: ['JumpCloud', 'Shell Script', 'Slack Webhooks', 'macOS'],
    highlights: [
      'Replaced paid Desktop Central licensing entirely.',
      'Real-time Slack notifications for patch success/failure.',
      'Closes CVE exposure windows without manual intervention.',
    ],
    icon: '⚡',
  },
  {
    name: 'SpendNest',
    subtitle: 'SaaS Spend Intelligence & Shadow IT Discovery',
    description:
      'Financial audit tool mapping SaaS subscription costs per business unit, surfacing unauthorized applications and enabling security-driven procurement governance.',
    tech: ['Python', 'API Integration', 'Automation'],
    highlights: [
      'Maps SaaS costs to individual business units.',
      'Surfaces unauthorized and shadow IT applications.',
      'Supports security-driven software procurement governance.',
    ],
    icon: '💰',
  },
  {
    name: 'App Watcher',
    subtitle: 'Compliance & Software Tracking',
    description:
      'Real-time application compliance tracker maintaining fleet-wide software inventory and flagging unauthorized or out-of-policy applications.',
    tech: ['Python', 'JumpCloud API', 'Automation'],
    highlights: [
      'Maintains real-time fleet-wide software inventory.',
      'Flags unauthorized or out-of-policy applications instantly.',
      'Enforces software allowlist/blocklist policies.',
    ],
    icon: '👁️',
  },
]

export const certifications = [
  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google / Coursera',
    detail: 'SOC Operations, SIEM, Chronicle, Python, Linux, Log Analysis',
    highlight: true,
  },
  {
    name: 'Network Security Certification',
    issuer: 'Great Learning',
    detail: 'Network Protocol Security, Infrastructure Hardening',
    highlight: false,
  },
  {
    name: 'Introduction to Cyber Security',
    issuer: 'Great Learning',
    detail: 'Foundational Security Concepts, Threat Landscape',
    highlight: false,
  },
  {
    name: 'Microsoft 365 Administration — Exam 70-346',
    issuer: 'Microsoft',
    detail: 'Identity Management, Cloud Security, M365 Administration',
    highlight: false,
  },
  {
    name: 'PwC US Audit Job Simulation',
    issuer: 'Forage / PwC',
    detail: 'IT Audit, Control Assessment, Risk Identification & Remediation',
    highlight: false,
  },
]

export const awards = [
  {
    title: 'Rising Star Award',
    date: '2025',
    company: 'SurveySparrow',
    description: 'Awarded for AI implementation and security tool development — recognised for independently building GenAI-powered tools that replaced commercial software and elevated the organisation\'s security posture.',
    icon: '⭐',
  },
  {
    title: 'Dashing Debut Award',
    date: '2024',
    company: 'SurveySparrow',
    description: 'Recognised for leading the MDM migration from Hexnode to JumpCloud and delivering high-impact IT operations within the first few months of joining.',
    icon: '🚀',
  },
  {
    title: 'The Techno Geek',
    date: '2023',
    company: 'Skill Lync',
    description: 'Certificate of Appreciation awarded by the CFO for performing above and beyond capabilities — recognised for the successful implementation of Synology NAS storage infrastructure, ensuring maximum productivity across the organisation.',
    icon: '🏆',
  },
  {
    title: 'Bringing It Beyond',
    date: '2022',
    company: 'Skill Lync',
    description: 'Certificate of Recognition for consistently delivering logical solutions in challenging situations, never compromising on quality, and constantly seeking to enhance and improve past work.',
    icon: '🎯',
  },
]

export const education = {
  degree: 'Master of Science (M.Sc.) — Physics (IoT)',
  college: "St. Joseph's College",
  location: 'Tiruchirappalli, Tamil Nadu',
  year: '2020',
}

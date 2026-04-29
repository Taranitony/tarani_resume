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
    'Award-winning, security-focused IT professional with 4+ years of experience in endpoint hardening, firewall management, identity & access management, and SOC operations. Recognized as a Rising Star for delivering high-impact security initiatives within the first year. Independently engineered a suite of GenAI-powered security tools — including a real-time fleet monitoring platform, automated identity auditing across 60 SaaS tools, and SaaS spend intelligence — replacing commercial tooling and demonstrating a Security-as-Code mindset. Managed 3,000+ endpoints and supported 1,000+ users across multi-site operations.',
  targetRoles: ['SOC Analyst', 'Security Engineer', 'Security Operations Engineer'],
}

export const skills = [
  {
    category: 'Security Operations',
    items: ['SOC Operations', 'SIEM & Log Analysis', 'DLP Planning', 'Anomaly Detection', 'Threat Monitoring', 'Incident Response', 'Shadow IT Discovery', 'Risk Assessment', 'IT Audit'],
  },
  {
    category: 'Firewall & Network',
    items: ['FortiGate Management', 'Application Filtering', 'VPN Configuration', 'Whitelist/Blacklist Policies', 'Network Segmentation', 'Network Protocol Security', 'Slack Alert Automation'],
  },
  {
    category: 'Identity & Access',
    items: ['JumpCloud', 'Google Workspace', 'Microsoft 365', 'Access Reviews', 'Identity Auditing', 'User Lifecycle Management', 'Least-Privilege Enforcement', 'HRMS API Integration'],
  },
  {
    category: 'Endpoint Security & EDR',
    items: ['Jamf Protect (EDR)', 'Jamf Trust (ZTNA)', 'eScan', 'MDM Policy Enforcement', 'Patch Management', 'macOS/Windows Hardening', 'FileVault', 'BitLocker', 'Gatekeeper', 'SIP'],
  },
  {
    category: 'Cloud & SaaS Security',
    items: ['Google Workspace', 'Microsoft 365', 'SaaS Spend Management', 'Software Onboarding Controls', 'Asset Inventory', 'Shadow IT Discovery'],
  },
  {
    category: 'Security Engineering',
    items: ['GenAI Tool Development', 'Python', 'Linux', 'React/TypeScript', 'Supabase', 'Claude AI API', 'Slack Webhooks', 'REST API Integration', 'ISO 27001', 'SOC 2'],
  },
]

export const experience = [
  {
    title: 'Associate IT Admin',
    company: 'SurveySparrow',
    location: 'Chennai, India',
    period: 'Feb 2024 – Present',
    award: 'Rising Star Award 2024',
    highlights: [
      'Engineered least-privilege access policies for 300 users via JumpCloud with provisioning, ABM, custom policies, and script injection workflows.',
      'Built GenAI-powered Access Review Tool replacing manual IGA processes across 60 SaaS tools — reducing quarterly audit cycle from 4+ weeks to hours.',
      'Hardened 320 endpoints (300 Mac + 20 Windows) using Jamf Protect (EDR) and JumpCloud MDM.',
      'Deployed Jamf Trust for Zero Trust Network Access (ZTNA), validating device compliance before granting network access.',
      'Architected Installomator patch pipeline via JumpCloud scripting, replacing ManageEngine Desktop Central across 300 Mac endpoints.',
      'Built SpendNest SaaS spend intelligence tool, surfacing unauthorized apps and eliminating shadow IT.',
      'Leading DLP roadmap design aligned to ISO 27001 across endpoint, identity, and SaaS layers.',
      'Administered FortiGate firewall with weekly policy reviews, app filters, VPN groups, and Slack alert automation.',
    ],
  },
  {
    title: 'Associate IT Admin',
    company: 'Skill Lync',
    location: 'Chennai, India',
    period: 'Mar 2021 – Jan 2024',
    award: null,
    highlights: [
      'Managed identity and access for 1,000+ employees across Chennai, Hyderabad, and Pune using Google Workspace.',
      'Managed and secured 3,040 endpoints (3,000 Windows + 40 Mac) using eScan.',
      'Conducted quarterly access reviews, revoking excessive privileges and dormant accounts.',
      'Deployed custom scripts to detect and alert on unauthorized software installations fleet-wide.',
      'Administered FortiGate firewall across multi-site environment with app filtering and VPN controls.',
      'Automated FortiGate downtime alerting via Slack across three office locations.',
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
    date: 'March 2024',
    company: 'SurveySparrow',
    description: 'Awarded for dedication, passion, and excellence in role. Recognized as a top-tier performer within the first year.',
    icon: '⭐',
  },
  {
    title: 'Dashing Debut Award',
    date: '2024',
    company: 'SurveySparrow',
    description: 'Recognized as a "rookie rockstar" for high impact and exceptional ramp-up speed in a security-critical role.',
    icon: '🚀',
  },
]

export const education = {
  degree: 'Master of Science (M.Sc.) — Physics',
  college: "St. Joseph's College",
  location: 'Tiruchirappalli, Tamil Nadu',
  year: '2020',
}

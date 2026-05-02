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
    items: ['FortiGate Firewall Management', 'Application Filtering', 'VPN Group Configuration', 'Whitelist/Blacklist Policies', 'Network Segmentation', 'Network Protocol Security', 'Traffic Analysis', 'Slack Alert Automation'],
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
      '🔄 MDM Migration — Led full migration from Hexnode to JumpCloud across 320 endpoints with zero downtime, re-establishing all device policies and SSO integrations for all apps including internal tools.',
      '🔐 Security Policy Enforcement — Introduced organisation-wide security policies via JumpCloud Custom Policies, including automated OS update enforcement and developer software control scripts with real-time Slack alerts.',
      '⚡ Patch Management (Installomator) — Built in-house macOS patch management pipeline via JumpCloud, eliminating the need for paid software and closing CVE exposure windows across 300 Mac endpoints.',
      '🔍 Access Review & IGA Tool — Automated SOC 2 / ISO 27001 access audits across 60+ SaaS apps via HRMS integration — reduced 4-week manual review cycle to hours and replaced the need for a dedicated IGA product.',
      '🛡️ SparrowVision (Fleet Monitoring) — Built a real-time device monitoring platform tracking system health, installed apps, asset location, USB connections, crash reports, and user activity across the entire Mac fleet.',
      '💰 SpendNest (SaaS Governance) — Built a spend intelligence tool mapping SaaS costs per business unit via HRMS sync, surfacing shadow IT and saving on untracked subscription spend.',
      '🌐 Firewall & DLP — Administered FortiGate with weekly policy reviews, VPN management, and Slack alerting. Leading ISO 27001-aligned DLP roadmap covering endpoint, identity, and SaaS layers.',
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
]

export const education = {
  degree: 'Master of Science (M.Sc.) — Physics',
  college: "St. Joseph's College",
  location: 'Tiruchirappalli, Tamil Nadu',
  year: '2020',
}

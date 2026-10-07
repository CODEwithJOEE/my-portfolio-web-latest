// src/data/experienceItems.js
export const experienceItems = [
  {
    org: "Jose Rizal Memorial State University – Katipunan Campus",
    role: "OJT Trainee",
    startDate: "2023-07-03", // 👈 adjust if you know the exact date
    endDate: "2023-10-31", // fixed duration
    periodOverride: "200 Hours — 3 Months", // 👈 keep if you want exact label
    bullets: [
      "Installed Wi-Fi routers and network cables across campus buildings.",
      "Performed maintenance on computer laboratory systems, including cleaning and hardware checks.",
      "Upgraded operating systems from Windows 10 to Windows 11 for multiple workstations.",
    ],
  },
  {
    org: "OBI Services",
    role: "Web Developer",
    startDate: "2025-04-14", // 👈 your real start date
    endDate: null, // null = still working (Present)
    bullets: [
      "Maintained OBI Services corporate website, implementing new features and improving SEO.",
      "Integrated WordPress custom themes with PHP and JavaScript for advanced functionality.",
      "Optimized website load speed and mobile responsiveness for better user experience.",
    ],
  },
  {
    org: "MLhuillier Financial Services",
    role: "Staff",
    startDate: "2024-08-21",
    endDate: "2025-04-10",
    periodOverride: "8 months",
    bullets: [
      "Supported branch operations, documentation, and customer service tasks.",
      "Processed financial transactions including remittances, bills payments, and pawnshop services.",
      "Managed and verified customer records for accuracy and compliance.",
      "Assisted in resolving customer concerns quickly and professionally.",
      "Maintained confidentiality and security of sensitive customer information.",
    ],
  },
];

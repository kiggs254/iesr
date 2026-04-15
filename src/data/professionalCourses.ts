export interface Course {
  code: string;
  title: string;
  category: string;
  dates: string;
  duration: string;
  feeKES: number;
}

export interface MonthSchedule {
  month: string;
  courses: Course[];
}

export const CATEGORIES = [
  "All Courses",
  "Electrical Safety",
  "Power Line Design",
  "Equipment & Switchgear",
  "Renewable Energy",
  "Power System Planning",
  "Data Analytics",
  "ICT & SCADA",
  "Leadership & Management",
] as const;

export type CourseCategory = (typeof CATEGORIES)[number];

export interface CategoryConfig {
  color: string;
  bg: string;
  gradient: string;
}

export const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  "Electrical Safety": {
    color: "#dc2626",
    bg: "#fef2f2",
    gradient: "linear-gradient(135deg, #991b1b 0%, #ef4444 100%)",
  },
  "Power Line Design": {
    color: "#1d4ed8",
    bg: "#eff6ff",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
  },
  "Equipment & Switchgear": {
    color: "#002B5C",
    bg: "#e8f0fe",
    gradient: "linear-gradient(135deg, #001A3A 0%, #003D7A 100%)",
  },
  "Renewable Energy": {
    color: "#059669",
    bg: "#ecfdf5",
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
  },
  "Power System Planning": {
    color: "#7c3aed",
    bg: "#f5f3ff",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
  },
  "Data Analytics": {
    color: "#0891b2",
    bg: "#ecfeff",
    gradient: "linear-gradient(135deg, #164e63 0%, #06b6d4 100%)",
  },
  "ICT & SCADA": {
    color: "#4338ca",
    bg: "#eef2ff",
    gradient: "linear-gradient(135deg, #312e81 0%, #6366f1 100%)",
  },
  "Leadership & Management": {
    color: "#b45309",
    bg: "#fffbeb",
    gradient: "linear-gradient(135deg, #78350f 0%, #f59e0b 100%)",
  },
};

export const SCHEDULE: MonthSchedule[] = [
  {
    month: "January 2026",
    courses: [
      { code: "IESR 50", title: "Safety Competency in Power Systems", category: "Electrical Safety", dates: "26 Jan – 30 Jan 2026", duration: "5 days", feeKES: 80000 },
    ],
  },
  {
    month: "February 2026",
    courses: [
      { code: "IESR 02", title: "Overhead Line Construction and Maintenance Module I", category: "Power Line Design", dates: "2 Feb – 6 Feb 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 23", title: "Distribution Transformer Installation, Commissioning and Maintenance for Technicians", category: "Equipment & Switchgear", dates: "9 Feb – 13 Feb 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 01", title: "Introduction to Power System – Module I", category: "Power Line Design", dates: "16 Feb – 20 Feb 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 25", title: "Installation and Commissioning of Power Transformers for Technicians", category: "Equipment & Switchgear", dates: "23 Feb – 27 Feb 2026", duration: "5 days", feeKES: 80000 },
    ],
  },
  {
    month: "March 2026",
    courses: [
      { code: "IESR 28", title: "Switchgear Operation and Maintenance", category: "Equipment & Switchgear", dates: "2 Mar – 6 Mar 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 03", title: "Overhead Line Construction and Maintenance Module II", category: "Power Line Design", dates: "9 Mar – 13 Mar 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 70", title: "Solar PV Systems Design, Installation and Maintenance (T1 & T2)", category: "Renewable Energy", dates: "16 Mar – 20 Mar 2026", duration: "5 days", feeKES: 45000 },
      { code: "IESR 29", title: "Power System Protection", category: "Equipment & Switchgear", dates: "23 Mar – 27 Mar 2026", duration: "5 days", feeKES: 60000 },
    ],
  },
  {
    month: "April 2026",
    courses: [
      { code: "IESR 20", title: "Cable Joining and Termination – 11kV and 33kV", category: "Equipment & Switchgear", dates: "6 Apr – 10 Apr 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 53", title: "Working at Height and First Aid at Work", category: "Electrical Safety", dates: "13 Apr – 15 Apr 2026", duration: "3 days", feeKES: 45000 },
      { code: "IESR 53", title: "Working at Height and First Aid at Work", category: "Electrical Safety", dates: "20 Apr – 22 Apr 2026", duration: "3 days", feeKES: 45000 },
    ],
  },
  {
    month: "May 2026",
    courses: [
      { code: "IESR 24", title: "Distribution Transformer Installation, Commissioning and Maintenance for Engineers", category: "Equipment & Switchgear", dates: "4 May – 8 May 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 50", title: "Safety Competency in Power Systems", category: "Electrical Safety", dates: "11 May – 15 May 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 22", title: "Cable Joining and Termination – 66kV, 132kV and 220kV", category: "Equipment & Switchgear", dates: "18 May – 22 May 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 71", title: "Solar PV Systems Design, Installation and Maintenance (T3)", category: "Renewable Energy", dates: "25 May – 29 May 2026", duration: "5 days", feeKES: 80000 },
    ],
  },
  {
    month: "June 2026",
    courses: [
      { code: "IESR 53", title: "Working at Height and First Aid at Work", category: "Electrical Safety", dates: "3 Jun – 5 Jun 2026", duration: "3 days", feeKES: 45000 },
      { code: "IESR 07", title: "Installation and Maintenance of Street Lighting", category: "Power Line Design", dates: "8 Jun – 12 Jun 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 26", title: "Installation and Commissioning of Power Transformers for Engineers", category: "Equipment & Switchgear", dates: "15 Jun – 21 Jun 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 32", title: "Generator Installation, Operations & Maintenance", category: "Equipment & Switchgear", dates: "22 Jun – 26 Jun 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 53", title: "Working at Height and First Aid at Work", category: "Electrical Safety", dates: "29 Jun – 1 Jul 2026", duration: "3 days", feeKES: 60000 },
    ],
  },
  {
    month: "July 2026",
    courses: [
      { code: "IESR 40", title: "Power Quality Analysis – Using Power Quality Analyzer / Online Monitoring Tools", category: "Power System Planning", dates: "6 Jul – 10 Jul 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 60", title: "Analytics Using Excel (Advanced Excel)", category: "Data Analytics", dates: "13 Jul – 17 Jul 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 22", title: "SCADA in Power System", category: "ICT & SCADA", dates: "20 Jul – 24 Jul 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 50", title: "Safety Competency in Power Systems", category: "Electrical Safety", dates: "27 Jul – 31 Jul 2026", duration: "5 days", feeKES: 80000 },
    ],
  },
  {
    month: "August 2026",
    courses: [
      { code: "IESR 101", title: "Project and Management for Technical Staff", category: "Leadership & Management", dates: "3 Aug – 7 Aug 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 100", title: "Leadership and Supervisory Skills for Technical Staff", category: "Leadership & Management", dates: "10 Aug – 14 Aug 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 82", title: "Fiber Optics Installation on Power Lines (LV and MV)", category: "ICT & SCADA", dates: "24 Aug – 28 Aug 2026", duration: "5 days", feeKES: 80000 },
    ],
  },
  {
    month: "September 2026",
    courses: [
      { code: "IESR 32", title: "Introduction to Industrial Systems Automation and PLC / Internet of Things", category: "ICT & SCADA", dates: "31 Aug – 4 Sep 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 83", title: "Cyber Security for Data Networks", category: "ICT & SCADA", dates: "7 Sep – 11 Sep 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 32", title: "Generator Installation, Operations & Maintenance", category: "Equipment & Switchgear", dates: "14 Sep – 18 Sep 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 62", title: "Big Data Analytics Using Excel and Power BI", category: "Data Analytics", dates: "21 Sep – 25 Sep 2026", duration: "5 days", feeKES: 60000 },
    ],
  },
  {
    month: "October 2026",
    courses: [
      { code: "IESR 81", title: "Fundamentals of Fiber Optics", category: "ICT & SCADA", dates: "30 Sep – 2 Oct 2026", duration: "3 days", feeKES: 45000 },
      { code: "IESR 53", title: "Working at Height and First Aid at Work", category: "Electrical Safety", dates: "5 Oct – 7 Oct 2026", duration: "3 days", feeKES: 45000 },
      { code: "IESR 61", title: "Big Data Analytics Using Python", category: "Data Analytics", dates: "12 Oct – 16 Oct 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 63", title: "Data Driven Decision Making (DDD) demonstrated Using SPSS", category: "ICT & SCADA", dates: "26 Oct – 30 Oct 2026", duration: "5 days", feeKES: 80000 },
    ],
  },
  {
    month: "November 2026",
    courses: [
      { code: "IESR 45", title: "Advanced Power System Modelling Using DigSilent", category: "Power System Planning", dates: "2 Nov – 6 Nov 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 04", title: "Design and Construction Standards", category: "Power Line Design", dates: "9 Nov – 13 Nov 2026", duration: "5 days", feeKES: 80000 },
      { code: "IESR 20", title: "Cable Joining and Termination – 11kV and 33kV", category: "Equipment & Switchgear", dates: "16 Nov – 20 Nov 2026", duration: "5 days", feeKES: 60000 },
      { code: "IESR 24", title: "Distribution Transformer Installation, Commissioning and Maintenance for Technicians & Engineers", category: "Equipment & Switchgear", dates: "23 Nov – 27 Nov 2026", duration: "5 days", feeKES: 60000 },
    ],
  },
  {
    month: "December 2026",
    courses: [
      { code: "IESR 03", title: "Overhead Line Construction and Maintenance Module II", category: "Power Line Design", dates: "30 Nov – 4 Dec 2026", duration: "5 days", feeKES: 60000 },
    ],
  },
];

export const ON_DEMAND_COURSES = [
  "Design of LV, MV and HT Lines & Related Instrumentation",
  "Basic Occupational Safety and Health",
  "Fundamentals of Pumped Storage",
  "Asset Management",
  "Introduction to Power System Module II",
  "Fundamentals of E-Mobility",
  "Finance for Non-Finance Managers",
  "Technical Appreciation for Non-Technical Staff",
  "Meter Installation Training",
  "Smart Metering",
  "Arc and Gas Welding",
  "Defensive Driving Skills for Motor Vehicles",
  "Domestic Wiring and Testing",
  "Refrigeration and Air Conditioning Essentials",
  "Machinist Course and Workshop Practice",
  "Basic Automotive Maintenance",
];

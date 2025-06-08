import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import HRServicesPage from '@/pages/HRServicesPage';
import VirtualHRServicesPage from '@/pages/VirtualHRServicesPage';
import AccountingSolutionsPage from '@/pages/AccountingSolutionsPage';
import TrainingProgramsPage from '@/pages/TrainingProgramsPage';
import ContactPage from '@/pages/ContactPage';
import AdminPage from '@/pages/AdminPage';
import JobListingsPage from '@/pages/JobListingsPage';
// Removed: import HRSolutionPage from '@/pages/HRSolutionsPage';

export const initialHrServices = [
  {
    id: "recruitment",
    iconName: "Users",
    title: "Recruitment & Talent Acquisition",
    description: "Strategic sourcing, screening, and hiring to find the perfect fit for your team, ensuring long-term success.",
    imageAlt: "Team collaborating on recruitment strategy",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "onboarding",
    iconName: "Briefcase",
    title: "Employee Onboarding & Integration",
    description: "Seamless onboarding processes to integrate new hires effectively and boost early productivity and engagement.",
    imageAlt: "New employee being welcomed",
    imageUrl: "https://images.unsplash.com/photo-1573496130141-209d200ce574?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "payroll",
    iconName: "DollarSign",
    title: "Payroll Processing & Management",
    description: "Accurate and timely payroll services, ensuring compliance and employee satisfaction with every pay cycle.",
    imageAlt: "Payroll system",
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=500&q=60"
  },
];

export const initialVirtualHrServices = [
  {
    id: "deptSetup",
    iconName: "Briefcase",
    title: "Complete HR Department Setup",
    description: "Establish a fully functional virtual HR department, tailored to your business size and needs, from scratch.",
    imageAlt: "Digital HR department structure",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "docManagement",
    iconName: "FileArchive",
    title: "Employee Documentation Management",
    description: "Secure and organized digital management of all employee records, contracts, and HR-related documents.",
    imageAlt: "Secure cloud storage",
    imageUrl: "https://images.unsplash.com/photo-1586282023764-985260087052?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "perfManagement",
    iconName: "BarChartBig",
    title: "Performance Management Systems",
    description: "Implement and manage virtual performance review cycles, goal setting, and feedback mechanisms.",
    imageAlt: "Performance analytics dashboard",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60"
  },
];

export const initialAccountingServices = [
  {
    id: "bookkeeping",
    iconName: "FileText",
    title: "Bookkeeping & Reconciliation",
    description: "Accurate daily transaction recording and meticulous account reconciliation for complete financial clarity.",
    features: ["Daily transaction recording", "Bank reconciliation"],
    imageAlt: "Bookkeeping tasks",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "reporting",
    iconName: "TrendingUp",
    title: "Financial Reporting & Analysis",
    description: "Comprehensive financial statements and custom reports with in-depth analysis.",
    features: ["P&L, Balance Sheet", "KPI tracking"],
    imageAlt: "Financial reports",
    imageUrl: "https://images.unsplash.com/photo-1630047629847-25b773796d1f?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "tax",
    iconName: "Calculator",
    title: "Tax Planning & Filing",
    description: "Expert tax preparation and strategic planning to minimize liabilities and ensure compliance.",
    features: ["Business tax prep", "Tax planning"],
    imageAlt: "Tax preparation",
    imageUrl: "https://images.unsplash.com/photo-1509020403589-a6d8d1ea29f0?auto=format&fit=crop&w=500&q=60"
  },
];

export const initialTrainingPrograms = [
  {
    id: "aiData",
    iconName: "Brain",
    title: "AI & Data Analytics Mastery",
    description: "Unlock the power of AI and Data Analytics to drive data-informed decisions.",
    duration: "8 Weeks",
    level: "Intermediate",
    features: ["Machine Learning", "Data Visualization"],
    imageAlt: "AI and data connections",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "softSkills",
    iconName: "UserCheck",
    title: "Peak Performance Soft Skills",
    description: "Elevate communication, teamwork, leadership, and emotional intelligence.",
    duration: "6 Weeks",
    level: "All Levels",
    features: ["Communication", "Leadership"],
    imageAlt: "Team collaboration",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "leadershipMgmt",
    iconName: "Users",
    title: "Strategic Leadership & Management",
    description: "Develop critical leadership competencies and effective management strategies.",
    duration: "10 Weeks",
    level: "Advanced",
    features: ["Strategic Thinking", "Team Building"],
    imageAlt: "Leader guiding team",
    imageUrl: "https://images.unsplash.com/photo-1516880711640-ef7db81602c6?auto=format&fit=crop&w=500&q=60"
  },
];

function App() {
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  
  const [hrServices, setHrServices] = useState([]);
  const [virtualHrServices, setVirtualHrServices] = useState([]);
  const [accountingServices, setAccountingServices] = useState([]);
  const [trainingPrograms, setTrainingPrograms] = useState([]);

  useEffect(() => {
    const storedApplications = localStorage.getItem('jobApplications');
    if (storedApplications) setApplications(JSON.parse(storedApplications));

    const storedJobs = localStorage.getItem('jobListings');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    } else {
      const sampleJobs = [
        { id: 1, title: "Senior HR Manager", company: "B Square Global", location: "Hyderabad", type: "Full-time", salary: "₹15,00,000 - ₹25,00,000", description: "Lead HR.", requirements: "5+ years HR", skills: "Leadership", candidates: 12, postedDate: "2024-01-15" },
        { id: 2, title: "Accounting Specialist", company: "B Square Global", location: "Hyderabad", type: "Full-time", salary: "₹8,00,000 - ₹12,00,000", description: "Handle accounts.", requirements: "3+ years accounting", skills: "Bookkeeping", candidates: 8, postedDate: "2024-01-20" }
      ];
      setJobs(sampleJobs);
      localStorage.setItem('jobListings', JSON.stringify(sampleJobs));
    }

    const loadServiceData = (key, setter, defaultData) => {
      const storedData = localStorage.getItem(key);
      setter(storedData ? JSON.parse(storedData) : defaultData);
    };

    loadServiceData('hrServicesList', setHrServices, initialHrServices);
    loadServiceData('virtualHrServicesList', setVirtualHrServices, initialVirtualHrServices);
    loadServiceData('accountingServicesList', setAccountingServices, initialAccountingServices);
    loadServiceData('trainingProgramsList', setTrainingPrograms, initialTrainingPrograms);
  }, []);

  const addApplication = (application) => {
    const newApplications = [...applications, application];
    setApplications(newApplications);
    localStorage.setItem('jobApplications', JSON.stringify(newApplications));
  };

  const updateJobs = (newJobs) => {
    setJobs(newJobs);
    localStorage.setItem('jobListings', JSON.stringify(newJobs));
  };

  const updateServiceList = (key, newList) => {
    localStorage.setItem(key, JSON.stringify(newList));
    switch (key) {
      case 'hrServicesList': setHrServices(newList); break;
      case 'virtualHrServicesList': setVirtualHrServices(newList); break;
      case 'accountingServicesList': setAccountingServices(newList); break;
      case 'trainingProgramsList': setTrainingPrograms(newList); break;
      default: console.error("Unknown service key:", key);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hr-services" element={<HRServicesPage services={hrServices} />} />
            <Route path="/virtual-hr-services" element={<VirtualHRServicesPage services={virtualHrServices} />} />
            <Route path="/accounting-services" element={<AccountingSolutionsPage services={accountingServices} />} />
            <Route path="/training-programs" element={<TrainingProgramsPage programs={trainingPrograms} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<JobListingsPage addApplication={addApplication} jobs={jobs} />} />
            {/* The HRSolutionPage route has been removed */}
            <Route
              path="/admin"
              element={
                <AdminPage
                  applications={applications}
                  jobs={jobs}
                  updateJobs={updateJobs}
                  hrServices={hrServices}
                  virtualHrServices={virtualHrServices}
                  accountingServices={accountingServices}
                  trainingPrograms={trainingPrograms}
                  updateServiceList={updateServiceList}
                />
              }
            />
          </Routes>
        </main>
        <Footer
          hrServices={hrServices}
          virtualHrServices={virtualHrServices}
          accountingServices={accountingServices}
          trainingPrograms={trainingPrograms}
        />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
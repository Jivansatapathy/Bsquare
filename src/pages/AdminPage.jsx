import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Briefcase, Users, FileText as FileTextIcon, Edit, Trash2, Plus, Save, Download, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { iconMap, getIconNames } from '@/lib/iconMap';

const AdminLoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLoginData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginData);
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={loginData.email} onChange={handleChange} required className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={loginData.password} onChange={handleChange} required className="mt-1"/>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5">Login</Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const JobFormDialog = ({ isOpen, onOpenChange, jobData, onSave, isEditing }) => {
  const [currentJobData, setCurrentJobData] = useState(jobData);

  useEffect(() => {
    setCurrentJobData(jobData);
  }, [jobData]);

  const handleChange = (e) => {
    setCurrentJobData({ ...currentJobData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(currentJobData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Job' : 'Add New Job'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div><Label htmlFor="title">Job Title</Label><Input id="title" value={currentJobData.title} onChange={handleChange} /></div>
          <div><Label htmlFor="location">Location</Label><Input id="location" value={currentJobData.location} onChange={handleChange} /></div>
          <div><Label htmlFor="type">Employment Type</Label><Input id="type" value={currentJobData.type} onChange={handleChange} /></div>
          <div><Label htmlFor="salary">Salary Range</Label><Input id="salary" value={currentJobData.salary} onChange={handleChange} /></div>
          <div><Label htmlFor="skills">Required Skills (comma-separated)</Label><Input id="skills" value={currentJobData.skills} onChange={handleChange} /></div>
          <div><Label htmlFor="description">Job Description</Label><Textarea id="description" value={currentJobData.description} onChange={handleChange} /></div>
          <div><Label htmlFor="requirements">Requirements</Label><Textarea id="requirements" value={currentJobData.requirements} onChange={handleChange} /></div>
          <Button onClick={handleSubmit} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            {isEditing ? 'Update Job' : 'Add Job'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const JobListingCard = ({ job, onEdit, onDelete }) => (
  <Card className="p-4">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-600">{job.location} • {job.type}</p>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => onEdit(job)}><Edit className="h-4 w-4" /></Button>
        <Button size="sm" variant="destructive" onClick={() => onDelete(job.id)}><Trash2 className="h-4 w-4" /></Button>
      </div>
    </div>
  </Card>
);

const JobManagementSection = ({ jobs, onAddJob, onEditJob, onDeleteJob }) => {
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [newJobData, setNewJobData] = useState({
    id: Date.now(), title: '', company: 'B Square Global', location: '', type: '', salary: '', description: '', requirements: '', skills: '', candidates: 0, postedDate: new Date().toISOString().split('T')[0]
  });

  const handleOpenAddForm = () => {
    setEditingJob(null);
    setNewJobData({ id: Date.now(), title: '', company: 'B Square Global', location: '', type: '', salary: '', description: '', requirements: '', skills: '', candidates: 0, postedDate: new Date().toISOString().split('T')[0]});
    setIsJobFormOpen(true);
  };

  const handleOpenEditForm = (job) => {
    setEditingJob(job);
    setNewJobData(job);
    setIsJobFormOpen(true);
  };

  const handleSaveJob = (jobData) => {
    if (editingJob) {
      onEditJob(jobData);
    } else {
      onAddJob(jobData);
    }
    setIsJobFormOpen(false);
    setEditingJob(null);
  };

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2"><Briefcase className="h-5 w-5" />Job Listings ({jobs.length})</CardTitle>
        <Button size="sm" onClick={handleOpenAddForm}><Plus className="h-4 w-4 mr-2" />Add Job</Button>
      </CardHeader>
      <CardContent className="max-h-[60vh] overflow-y-auto">
        <div className="space-y-4">
          {jobs.map((job) => <JobListingCard key={job.id} job={job} onEdit={handleOpenEditForm} onDelete={onDeleteJob} />)}
          {jobs.length === 0 && <p className="text-center text-gray-500 py-4">No job listings yet. Add one!</p>}
        </div>
      </CardContent>
      <JobFormDialog 
        isOpen={isJobFormOpen} 
        onOpenChange={setIsJobFormOpen} 
        jobData={editingJob || newJobData} 
        onSave={handleSaveJob}
        isEditing={!!editingJob}
      />
    </Card>
  );
};

const ApplicationDetailsDialog = ({ isOpen, onOpenChange, application }) => {
  if (!application) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Application Details</DialogTitle>
          <DialogDescription>Details for {application.name}'s application for {application.jobTitle}.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4">
          <p><strong>Name:</strong> {application.name}</p>
          <p><strong>Email:</strong> {application.email}</p>
          <p><strong>Phone:</strong> {application.phone}</p>
          <p><strong>Previous Company:</strong> {application.previousCompany}</p>
          <p><strong>Experience:</strong> {application.experience} years</p>
          <p><strong>Applied for:</strong> {application.jobTitle}</p>
          {application.resume && (
            <Button variant="outline" onClick={() => {
                if (application.resume instanceof File) {
                  const url = URL.createObjectURL(application.resume);
                  const a = document.createElement('a'); a.href = url; a.download = application.resume.name;
                  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
                } else { toast({ title: "Error", description: "Resume file not available.", variant: "destructive" }); }
              }} >
              <Download className="h-4 w-4 mr-2" /> Download Resume
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ApplicationCard = ({ application, onView }) => (
  <Card className="p-4">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{application.name}</h3>
        <p className="text-sm text-gray-600">{application.email}</p>
        <p className="text-sm text-gray-600">Applied for: {application.jobTitle}</p>
      </div>
      <Button size="sm" variant="outline" onClick={() => onView(application)}>
        <FileTextIcon className="h-4 w-4 mr-2" /> View Details
      </Button>
    </div>
  </Card>
);

const ApplicationManagementSection = ({ applications }) => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isViewApplicationDialogOpen, setIsViewApplicationDialogOpen] = useState(false);

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
    setIsViewApplicationDialogOpen(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Job Applications ({applications.length})</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[60vh] overflow-y-auto">
        <div className="space-y-4">
          {applications.map((app, index) => <ApplicationCard key={index} application={app} onView={handleViewApplication} />)}
          {applications.length === 0 && <p className="text-center text-gray-500 py-4">No applications yet</p>}
        </div>
      </CardContent>
      <ApplicationDetailsDialog isOpen={isViewApplicationDialogOpen} onOpenChange={setIsViewApplicationDialogOpen} application={selectedApplication} />
    </Card>
  );
};

const ServiceFormDialog = ({ isOpen, onOpenChange, service, onSave, serviceType, isEditing }) => {
  const [formData, setFormData] = useState(service || {
    id: Date.now().toString(), title: '', description: '', iconName: getIconNames()[0] || '', imageUrl: '', imageAlt: '', features: [], duration: '', level: '',
  });
  const [featureInput, setFeatureInput] = useState('');
  const iconNamesList = getIconNames();

  useEffect(() => {
    if (service) {
      setFormData({ ...service, features: service.features || [], duration: service.duration || '', level: service.level || '' });
    } else {
      setFormData({ id: Date.now().toString(), title: '', description: '', iconName: iconNamesList[0] || '', imageUrl: '', imageAlt: '', features: [], duration: '', level: '' });
    }
  }, [service, iconNamesList]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFeatureAdd = () => {
    if (featureInput.trim() !== '') {
      setFormData(prev => ({ ...prev, features: [...prev.features, featureInput.trim()] }));
      setFeatureInput('');
    }
  };
  const handleFeatureRemove = (index) => setFormData(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }));
  const handleSubmit = (e) => { e.preventDefault(); onSave(formData); };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit' : 'Add New'} {serviceType === 'Virtual HR Services' ? 'Bundled Service Item' : 'Service'}</DialogTitle>
          {serviceType === 'Virtual HR Services' && <DialogDescription>Manage items within the Virtual HR bundled service offering.</DialogDescription>}
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div><Label htmlFor="title">Title</Label><Input name="title" value={formData.title} onChange={handleChange} required /></div>
          <div><Label htmlFor="description">Description</Label><Textarea name="description" value={formData.description} onChange={handleChange} required /></div>
          <div>
            <Label htmlFor="iconName">Icon</Label>
            <select name="iconName" value={formData.iconName} onChange={handleChange} className="w-full p-2 border rounded mt-1">
              {iconNamesList.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <div><Label htmlFor="imageUrl">Image URL (leave blank for placeholder)</Label><Input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://example.com/image.jpg" /></div>
          <div><Label htmlFor="imageAlt">Image Alt Text</Label><Input name="imageAlt" value={formData.imageAlt} onChange={handleChange} required /></div>
          {(serviceType === 'Accounting Solutions' || serviceType === 'Training Programs') && (
            <div>
              <Label>Features</Label>
              <div className="flex gap-2 mb-2 mt-1">
                <Input value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} placeholder="Add a feature" />
                <Button type="button" onClick={handleFeatureAdd}>Add</Button>
              </div>
              <ul className="space-y-1 max-h-32 overflow-y-auto">
                {formData.features && formData.features.map((feature, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded text-sm">
                    <span>{feature}</span>
                    <Button type="button" size="sm" variant="ghost" onClick={() => handleFeatureRemove(index)}><Trash2 className="h-3 w-3" /></Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {serviceType === 'Training Programs' && (
            <>
              <div><Label htmlFor="duration">Duration</Label><Input name="duration" value={formData.duration} onChange={handleChange} className="mt-1"/></div>
              <div><Label htmlFor="level">Level</Label><Input name="level" value={formData.level} onChange={handleChange} className="mt-1"/></div>
            </>
          )}
          <div className="flex justify-end space-x-2 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">{isEditing ? 'Update' : 'Add'} Service</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const ServiceManagementSection = ({ title, services, serviceKey, updateServiceList, serviceType, IconComponent }) => {
  const [currentServices, setCurrentServices] = useState(services || []);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  useEffect(() => { setCurrentServices(services || []); }, [services]);

  const handleSaveService = (serviceData) => {
    let updatedServices;
    if (editingService) {
      updatedServices = currentServices.map(s => s.id === serviceData.id ? serviceData : s);
      toast({ title: "Service Updated", description: `${serviceData.title} has been updated.` });
    } else {
      updatedServices = [...currentServices, { ...serviceData, id: serviceData.id || Date.now().toString() }];
      toast({ title: "Service Added", description: `${serviceData.title} has been added.` });
    }
    setCurrentServices(updatedServices);
    updateServiceList(serviceKey, updatedServices);
    setIsFormOpen(false);
    setEditingService(null);
  };

  const handleDeleteService = (serviceId) => {
    const serviceToDelete = currentServices.find(s => s.id === serviceId);
    const updatedServices = currentServices.filter(s => s.id !== serviceId);
    setCurrentServices(updatedServices);
    updateServiceList(serviceKey, updatedServices);
    toast({ title: "Service Deleted", description: `${serviceToDelete?.title || 'Service'} has been removed.` });
  };

  const handleOpenEditForm = (service) => { setEditingService(service); setIsFormOpen(true); };
  const handleOpenAddForm = () => { setEditingService(null); setIsFormOpen(true); };

  return (
    <Card className="mb-8">
      <CardHeader onClick={() => setIsSectionOpen(!isSectionOpen)} className="cursor-pointer flex flex-row items-center justify-between">
        <div className="flex items-center">
          {IconComponent && <IconComponent className="h-6 w-6 mr-2 text-blue-600" />}
          <CardTitle>{title} ({currentServices.length})</CardTitle>
        </div>
        {isSectionOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </CardHeader>
      {isSectionOpen && (
        <CardContent>
          <div className="flex justify-end mb-4">
            <Button onClick={handleOpenAddForm}>
              <Plus className="h-4 w-4 mr-2" /> Add New {serviceType === 'Virtual HR Services' ? 'Bundled Service Item' : 'Service'}
            </Button>
          </div>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {currentServices.map(service => (
              <Card key={service.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{service.title}</h4>
                    <p className="text-sm text-gray-600 truncate w-64" title={service.description}>{service.description}</p>
                    {service.imageUrl && <ImageIcon className="inline h-4 w-4 mr-1 text-gray-500" />}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleOpenEditForm(service)}><Edit className="h-4 w-4" /></Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDeleteService(service.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              </Card>
            ))}
            {currentServices.length === 0 && <p className="text-center text-gray-500 py-4">No services listed yet.</p>}
          </div>
          <ServiceFormDialog
            isOpen={isFormOpen}
            onOpenChange={setIsFormOpen}
            service={editingService}
            onSave={handleSaveService}
            serviceType={title}
            isEditing={!!editingService}
          />
        </CardContent>
      )}
    </Card>
  );
};

const AdminPage = ({ 
  applications: initialApplications, 
  jobs: initialJobs, 
  updateJobs,
  hrServices: initialHrServices,
  virtualHrServices: initialVirtualHrServices,
  accountingServices: initialAccountingServices,
  trainingPrograms: initialTrainingPrograms,
  updateServiceList
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [jobs, setJobsState] = useState(initialJobs || []);
  const [applications, setApplicationsState] = useState(initialApplications || []);

  useEffect(() => { setJobsState(initialJobs || []); }, [initialJobs]);
  useEffect(() => { setApplicationsState(initialApplications || []); }, [initialApplications]);

  const handleLogin = (loginCredentials) => {
    if (loginCredentials.email === 'admin@example.com' && loginCredentials.password === 'password') {
      setIsAuthenticated(true);
      toast({ title: "Login Successful", description: "Welcome to the admin dashboard" });
    } else {
      toast({ title: "Login Failed", description: "Invalid credentials", variant: "destructive" });
    }
  };

  const handleAddJob = (jobData) => {
    const newJob = { ...jobData, id: Date.now(), postedDate: new Date().toISOString().split('T')[0], company: 'B Square Global', candidates: 0 };
    const updatedJobsList = [...jobs, newJob];
    setJobsState(updatedJobsList);
    updateJobs(updatedJobsList);
    toast({ title: "Job Added", description: "New job listing has been added successfully" });
  };

  const handleEditJob = (jobData) => {
    const updatedJobsList = jobs.map(job => (job.id === jobData.id ? jobData : job));
    setJobsState(updatedJobsList);
    updateJobs(updatedJobsList);
    toast({ title: "Job Updated", description: "The job listing has been updated successfully" });
  };

  const handleDeleteJob = (jobId) => {
    const updatedJobsList = jobs.filter(job => job.id !== jobId);
    setJobsState(updatedJobsList);
    updateJobs(updatedJobsList);
    toast({ title: "Job Deleted", description: "The job listing has been removed" });
  };

  if (!isAuthenticated) {
    return <AdminLoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="pt-20 pb-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 flex items-center">
            <Settings className="h-10 w-10 mr-3 text-blue-600" /> Admin Dashboard
          </h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            Logout
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <JobManagementSection jobs={jobs} onAddJob={handleAddJob} onEditJob={handleEditJob} onDeleteJob={handleDeleteJob} />
            <ApplicationManagementSection applications={applications} />
          </div>
          
          <div className="lg:col-span-2">
            <ServiceManagementSection 
              title="HR Services" 
              services={initialHrServices} 
              serviceKey="hrServicesList" 
              updateServiceList={updateServiceList} 
              serviceType="HR Services"
              IconComponent={iconMap.HrIcon}
            />
            <ServiceManagementSection 
              title="Virtual HR Services (Bundled)" 
              services={initialVirtualHrServices} 
              serviceKey="virtualHrServicesList" 
              updateServiceList={updateServiceList} 
              serviceType="Virtual HR Services"
              IconComponent={iconMap.VirtualIcon}
            />
             <ServiceManagementSection 
              title="Accounting Solutions" 
              services={initialAccountingServices} 
              serviceKey="accountingServicesList" 
              updateServiceList={updateServiceList} 
              serviceType="Accounting Solutions"
              IconComponent={iconMap.AccountingIcon}
            />
            <ServiceManagementSection 
              title="Training Programs" 
              services={initialTrainingPrograms} 
              serviceKey="trainingProgramsList" 
              updateServiceList={updateServiceList} 
              serviceType="Training Programs"
              IconComponent={iconMap.TrainingIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
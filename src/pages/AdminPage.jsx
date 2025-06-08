
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Briefcase, Users, FileText as FileTextIcon, Edit, Trash2, Plus, Save, Download, ChevronDown, ChevronUp, Image as ImageIcon, LogIn, LogOut, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
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
            <CardTitle className="text-2xl font-bold text-center text-primary flex items-center justify-center">
              <UserCog className="h-7 w-7 mr-2" /> Admin Portal
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Access to manage site content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={loginData.email} onChange={handleChange} required className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={loginData.password} onChange={handleChange} required className="mt-1"/>
              </div>
              <Button type="submit" className="w-full btn-primary text-white font-semibold py-2.5">
                <LogIn className="h-4 w-4 mr-2" /> Secure Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const JobFormDialog = ({ isOpen, onOpenChange, jobData, onSave, isEditing }) => {
  const [currentJobData, setCurrentJobData] = useState({});

  useEffect(() => {
    if (isOpen) {
        setCurrentJobData(isEditing && jobData ? jobData : {
            id: Date.now(), title: '', company: 'B Square Global', location: '', type: '', salary: '', description: '', requirements: '', skills: '', candidates: 0, postedDate: new Date().toISOString().split('T')[0]
        });
    }
  }, [isOpen, jobData, isEditing]);

  const handleChange = (e) => {
    setCurrentJobData({ ...currentJobData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(currentJobData);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Job Listing' : 'Add New Job Listing'}</DialogTitle>
          <DialogDescription>
            {isEditing ? `Update details for ${currentJobData.title || 'the job'}.` : 'Provide details for the new job opportunity.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div><Label htmlFor="title">Job Title</Label><Input id="title" value={currentJobData.title || ''} onChange={handleChange} /></div>
          <div><Label htmlFor="location">Location</Label><Input id="location" value={currentJobData.location || ''} onChange={handleChange} /></div>
          <div><Label htmlFor="type">Employment Type (e.g., Full-time)</Label><Input id="type" value={currentJobData.type || ''} onChange={handleChange} /></div>
          <div><Label htmlFor="salary">Salary Range (e.g., ₹X - ₹Y LPA)</Label><Input id="salary" value={currentJobData.salary || ''} onChange={handleChange} /></div>
          <div><Label htmlFor="skills">Required Skills (comma-separated)</Label><Input id="skills" value={currentJobData.skills || ''} onChange={handleChange} /></div>
          <div><Label htmlFor="description">Job Description</Label><Textarea id="description" value={currentJobData.description || ''} onChange={handleChange} rows={4} /></div>
          <div><Label htmlFor="requirements">Key Requirements</Label><Textarea id="requirements" value={currentJobData.requirements || ''} onChange={handleChange} rows={3}/></div>
        </div>
        <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={handleSubmit} className="btn-primary">
                <Save className="h-4 w-4 mr-2" />
                {isEditing ? 'Save Changes' : 'Add Job'}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const JobListingCard = ({ job, onEdit, onDelete }) => (
  <Card className="p-4 transition-shadow hover:shadow-lg">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-primary">{job.title}</h3>
        <p className="text-sm text-muted-foreground">{job.location} • {job.type}</p>
        <p className="text-xs text-muted-foreground">Posted: {job.postedDate}</p>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => onEdit(job)}><Edit className="h-4 w-4 mr-1" />Edit</Button>
        <Button size="sm" variant="destructive" onClick={() => onDelete(job.id)}><Trash2 className="h-4 w-4 mr-1" />Delete</Button>
      </div>
    </div>
  </Card>
);

const JobManagementSection = ({ jobs, onAddJob, onEditJob, onDeleteJob }) => {
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const handleOpenAddForm = () => {
    setEditingJob(null);
    setIsJobFormOpen(true);
  };

  const handleOpenEditForm = (job) => {
    setEditingJob(job);
    setIsJobFormOpen(true);
  };

  const handleSaveJob = (jobData) => {
    if (editingJob) {
      onEditJob(jobData);
    } else {
      onAddJob(jobData);
    }
  };

  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-xl"><Briefcase className="h-6 w-6 text-primary" />Job Listings ({jobs.length})</CardTitle>
        <Button size="sm" onClick={handleOpenAddForm} className="btn-primary"><Plus className="h-4 w-4 mr-2" />Add Job</Button>
      </CardHeader>
      <CardContent className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
        {jobs.map((job) => <JobListingCard key={job.id} job={job} onEdit={handleOpenEditForm} onDelete={onDeleteJob} />)}
        {jobs.length === 0 && <p className="text-center text-muted-foreground py-4">No job listings yet. Add one!</p>}
      </CardContent>
      <JobFormDialog 
        isOpen={isJobFormOpen} 
        onOpenChange={setIsJobFormOpen} 
        jobData={editingJob} 
        onSave={handleSaveJob}
        isEditing={!!editingJob}
      />
    </Card>
  );
};

const ApplicationDetailsDialog = ({ isOpen, onOpenChange, application }) => {
  if (!application) return null;
  const handleDownload = () => {
    if (application.resume instanceof File) {
      const url = URL.createObjectURL(application.resume);
      const a = document.createElement('a');
      a.href = url;
      a.download = application.resume.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast({ title: "Success", description: "Resume downloaded." });
    } else if (typeof application.resume === 'string' && application.resume.startsWith('http')) {
        window.open(application.resume, '_blank');
         toast({ title: "Success", description: "Resume opened in new tab." });
    } else {
      toast({ title: "Error", description: "Resume file not available or format not supported.", variant: "destructive" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Application Details: {application.name}</DialogTitle>
          <DialogDescription>For job: {application.jobTitle}.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4 text-sm">
          <p><strong>Email:</strong> {application.email}</p>
          <p><strong>Phone:</strong> {application.phone}</p>
          <p><strong>Previous Company:</strong> {application.previousCompany || 'N/A'}</p>
          <p><strong>Experience:</strong> {application.experience || 'N/A'} years</p>
          {application.resume && (
            <Button variant="outline" onClick={handleDownload} className="mt-2">
              <Download className="h-4 w-4 mr-2" /> Download Resume
            </Button>
          )}
          {!application.resume && <p className="text-muted-foreground">No resume uploaded.</p>}
        </div>
         <DialogFooter>
            <DialogClose asChild><Button variant="outline">Close</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ApplicationCard = ({ application, onView }) => (
  <Card className="p-4 transition-shadow hover:shadow-lg">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-primary">{application.name}</h3>
        <p className="text-sm text-muted-foreground">{application.email}</p>
        <p className="text-xs text-muted-foreground">Applied for: {application.jobTitle}</p>
      </div>
      <Button size="sm" variant="outline" onClick={() => onView(application)}>
        <FileTextIcon className="h-4 w-4 mr-2" /> View
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
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl"><Users className="h-6 w-6 text-primary" />Job Applications ({applications.length})</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
        {applications.map((app, index) => <ApplicationCard key={app.id || index} application={app} onView={handleViewApplication} />)}
        {applications.length === 0 && <p className="text-center text-muted-foreground py-4">No applications received yet.</p>}
      </CardContent>
      <ApplicationDetailsDialog isOpen={isViewApplicationDialogOpen} onOpenChange={setIsViewApplicationDialogOpen} application={selectedApplication} />
    </Card>
  );
};

const ServiceFormDialog = ({ isOpen, onOpenChange, service, onSave, serviceType, isEditing }) => {
  const initialFormState = {
    id: Date.now().toString(), title: '', description: '', iconName: getIconNames()[0] || '', imageUrl: '', imageAlt: '', features: [], duration: '', level: '',
  };
  const [formData, setFormData] = useState(initialFormState);
  const [featureInput, setFeatureInput] = useState('');
  const iconNamesList = getIconNames();

  useEffect(() => {
    if (isOpen) {
      if (isEditing && service) {
        setFormData({ 
          ...initialFormState, 
          ...service, 
          features: service.features || [], 
          duration: service.duration || '', 
          level: service.level || '' 
        });
      } else {
        setFormData({...initialFormState, id: Date.now().toString(), iconName: iconNamesList[0] || ''});
      }
    }
  }, [isOpen, service, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureAdd = () => {
    if (featureInput.trim() !== '') {
      setFormData(prev => ({ ...prev, features: [...(prev.features || []), featureInput.trim()] }));
      setFeatureInput('');
    }
  };
  const handleFeatureRemove = (index) => {
    setFormData(prev => ({ ...prev, features: (prev.features || []).filter((_, i) => i !== index) }));
  };
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    onSave(formData); 
    onOpenChange(false);
  };

  const dialogTitleType = serviceType.replace(' (Bundled)', '');
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit' : 'Add New'} {dialogTitleType}</DialogTitle>
          <DialogDescription>
            {isEditing ? `Update details for '${formData.title || 'this service'}'` : `Provide details for the new ${dialogTitleType.toLowerCase()}.`}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div><Label htmlFor="title">Title</Label><Input name="title" value={formData.title} onChange={handleChange} required /></div>
          <div><Label htmlFor="description">Description</Label><Textarea name="description" value={formData.description} onChange={handleChange} required rows={3} /></div>
          <div>
            <Label htmlFor="iconName">Icon</Label>
            <select name="iconName" value={formData.iconName} onChange={handleChange} className="w-full p-2 border rounded mt-1 bg-background">
              {iconNamesList.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <div><Label htmlFor="imageUrl">Image URL (leave blank for auto-placeholder)</Label><Input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://example.com/image.jpg" /></div>
          <div><Label htmlFor="imageAlt">Image Alt Text (required if Image URL is set)</Label><Input name="imageAlt" value={formData.imageAlt} onChange={handleChange} required={!!formData.imageUrl} /></div>
          
          {(serviceType.includes('Accounting Solutions') || serviceType.includes('Training Programs')) && (
            <div>
              <Label>Key Features / Topics</Label>
              <div className="flex gap-2 mb-2 mt-1">
                <Input value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} placeholder="Add a feature/topic" />
                <Button type="button" variant="outline" onClick={handleFeatureAdd}>Add</Button>
              </div>
              <ul className="space-y-1 max-h-32 overflow-y-auto border p-2 rounded-md">
                {(formData.features || []).map((feature, index) => (
                  <li key={index} className="flex justify-between items-center bg-muted p-2 rounded text-sm">
                    <span>{feature}</span>
                    <Button type="button" size="sm" variant="ghost" onClick={() => handleFeatureRemove(index)}><Trash2 className="h-3 w-3 text-destructive" /></Button>
                  </li>
                ))}
                 {(formData.features || []).length === 0 && <p className="text-xs text-muted-foreground">No features added yet.</p>}
              </ul>
            </div>
          )}

          {serviceType.includes('Training Programs') && (
            <>
              <div><Label htmlFor="duration">Program Duration (e.g., 4 Weeks)</Label><Input name="duration" value={formData.duration} onChange={handleChange} className="mt-1"/></div>
              <div><Label htmlFor="level">Skill Level (e.g., Beginner, Advanced)</Label><Input name="level" value={formData.level} onChange={handleChange} className="mt-1"/></div>
            </>
          )}
          <DialogFooter className="pt-2">
            <DialogClose asChild><Button type="button" variant="outline">Cancel</Button></DialogClose>
            <Button type="submit" className="btn-primary">{isEditing ? 'Update Service' : 'Add Service'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const ServiceManagementSection = ({ title, services, serviceKey, updateServiceList, IconComponent }) => {
  const [currentServices, setCurrentServices] = useState(services || []);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [isSectionOpen, setIsSectionOpen] = useState(title.includes('HR Services'));
  const [imagePreviewKey, setImagePreviewKey] = useState(Date.now()); // Key to force re-render of image

  useEffect(() => { setCurrentServices(services || []); }, [services]);

  const handleSaveService = (serviceData) => {
    let updatedServices;
    if (editingService) {
      updatedServices = currentServices.map(s => s.id === serviceData.id ? serviceData : s);
      toast({ title: "Service Updated", description: `'${serviceData.title}' has been successfully updated.` });
    } else {
      updatedServices = [...currentServices, { ...serviceData, id: serviceData.id || Date.now().toString() }];
      toast({ title: "Service Added", description: `'${serviceData.title}' has been successfully added.` });
    }
    setCurrentServices(updatedServices);
    updateServiceList(serviceKey, updatedServices);
    setEditingService(null);
    setImagePreviewKey(Date.now()); // Update key to refresh image if URL changed
  };

  const handleDeleteService = (serviceId) => {
    const serviceToDelete = currentServices.find(s => s.id === serviceId);
    if (!serviceToDelete) return;

    const updatedServices = currentServices.filter(s => s.id !== serviceId);
    setCurrentServices(updatedServices);
    updateServiceList(serviceKey, updatedServices);
    toast({ title: "Service Deleted", description: `'${serviceToDelete.title}' has been removed.`, variant: "destructive" });
  };

  const handleOpenEditForm = (service) => { setEditingService(service); setIsFormOpen(true); };
  const handleOpenAddForm = () => { setEditingService(null); setIsFormOpen(true); };
  
  const serviceTypeForDialog = title.replace(' (Bundled)', '');


  return (
    <Card className="mb-8 shadow-md">
      <CardHeader onClick={() => setIsSectionOpen(!isSectionOpen)} className="cursor-pointer flex flex-row items-center justify-between hover:bg-muted/50 transition-colors p-4">
        <div className="flex items-center">
          {IconComponent && <IconComponent className="h-6 w-6 mr-3 text-primary" />}
          <CardTitle className="text-xl">{title} ({currentServices.length})</CardTitle>
        </div>
        {isSectionOpen ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
      </CardHeader>
      {isSectionOpen && (
        <CardContent className="p-4">
          <div className="flex justify-end mb-4">
            <Button onClick={handleOpenAddForm} className="btn-primary">
              <Plus className="h-4 w-4 mr-2" /> Add New {serviceTypeForDialog}
            </Button>
          </div>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {currentServices.map(service => (
              <Card key={service.id} className="p-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    {service.imageUrl ? 
                      <img key={imagePreviewKey + service.id} src={service.imageUrl} alt={service.imageAlt} className="h-12 w-12 rounded-md object-cover"/> 
                      : <ImageIcon className="h-12 w-12 text-muted-foreground p-2 bg-muted rounded-md flex-shrink-0" />}
                    <div>
                      <h4 className="font-semibold text-primary">{service.title}</h4>
                      <p className="text-xs text-muted-foreground truncate w-full max-w-md" title={service.description}>{service.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button size="sm" variant="outline" onClick={() => handleOpenEditForm(service)}><Edit className="h-3 w-3 mr-1" />Edit</Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDeleteService(service.id)}><Trash2 className="h-3 w-3 mr-1" />Del</Button>
                  </div>
                </div>
              </Card>
            ))}
            {currentServices.length === 0 && <p className="text-center text-muted-foreground py-4">No services listed in this category yet.</p>}
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
      toast({ title: "Login Successful!", description: "Welcome to the Admin Dashboard.", className: "bg-green-500 text-white" });
    } else {
      toast({ title: "Login Failed", description: "Invalid email or password. Please try again.", variant: "destructive" });
    }
  };

  const handleAddJob = (jobData) => {
    const newJob = { ...jobData, id: jobData.id || Date.now(), postedDate: new Date().toISOString().split('T')[0], company: 'B Square Global', candidates: 0 };
    const updatedJobsList = [...jobs, newJob];
    setJobsState(updatedJobsList);
    updateJobs(updatedJobsList);
    toast({ title: "Job Added", description: `"${newJob.title}" has been successfully listed.` });
  };

  const handleEditJob = (jobData) => {
    const updatedJobsList = jobs.map(job => (job.id === jobData.id ? jobData : job));
    setJobsState(updatedJobsList);
    updateJobs(updatedJobsList);
    toast({ title: "Job Updated", description: `"${jobData.title}" has been successfully updated.` });
  };

  const handleDeleteJob = (jobId) => {
    const jobToDelete = jobs.find(job => job.id === jobId);
    const updatedJobsList = jobs.filter(job => job.id !== jobId);
    setJobsState(updatedJobsList);
    updateJobs(updatedJobsList);
    toast({ title: "Job Deleted", description: `"${jobToDelete?.title || 'The job'}" has been removed.`, variant: "destructive" });
  };

  if (!isAuthenticated) {
    return <AdminLoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="pt-24 pb-12 bg-slate-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-border">
          <h1 className="text-3xl font-bold text-primary flex items-center">
            <Settings className="h-8 w-8 mr-3" /> Admin Dashboard
          </h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1 space-y-8">
            <JobManagementSection jobs={jobs} onAddJob={handleAddJob} onEditJob={handleEditJob} onDeleteJob={handleDeleteJob} />
            <ApplicationManagementSection applications={applications} />
          </section>
          
          <section className="lg:col-span-2 space-y-8">
            <ServiceManagementSection 
              title="HR Services" 
              services={initialHrServices} 
              serviceKey="hrServicesList" 
              updateServiceList={updateServiceList} 
              IconComponent={iconMap.HrIcon}
            />
            <ServiceManagementSection 
              title="Virtual HR Services (Bundled)" 
              services={initialVirtualHrServices} 
              serviceKey="virtualHrServicesList" 
              updateServiceList={updateServiceList} 
              IconComponent={iconMap.VirtualIcon}
            />
             <ServiceManagementSection 
              title="Accounting Solutions" 
              services={initialAccountingServices} 
              serviceKey="accountingServicesList" 
              updateServiceList={updateServiceList} 
              IconComponent={iconMap.AccountingIcon}
            />
            <ServiceManagementSection 
              title="Training Programs" 
              services={initialTrainingPrograms} 
              serviceKey="trainingProgramsList" 
              updateServiceList={updateServiceList} 
              IconComponent={iconMap.TrainingIcon}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

const JobApplicationForm = ({ job, onClose, addApplication }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    previousCompany: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const applicationData = {
      ...formData,
      jobTitle: job.title,
      jobId: job.id,
      appliedDate: new Date().toISOString()
    };
    addApplication(applicationData);
    toast({
      title: "Application Submitted!",
      description: `Your application for ${job.title} has been successfully submitted. We'll be in touch soon!`,
    });
    onClose(); 
  };

  return (
    <DialogContent className="max-w-lg">
      <DialogHeader>
        <DialogTitle>Apply for: {job.title}</DialogTitle>
        <DialogDescription>
          Please fill out the form below to apply for this position.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4 pt-2">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="phone">Contact Number</Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="previousCompany">Previous Company (if applicable)</Label>
          <Input id="previousCompany" value={formData.previousCompany} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="experience">Years of Experience</Label>
          <Input id="experience" type="number" min="0" step="0.5" value={formData.experience} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="resume">Upload Resume (PDF, DOC, DOCX)</Label>
          <Input 
            id="resume" 
            type="file" 
            accept=".pdf,.doc,.docx" 
            onChange={handleChange} 
            required 
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer"
          />
        </div>
        
        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Submit Application
          </Button>
        </div>
      </form>
    </DialogContent>
  );
};

export default JobApplicationForm;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, DollarSign, Plus, Edit, Trash2, Users, Briefcase, Building, Award, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import JobApplicationForm from '@/components/JobApplicationForm';

const JobListingsPage = ({ addApplication, jobs: initialJobs }) => {
  const [jobs, setJobs] = useState(initialJobs || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplicationDialogOpen, setIsApplicationDialogOpen] = useState(false);

  useEffect(() => {
     setJobs(initialJobs || []);
  }, [initialJobs]);


  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (job.company && job.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (job.skills && job.skills.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsApplicationDialogOpen(true);
  };

  const getTypeColor = (type) => {
    if (!type) return 'bg-gray-100 text-gray-800';
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-green-100 text-green-800';
      case 'part-time':
        return 'bg-blue-100 text-blue-800';
      case 'contract':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              Join Our <span className="text-orange-400">Dynamic Team</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're always looking for talented individuals to be part of exciting projects. 
              Explore current openings below and apply if any role suits your expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search jobs by title, location, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-base rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-blue-700">{job.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(job.type)}`}>
                                {job.type || 'N/A'}
                            </span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-3">
                            <Building className="h-4 w-4 mr-2 text-orange-500" />
                            <span>{job.company || 'B Square Global'}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm text-gray-700">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                            {job.location || 'N/A'}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-2 text-orange-500" />
                            {job.salary || 'Competitive'}
                          </div>
                           <div className="flex items-center">
                            <Award className="h-4 w-4 mr-2 text-orange-500" />
                            Experience: {job.experience || 'N/A'}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-orange-500" />
                            Posted: {job.postedDate ? new Date(job.postedDate).toLocaleDateString() : 'N/A'}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed line-clamp-3">{job.description || 'No description available.'}</p>
                        
                        {job.skills && (
                           <div className="mb-4">
                               <h4 className="text-sm font-semibold text-gray-800 mb-1">Skills:</h4>
                               <div className="flex flex-wrap gap-2">
                                   {job.skills.split(',').map(skill => skill.trim()).filter(Boolean).map((skill, i) => (
                                       <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">{skill}</span>
                                   ))}
                               </div>
                           </div>
                        )}
                         {job.requirements && (
                           <div className="mb-4">
                               <h4 className="text-sm font-semibold text-gray-800 mb-1">Requirements:</h4>
                               <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{job.requirements}</p>
                           </div>
                        )}

                      </div>
                      
                      <div className="md:ml-6 flex flex-col justify-center items-center md:items-end gap-3">
                        <Dialog open={isApplicationDialogOpen && selectedJob?.id === job.id} onOpenChange={(isOpen) => { if(!isOpen) setSelectedJob(null); setIsApplicationDialogOpen(isOpen);}}>
                          <DialogTrigger asChild>
                            <Button 
                              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                              onClick={() => handleApplyClick(job)}
                            >
                              Apply Now
                            </Button>
                          </DialogTrigger>
                          {selectedJob && selectedJob.id === job.id && (
                            <JobApplicationForm 
                              job={selectedJob} 
                              onClose={() => { setIsApplicationDialogOpen(false); setSelectedJob(null); }}
                              addApplication={addApplication}
                            />
                          )}
                        </Dialog>
                        <p className="text-xs text-gray-500 mt-1">{job.candidates || 0} active candidates</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Briefcase className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">No Matching Jobs Found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  {searchTerm ? 'We couldn\'t find any jobs matching your search. Try different keywords or check back later!' : 'There are currently no open positions. Please check back soon for new opportunities.'}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListingsPage;
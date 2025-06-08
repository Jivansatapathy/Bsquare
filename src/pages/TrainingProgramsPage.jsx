import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, RadioTower } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { iconMap } from '@/lib/iconMap';

const TrainingProgramsPage = ({ programs }) => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isEnrollFormOpen, setIsEnrollFormOpen] = useState(false);
  const [demoFormData, setDemoFormData] = useState({ name: '', email: '', contactNumber: '', inquiry: 'Schedule a Demo' });
  const [enrollFormData, setEnrollFormData] = useState({ name: '', email: '', contactNumber: '', companyName: '', programsInterested: [] });
  const [selectedTrainingForEnroll, setSelectedTrainingForEnroll] = useState(null);
  
  const programsListRef = useRef(null);
  const enrollFormRef = useRef(null);

  const trainingProgramsList = programs || [];

  const trainingTestimonials = [
    { name: "Alex T.", company: "Innovate Solutions", text: "The AI & Data Analytics program was a game-changer for our team. The practical skills gained were immediately applicable.", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60" },
    { name: "Sarah M.", company: "Global Corp", text: "Leadership training provided invaluable insights. My management style has significantly improved, fostering better team collaboration.", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60" },
    { name: "David K.", company: "Tech Pioneers Inc.", text: "The custom onboarding program B Square Global developed for us has drastically reduced ramp-up time for new hires.", imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60" }
  ];

  const simplifiedOutcomes = [
    { iconName: "TrendingUp", text: "Accelerated Skill Acquisition" },
    { iconName: "Users", text: "Enhanced Team Collaboration" },
    { iconName: "CheckCircle", text: "Improved Performance Metrics" },
    { iconName: "Brain", text: "Increased Innovation Capacity" }
  ];

  const handleDemoFormChange = (e) => setDemoFormData({ ...demoFormData, [e.target.id]: e.target.value });
  const handleEnrollFormChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (id === "programsInterested") {
      let updatedPrograms = [...enrollFormData.programsInterested];
      if (checked) {
        updatedPrograms.push(value);
      } else {
        updatedPrograms = updatedPrograms.filter(p => p !== value);
      }
      setEnrollFormData({ ...enrollFormData, programsInterested: updatedPrograms });
    } else {
      setEnrollFormData({ ...enrollFormData, [id]: value });
    }
  };
  
  const handleDemoSubmit = (e) => {
    e.preventDefault();
    console.log("Demo Request:", demoFormData);
    toast({ title: "Demo Request Sent!", description: "We'll contact you shortly to schedule your demo." });
    setIsDemoFormOpen(false);
    setDemoFormData({ name: '', email: '', contactNumber: '', inquiry: 'Schedule a Demo' });
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(enrollFormData.email) || !enrollFormData.email.split('@')[1].includes('.')) {
         toast({ title: "Invalid Email", description: "Please enter a valid company email address.", variant: "destructive" });
         return;
    }
    if (enrollFormData.programsInterested.length === 0) {
        toast({ title: "No Program Selected", description: "Please select at least one training program.", variant: "destructive" });
        return;
    }
    console.log("Enrollment Request:", enrollFormData);
    toast({ title: "Enrollment Request Sent!", description: "We'll be in touch soon with a quote and next steps." });
    setIsEnrollFormOpen(false);
    setEnrollFormData({ name: '', email: '', contactNumber: '', companyName: '', programsInterested: [] });
    setSelectedTrainingForEnroll(null);
  };

  const openEnrollFormForProgram = (program) => {
    setSelectedTrainingForEnroll(program);
    setEnrollFormData(prev => ({ ...prev, programsInterested: [program.title] }));
    setIsEnrollFormOpen(true);
  };

  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gradient-to-br from-orange-500 to-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                Elevate Your Team with
                <span className="block text-yellow-300 mt-2">Impactful Training Programs</span>
              </h1>
              <p className="mt-6 text-xl text-orange-100 max-w-2xl leading-relaxed">
                Cutting-edge corporate training designed to unlock potential, boost skills, and drive organizational success in today's dynamic landscape.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-red-700 font-bold px-8 py-4 text-lg shadow-lg" onClick={() => programsListRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Dialog open={isDemoFormOpen} onOpenChange={setIsDemoFormOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg shadow-lg">
                      Schedule a Demo <RadioTower className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader><DialogTitle>Schedule a Demo</DialogTitle><DialogDescription>Learn more about our impactful training programs.</DialogDescription></DialogHeader>
                    <form onSubmit={handleDemoSubmit} className="space-y-4 pt-2">
                      <div><Label htmlFor="name">Name</Label><Input id="name" value={demoFormData.name} onChange={handleDemoFormChange} required /></div>
                      <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={demoFormData.email} onChange={handleDemoFormChange} required /></div>
                      <div><Label htmlFor="contactNumber">Contact Number</Label><Input id="contactNumber" type="tel" value={demoFormData.contactNumber} onChange={handleDemoFormChange} required /></div>
                      <div><Label htmlFor="inquiry">Inquiry</Label><Input id="inquiry" value={demoFormData.inquiry} readOnly className="bg-gray-100" /></div>
                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit Request</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img  className="rounded-2xl shadow-2xl w-full h-auto max-h-[450px] object-cover" alt="Dynamic training session in progress" src="https://images.unsplash.com/photo-1592382258436-7751788238e8" />
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={programsListRef} id="training-programs-list" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premier Training Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover programs designed to equip your workforce with future-ready skills and knowledge.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {trainingProgramsList.map((program, index) => {
              const IconComponent = iconMap[program.iconName] || CheckCircle;
              return (
                <motion.div key={program.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card className="flex flex-col h-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl group bg-white">
                    <div className="relative h-56 overflow-hidden">
                       {program.imageUrl ? (
                        <img
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                          alt={program.imageAlt || program.title}
                          src={program.imageUrl} />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                           <img  alt={program.imageAlt || program.title} src="https://images.unsplash.com/photo-1694878981885-7647baf0d957" />
                          </div>
                        )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">{program.level}</div>
                      <div className="absolute bottom-4 left-4 p-2 bg-red-600/80 backdrop-blur-sm rounded-full text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{program.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">{program.duration}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                      {program.features && program.features.length > 0 && (
                        <ul className="space-y-1.5 mb-5">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button onClick={() => openEnrollFormForProgram(program)} className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold">
                        Enroll Now / Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={isEnrollFormOpen} onOpenChange={setIsEnrollFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Enrollment / Quote Request</DialogTitle>
            {selectedTrainingForEnroll && <DialogDescription>For: {selectedTrainingForEnroll.title}</DialogDescription>}
          </DialogHeader>
          <form ref={enrollFormRef} onSubmit={handleEnrollSubmit} className="space-y-3 pt-2 max-h-[70vh] overflow-y-auto pr-2">
            <div><Label htmlFor="name">Full Name</Label><Input id="name" value={enrollFormData.name} onChange={handleEnrollFormChange} required /></div>
            <div><Label htmlFor="email">Company Email</Label><Input id="email" type="email" placeholder="yourname@company.com" value={enrollFormData.email} onChange={handleEnrollFormChange} required /></div>
            <div><Label htmlFor="contactNumber">Contact Number</Label><Input id="contactNumber" type="tel" value={enrollFormData.contactNumber} onChange={handleEnrollFormChange} required /></div>
            <div><Label htmlFor="companyName">Company Name</Label><Input id="companyName" value={enrollFormData.companyName} onChange={handleEnrollFormChange} required /></div>
            <div>
              <Label>Training Program(s) Interested In</Label>
              <div className="space-y-1 mt-1">
                {trainingProgramsList.map(p => (
                  <div key={p.id} className="flex items-center">
                    <input type="checkbox" id={`prog-${p.id}`} value={p.title} checked={enrollFormData.programsInterested.includes(p.title)} onChange={handleEnrollFormChange} name="programsInterested" className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 mr-2"/>
                    <label htmlFor={`prog-${p.id}`} className="text-sm text-gray-700">{p.title}</label>
                  </div>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">Request Quote</Button>
          </form>
        </DialogContent>
      </Dialog>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable Training Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our programs are designed not just for learning, but for tangible business outcomes and skill enhancement.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {simplifiedOutcomes.map((outcome, index) => {
               const OutcomeIcon = iconMap[outcome.iconName] || CheckCircle;
               return (
                <motion.div key={index} initial={{ opacity: 0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay: index*0.1 }}>
                  <Card className="p-6 text-center h-full shadow-lg hover:shadow-xl transition-shadow rounded-xl bg-gradient-to-br from-orange-50 to-red-50">
                    <div className="inline-block p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4">
                      <OutcomeIcon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{outcome.text}</h3>
                  </Card>
                </motion.div>
               );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Trainees</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear how B Square Global's training has empowered professionals and organizations.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainingTestimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:index*0.1 }}>
                <Card className="p-6 h-full shadow-lg hover:shadow-xl transition-shadow rounded-xl bg-white">
                  <CardContent className="flex flex-col items-center text-center">
                    <img  className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-orange-300" alt={`Testimonial from ${testimonial.name}`} src={testimonial.imageUrl || "https://images.unsplash.com/photo-1595872018818-97555653a011"} />
                    <p className="text-gray-600 italic text-sm mb-3">"{testimonial.text}"</p>
                    <h4 className="font-semibold text-orange-700 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingProgramsPage;
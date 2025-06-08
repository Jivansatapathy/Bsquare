
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

const GetStartedForm = ({ trigger }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "We'll get back to you shortly!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Started</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll contact you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" required />
          </div>
          <div>
            <Label htmlFor="phone">Contact Number</Label>
            <Input id="phone" type="tel" placeholder="Your phone number" required />
          </div>
          <div>
            <Label htmlFor="services">Services Required</Label>
            <select
              id="services"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              multiple
            >
              <option value="hr">HR Services</option>
              <option value="virtual-hr">Virtual HR Services</option>
              <option value="accounting">Accounting Services</option>
              <option value="training">Training Services</option>
            </select>
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedForm;

import React, { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  learningGoal: string;
  experienceLevel: string;
};

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    learningGoal: '',
    experienceLevel: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const selectButtonSvg = "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(100,121,135)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')";

  return (
    <div 
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ 
        '--select-button-svg': selectButtonSvg,
        fontFamily: 'Lexend, "Noto Sans", sans-serif'
      } as React.CSSProperties}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full md:w-[512px] max-w-[512px] py-5 md:max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/dd1a5fee-eced-4ce1-9f08-3cf8dcfa8c69.png")' }}
                ></div>
              </div>
            </div>
            
            <h1 className="text-[#111517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">
              Create an account to start your free trial
            </h1>
            
            <form onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111517] text-base font-medium leading-normal pb-2">First name</p>
                  <input
                    name="firstName"
                    placeholder="John"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111517] text-base font-medium leading-normal pb-2">Last name</p>
                  <input
                    name="lastName"
                    placeholder="Doe"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111517] text-base font-medium leading-normal pb-2">Email address</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111517] text-base font-medium leading-normal pb-2">What's your main goal for learning? (optional)</p>
                  <select
                    name="learningGoal"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 bg-[image:--select-button-svg] placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                    value={formData.learningGoal}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="career">Career advancement</option>
                    <option value="skills">Skill development</option>
                    <option value="personal">Personal interest</option>
                  </select>
                </label>
              </div>
              
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111517] text-base font-medium leading-normal pb-2">What's your current level of experience with this topic? (optional)</p>
                  <select
                    name="experienceLevel"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 bg-[image:--select-button-svg] placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </label>
              </div>
              
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1f93e0] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1a82c7] transition-colors"
                >
                  <span className="truncate">Continue</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <p className="text-[#647987] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
              By continuing, you agree to the Terms of Service and Privacy Policy
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SignUpForm;
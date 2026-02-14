
import React, { useEffect, useRef, useState } from 'react';
import { ExperienceItem, ProjectItem, SkillItem, HobbyItem } from '../types';

const experience: ExperienceItem[] = [
  {
    title: 'Product Manager, PayPal Checkout & Fastlane',
    company: 'PayPal',
    period: 'Nov 2024 — PRESENT',
    achievements: [
      'Led cross-functional conversion optimization across Analytics, Engineering, and Design, analyzing 2.6B checkout transactions to identify merchant-actionable improvements driving 5–13pp lift and reducing ~90M lost conversions annually',
      'Established a merchant CSAT measurement program across PPCP, Braintree, and Developer Experience, defining baselines, +5-point improvement targets, and a quarterly reporting cadence',
      'Drove legacy API deprecation for 675K merchants processing $1.26B TPV by designing a 3-phase migration strategy that reduced legacy usage 6% while maintaining merchant experience'
    ],
    active: true
  },
  {
    title: 'Product Manager, Enterprise Platform Growth',
    company: 'PayPal Braintree',
    period: 'Aug 2023 — Nov 2024',
    achievements: [
      'Supported large enterprise customers by providing technical product expertise for complex payment solutions, deal structuring, and enterprise sales engagements',
      'Led user research and experimentation to deliver ML-driven smart retry logic, reducing latency 41% and generating $0.6M in infrastructure cost savings',
      'Improved conversion performance for 200 underperforming merchants through UX analysis and funnel optimization, driving 3.5–8.5% conversion gains and informing product investment decisions'
    ]
  }
];

const projects: ProjectItem[] = [
  {
    title: 'Project: DoorDash Case Study',
    description: 'A detailed study on what I believe DoorDash should focus on in the near future, focusing on expansion into non-food categories.',
    tags: ['Product Sense', 'Case Study'],
    imageUrl: 'https://1000logos.net/wp-content/uploads/2021/06/DoorDash-logo.png',
    linkUrl: 'https://drive.google.com/file/d/1tkRZrZIL8tGUManyxiKGAucDAUgA5syA/view?usp=sharing'
  },
  {
    title: 'Bruin Ventures',
    description: 'Bruin Ventures is a 501(c)(3) non-profit organization and the premier student-led venture capital and technology club at UCLA, fostering startup culture on campus since 2016.',
    tags: ['Venture Capital', 'Leadership'],
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
    linkUrl: 'https://www.uclabv.com/'
  }
];

const skills: SkillItem[] = [
  { label: 'Product Strategy', percentage: 95 },
  { label: 'Data Analytics (SQL/Mixpanel)', percentage: 88 },
  { label: 'Stakeholder Management', percentage: 92 },
  { label: 'Agile/Scrum Leadership', percentage: 98 }
];

const hobbies: HobbyItem[] = [
  { icon: 'nightlight', label: 'Dancing', requirement: 'Creativity' },
  { icon: 'music_note', label: 'Playing the Guitar', requirement: 'Precision' },
  { icon: 'explore', label: 'Traveling', requirement: 'Adaptability' },
  { icon: 'sports_tennis', label: 'Tennis', requirement: 'Endurance' }
];

const SkillBar: React.FC<{ skill: SkillItem }> = ({ skill }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setWidth(skill.percentage);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [skill.percentage]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-slate-900 dark:text-white">{skill.label}</span>
        <span className="text-xs font-mono text-primary">{skill.percentage}%</span>
      </div>
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const PortfolioContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 min-h-screen rounded-xl border border-slate-200 dark:border-slate-800 document-shadow p-5 md:p-16 transition-colors">
      
      {/* 1.0 Executive Summary */}
      <section className="mb-16 md:mb-20 scroll-mt-24" id="summary">
        <div className="mb-6 md:mb-8">
          <span className="text-primary font-mono text-sm font-bold tracking-tighter">1.0</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white tracking-tight">Executive Summary</h1>
          <div className="h-1 w-16 md:w-20 bg-primary mt-4"></div>
        </div>
        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            👋 Hi! I am a <span className="text-slate-900 dark:text-white font-semibold underline decoration-primary decoration-2 underline-offset-4">Technical Product Manager</span> at PayPal with a passion for taking B2B SaaS products from 0 to 1, bridging deep technical systems with thoughtful, intuitive user experiences.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 md:p-6 rounded-xl border-l-4 border-primary italic text-sm md:text-base">
            "Building products is not about shipping features; it's about solving real-world friction with elegant, scalable systems."
          </div>
        </div>
      </section>

      {/* 2.0 The Problem Space */}
      <section className="mb-16 md:mb-20 scroll-mt-24" id="experience">
        <div className="mb-6 md:mb-8">
          <span className="text-primary font-mono text-sm font-bold tracking-tighter">2.0</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-slate-900 dark:text-white tracking-tight">The Problem Space</h2>
          <p className="text-slate-500 mt-2 font-mono text-xs md:text-sm">Professional Experience & Challenges Overcome</p>
        </div>
        <div className="space-y-10 md:space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 border-l-2 border-slate-100 dark:border-slate-800">
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 ${exp.active ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                  <p className="text-primary text-sm md:text-base font-medium">{exp.company}</p>
                </div>
                <span className="text-[10px] md:text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded mt-2 md:mt-0">{exp.period}</span>
              </div>
              <div className="mt-4 space-y-3 text-sm md:text-base text-slate-600 dark:text-slate-400">
                {exp.achievements.map((ach, aidx) => (
                  <div key={aidx} className="flex items-start space-x-2">
                    <span className="material-icons text-sm mt-0.5 text-slate-400">arrow_forward</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3.0 Proposed Solutions */}
      <section className="mb-16 md:mb-20 scroll-mt-24" id="projects">
        <div className="mb-6 md:mb-8">
          <span className="text-primary font-mono text-sm font-bold tracking-tighter">3.0</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-slate-900 dark:text-white tracking-tight">Proposed Solutions</h2>
          <p className="text-slate-500 mt-2 font-mono text-xs md:text-sm">Case Studies & Key Shipments</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {projects.map((proj, idx) => (
            <a 
              key={idx} 
              href={proj.linkUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="h-40 md:h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={proj.title} src={proj.imageUrl}/>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 rounded-full text-[10px] font-bold text-primary shadow-lg scale-90 group-hover:scale-100 transition-transform">
                    EXPLORE PROJECT
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center space-x-2 mb-2">
                  {proj.tags.map((tag, tidx) => (
                    <span key={tidx} className={`text-[9px] md:text-[10px] font-mono px-2 py-0.5 rounded uppercase ${tidx === 0 ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-slate-900 dark:text-white">{proj.title}</h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-3 md:mb-4 line-clamp-2">{proj.description}</p>
                <div className="flex items-center text-primary text-xs md:text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View Full Details</span>
                  <span className="material-icons text-xs ml-1">arrow_forward</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4.0 Success Metrics */}
      <section className="mb-16 md:mb-20 scroll-mt-24" id="kpis">
        <div className="mb-6 md:mb-8">
          <span className="text-primary font-mono text-sm font-bold tracking-tighter">4.0</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-slate-900 dark:text-white tracking-tight">Success Metrics</h2>
          <p className="text-slate-500 mt-2 font-mono text-xs md:text-sm">Core Competencies & Tooling Mastery</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
          {skills.map((skill, idx) => (
            <SkillBar key={idx} skill={skill} />
          ))}
        </div>
        <div className="mt-8 md:mt-12 p-4 md:p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Tech Stack & Ecosystem</h4>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              { label: 'Jira', color: 'bg-blue-400' },
              { label: 'Figma', color: 'bg-purple-400' },
              { label: 'SQL', color: 'bg-yellow-400' },
              { label: 'Claude', color: 'bg-green-400' },
              { label: 'Miro', color: 'bg-red-400' },
              { label: 'Agile', color: 'bg-indigo-400' }
            ].map((tool, idx) => (
              <span key={idx} className="px-2 md:px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs flex items-center text-slate-700 dark:text-slate-300 shadow-sm">
                <span className={`w-1.5 md:w-2 h-1.5 md:h-2 ${tool.color} rounded-full mr-2`}></span> {tool.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5.0 Non-Functional Requirements */}
      <section className="mb-16 md:mb-20 scroll-mt-24" id="hobbies">
        <div className="mb-6 md:mb-8">
          <span className="text-primary font-mono text-sm font-bold tracking-tighter">5.0</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-slate-900 dark:text-white tracking-tight leading-tight">Non-Functional Requirements</h2>
          <p className="text-slate-500 mt-2 font-mono text-xs md:text-sm">Personal Interests & Life Balance Systems</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/50">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                <span className="material-icons text-xl">{hobby.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-sm md:text-base text-slate-900 dark:text-white">{hobby.label}</h4>
                <p className="text-[9px] md:text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-tight">Requirement: {hobby.requirement}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <ul className="space-y-2">
            <li className="flex items-start text-xs md:text-sm text-slate-600 dark:text-slate-400">
              <span className="font-mono text-primary mr-2">5.1</span>
              <span>Maintain physical activity for peak cognitive performance.</span>
            </li>
            <li className="flex items-start text-xs md:text-sm text-slate-600 dark:text-slate-400">
              <span className="font-mono text-primary mr-2">5.2</span>
              <span>Engage in creative pursuits for complex problem-solving.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6.0 Appendix */}
      <section className="mb-10 scroll-mt-24" id="appendix">
        <div className="mb-6 md:mb-8">
          <span className="text-primary font-mono text-sm font-bold tracking-tighter">6.0</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-slate-900 dark:text-white tracking-tight">Appendix</h2>
          <p className="text-slate-500 mt-2 font-mono text-xs md:text-sm">Related Links & External Resources</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <a className="flex items-center p-3 md:p-4 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-primary hover:text-white transition-all group shadow-sm" href="https://www.linkedin.com/in/shirinjain/">
            <span className="material-icons mr-2 md:mr-3 text-lg md:text-xl">link</span>
            <span className="font-medium text-sm md:text-base">LinkedIn Profile</span>
          </a>
          <a className="flex items-center p-3 md:p-4 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-primary hover:text-white transition-all group shadow-sm" href="https://github.com/ShirinJain09">
            <span className="material-icons mr-2 md:mr-3 text-lg md:text-xl">code</span>
            <span className="font-medium text-sm md:text-base">GitHub Repo</span>
          </a>
          <a className="flex items-center p-3 md:p-4 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-primary hover:text-white transition-all group shadow-sm" href="https://www.paypal.com/us/braintree">
            <span className="material-icons mr-2 md:mr-3 text-lg md:text-xl">article</span>
            <span className="font-medium text-sm md:text-base">PayPal Braintree</span>
          </a>
        </div>
      </section>

      <footer className="mt-16 md:mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          Document End — © 2026 Shirin Jain
        </p>
      </footer>
    </div>
  );
};

export default PortfolioContent;

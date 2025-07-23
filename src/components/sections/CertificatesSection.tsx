"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: Date;
  category:"course" | "open-source" | "Technical" | "hackathon";
  link?: string;
  credentialId?: string;
  skills?: string[];
}

const certificates: Certificate[] = [
  // Original certificates (1-27)
  {
    id: 1,
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "Certisured",
    date: new Date("2025-03-01"),
    category: "course",
    link: "https://www.linkedin.com/in/ayushrai13/details/certifications/1742652283157/single-media-viewer/?profileId=ACoAAD7dtk4BPnXKJMR3fvRkYfusqvT7SrbCDD4",
  },
  {
    id: 2,
    title: "Intuition Building for Machine Learning & Deep Learning",
    organization: "Analogica Software Dev Pvt Ltd",
    date: new Date("2025-03-01"),
    category: "course",
    link: "https://www.linkedin.com/in/ayushrai13/details/certifications/1742652402010/single-media-viewer/?profileId=ACoAAD7dtk4BPnXKJMR3fvRkYfusqvT7SrbCDD4",
  },
  {
    id: 3,
    title: "Artificial Intelligence Foundations: Neural Networks",
    organization: "LinkeDin Learning",
    date: new Date("2025-02-01"),
    category: "Technical",
    link: "https://www.linkedin.com/in/ayushrai13/details/certifications/1738738617693/single-media-viewer/?profileId=ACoAAD7dtk4BPnXKJMR3fvRkYfusqvT7SrbCDD4",
  },
  {
    id: 4,
    title: "Microsoft Excel 365",
    organization: "Microsoft",
    date: new Date("2024-01-01"),
    category: "Technical",
    link: "https://www.linkedin.com/in/ayushrai13/details/certifications/1738738769707/single-media-viewer/?profileId=ACoAAD7dtk4BPnXKJMR3fvRkYfusqvT7SrbCDD4",
    credentialId: "GSSoC2024_OST100C_403EF768",
    skills: ["Data Analysis", "Deep Learning", "Machine Learning", "Neural Networks", "Financial Analysis"],
  },
  {
    id: 5,
    title: "Ai and ChatGPT Tools Workshop",
    organization: "Be10x",
    date: new Date("2024-02-02"),
    link: " https://www.linkedin.com/in/ayushrai13/details/certifications/1735632294799/single-media-viewer/?profileId=ACoAAD7dtk4BPnXKJMR3fvRkYfusqvT7SrbCDD4",
    category: "Technical",
    skills: ["Tableau", "Data Analysis"],
  },
  {
    id: 6,
    title: "Power BI Essential Training",
    organization: "LinkDin",
    date: new Date("2024-03-01"),
    link: "https://www.linkedin.com/learning/certificates/b6f6d911b82b234c8de58a48216547c19dc412b0cf8b58771bd897f317aeee80",
    category: "Technical",
    skills: ["Tableau", "PowerBI "],
  },
  {
    id: 7,
    title: "Google AI Essential",
    organization: "Google",
    date: new Date("2024-01-01"),
    category: "Technical",
    skills: ["AI, Machine Learning"],
  },

  // New hackathon achievements
  {
    id: 8,
    title: "#",
    organization: "#",
    date: new Date("2025-01-01"),
    category: "hackathon",
    
    credentialId: "###",
  },

];

export function CertificatesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Function to render certificate card
  const renderCertificateCard = (certificate: Certificate) => (
    <motion.div
      key={certificate.id}
      variants={itemVariants}
      className="bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-sm border border-slate-800/60 hover:border-indigo-600/20 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/10"
    >
      <div className="flex flex-col h-full">
        <div className="mb-2 flex justify-between items-start">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-indigo-600/10 text-indigo-400 border border-indigo-500/20">
            {certificate.category.charAt(0).toUpperCase() + certificate.category.slice(1)}
          </div>
          <div className="text-sm text-gray-400">{formatDate(certificate.date)}</div>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          {certificate.title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{certificate.organization}</p>
        {certificate.credentialId && (
          <p className="text-xs text-gray-400 mb-2">
            <span className="font-semibold">Credential ID:</span> {certificate.credentialId}
          </p>
        )}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-indigo-500/10">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
      {certificate.link && (
        <div className="mt-4">
          <Button asChild variant="outline" size="sm" className="bg-transparent text-indigo-400 border-indigo-500/30 hover:bg-indigo-950/30 hover:text-indigo-300">
            <Link href={certificate.link} target="_blank">
              View <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </div>
      )}
    </motion.div>
  );

  // Function to render hackathon certificates in a linear format
  const renderHackathonCertificates = (hackathonCertificates: Certificate[]) => (
    <div className="bg-slate-900/60 border border-slate-800/60 rounded-lg p-4 md:p-8">
      <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 border-b border-slate-800 pb-4">
        Hackathon Participation & Achievements
      </h3>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600/30 via-purple-600/30 to-indigo-600/30 ml-3"></div>
        <div className="space-y-8">
          {hackathonCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              className="flex items-start ml-2"
            >
              {/* Timeline dot */}
              <div className="relative">
                <div className="h-6 w-6 rounded-full border-2 border-indigo-500 bg-slate-950 flex items-center justify-center -ml-3 z-10">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                </div>
              </div>
              <div className="ml-6 flex-grow bg-slate-900/50 p-4 rounded-lg border border-slate-800/60 hover:border-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/10 transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{certificate.title}</h4>
                  <span className="text-sm text-slate-400 whitespace-nowrap">{formatDate(certificate.date)}</span>
                </div>
                <p className="text-sm text-slate-300 mb-2">{certificate.organization}</p>
                {certificate.credentialId && (
                  <p className="text-xs text-slate-500 mb-2">
                    <span className="font-semibold">Credential ID:</span> {certificate.credentialId}
                  </p>
                )}
                {certificate.skills && certificate.skills.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {certificate.skills.map((skill, index) => (
                      <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-indigo-500/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {certificate.link && (
                  <div className="mt-3">
                    <Button asChild variant="outline" size="sm" className="bg-transparent h-8 text-indigo-400 border-indigo-500/30 hover:bg-indigo-950/30 hover:text-indigo-300">
                      <Link href={certificate.link} target="_blank">
                        View Certificate <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="certificates" className="py-12 md:py-20 relative overflow-x-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/10 to-slate-950 opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-900/5 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16 relative">
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative z-10"
          >
            Certificates & Achievements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base relative z-10"
          >
            Showcasing my technical certifications, courses , and hackathon achievements.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          {/* Change the TabsList style to match the theme */}
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-7 mb-8 bg-slate-900/60 border border-slate-800/60 rounded-lg p-1 backdrop-blur-sm">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="hackathon"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Hackathons
            </TabsTrigger>
            <TabsTrigger
              value="Technical"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Technical
            </TabsTrigger>
            
            <TabsTrigger
              value="course"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="open-source"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Open Source
            </TabsTrigger>
            
          </TabsList>

          {/* All Certificates */}
          <TabsContent value="all">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map(renderCertificateCard)}
            </motion.div>
          </TabsContent>

          {/* Hackathon Certificates in Timeline Format */}
          <TabsContent value="hackathon">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {renderHackathonCertificates(certificates.filter(cert => cert.category === "hackathon"))}
            </motion.div>
          </TabsContent>

          {/* Filtered Certificates for other categories */}
          {["Technical", "course", "open-source"].map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certificates
                  .filter((cert) => cert.category === category)
                  .map(renderCertificateCard)}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

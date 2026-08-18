"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { Award, X } from "lucide-react";

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const certificates = [
    {
      title: "IEICS ESW Certificate of Recognition",
      image: "/images/ieics-esw-cert.jpg",
      description: "Certification for Ethiopian Electronic Single Window development and integration."
    },
    {
      title: "ILS Certificate of Appreciation",
      image: "/images/ils.jpg",
      description: "Professional certification highlighting technical and functional expertise."
    },
    {
      title: "Arifget Elearning Certification",
      image: "/images/arifget.jpg",
      description: "Certificate of recognition for the Arifget Elearning project."
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional certifications and credentials verifying my expertise in software development and system integration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-2xl group hover:border-accent/50 transition-colors"
            >
              <div 
                className="relative h-64 w-full bg-[#111111] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                {/* Fallback pattern in case image fails or loads slowly */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <Award size={64} className="text-white" />
                </div>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-accent shrink-0" size={20} />
                  <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
                </div>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black rounded-full p-2 transition-colors z-[110]"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[80vh] bg-[#111111] rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Certificate full view"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, CheckCircle, ShieldAlert } from 'lucide-react';

const packages = [
  {
    name: "Standard Detail",
    price: "R250",
    desc: "The essential professional maintenance clean.",
    items: [
      "Pre-wash, foam & handwash",
      "Vacuum",
      "Wheels decontamination and tire scrubbing",
      "Fender liner cleaning",
      "Cleaning of doorjambs",
      "Window cleaning",
      "Floormats wash and dry",
      "Interior panel scrub",
      "Airvents cleaned & tireshine"
    ]
  },
  {
    name: "Premium Detail",
    price: "R500",
    desc: "Complete protection & surface decontamination.",
    items: [
      "Paint decontamination",
      "Prewash, mechanical decontamination & handwash",
      "Vacuum & interior panel scrub",
      "Wheels decontamination, tire scrubbing & tireshine",
      "Fender liner cleaning & doorjambs cleaned",
      "Window cleaning, floormats wash and dry",
      "Airvents cleaned",
      "Paint sealant applied for deep gloss & protection"
    ]
  },
  {
    name: "Full Detail",
    price: "R1500",
    desc: "The comprehensive top-to-bottom restoration.",
    items: [
      "Engine detail",
      "Paint decontamination, prewash, mechanical decontamination & handwash",
      "Vacuum & interior panel scrub",
      "Wheels decontamination, tire scrubbing & tireshine",
      "Fender liner cleaning & doorjambs cleaned",
      "Window cleaning, floormats wash and dry",
      "Airvents cleaned",
      "Paint sealant applied",
      "Undercarriage cleaning"
    ]
  },
  {
    name: "Enhancement Detail",
    price: "R1500",
    desc: "Single-stage polish to restore deep paint clarity.",
    items: [
      "Paint decontamination, prewash, mechanical decontamination & handwash",
      "Vacuum & interior panel scrub",
      "Wheels decontamination, tire scrubbing & tireshine",
      "Fender liner cleaning & doorjambs cleaned",
      "Window cleaning, floormats wash and dry",
      "Airvents cleaned",
      "Paint sealant applied",
      "One-step machine polish to remove swirl marks and light scratches"
    ]
  },
  {
    name: "Stage 1 Detail",
    price: "R2500",
    desc: "Multi-stage correction for a mirror-like show finish.",
    items: [
      "Paint decontamination, prewash, mechanical decontamination & handwash",
      "Vacuum & interior panel scrub",
      "Wheels decontamination, tire scrubbing & tireshine",
      "Fender liner cleaning & doorjambs cleaned",
      "Window cleaning, floormats wash and dry",
      "Airvents cleaned",
      "Engine detail",
      "Water spot removal",
      "Tar removal",
      "2-3 step paint correction paired with a high-grade coating or sealant"
    ]
  },
  {
    name: "Stage 2 Detail",
    price: "R4500",
    desc: "The ultimate legendary transformation.",
    items: [
      "Paint decontamination, prewash, mechanical decontamination & handwash",
      "Vacuum",
      "Wheels decontamination, tire scrubbing & tireshine",
      "Fender liner cleaning & doorjambs cleaned",
      "Window cleaning, floormats wash and dry",
      "Interior panel scrub & airvents cleaned",
      "Engine detail",
      "Water spot removal & tar removal",
      "Undercarriage wash",
      "Complete deep interior detailing",
      "2-3 step paint correction paired with a premium coating or sealant"
    ]
  }
];

const standaloneServices = [
  { name: "Undercarriage", price: "R300", desc: "Degrease, wash, scrub and neutralise surfaces" },
  { name: "Engine Detail", price: "R200", desc: "Degrease, scrub, wash, neutralise & dry" }
];

const extras = [
  { name: "Waxes", price: "R150" },
  { name: "Sealants", price: "R250" },
  { name: "Machine Glaze", price: "R650" },
  { name: "Fabric Protectant", price: "R400" },
  { name: "Ceramic Coatings", price: "R1500" },
  { name: "Headlights Restoration", price: "R550" },
  { name: "Plastic Coatings", price: "R850" }
];

export default function Services() {
  const [openPackage, setOpenPackage] = useState(null);

  const togglePackage = (index) => {
    setOpenPackage(openPackage === index ? null : index);
  };

  return (
    <section id="services" className="py-24 px-6 bg-neutral-900/40 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Elite <span className="text-red-600">Detailing Packages</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            Click any package card below to view the full checklist of what is included.
          </p>
        </div>

        {/* Detailing Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => {
            const isOpen = openPackage === index;
            return (
              <div 
                key={index} 
                onClick={() => togglePackage(index)}
                className={`bg-neutral-950 border ${isOpen ? 'border-red-600' : 'border-neutral-900'} p-6 rounded-2xl cursor-pointer hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-red-500 font-extrabold text-xs uppercase tracking-widest">Detailing Package</span>
                    {isOpen ? <ChevronUp className="text-red-500" size={20} /> : <ChevronDown className="text-neutral-500" size={20} />}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">{pkg.name}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{pkg.desc}</p>
                  
                  {isOpen && (
                    <ul className="mt-4 space-y-2 border-t border-neutral-900 pt-4 animate-fade-in">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-xs text-neutral-300 items-start">
                          <CheckCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="border-t border-neutral-900 mt-6 pt-4 flex justify-between items-baseline">
                  <span className="text-neutral-500 text-xs uppercase tracking-wider">Starting at</span>
                  <span className="text-3xl font-black text-red-500">{pkg.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Standalone & Extras Section */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-neutral-900 pt-16">
          {/* Standalone Services */}
          <div>
            <h3 className="text-2xl font-black text-white uppercase mb-8 tracking-wide">
              Standalone <span className="text-red-600">Services</span>
            </h3>
            <div className="space-y-4">
              {standaloneServices.map((service, index) => (
                <div key={index} className="bg-neutral-950/80 border border-neutral-900 p-6 rounded-xl flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-bold text-white">{service.name}</h4>
                    <p className="text-neutral-400 text-xs mt-1">{service.desc}</p>
                  </div>
                  <span className="text-xl font-extrabold text-red-500 shrink-0 ml-4">from {service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Add-ons / Extras */}
          <div>
            <h3 className="text-2xl font-black text-white uppercase mb-8 tracking-wide">
              Optional <span className="text-red-600">Extras & Waxes</span>
            </h3>
            <div className="bg-neutral-950/80 border border-neutral-900 rounded-xl divide-y divide-neutral-900">
              {extras.map((extra, index) => (
                <div key={index} className="flex justify-between items-center p-4 hover:bg-neutral-900/10 transition-colors">
                  <span className="text-sm font-semibold text-neutral-300">{extra.name}</span>
                  <span className="text-sm font-bold text-red-500">from {extra.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
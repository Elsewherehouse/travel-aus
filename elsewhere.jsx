import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SydneyWelcomeTourLuxury() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  const days = [
    {
      title: "Arrival & Rooftop Welcome",
      copy: "Ease into Sydney with curated introductions, lifestyle setup guidance and an intimate rooftop dinner overlooking the city skyline."
    },
    {
      title: "Bondi Rituals",
      copy: "Slow mornings with cinnamon scrolls and matcha by the ocean, a coastal walk through Sydney’s most iconic shoreline and optional surf immersion."
    },
    {
      title: "Blue Mountains Escape",
      copy: "A private full-day nature reset with dramatic lookouts, guided bush walks and a complete break from city pace."
    },
    {
      title: "Harbour Society",
      copy: "Explore Sydney’s heritage quarter before stepping aboard an elevated harbour cruise as sunset falls over the skyline."
    },
    {
      title: "Farewell & Forward",
      copy: "A beautifully hosted final dinner paired with personalised onward travel planning and connection-building for what comes next."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f4ee] text-[#1a1a1a] font-serif">
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 border-b z-50 px-10 py-5 flex justify-between items-center">
        <div className="text-2xl tracking-[0.25em] uppercase font-light">Harbour Social Club</div>
        <button className="px-6 py-3 rounded-full bg-black text-white tracking-wide">Reserve</button>
      </nav>

      <section className="h-screen bg-[url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9')] bg-cover bg-center flex items-center justify-center text-white relative">
        <div className="absolute inset-0 bg-black/35" />
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="relative text-center max-w-4xl px-8">
          <p className="uppercase tracking-[0.4em] text-sm mb-6">Sydney Arrival Experience</p>
          <h1 className="text-7xl font-light leading-tight">A refined first week in Australia</h1>
          <p className="mt-8 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Designed for international travellers seeking connection, style and an elevated Sydney introduction.
          </p>
          <button className="mt-10 px-10 py-4 bg-white text-black rounded-full text-lg tracking-wide">
            Discover The Journey
          </button>
        </motion.div>
      </section>

      <section className="py-32 px-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div><h3 className="text-2xl mb-4">Curated Community</h3><p className="text-gray-700 leading-relaxed">Small group departures intentionally designed for genuine connection.</p></div>
        <div><h3 className="text-2xl mb-4">Sydney, Elevated</h3><p className="text-gray-700 leading-relaxed">Thoughtfully selected experiences balancing iconic moments with local sophistication.</p></div>
        <div><h3 className="text-2xl mb-4">A Soft Landing</h3><p className="text-gray-700 leading-relaxed">Everything required to settle into Australia with confidence and ease.</p></div>
      </section>

      <section className="py-20 bg-[#f3eee7] px-10">
<div className="max-w-6xl mx-auto text-center mb-20">
<h2 className="text-5xl font-light mb-6">The Elsewhere Calendar</h2>
<p className="text-xl text-gray-700">Monthly gatherings designed for Sydney’s working holiday community.</p>
<div className="grid md:grid-cols-3 gap-8 mt-14">
<div className="bg-white rounded-2xl p-8 shadow-sm"><h3 className="text-2xl mb-3">Sunset Sessions</h3><p>Rooftop social evenings with curated drinks and connection.</p></div>
<div className="bg-white rounded-2xl p-8 shadow-sm"><h3 className="text-2xl mb-3">Coastal Club</h3><p>Bondi mornings, coffee rituals and guided ocean walks.</p></div>
<div className="bg-white rounded-2xl p-8 shadow-sm"><h3 className="text-2xl mb-3">Explorer Days</h3><p>Monthly escapes beyond Sydney for the wider community.</p></div>
</div>
</div>
</section>

<section className="py-32 bg-white px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-light mb-16 text-center">The Experience</h2>
          {days.map((day, i) => (
            <div key={i} className="border-b py-8">
              <button onClick={() => setOpenDay(openDay === i ? null : i)} className="w-full text-left flex justify-between items-center text-2xl">
                <span>Day {i + 1} — {day.title}</span>
                <span>{openDay === i ? "−" : "+"}</span>
              </button>
              {openDay === i && (
                <motion.p initial={{opacity:0}} animate={{opacity:1}} className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
                  {day.copy}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#1a1a1a] text-white text-center px-10">
        <h2 className="text-5xl font-light">Arrive • Gather • Continue</h2>
        <p className="mt-6 text-xl font-light">A premium arrival residency plus monthly community experiences for Sydney’s international travel community.</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
<button className="px-10 py-4 rounded-full bg-white text-black text-lg">Apply for Residency</button>
<button className="px-10 py-4 rounded-full border border-white text-white text-lg">View Monthly Events</button>
</div>
      </section>
    </div>
  );
}

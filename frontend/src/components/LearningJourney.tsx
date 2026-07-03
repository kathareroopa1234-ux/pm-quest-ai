function LearningJourney() {
    const journey = [
      {
        level: "Level 1",
        title: "PM Foundations",
        description: "Learn the basics of Product Management and product thinking.",
      },
      {
        level: "Level 2",
        title: "Product Execution",
        description: "Write PRDs, prioritize features, and define metrics.",
      },
      {
        level: "Level 3",
        title: "AI Product Management",
        description: "Build AI products, understand LLMs, prompts, and evaluation.",
      },
      {
        level: "Final Boss",
        title: "Interview Simulation",
        description: "Complete mock interviews and portfolio challenges to become interview-ready.",
      },
    ];
  
    return (
      <section className="bg-slate-950 py-20 px-6 text-white">
        <h2 className="text-4xl font-bold text-center">
          Your Learning Journey
        </h2>
  
        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Progress through structured levels designed to transform you into a confident Product Manager.
        </p>
  
        <div className="mt-16 space-y-8 max-w-4xl mx-auto">
          {journey.map((step) => (
            <div
              key={step.level}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6"
            >
              <p className="text-indigo-400 font-semibold">{step.level}</p>
              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default LearningJourney;
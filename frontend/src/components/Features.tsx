function Features() {
    const features = [
      {
        title: "AI Coach",
        description:
          "Get personalized feedback, learning recommendations, and interview guidance powered by AI.",
        emoji: "🤖",
      },
      {
        title: "Interview Simulator",
        description:
          "Practice real Product Management and AI PM interviews with instant feedback.",
        emoji: "🎯",
      },
      {
        title: "Portfolio Builder",
        description:
          "Create PRDs, roadmaps, GTM plans, and case studies that strengthen your portfolio.",
        emoji: "📁",
      },
    ];
  
    return (
      <section className="bg-slate-900 py-20 px-6 text-white">
        <h2 className="text-4xl font-bold text-center">
          Why Choose PM Quest AI?
        </h2>
  
        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Everything you need to become an interview-ready Product Manager in one platform.
        </p>
  
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-lg transition hover:scale-105"
            >
              <div className="text-5xl">{feature.emoji}</div>
  
              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>
  
              <p className="mt-4 text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Features;
function Hero() {
    return (
      <section className="min-h-[90vh] bg-slate-950 text-white flex flex-col items-center justify-center px-6">
  
        <span className="rounded-full bg-indigo-600/20 px-4 py-2 text-indigo-300 text-sm font-semibold">
          🚀 AI-Powered Product Management Platform
        </span>
  
        <h1 className="mt-8 max-w-5xl text-center text-6xl font-extrabold leading-tight">
          Become an
          <span className="text-indigo-400"> Interview-Ready </span>
          Product Manager
        </h1>
  
        <p className="mt-8 max-w-3xl text-center text-xl text-slate-300">
          Learn Product Management through AI coaching,
          real-world simulations, portfolio projects,
          interview preparation, and gamified learning.
        </p>
  
        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold hover:bg-indigo-500 transition">
            Start Learning
          </button>
  
          <button className="rounded-xl border border-slate-600 px-8 py-4 hover:bg-slate-800 transition">
            Watch Demo
          </button>
        </div>
  
      </section>
    );
  }
  
  export default Hero;
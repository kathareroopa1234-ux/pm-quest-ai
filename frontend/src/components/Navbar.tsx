function Navbar() {
    return (
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800 bg-slate-950">
        <h1 className="text-2xl font-bold text-indigo-400">
          🚀 PM Quest AI
        </h1>
  
        <div className="flex gap-8 text-slate-300">
          <a href="#">Features</a>
          <a href="#">Roadmap</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>
  
        <button className="rounded-lg bg-indigo-600 px-5 py-2 hover:bg-indigo-500 transition">
          Login
        </button>
      </nav>
    );
  }
  
  export default Navbar;
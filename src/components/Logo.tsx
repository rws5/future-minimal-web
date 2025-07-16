export default function Logo() {
  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="flex items-center space-x-3">
        {/* Planetary Globe Logo */}
        <div className="relative w-14 h-14">
          {/* Main Planet Sphere */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/40 to-primary/60 rounded-full border-2 border-primary/30 shadow-glow">
            {/* Planet Surface Details */}
            <div className="absolute top-2 left-2 w-3 h-2 bg-primary/60 rounded-full opacity-70"></div>
            <div className="absolute top-4 right-3 w-2 h-1.5 bg-primary/40 rounded-full opacity-50"></div>
            <div className="absolute bottom-3 left-4 w-2.5 h-1 bg-primary/50 rounded-full opacity-60"></div>
            
            {/* Atmospheric Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-primary/10 to-primary/20"></div>
          </div>
          
          {/* Orbital Ring */}
          <div className="absolute inset-0 border-2 border-muted-foreground/20 rounded-full transform rotate-12 scale-125"></div>
          
          {/* Secondary Orbital Ring */}
          <div className="absolute inset-0 border border-muted-foreground/10 rounded-full transform -rotate-45 scale-110"></div>
          
          {/* Satellite/Moon Elements */}
          <div className="absolute top-0 right-1 w-2 h-2 bg-muted-foreground/60 rounded-full shadow-sm"></div>
          <div className="absolute bottom-1 left-0 w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"></div>
          
          {/* Energy Pulse Effect */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse scale-110"></div>
        </div>
        
        {/* Logo Text */}
        <div className="flex flex-col">
          <span className="text-xl font-orbitron font-bold text-foreground">planet</span>
          <span className="text-xs font-exo font-light text-muted-foreground tracking-[0.2em] uppercase">
            s o l u t i o n s
          </span>
        </div>
      </div>
    </div>
  );
}
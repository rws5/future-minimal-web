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
          
          {/* Digital Network Grid */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse scale-110"></div>
          
          {/* Interconnection Lines */}
          <div className="absolute inset-0">
            {/* Horizontal connection lines */}
            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            
            {/* Vertical connection lines */}
            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
            
            {/* Diagonal tech lines */}
            <div className="absolute top-2 left-2 w-6 h-px bg-primary/30 transform rotate-45 origin-left"></div>
            <div className="absolute bottom-2 right-2 w-6 h-px bg-primary/30 transform rotate-45 origin-right"></div>
          </div>
          
          {/* Network Nodes */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Digital Circuit Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-3 left-3 w-2 h-px bg-primary/60"></div>
            <div className="absolute top-3 left-3 w-px h-2 bg-primary/60"></div>
            <div className="absolute bottom-3 right-3 w-2 h-px bg-primary/60"></div>
            <div className="absolute bottom-3 right-3 w-px h-2 bg-primary/60"></div>
          </div>
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
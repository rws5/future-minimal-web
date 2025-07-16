export default function Logo() {
  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="flex items-center space-x-3">
        {/* Logo Symbol - Recreating the circular elements from the image */}
        <div className="relative w-12 h-12">
          {/* Outer ring */}
          <div className="absolute inset-0 border-2 border-muted-foreground/30 rounded-full"></div>
          
          {/* Inner crescents - representing the planet-like design */}
          <div className="absolute top-1 left-1 w-4 h-4 border-2 border-muted-foreground/50 rounded-full border-r-transparent border-b-transparent rotate-45"></div>
          <div className="absolute top-2 left-2 w-6 h-6 border-2 border-muted-foreground/70 rounded-full border-r-transparent border-b-transparent rotate-12"></div>
          
          {/* Blue accent element */}
          <div className="absolute top-1 right-1 w-2 h-6 bg-primary rounded-full transform rotate-12"></div>
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
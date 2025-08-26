import planetLogo from '@/assets/planet-logo.png';

export default function Logo() {
  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="flex items-center space-x-3">
        {/* Logo Image */}
        <div className="relative w-14 h-14">
          <img 
            src={planetLogo} 
            alt="Planet Solutions Logo" 
            className="w-full h-full object-contain"
          />
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
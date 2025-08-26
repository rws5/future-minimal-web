export default function Logo() {
  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="flex items-center space-x-3">
        {/* Logo Image */}
        <div className="relative w-14 h-14">
          <img 
            src="/lovable-uploads/02d3f2d3-7a39-4aa5-ad18-2b824126c716.png" 
            alt="Planet Solutions Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
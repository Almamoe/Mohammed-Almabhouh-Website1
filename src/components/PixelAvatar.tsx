export function PixelAvatar() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-6">
      <div className="pixel-card w-full h-full bg-gradient-to-br from-primary to-primary-glow p-1">
        <div className="w-full h-full bg-card relative overflow-hidden">
          {/* Simple pixel art character */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px p-2">
            {/* Hair */}
            <div className="col-span-6 col-start-2 row-span-2 bg-foreground"></div>
            {/* Face */}
            <div className="col-span-4 col-start-3 row-span-3 row-start-3 bg-muted"></div>
            {/* Eyes */}
            <div className="col-start-3 row-start-4 bg-foreground w-1 h-1 rounded-full"></div>
            <div className="col-start-6 row-start-4 bg-foreground w-1 h-1 rounded-full"></div>
            {/* Mouth */}
            <div className="col-span-2 col-start-4 row-start-5 bg-foreground h-px"></div>
            {/* Body */}
            <div className="col-span-4 col-start-3 row-span-2 row-start-6 bg-primary"></div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
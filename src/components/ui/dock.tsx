import * as React from "react"
import { cn } from "@/lib/utils"

interface DockContextValue {
  direction?: "top" | "middle" | "bottom"
}

const DockContext = React.createContext<DockContextValue>({})

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "top" | "middle" | "bottom"
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, children, direction = "middle", ...props }, ref) => {
    return (
      <DockContext.Provider value={{ direction }}>
        <div
          ref={ref}
          className={cn(
            "mx-auto w-max h-max p-2 flex gap-2 rounded-2xl border bg-background/80 backdrop-blur-sm",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </DockContext.Provider>
    )
  }
)
Dock.displayName = "Dock"

interface DockItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const DockItem = React.forwardRef<HTMLDivElement, DockItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex aspect-square cursor-default items-center justify-center rounded-xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DockItem.displayName = "DockItem"

interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {}

const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("h-6 w-6", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DockIcon.displayName = "DockIcon"

interface DockLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

const DockLabel = React.forwardRef<HTMLDivElement, DockLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-background px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DockLabel.displayName = "DockLabel"

export { Dock, DockItem, DockIcon, DockLabel }
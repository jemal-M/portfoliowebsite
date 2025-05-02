import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedPhotoProps {
  src: string
  alt: string
  className?: string
}

export function AnimatedPhoto({ src, alt, className }: AnimatedPhotoProps) {
  return (
    <div className={cn(
      "relative group",
      className
    )}>
      <div className={cn(
        "relative w-full h-full rounded-full overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/20 before:to-primary/0",
        "after:absolute after:inset-0 after:bg-gradient-to-b after:from-primary/20 after:to-primary/0",
        "hover:scale-105 transition-all duration-500",
        "shadow-lg shadow-primary/20",
        "border-2 border-primary/20",
        "group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:border-primary/30"
      )}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>
      <div className="absolute -inset-4 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  )
} 
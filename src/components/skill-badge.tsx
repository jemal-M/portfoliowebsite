import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  className?: string
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border p-4 text-center",
        "hover:border-primary hover:bg-muted transition-colors",
        className,
      )}
    >
      <span className="font-medium">{name}</span>
    </div>
  )
}

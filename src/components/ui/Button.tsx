import React from "react";
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
) & {
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm md:text-base font-medium transition-transform",
    "hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
  );

  const styles =
    variant === "primary"
      ? "bg-cyan-500 text-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-cyan-400"
      : "bg-transparent text-white border border-white/30 hover:border-white/60 bg-white/5";

  if ("href" in props && props.href) {
    const { href, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={cn(base, styles, className)} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={cn(base, styles, className)} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * A2R2 Labs orbit mark. The four orbiting dots animate along elliptical
 * offset-paths defined in globals.css (`.logo-orbit-*`); the site's global
 * prefers-reduced-motion rule freezes them for motion-sensitive users.
 * Transparent background — sits directly on the dark chrome.
 */
export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="A2R2 Labs"
      className={className}
    >
      <g fill="none" stroke="#EFEAE0" strokeWidth="1.3" strokeLinecap="round">
        <ellipse cx="50" cy="50" rx="44" ry="17" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="44" ry="17" transform="rotate(-30 50 50)" />
      </g>
      <circle cx="50" cy="50" r="5.2" fill="#C9A876" />
      <circle className="logo-orbit-a1" r="2.4" fill="#EFEAE0" />
      <circle className="logo-orbit-a2" r="2.4" fill="#EFEAE0" />
      <circle className="logo-orbit-b1" r="2.4" fill="#EFEAE0" />
      <circle className="logo-orbit-b2" r="3" fill="#C9A876" />
    </svg>
  );
}

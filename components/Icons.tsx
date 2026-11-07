type P = { size?: number; className?: string };
const s = (size = 18) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const });

export const Heart = ({ size, className, filled }: P & { filled?: boolean }) => (
  <svg {...s(size)} className={className} fill={filled ? "currentColor" : "none"}>
    <path d="M12 20s-7-4.4-9.2-8.6C1.3 8.4 3 5 6.3 5c2 0 3.2 1.1 3.9 2.2.3.5.5.8 1.8.8s1.5-.3 1.8-.8C14.5 6.1 15.7 5 17.7 5 21 5 22.7 8.4 21.2 11.4 19 15.6 12 20 12 20z" />
  </svg>
);
export const Bag = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);
export const Cart = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M3 4h2l2.2 10.5a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" />
    <circle cx="9.5" cy="19.5" r="1.2" />
    <circle cx="17" cy="19.5" r="1.2" />
  </svg>
);
export const ArrowUR = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);
export const ArrowR = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowL = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);
export const ChevL = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);
export const ChevR = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);
export const Plus = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Close = ({ size, className }: P) => (
  <svg {...s(size)} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Play = ({ size, className }: P) => (
  <svg width={size ?? 18} height={size ?? 18} viewBox="0 0 24 24" className={className}>
    <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
  </svg>
);
export const Pause = ({ size, className }: P) => (
  <svg width={size ?? 18} height={size ?? 18} viewBox="0 0 24 24" className={className}>
    <rect x="7" y="5" width="3.5" height="14" rx="1" fill="currentColor" />
    <rect x="13.5" y="5" width="3.5" height="14" rx="1" fill="currentColor" />
  </svg>
);
export const Sound = ({ size, className, off }: P & { off?: boolean }) => (
  <svg {...s(size)} className={className}>
    <path d="M4 9h4l5-4v14l-5-4H4z" />
    {off ? <path d="M17 9l5 6M22 9l-5 6" /> : <path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12" />}
  </svg>
);
export const Lotus = ({ size = 28, className }: P) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <path d="M20 3c3 4 3 10 0 16-3-6-3-12 0-16z" />
    <path d="M20 19c-2-5-6-9-12-10 0 6 5 10 12 10zM20 19c2-5 6-9 12-10 0 6-5 10-12 10z" />
    <path d="M20 19c-5-1-10-2-16 0 5 3 11 3 16 0zM20 19c5-1 10-2 16 0-5 3-11 3-16 0z" />
  </svg>
);

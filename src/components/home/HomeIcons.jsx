export function Icon({ name, size = 22, strokeWidth = 1.9, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const paths = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    progress: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20V7" /><path d="M2 20h22" /></>,
    library: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
    trophy: <><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1a4 4 0 0 0 4 4" /><path d="M17 6h3v1a4 4 0 0 1-4 4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    chevronDown: <path d="m7 10 5 5 5-5" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    star: <path d="m12 2.5 3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.7 6.7-1 3-6.1Z" />,
    flame: <path d="M12 22c4 0 7-2.8 7-7 0-3.5-2-6.1-5.2-9.6-.3 2.2-1.3 3.7-2.6 4.9.1-3.2-1.6-5.6-3.5-7.3C7.5 7.1 5 9.6 5 14.5 5 18.8 8 22 12 22Z" />,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    leaf: <><path d="M20 4c-7 0-12 3-12 9 0 3 2 5 5 5 6 0 7-8 7-14Z" /><path d="M4 20c3-6 7-9 13-12" /></>,
    book: <><path d="M3 5.5A3.5 3.5 0 0 1 6.5 2H11v18H6.5A3.5 3.5 0 0 0 3 23.5v-18Z" /><path d="M21 5.5A3.5 3.5 0 0 0 17.5 2H13v18h4.5a3.5 3.5 0 0 1 3.5 3.5v-18Z" /></>,
    headphones: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14h3v7H5a1 1 0 0 1-1-1v-6ZM20 14h-3v7h2a1 1 0 0 0 1-1v-6Z" /></>,
    pencil: <><path d="m4 20 4.2-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" /><path d="m13.5 7.5 3 3" /></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" /><path d="M8 9h8M8 13h5" /></>,
    logout: <><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M15 3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    lightbulb: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M8.7 15.5A6 6 0 1 1 15.3 15.5c-.8.6-1.3 1.5-1.3 2.5h-4c0-1-.5-1.9-1.3-2.5Z" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  };

  return <svg {...common}>{paths[name] || paths.star}</svg>;
}

export function BrandMark({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="English 8 logo">
      <rect x="3" y="3" width="58" height="58" rx="15" fill="#4fa876" />
      <rect x="8" y="8" width="48" height="48" rx="12" fill="none" stroke="rgba(255,255,255,.55)" />
      <path d="M18 20c7 0 11 2.6 14 7v20c-3-4.2-7-6-14-6V20Z" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M46 20c-7 0-11 2.6-14 7v20c3-4.2 7-6 14-6V20Z" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M32 15c5 2.2 8 6.4 8 11.5-4.2-.7-7.4-2.5-8-6.6-.6 4.1-3.8 5.9-8 6.6 0-5.1 3-9.3 8-11.5Z" fill="#dff7d2" stroke="#fff" strokeWidth="1.5" />
      <path d="M32 17v10" stroke="#4fa876" strokeWidth="1.6" />
    </svg>
  );
}

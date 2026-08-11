export default function ToothMark({ className = '', ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M12 2.2c-3.1 0-5.3 1.9-5.3 5 0 1.9.5 3.3 1 5.2.68 2.6 1 7.4 2.6 7.4 1.4 0 1.1-3.9 1.7-3.9s.3 3.9 1.7 3.9c1.6 0 1.92-4.8 2.6-7.4.5-1.9 1-3.3 1-5.2 0-3.1-2.2-5-5.3-5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

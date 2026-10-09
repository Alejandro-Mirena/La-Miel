function Icon({ size = 24, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function DropletIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 3s6.5 7 6.5 12a6.5 6.5 0 0 1-13 0C5.5 10 12 3 12 3Z" />
    </Icon>
  )
}
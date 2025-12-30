export function SocialMediaSVG(props) {
  return (
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={`bi bi-${props.name} hover:text-yellow-300 ease-in-out duration-350`}
        viewBox="0 0 16 16"
      >
        <path d={`${props.d}`} />
      </svg>
    </a>
  );
}

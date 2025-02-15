interface IconProps {
  color: string;
  size: number;
  className?: string;
  viewBox?: string;
}

const IconWrapper = ({
  color = "currentColor",
  size = 24,
  className,
  viewBox = "0 0 36 36", // Default viewBox for general scaling
  children,
}: IconProps & { children: React.ReactNode }) => (
  <svg
    fill={color}
    width={size}
    height={size}
    className={className}
    viewBox={viewBox} // Apply the dynamic or default viewBox
  >
    {children}
  </svg>
);

export const DreptAdministrativIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 32 32",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <path d="M28.5 23h-12.246c0.359-0.619 0.634-1.29 0.816-2h11.43c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 20h-11.236c0.041-0.328 0.069-0.661 0.069-1 0-0.34-0.028-0.672-0.069-1h11.236c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 17h-11.43c-0.183-0.71-0.457-1.381-0.816-2h12.246c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 14h-12.928c-0.65-0.811-1.453-1.493-2.369-2h15.297c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 11h-16c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1h16c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 8h-16c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1h16c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM16.5 19c0 3.866-3.135 7-7 7s-7-3.134-7-7 3.134-7 7-7c3.865 0 7 3.134 7 7zM11.978 19.761c-0.101-0.239-0.231-0.447-0.394-0.624s-0.348-0.329-0.556-0.456c-0.208-0.127-0.42-0.24-0.637-0.341-0.217-0.1-0.429-0.194-0.637-0.284-0.208-0.089-0.395-0.185-0.559-0.287s-0.296-0.219-0.394-0.35c-0.098-0.131-0.147-0.286-0.147-0.466 0-0.12 0.022-0.234 0.065-0.342 0.044-0.107 0.11-0.2 0.2-0.277 0.089-0.076 0.201-0.137 0.334-0.18 0.133-0.044 0.29-0.065 0.469-0.065 0.229 0 0.439 0.027 0.631 0.083 0.191 0.057 0.36 0.118 0.506 0.187 0.146 0.068 0.269 0.131 0.369 0.189s0.173 0.086 0.219 0.086 0.082-0.012 0.109-0.037c0.026-0.025 0.048-0.064 0.062-0.119 0.015-0.054 0.024-0.123 0.031-0.206 0.006-0.084 0.009-0.187 0.009-0.308 0-0.108-0.002-0.199-0.006-0.271s-0.012-0.134-0.021-0.182c-0.011-0.048-0.023-0.087-0.037-0.116-0.016-0.029-0.043-0.064-0.085-0.105s-0.127-0.094-0.256-0.155c-0.129-0.062-0.277-0.118-0.443-0.167-0.167-0.050-0.346-0.089-0.537-0.118-0.039-0.006-0.079-0.004-0.118-0.009v-1.034h-0.984v1.034c-0.181 0.024-0.356 0.060-0.526 0.109-0.331 0.096-0.618 0.24-0.862 0.434s-0.438 0.438-0.581 0.73c-0.144 0.294-0.215 0.634-0.215 1.021 0 0.337 0.050 0.627 0.149 0.868s0.23 0.451 0.391 0.628c0.161 0.177 0.342 0.328 0.546 0.455 0.204 0.128 0.415 0.241 0.631 0.341s0.427 0.194 0.631 0.284 0.386 0.186 0.546 0.287c0.161 0.103 0.291 0.219 0.391 0.35 0.1 0.132 0.15 0.289 0.15 0.472 0 0.159-0.029 0.303-0.087 0.433s-0.143 0.237-0.253 0.325c-0.11 0.088-0.244 0.155-0.402 0.203-0.159 0.048-0.337 0.072-0.538 0.072-0.304 0-0.572-0.034-0.803-0.103s-0.43-0.145-0.597-0.229c-0.167-0.083-0.303-0.158-0.409-0.228-0.106-0.068-0.188-0.103-0.247-0.103-0.042 0-0.079 0.012-0.109 0.034-0.032 0.023-0.057 0.062-0.075 0.116-0.019 0.055-0.032 0.125-0.041 0.213s-0.013 0.196-0.013 0.325c0 0.192 0.012 0.339 0.034 0.441 0.023 0.103 0.062 0.181 0.116 0.234s0.142 0.115 0.265 0.186 0.276 0.137 0.459 0.201c0.183 0.063 0.395 0.118 0.634 0.164 0.239 0.045 0.499 0.067 0.778 0.067 0.012 0 0.023-0.002 0.036-0.002v0.963h0.983v-1.092c0.047-0.012 0.097-0.018 0.143-0.031 0.362-0.108 0.679-0.27 0.95-0.484s0.485-0.481 0.644-0.802c0.158-0.321 0.236-0.693 0.236-1.118 0.001-0.323-0.049-0.604-0.148-0.844zM15.572 24h12.928c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1h-15.297c0.916-0.507 1.719-1.189 2.369-2z"></path>
  </IconWrapper>
);

export const DreptCivilIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 56 56",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <path d="M 38.7232 28.5490 C 43.1399 28.5490 46.9403 24.6047 46.9403 19.4690 C 46.9403 14.3949 43.1193 10.6356 38.7232 10.6356 C 34.3271 10.6356 30.5061 14.4771 30.5061 19.5101 C 30.5061 24.6047 34.3066 28.5490 38.7232 28.5490 Z M 15.0784 29.0215 C 18.8994 29.0215 22.2274 25.5703 22.2274 21.1125 C 22.2274 16.6958 18.8789 13.4294 15.0784 13.4294 C 11.2575 13.4294 7.8885 16.7779 7.9090 21.1536 C 7.9090 25.5703 11.2370 29.0215 15.0784 29.0215 Z M 3.6155 47.5717 L 19.2281 47.5717 C 17.0917 44.4697 19.7006 38.2247 24.1173 34.8146 C 21.8371 33.2944 18.8994 32.1645 15.0579 32.1645 C 5.7931 32.1645 0 39.0053 0 44.6957 C 0 46.5445 1.0271 47.5717 3.6155 47.5717 Z M 25.8018 47.5717 L 51.6241 47.5717 C 54.8493 47.5717 56 46.6472 56 44.8395 C 56 39.5394 49.3644 32.2261 38.7026 32.2261 C 28.0616 32.2261 21.4262 39.5394 21.4262 44.8395 C 21.4262 46.6472 22.5766 47.5717 25.8018 47.5717 Z"></path>
  </IconWrapper>
);

export const DreptComercialIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 1024 1024",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <path
      d="M182.52 146.2h585.14v256h73.15V73.06H109.38v877.71h256v-73.14H182.52z"
      fill={color}
    />
    <path d="M255.67 219.34h438.86v73.14H255.67z" fill={color} />
    <path d="M255.67 365.63h365.71v73.14H255.67z" fill={color} />
    <path d="M255.67 511.91H475.1v73.14H255.67z" fill={color} />
    <path
      d="M775.22 458.24L439.04 794.42l-0.52 154.64 155.68 0.52L930.38 613.4 775.22 458.24z m51.72 155.16l-25.43 25.43-51.73-51.72 25.44-25.44 51.72 51.73z m-77.14 77.15L620.58 819.77l-51.72-51.72 129.22-129.22 51.72 51.72zM511.91 876.16l0.17-51.34 5.06-5.06 51.72 51.72-4.85 4.85-52.1-0.17z"
      fill={color}
    />
  </IconWrapper>
);

export const DreptContraventionalIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 24 24",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <path
      d="M1.225 21.225A1.678 1.678 0 0 0 2.707 22H22.28a1.68 1.68 0 0 0 1.484-.775 1.608 1.608 0 0 0 .003-1.656L13.995 1.827a1.745 1.745 0 0 0-2.969 0l-9.8 17.742a1.603 1.603 0 0 0 0 1.656zm.859-1.143l9.82-17.773A.71.71 0 0 1 12.508 2a.73.73 0 0 1 .629.342l9.751 17.708a.626.626 0 0 1 .017.662.725.725 0 0 1-.626.288H2.708a.723.723 0 0 1-.623-.286.605.605 0 0 1-.001-.632zM13 15h-1V8h1zm-1.5 2.5a1 1 0 1 1 1 1 1.002 1.002 0 0 1-1-1z"
      fill={color}
    />
  </IconWrapper>
);

export const DreptulFamilieiIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 98.666 98.666",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <circle cx="49.332" cy="53.557" r="10.297" fill={color} />
    <path
      d="M53.7,64.556h-8.737c-7.269,0-13.183,5.916-13.183,13.184v10.688l0.027,0.166l0.735,0.229
      c6.937,2.168,12.965,2.892,17.927,2.892c9.688,0,15.303-2.764,15.65-2.938l0.688-0.351l0.071,0.002V77.739
      C66.883,70.472,60.971,64.556,53.7,64.556z"
      fill={color}
    />
    <circle cx="28.312" cy="23.563" r="16.611" fill={color} />
    <path
      d="M70.35,40.174c9.174,0,16.609-7.44,16.609-16.613c0-9.17-7.438-16.609-16.609-16.609c-9.176,0-16.61,7.437-16.61,16.609
      S61.174,40.174,70.35,40.174z"
      fill={color}
    />
    <path
      d="M41.258,62.936c-2.637-2.274-4.314-5.632-4.314-9.378c0-4.594,2.519-8.604,6.243-10.743
      c-2.425-0.965-5.061-1.511-7.826-1.511H21.266C9.54,41.303,0,50.847,0,62.571v17.241l0.043,0.269L1.23,80.45
      c10.982,3.432,20.542,4.613,28.458,4.656v-7.367C29.688,70.595,34.623,64.599,41.258,62.936z"
      fill={color}
    />
    <path
      d="M77.398,41.303H63.305c-2.765,0-5.398,0.546-7.824,1.511c3.727,2.139,6.246,6.147,6.246,10.743
      c0,3.744-1.678,7.102-4.313,9.376c2.656,0.661,5.101,2.02,7.088,4.008c2.888,2.89,4.479,6.726,4.478,10.8v7.365
      c7.916-0.043,17.477-1.225,28.457-4.656l1.187-0.369l0.044-0.269V62.571C98.664,50.847,89.124,41.303,77.398,41.303z"
      fill={color}
    />
  </IconWrapper>
);

export const DreptImobiliarIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 50 50",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <path
      d="M43.90625 1.96875C43.863281 1.976563 43.820313 1.988281 43.78125 2L40 2C39.730469 2 39.46875 2.121094 39.28125 2.3125L25.21875 16.59375L26.4375 18.15625L30.21875 14.34375L30.90625 20.875L29.8125 22.5L30.9375 23.96875C30.988281 24.035156 31.046875 24.089844 31.09375 24.15625L43 6.3125L43 28.28125C42.402344 28.628906 42 29.261719 42 30C42 30.738281 42.402344 31.371094 43 31.71875L43 32.96875C43 33.90625 43.609375 34.789063 44.5625 35.0625C45.503906 35.332031 46.164063 36.265625 45.96875 37.375C45.832031 38.148438 45.152344 38.832031 44.375 38.96875C43.0625 39.199219 42 38.238281 42 37C42.003906 36.640625 41.816406 36.304688 41.503906 36.121094C41.191406 35.941406 40.808594 35.941406 40.496094 36.121094C40.183594 36.304688 39.996094 36.640625 40 37C40 39.433594 42.238281 41.371094 44.71875 40.9375C46.355469 40.648438 47.652344 39.355469 47.9375 37.71875C48.304688 35.625 46.992188 33.695313 45.09375 33.15625C45.054688 33.144531 45 33.0625 45 32.96875L45 31.71875C45.597656 31.371094 46 30.738281 46 30C46 29.261719 45.597656 28.628906 45 28.28125L45 3.0625C45.003906 3.015625 45.003906 2.953125 45 2.90625C44.992188 2.863281 44.980469 2.820313 44.96875 2.78125C44.949219 2.695313 44.917969 2.609375 44.875 2.53125C44.832031 2.453125 44.78125 2.378906 44.71875 2.3125C44.691406 2.277344 44.660156 2.246094 44.625 2.21875C44.550781 2.15625 44.464844 2.101563 44.375 2.0625C44.34375 2.050781 44.316406 2.039063 44.28125 2.03125C44.160156 1.988281 44.035156 1.964844 43.90625 1.96875 Z M 40.40625 4L42.125 4L38.71875 9.125L38.4375 5.96875 Z M 36.59375 7.875L36.84375 10.9375L33.34375 11.15625 Z M 36.15625 12.96875L32.625 18.25L32.09375 13.25 Z M 8 16C6.347656 16 5 17.347656 5 19L5 31C5 32.652344 6.347656 34 8 34L11 34L11 36L8 36C4.691406 36 2 38.691406 2 42C2 45.308594 4.691406 48 8 48L30 48C33.308594 48 36 45.308594 36 42C36 38.691406 33.308594 36 30 36L27 36L27 34L28 34C29.652344 34 31 32.652344 31 31L31 27C30.992188 26.125 30.691406 25.253906 30.15625 24.5625L24.40625 17.15625C23.839844 16.433594 22.949219 16 22.03125 16 Z M 18.3125 18L22.03125 18C22.339844 18 22.625 18.132813 22.8125 18.375L28.59375 25.8125C28.859375 26.152344 28.992188 26.566406 29 27L20.75 27 Z M 13 34L25 34L25 36L13 36 Z M 8 40C9.105469 40 10 40.894531 10 42C10 43.105469 9.105469 44 8 44C6.894531 44 6 43.105469 6 42C6 40.894531 6.894531 40 8 40 Z M 14 40C15.105469 40 16 40.894531 16 42C16 43.105469 15.105469 44 14 44C12.894531 44 12 43.105469 12 42C12 40.894531 12.894531 40 14 40 Z M 24 40C25.105469 40 26 40.894531 26 42C26 43.105469 25.105469 44 24 44C22.894531 44 22 43.105469 22 42C22 40.894531 22.894531 40 24 40 Z M 30 40C31.105469 40 32 40.894531 32 42C32 43.105469 31.105469 44 30 44C28.894531 44 28 43.105469 28 42C28 40.894531 28.894531 40 30 40Z"
      fill={color}
    />
  </IconWrapper>
);

export const DreptPenalIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 24 24",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <path
      d="M22.951,11.259a.919.919,0,0,0-.057-.189c-.007-.014-.006-.03-.013-.044l-3.5-6.5a.913.913,0,0,0-.142-.187A.989.989,0,0,0,18.5,4H13V2a1,1,0,0,0-2,0V4H5.5a.989.989,0,0,0-.739.339.913.913,0,0,0-.142.187l-3.5,6.5c-.007.014-.006.03-.013.044a.91.91,0,0,0-.057.188.98.98,0,0,0-.04.2c0,.015-.009.028-.009.044a4.5,4.5,0,0,0,9,0c0-.016-.008-.029-.009-.044a.97.97,0,0,0-.04-.2.919.919,0,0,0-.057-.189c-.007-.014-.006-.03-.013-.044L7.174,6H11V18H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2H13V6h3.826l-2.707,5.026c-.007.014-.006.03-.013.044a.91.91,0,0,0-.057.188.98.98,0,0,0-.04.2c0,.015-.009.028-.009.044a4.5,4.5,0,0,0,9,0c0-.016-.008-.029-.009-.044A.97.97,0,0,0,22.951,11.259ZM5.5,14a2.5,2.5,0,0,1-2.291-1.5H7.791A2.5,2.5,0,0,1,5.5,14Zm1.826-3.5H3.674L5.5,7.109ZM18.5,7.109,20.326,10.5H16.674ZM18.5,14a2.5,2.5,0,0,1-2.291-1.5h4.582A2.5,2.5,0,0,1,18.5,14ZM21,22a1,1,0,0,1-1,1H4a1,1,0,0,1,0-2H20A1,1,0,0,1,21,22Z"
      fill={color}
    />
  </IconWrapper>
);

export const DreptulMunciiIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 24 24",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5V4C6 2.34315 7.34315 1 9 1H15C16.6569 1 18 2.34315 18 4V5H20C21.6569 5 23 6.34315 23 8V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V8C1 6.34315 2.34315 5 4 5H6ZM8 4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V5H8V4ZM19.882 7H4.11803L6.34164 11.4472C6.51103 11.786 6.8573 12 7.23607 12H11C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12H16.7639C17.1427 12 17.489 11.786 17.6584 11.4472L19.882 7ZM11 14H7.23607C6.09975 14 5.06096 13.358 4.55279 12.3416L3 9.23607V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V9.23607L19.4472 12.3416C18.939 13.358 17.9002 14 16.7639 14H13C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z"
      fill={color}
    />
  </IconWrapper>
);

export const DreptulProprietatiiIntelectualeIcon = ({
  color,
  size,
  className,
  viewBox = "0 0 53 53",
}: IconProps) => (
  <IconWrapper
    color={color}
    size={size}
    className={className}
    viewBox={viewBox}
  >
    <path
      d="M45.707,10.074l-9.794-9.782C35.725,0.105,35.471,0,35.206,0H8C7.448,0,7,0.447,7,1v51c0,0.553,0.448,1,1,1h37c0.552,0,1-0.447,1-1V10.782C46,10.517,45.895,10.263,45.707,10.074z M42.586,10H36V3.414L42.586,10z M9,51V2h25v9c0,0.553,0.448,1,1,1h9v39H9z"
      fill={color}
    />
    <path
      d="M26.5,16C19.056,16,13,22.056,13,29.5S19.056,43,26.5,43S40,36.944,40,29.5S33.944,16,26.5,16z M26.5,41C20.159,41,15,35.841,15,29.5S20.159,18,26.5,18S38,23.159,38,29.5S32.841,41,26.5,41z"
      fill={color}
    />
    <polygon
      points="18.258,26.863 20.807,26.863 20.807,34 22.541,34 22.541,26.863 25.084,26.863 25.084,25.41 18.258,25.41"
      fill={color}
    />
    <polygon
      points="30.334,31.27 28.775,25.41 26.18,25.41 26.18,34 27.791,34 27.791,27.238 29.49,34 31.16,34 32.865,27.238 32.865,34 34.477,34 34.477,25.41 31.875,25.41"
      fill={color}
    />
  </IconWrapper>
);

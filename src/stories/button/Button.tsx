import React from 'react';
// import './button.css';

interface IButtonProps {
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary?: boolean;
  // /**
  //  * What background color to use
  //  */
  // backgroundColor?: string;
  // /**
  //  * How large should the button be?
  //  */
  // size?: 'small' | 'medium' | 'large';
  // /**
  //  * Button contents
  //  */
  // label: string;
  // /**
  //  * Optional click handler
  //  */
  // onClick?: () => void;

  className?: string,
  theme?: string,
  href?: string,
  download?: boolean,
  label: React.ReactNode,
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className,
  theme,
  href,
  label,
  download,
  ...props
}: IButtonProps) => {
  let themeClass;

  switch (theme) {
    case 'white':
      themeClass = 'button--white';
      break;

    default:
      themeClass = '';
      break;
  }

  if (href) {
    return (
      <a
        className={`${className} button ${themeClass}`}
        href={ href }
        download={ download }
      >
        { label }
      </a>
    );
  }

  return (
    <button
      className={`${className} button ${themeClass}`}
    >
      { label }
    </button>
  );
};

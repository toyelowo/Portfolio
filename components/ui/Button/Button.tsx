import _uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';

interface RegularButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface Link extends React.HTMLProps<HTMLAnchorElement> {}

interface BaseButton {
  children: React.ReactNode;
  describedBy?: string;
  className?: string;
}

type Props = BaseButton & (RegularButton | Link);

export function Button(props: Props) {
  const [describedById] = useState<string>(_uniqueId('button-'));

  if (isLink(props)) {
    const { children, describedBy, className, href, ...others } = props;

    const linkProps = {
      'aria-describedby': describedBy ? describedById : undefined,
      href,
      ...others
    };

    return (
      <>
        <a {...linkProps} className={className}>
          {children}
        </a>
        {describedBy ? <p id={describedById}>{describedBy}</p> : null}
      </>
    );
  }

  const { children, describedBy, className, ...defaultButtonProps } = props;

  return (
    <button {...defaultButtonProps} className={className}>
      {children}
    </button>
  );
}

function isLink(button: RegularButton | Link): button is Link {
  return button.hasOwnProperty('href');
}

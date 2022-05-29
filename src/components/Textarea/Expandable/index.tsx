import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

type Props = {
  className?: string;
  value: string;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

const ExpandableTextarea: React.FC<Props> = (
  {
    className,
    value,
    rows = 1,
    placeholder='Введите текст',
    maxLength,
    onChange,
    onKeyDown,
  }) => {
    const element = useRef<EventTarget & HTMLTextAreaElement>(null);

    useEffect(() => {
      if (element.current) {
        adjustHeight(element.current);
      }
    }, []);

    const adjustHeight = (element: EventTarget & HTMLTextAreaElement) => {
      const style = getComputedStyle(element, null);
      const verticalBorders = Math.round(
        parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)
      );

      element.style.height = 'auto';
      element.style.height = element.scrollHeight + verticalBorders + 'px';
    };

    const onChangeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      adjustHeight(event.target);
      onChange(event);
    };

    return (
      <textarea
        className={cn(styles.textarea, className)}
        ref={element}
        rows={rows}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChangeEvent}
        onKeyDown={onKeyDown}
      />
    );
};

export default ExpandableTextarea;
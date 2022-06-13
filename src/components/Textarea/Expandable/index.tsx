import React, { useEffect, useImperativeHandle, useRef } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  value: string;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

const ExpandableTextarea = React.forwardRef<{focus: () => void}, Props>((
  {
    className,
    value,
    rows = 1,
    placeholder='Введите текст',
    maxLength,
    onChange,
    onKeyDown,
  }, ref) => {
    const element = useRef<EventTarget & HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (element.current) {
          element.current.focus();
        }
      }
    }));

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
        onKeyDown={onKeyDown}
        onChange={onChangeEvent}
      />
    );
});

ExpandableTextarea.displayName = 'ExpandableTextarea';

export default ExpandableTextarea;
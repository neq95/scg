import React, { useEffect, useImperativeHandle, useRef } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  id?: string,
  value: string;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement, Element>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement, Element>) => void;
};

const ExpandableTextarea = React.forwardRef<{focus: () => void}, Props>((
  {
    className,
    id,
    value,
    rows = 1,
    placeholder='Введите текст',
    maxLength,
    onChange,
    onKeyDown,
    onFocus,
    onBlur,
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
        id={id}
        ref={element}
        rows={rows}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onKeyDown={onKeyDown}
        onChange={onChangeEvent}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
});

ExpandableTextarea.displayName = 'ExpandableTextarea';

export default ExpandableTextarea;
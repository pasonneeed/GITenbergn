import { useEffect, useRef, useState } from 'react';

export function useDropdown<T>() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<T | ''>('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggle = () => setIsOpen((prev) => !prev);
  const select = (value: T) => {
    setSelected(value);
    setIsOpen(false);
  };
  const reset = () => setSelected('');

  return {
    isOpen,
    selected,
    toggle,
    select,
    reset,
    ref,
  };
}

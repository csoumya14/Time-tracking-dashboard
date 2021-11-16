import { useState, useEffect } from 'react';

export const useKeyboardNavigation = (size: number) => {
  const [activeCursor, setActiveCursor] = useState<number>(-1);
  const handleKeyDown = (event: { key: string, keyCode:number }) => {
    const { key } = event;
    switch (key) {
      case 'End':   
        focusLastTab();
        break;
      case 'Home':  
        // Activate first tab
        focusFirstTab();
        break;
      // Up and down are in keydown
      // because we need to prevent page scroll >:)
      case 'ArrowDown':
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'ArrowRight':
        determineOrientation(event);
        break; 
    }
  };

  const focusFirstTab = () => {
    setActiveCursor(0);
  }

  // Make a guess
  function focusLastTab () {
    setActiveCursor(size-1);
  }

  const determineOrientation = (event: { key: string, keyCode:number }) => {
    const { key } = event;
    const vertical = false
    let proceed = false
    if (vertical) {
      if (key === 'ArrowUp' || key === 'ArrowDown') {
        proceed = true;
      }
    }
    else {
      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        proceed = true;
      }
    }
    if (proceed) {
      switchTabOnArrowPress(event);
    }
      
  };

  const switchTabOnArrowPress = (event: { key: string, keyCode:number }) => {
    const { key } = event; 
    if (key === 'ArrowRight'|| key === 'ArrowUp' ) {
      setActiveCursor(prev => (prev < size-1 ? prev + 1 : 0));
    } else if (key === 'ArrowLeft'|| key === 'ArrowDown' ) {
      setActiveCursor(prev => (prev > 0 ? prev - 1 : size));
    }
  }
  
  // Reset when size changes
  useEffect(() => setActiveCursor(0), [size]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [size, activeCursor]);

  return [activeCursor];
};


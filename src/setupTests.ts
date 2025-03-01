/**
 * Test setup file
 * 
 * This file is run before all tests and sets up the testing environment.
 */

// Import required testing libraries
import '@testing-library/jest-dom';

// Mock Storybook's canvas element and compose helpers
// This makes it possible to test stories with play functions
const originalCreateElement = global.document.createElement;
global.document.createElement = function(tagName: string, options?: ElementCreationOptions): HTMLElement {
  const element = originalCreateElement.call(document, tagName, options);
  if (tagName === 'canvas') {
    // Add methods that the Canvas uses
    Object.defineProperty(element, 'getContext', {
      value: () => ({
        // Minimal mock implementation of canvas context
        clearRect: () => {},
        fillRect: () => {},
        fill: () => {},
        beginPath: () => {},
        moveTo: () => {},
        lineTo: () => {},
        closePath: () => {},
        stroke: () => {},
      }),
    });
  }
  return element;
};

// Set up vitest globals
if (typeof window !== 'undefined') {
  // Define matchMedia mock for responsive tests
  window.matchMedia = window.matchMedia || function(): MediaQueryList {
    return {
      matches: false,
      media: '',
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    } as unknown as MediaQueryList;
  };
} 
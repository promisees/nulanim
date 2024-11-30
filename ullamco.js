import { useReducer } from 'react';
import { createContext, useState } from 'react';

const AnimationContext = createContext();

const initialState = {
  animationState: 'initial',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { animationState: 'running' };
    case 'stop':
      return { animationState: 'paused' };
    default:
      return state;
  }
};

const AnimationProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AnimationContext.Provider value={{ state, dispatch }}>
      <YourComponent />
    </AnimationContext.Provider>
  );
};

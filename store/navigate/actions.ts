export const NAVIGATE = 'NAVIGATE';

export const navigate = (path: string) => {
  return {
    type: NAVIGATE,
    payload: path,
  };
};

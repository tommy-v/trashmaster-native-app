export const GLOBAL_TURN_LOADING = 'GLOBAL_TURN_LOADING';

export function turnLoading(isLoading) {
  return {
    type: GLOBAL_TURN_LOADING,
    payload: {
      isLoading,
    },
  };
}

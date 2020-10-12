export default {
  simulateApiCall: (time = 3000) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  },
};

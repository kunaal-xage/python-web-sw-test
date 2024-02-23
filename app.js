const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('sw.js');
      if (registration.installing) {
        console.log('sw installing');
      } else if (registration.waiting) {
        console.log('sw installed');
      } else if (registration.active) {
        console.log('sw active');
      }
    } catch (error) {
      console.log(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();

// utils/preloadImages.js
export const preloadImages = (imageUrls) => {
    const promises = imageUrls.map((url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
      })
    );
    return Promise.all(promises);
  };
  
export const importImage = (imgName: string): string =>
  new URL(`../assets/images/${imgName}`, import.meta.url).href;

export const importAsset = (subfolder: string, imgName: string): string =>
  new URL(`../assets/${subfolder}/${imgName}`, import.meta.url).href;

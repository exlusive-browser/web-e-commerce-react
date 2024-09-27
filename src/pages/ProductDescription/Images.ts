export const importImage = async (imgName: string): Promise<string> => {
    try {
        // Vite-ignore para ignorar advertencias en esta importación dinámica
        const image = await import(
          /* @vite-ignore */
          `@/assets/images/${imgName}`
        );
        return image.default;
    } catch (error) {
        console.error(`Error importing image: ${imgName}`, error);
        return ""; // O devuelve una imagen predeterminada
    }
};
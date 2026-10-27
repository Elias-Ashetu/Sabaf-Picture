

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const GalleryContext = createContext(null);
const STORAGE_KEY = "sabaf-gallery";

export function GalleryProvider({ children }) {
  const [photos, setPhotos] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(photos)
      );
    } catch {
      console.warn("Gallery storage limit reached.");
    }
  }, [photos]);

  function addPhoto(photo) {
    setPhotos((current) => [
      {
        ...photo,
        id: crypto.randomUUID(),
        published: true,
      },
      ...current,
    ]);
  }

  function deletePhoto(id) {
    setPhotos((current) =>
      current.filter((photo) => photo.id !== id)
    );
  }

  function togglePublished(id) {
    setPhotos((current) =>
      current.map((photo) =>
        photo.id === id
          ? { ...photo, published: !photo.published }
          : photo
      )
    );
  }

  return (
    <GalleryContext.Provider
      value={{ photos, addPhoto, deletePhoto, togglePublished }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);

  if (!context) {
    throw new Error(
      "useGallery must be used inside GalleryProvider"
    );
  }

  return context;
}

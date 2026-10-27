
import React, { useEffect, useRef, useState } from "react";
import { useGallery } from "../../component/GalleryContext";
import "./Gallery.css";

const categories = [
  "All",
  "Portrait",
  "Wedding",
  "Events",
  "Fashion",
  "Product",
  "Lifestyle",
];

export default function Gallery() {
  const { photos } = useGallery();
  const [activeCategory, setActiveCategory] = useState("All");
  const [layoutVersion, setLayoutVersion] = useState(0);
  const gridRef = useRef(null);

  const filteredPhotos = photos.filter((photo) => {
    if (!photo.published) return false;

    return (
      activeCategory === "All" ||
      photo.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  // Recalculate the masonry layout when images or container width change.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let animationFrame;

    const layout = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const cards = grid.querySelectorAll(".gallery-card");

        cards.forEach((card) => {
          const img = card.querySelector("img");

          if (!img || !img.complete || !img.naturalWidth) return;

          const imageWidth = img.getBoundingClientRect().width;
          const imageHeight =
            imageWidth * (img.naturalHeight / img.naturalWidth);

          card.style.gridRowEnd = `span ${Math.ceil(imageHeight)}`;
        });
      });
    };

    layout();

    const observer = new ResizeObserver(layout);
    observer.observe(grid);

    grid.querySelectorAll("img").forEach((img) => {
      img.addEventListener("load", layout);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();

      grid.querySelectorAll("img").forEach((img) => {
        img.removeEventListener("load", layout);
      });
    };
  }, [filteredPhotos, layoutVersion]);

  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <span className="gallery-eyebrow">PORTFOLIO</span>

        <h1>Selected Works</h1>

        <nav className="gallery-filters" aria-label="Filter gallery">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`gallery-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </nav>
      </header>

      <section
        className="gallery-grid"
        ref={gridRef}
        aria-label="Photography portfolio"
      >
        {filteredPhotos.map((photo) => (
          <article className="gallery-card" key={photo.id}>
            <img
              src={photo.image}
              alt={photo.title || photo.category || "Photography"}
              loading="lazy"
              onLoad={() => setLayoutVersion((version) => version + 1)}
            />

            <div className="gallery-overlay">
              {photo.category && (
                <span className="gallery-category">
                  {photo.category}
                </span>
              )}

              {photo.title && <h2>{photo.title}</h2>}

              {photo.description && <p>{photo.description}</p>}
            </div>
          </article>
        ))}
      </section>

      {filteredPhotos.length === 0 && (
        <p className="gallery-empty">
          No photographs in this category yet.
        </p>
      )}
    </main>
  );
}

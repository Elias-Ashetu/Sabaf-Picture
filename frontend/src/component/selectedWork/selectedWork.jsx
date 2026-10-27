
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGallery } from "../GalleryContext.jsx";
import "./SelectedWork.css";

export default function SelectedWorks() {
  const { photos } = useGallery();
  const gridRef = useRef(null);

  const publishedPhotos = photos
    .filter((photo) => photo.published)
    .slice(0, 6);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let frameId;

    const updateMasonry = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const cards = grid.querySelectorAll(".work-card");

        cards.forEach((card) => {
          const image = card.querySelector(".work-image");

          if (!image || !image.naturalWidth) return;

          const imageHeight =
            image.getBoundingClientRect().width *
            (image.naturalHeight / image.naturalWidth);

          card.style.gridRowEnd = `span ${Math.ceil(imageHeight)}`;
        });
      });
    };

    updateMasonry();

    const observer = new ResizeObserver(updateMasonry);
    observer.observe(grid);

    const images = grid.querySelectorAll(".work-image");
    images.forEach((image) => {
      image.addEventListener("load", updateMasonry);
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();

      images.forEach((image) => {
        image.removeEventListener("load", updateMasonry);
      });
    };
  }, [publishedPhotos]);

  return (
    <section className="selected-works">
      <span className="headerp">Selected work</span>
      <h2 className="portfolio-title">Featured Portfolio</h2>

      <div className="selected-works-grid" ref={gridRef}>
        {publishedPhotos.map((photo) => (
          <article key={photo.id} className="work-card">
            <div className="work-image-container">
              <img
                src={photo.image}
                alt={photo.title || "Photography"}
                className="work-image"
                loading="lazy"
              />

              <div className="work-info">
                <span className="work-category">
                  {photo.category}
                </span>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {publishedPhotos.length === 0 && (
        <p className="empty-gallery">
          Our latest photographs will appear here soon.
        </p>
      )}

      <div className="view-gallery-container">
        <Link to="/gallery" className="view-gallery-button">
          View Full Gallery <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}

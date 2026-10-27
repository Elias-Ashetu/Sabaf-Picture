
import { useState } from "react";
import { useGallery } from "../../../component/GalleryContext.jsx";
import "./PublicGallery.css"

export default function PublicGalleries() {
  const { photos, addPhoto, deletePhoto, togglePublished } =
    useGallery();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Portrait");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  function handleImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image.");
      return;
    }

    // Prototype only: browser storage has limited capacity.
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      setError("");
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !image) {
      setError("Add a title and select an image.");
      return;
    }

    addPhoto({
      title: title.trim(),
      category,
      description: description.trim(),
      image,
    });

    setTitle("");
    setCategory("Portrait");
    setDescription("");
    setImage("");
    setError("");
    event.target.reset();
  }

  return (
    <section className="public-gallery-admin">
      <header className="public-gallery-header">
        <div>
          <h1>Public Gallery</h1>
          <p>
            Curate the photographs visitors see in Selected Works.
          </p>
        </div>

        <button
          type="button"
          className="post-button"
          onClick={() =>
            document
              .getElementById("gallery-post-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          + Post new work
        </button>
      </header>

      <form
        id="gallery-post-form"
        className="gallery-post-form"
        onSubmit={handleSubmit}
      >
        <h2>Post new work</h2>

        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Studio Portrait"
            required
          />
        </label>

        <label>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Portrait</option>
            <option>Wedding</option>
            <option>Fashion</option>
            <option>Events</option>
            <option>Nature</option>
          </select>
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a short story about this photo"
          />
        </label>

        <label>
          Choose photo
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>

        {image && (
          <img
            className="gallery-upload-preview"
            src={image}
            alt="Selected photo preview"
          />
        )}

        {error && <p className="gallery-error">{error}</p>}

        <button className="post-button" type="submit">
          Publish photo
        </button>
      </form>

      <div className="published-title">
        <h2>PUBLISHED WORK</h2>
        <span>
          {photos.filter((photo) => photo.published).length} live
        </span>
      </div>

      <div className="admin-gallery-grid">
        {photos.map((photo) => (
          <article className="admin-gallery-card" key={photo.id}>
            <div className="admin-gallery-image">
              <img src={photo.image} alt={photo.title} />
              <span className="admin-gallery-category">
                {photo.category}
              </span>
            </div>

            <div className="admin-gallery-info">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>

              <div className="gallery-actions">
                <button
                  type="button"
                  onClick={() => togglePublished(photo.id)}
                >
                  {photo.published ? "Unpublish" : "Publish"}
                </button>

                <button
                  type="button"
                  className="remove-photo"
                  onClick={() => {
                    if (window.confirm("Delete this photo?")) {
                      deletePhoto(photo.id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>

              <small>
                {photo.published
                  ? "Live on website"
                  : "Hidden from website"}
              </small>
            </div>
          </article>
        ))}
      </div>

      {photos.length === 0 && (
        <p className="gallery-no-photos">
          No published work yet. Post your first photo above.
        </p>
      )}
    </section>
  );
}

// import Flickity from "flickity";

export default function () {
  const stuff = new Flickity("#gallery", {
    setGallerySize: false,
    cellSelector: ".gallery-cell",
    pageDots: false,
    contain: true
  });
};

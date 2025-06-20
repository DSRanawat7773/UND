const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith("video/");
    return {
      folder: "urban-nest-products",
      resource_type: isVideo ? "video" : "image", // ✅ tells Cloudinary what type of media
      allowed_formats: isVideo
        ? ["mp4", "mov", "webm"]
        : ["jpg", "jpeg", "png"],
    };
  },
});

const upload = multer({ storage });
module.exports = upload;

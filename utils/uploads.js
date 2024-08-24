const multer = require("multer")
const path = require("path")

const postSotrage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fn = Date.now() + path.extname(file.originalname)
        cb(null, fn)
    }
})
const upload = multer({ storage: postSotrage }).array("images", 5)

module.exports = upload


const FileModel = require("../models/file");
const Filemodel = require("../models/file");
const mailService = require("../services/mailService");
const fileUploadService = require("../services/uploadService");

const uploadFile = async (req, res) => {
  const upload = fileUploadService.single("file");

  upload(req, res, async (err) => {
    // console.log(req.body);

    if (err) {
      console.log("ERROR WHILE UPLOADING FILE", err);
      return res.status(500).json({
        success: false,
        message:
          "Something went wrong, please try again try again after sometime",
      });
    }

    const newFile = new Filemodel({
      originalFilename: req.file.originalname,
      newFilename: req.file.filename,
      path: req.file.path,
    });

    const newlyInsertedFile = await newFile.save();

    res.json({
      success: true,
      message: "File uploaded successfully",
      fileId: newlyInsertedFile._id,
    });
  });
};

const generateDynamicLink = async (req, res) => {
  try {
    const fileId = req.params.uuid;
    const file = await FileModel.findById(fileId);
    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File with given ID not found",
      });
    }

    res.json({
      success: true,
      message: "Generate dynamic link API",
      result: "http://localhost:8080/files/download/" + fileId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const downloadFile = async (req, res) => {
  try {
    const fileId = req.params.uuid;
    const file = await FileModel.findById(fileId);
    if (!file) {
      return res.end("File with given ID not found");
    }

    res.download(file.path, file.originalFilename);
  } catch (error) {
    res.end("Something went wrong, please try again after sometime");
  }
};

const sendFile = async (req, res) => {
  console.log(req.body);
  const { fileId, shareTo } = req.body;
  const downloadableLink = "http://localhost:8080/files/download/" + fileId;

  const info = await mailService.sendMail({
    from: "do-not-reply@file-sharing.com",
    to: shareTo,
    subject: "A new file has been shared from File Sharing Platform",
    html: `
    <html>
    <head>
      </head>
      <body>
        Your friend has shared a new file with you click the below link to download the file
      <br />
      <a href="${downloadableLink}">Click Here</a>
      </body>
    </html>`,
  });

  console.log("Message sent: %s", info.messageId);

  res.json({
    success: true,
    message: "File shared on email successfully",
  });
};

const fileController = {
  uploadFile,
  generateDynamicLink,
  downloadFile,
  sendFile,
};

module.exports = fileController;

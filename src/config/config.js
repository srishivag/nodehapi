'use strict';

// module.exports = {
//   server: {
//     host: 'localhost',
//     port: 80
//   },
//   database: {
//     host: '192.168.2.7',
//     // host:"localhost:80",
//     // db: 'ehse_work_permit',
//         db: 'ehse',
//     username: 'root',
//     password: 'EnMontoR',
//     password: ' ',

//     upload_folder: '/uploads/'
//   },

const serverPath = process.env.SERVER_PATH

module.exports = {
  server: {
    host: 'localhost',
    port: 80
  },
  database: {
    host: '192.168.2.5',
    // host: 'localhost',
    db: 'ehse_work_permit',
    username: 'akrivia',
    password: 'EnMontoR',
    // username: 'root',
    // password: '',
    upload_folder: '/uploads/'
  },
  SECURITY_KEY:'AkV&*68b79yYHui98y96%&*&^%G*&^**UH8g6&56^^H98y*Y&67g',
  // linux folders
  categories_upload_folder: './audit_uploads/categories/',
  vender_upload_folder: './audit_uploads/vender_uploads/',
  audit_upload_folder: './audit_uploads/audits/',
  risk_upload_folder: './audit_uploads/risk_uploads/',
  ergonomics_templates_folder: './ergonomics/image/templates/',
  ergonomics_questions_folder: './ergonomics/image/questions/',
  notification_images_folder: './notification_uploads/',
  emoticons_folder: './emoticons/',
  FROM_EMAIL: '"Akrivia" <support@akrivia.in>',
  safetymeetings_upload_folder: './audit_uploads/safetymeetings_uploads/',
  training_upload_folder: './training_uploads/empTraining_uploads/',
  documents_upload_foler: './documents/',
  incidents: './incidents/',



  IMAGE_UPLOAD: './upload/',
  RRF_CANDIDATE_CERTIFICATE: './recruitment/candidate_certificate/',
  RRF_OTHER_DOCUMENT: './recruitment/candidate_certificate/',
  DOWNLOAD_RRF_RESUME_EXTERNAL: `${serverPath}recruitment/resume/`,
  DOWNLOAD_RRF_CANDIDATE_CERTIFICATE: `${serverPath}recruitment/candidate_certificate/`,
  DOWNLOAD_RRF_OTHER_DOCUMENT: `${serverPath}recruitment/candidate_certificate/`,
};
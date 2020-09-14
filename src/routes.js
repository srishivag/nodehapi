var User = require('./controller/user');
var Attachment = require('./controller/ptw_attachment_table');
var Auth = require('./controller/ptw_auth_details');
var Listauth = require('./controller/ptw_auth_list');
var Save = require('./controller/ptw_autosave');
var Category = require('./controller/ptw_category_list');
// var Work = require('./controller/ptw_work_required_table');
// var WorkList = require('./controller/ptw_work_require_list_table');
// var Workpermit = require('./controller/ptw_work_premit');
// var WorkInvolves = require('./controller/ptw_work_involve_table');
var WorkInvolvesList = require('./controller/ptw_work_involve_list_table');
var WorkPermit = require('./controller/ptw_type_of_permit');
// var Doc = require('./controller/documentconfigs');
// var Link_Modules = require('./controller/link_modules');
// var Docm = require('./controller/documents');
// //  LocationRoutes = require('./controller/incident/location');
// var Inc = require('./controller/incidents');
// // var Ins = require('./controller/incident/incident');
// var IHS = require('./controller/injury');
// const fs = require('fs');

// var NC = require('./controller/nc');
// var EMP = require('./controller/employee_mgmt');
// var WKP = require('./controller/workpermit');
//var se = require('./controller/incident/supporting_evidence');
// var EQP = require('./controller/equipment');
// var ROLES = require('./controller/roles_config');
// var COF = require('./controller/contributing_factor');

// // var COF = require('./controller/contributing_factor');
// var IHS = require('./controller/injury');
// var ADV = require('./controller/incident/adverseEvent');
// var DOIP = require('./controller/incident/involved_personnel');
// var ADV = require('./controller/incident/adverseEvent');
// var ROLES = require('./controller/roles_config');
// var DR = require('./controller/dashboard_reports');
//comment
// var IEMPL = require('./controller/incident/employeelist');
// var EQP = require('./controller/incident/equipment');
var ROLES = require('./controller/roles_config');
//var DR = require('./controller/dashboard_reports');
// var COF = require('./controller/incident/contributing_factor');
// var IMG = require('./controller/incident/imageupload');
var config = require('./config/config');

// var incidentDetails = require('./controller/incident/incident')
//import DashReports from './controller/dashboard_reports.js';
//import Imageuploadroutes from './controller/imageupload.js';
//modifications
// import Substance_p from './controller/incident/substance';
// import Details_equipment from './controller/incident/details_equipment';
// import Substance_type from './controller/incident/substance_type';
// import post_inv_pers from './controller/incident/involved_personnel';
// // import FinalReport from './controller/incident/incident2';
// import LocationRoutes from './controller/incident/location.js';
// // import incidentDetails from './controller/incident/incident';
// import workplaceType from './controller/incident/workplace_type';
// import mediaUpload from './controller/incident/supporting_evidence';
// import reportingPerson from './controller/incident/Reporting_person';
// import getPremisesType from './controller/incident/premisesType';
// import premises_details from './controller/incident/premises';
// import GET_cf from './controller/incident/contributing_factor';
// import investigation_details from './controller/incident/investigation';
// import save_data from './controller/incident/form1_save_as_draft';
// import save_data1 from './controller/incident/form2_save_as_draft';
// import final_form_submit from './controller/incident/final_submit';
// import Get_eqp from './controller/incident/equipment';

// import auditRoutes from './controller/audit.js';
// import trainingRoutes from './controller/training.js';
// import gatepassRoutes from './controller/gatepass.js';
// import auditReports from './controller/auditReports.js';
// import notificationRoutes from './controller/notifications.js';
// import riskRoutes from './controller/risk.js';
// import cronRoutes from './controller/cron.js';
// import ergonomicRoutes from './controller/ergonomics';
//import helperRoutes from './controller/helper.js';
// import VenderManagementRoutes from './controller/vendermanagement.js';
// import SafetyMeetingsRoutes from './controller/safety_meetings.js';
// import empTrainingRoutes from './controller/empTraining.js';
// import Licenses from './controller/licenses.js';
// import Locations from './controller/location_supplier.js';
// import NcRoutes from './controller/nc.js';
// import work_permits from './controller/workpermit';
// import ptwConfig from './controller/permittoworkConfig';
// import hazards_risks_ppes from './controller/hazards_risks_ppes';
// import newpermits from './controller/newwork_permit';
// import Injuries from './controller/incident/injury';
// import GET_adverse from './controller/incident/adverseEvent';
// var workplaceType = require('./controller/incident/workplace_type');
// var rptng_person = require('./controller/incident/Reporting_person');
// var incident = require('./controller/incident/incident');
// var premises_type = require('./controller/incident/premisesType');
//FOR FOAM2
// import pers_details2 from './controller/incident/personneldetails2';
// import FinalReport from './controller/incident/incident2';
// import substance_2 from './controller/incident/substance_2';
// import premises_data_2 from './controller/incident/premises_2';
// import checking from './controller/incident/insertorupdate';
// import Report from './controller/incident/finalreport2';
// import Final_report from './controller/incident/finalreport';
// import d_equipment_2 from './controller/incident/details_equipmnet_2';
// import GET_form1 from './controller/incident/form1';
// import GET_form3 from './controller/incident/form3';
// import POST_SUBMIT from './controller/incident/form2';

// import image_upload from './controller/imageupload';
const {fetch_specific , fetch_Location} = require('./controller/ra_specific');
const {insert_risk} = require('./controller/ra_risk_con');
const {  fetch_risk_tech } =  require('./controller/ra_risk_tech');
// API Server Endpoints 123
exports.endpoints = [


  {
    method: 'POST',
    path: '/validUser',
    config: User.auth
  }, // auth route

  {
    method: 'POST',
    path: '/attachmentTable',
    config: Attachment.postattachment_table
  },

  {
    method: 'GET',
    path: '/getattachmentTable/{at_id}',
    config: Attachment.Getattachment_table
  },

  {
    method: 'PUT',
    path: '/updateattachmentTable',
    config: Attachment.updateDetails
  },

  {
    method: 'POST',
    path: '/insertauthDetails',
    config: Auth.postauthDetails
  },

  {
    method: 'GET',
    path: '/getauthDetails/{authid}',
    config: Auth.Getauth_details
  },

  {
    method: 'PUT',
    path: '/updateauthTable',
    config: Auth.updateauthDetails
  },

  {
    method: 'POST',
    path: '/authlist',
    config: Listauth.postauthlist
  },

  {
    method: 'GET',
    path: '/getauthList/{auth_id}',
    config: Listauth.Getauth_list
  },

  {
    method: 'PUT',
    path: '/updateauthList',
    config: Listauth.updateauthList
  },

  {
    method: 'POST',
    path: '/autosavelist',
    config: Save.postautosave
  },

  {
    method: 'GET',
    path: '/getautosaveList/{autoId}',
    config: Save.Getauto_List
  },

  {
    method: 'PUT',
    path: '/updateautosaveList',
    config: Save.updateautosaveList
  },

  {
    method: 'POST',
    path: '/addcategoryList',
    config: Category.addcategory_List
  },

  {
    method: 'GET',
    path: '/getcategoryList/{cat_id}',
    config: Category.Getcategory_List
  },

  {
    method: 'PUT',
    path: '/updatecategoryList',
    config: Category.updatecategoryList
  },

  // {
  //   method: 'POST',
  //   path: '/addWork',
  //   config: Work.addWork
  // },

  // {
  //   method: 'GET',
  //   path: '/getworkTable/{wr_id}',
  //   config: Work.GetworkTable
  // },

  // {
  //   method: 'PUT',
  //   path: '/updateworkTable',
  //   config: Work.updateworkTable
  // },

  // {
  //   method: 'POST',
  //   path: '/addWorkList',
  //   config: WorkList.addWorkList
  // },

  // {
  //   method: 'GET',
  //   path: '/getworklistTable/{wrl_id}',
  //   config: WorkList.GetworkListTable
  // },

  // {
  //   method: 'PUT',
  //   path: '/updateworklistTable',
  //   config: WorkList.updateworklistTable
  // },

  // {
  //   method: 'POST',
  //   path: '/addWorkPermit',
  //   config: Workpermit.addWorkPermit
  // },

  // {
  //   method: 'GET',
  //   path: '/getworkpermitList/{id}',
  //   config: Workpermit.GetworkpermitList
  // },

  // {
  //   method: 'PUT',
  //   path: '/updateworkpermitlist',
  //   config: Workpermit.updateworkpermitlist
  // },

  // {
  //   method: 'POST',
  //   path: '/addWorkInvolvetable',
  //   config: WorkInvolves.addWorkInvolvetable
  // },

  // {
  //   method: 'GET',
  //   path: '/getworkInvolvesTable/{wit_id}',
  //   config: WorkInvolves.GetworkInvolvesTable
  // },

  // {
  //   method: 'PUT',
  //   path: '/updateworkInvolveTable',
  //   config: WorkInvolves.updateworkInvolveTable
  // },

  {
    method: 'POST',
    path: '/addWorkInvolveListtable',
    config: WorkInvolvesList.addWorkInvolveListtable
  },

  {
    method: 'GET',
    path: '/getworkInvolvesListTable/{wi_id}',
    config: WorkInvolvesList.GetworkInvolvesListTable
  },

  {
    method: 'PUT',
    path: '/updateworkInvolveListTable',
    config: WorkInvolvesList.updateworkInvolveListTable
  },

  {
    method: 'POST',
    path: '/addTypeofPermit',
    config: WorkPermit.addTypeofPermit
  },

  {
    method: 'GET',
    path: '/getTypeofPermit/{typeid}',
    config: WorkPermit.GetTypeofPermit
  },

  {
    method: 'PUT',
    path: '/updateTypeofPermit',
    config: WorkPermit.updateTypeofPermit
  },


  // routes of document types management
  // {
  //   method: 'GET',
  //   path: '/documentType/list/',
  //   config: Doc.documentTypes
  // },
  // // {
  // //   method: 'GET',
  // //   path: '/allAdversevents/',
  // //   config: ADV.get_adverse_events
  // // },
  // {
  //   method: 'POST',
  //   path: '/documentType/add/',
  //   config: Doc.addDocType
  // },
  // {
  //   method: 'POST',
  //   path: '/documentType/edit/',
  //   config: Doc.updateDocType
  // },


  // // routes of document cagtegories
  // {
  //   method: 'GET',
  //   path: '/documentCategory/list/',
  //   config: Doc.documentCats
  // },
  // {
  //   method: 'POST',
  //   path: '/documentCategory/add/',
  //   config: Doc.addDocCat
  // },
  // {
  //   method: 'POST',
  //   path: '/documentCategory/edit/',
  //   config: Doc.updateDocCat
  // },

  // // routes of document cagtegories
  // {
  //   method: 'POST',
  //   path: '/document/create/',
  //   config: Docm.createDocument
  // }, // this api for MR, document creating assignment to any employee
  // {
  //   method: 'POST',
  //   path: '/document/details/update/',
  //   config: Docm.updateDocumentDetails
  // }, // this api for MR, document details update
  // {
  //   method: 'POST',
  //   path: '/document/save/',
  //   config: Docm.addDocument
  // },
  // {
  //   method: 'GET',
  //   path: '/processed/documents/list/',
  //   config: Docm.documentsList
  // },
  // {
  //   method: 'GET',
  //   path: '/all/processed/documents/list/',
  //   config: Docm.allProcessesDocsList
  // },
  // {
  //   method: 'GET',
  //   path: '/released/documents/list/',
  //   config: Docm.releasedDocumentsList
  // },
  // {
  //   method: 'GET',
  //   path: '/archived/documents/list/',
  //   config: Docm.archivedDocumentsList
  // },
  // {
  //   method: 'POST',
  //   path: '/document/data/',
  //   config: Docm.documentData
  // },
  // {
  //   method: 'POST',
  //   path: '/document/update/',
  //   config: Docm.updateDocument
  // },
  // {
  //   method: 'POST',
  //   path: '/document/upload/',
  //   config: Docm.uploadDocument
  // },
  // {
  //   method: 'GET',
  //   path: '/roles/list/',
  //   config: Docm.roles
  // },
  // {
  //   method: 'POST',
  //   path: '/roles/users/list/',
  //   config: Docm.roleWiseUsers
  // },


  // {
  //   method: 'POST',
  //   path: '/link/documents/',
  //   config: Docm.linkDocument
  // },
  // {
  //   method: 'POST',
  //   path: '/document/suggestions/',
  //   config: Docm.suggestions
  // },
  // {
  //   method: 'POST',
  //   path: '/document/suggestions/list/',
  //   config: Docm.suggestionsByDoc
  // },
  // {
  //   method: 'POST',
  //   path: '/document/release/',
  //   config: Docm.releaseDocument
  // },
  // {
  //   method: 'POST',
  //   path: '/document/users/',
  //   config: Docm.documentUsersByRoles
  // },
  // {
  //   method: 'POST',
  //   path: '/document/by/id/',
  //   config: Docm.documentById
  // },
  // {
  //   method: 'POST',
  //   path: '/documents/link/status/',
  //   config: Docm.docsLinkStatus
  // },

  // // incidents

  // // causes
  // {
  //   method: 'POST',
  //   path: '/incident/update/severity/investigation',
  //   config: Inc.updateInvestigartorSeverity
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/get/emplist/rolewise',
  //   config: Inc.get_employees_role_wise
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/save/causes/',
  //   config: Inc.addUpdCause
  // },
  // {
  //   method: 'GET',
  //   path: '/incidents/get/list/',
  //   config: Inc.getCausesList
  // },
  // //////new incident routes
  // // {
  // //   method: 'GET',
  // //   path: '/incidents/all/',
  // //   config: Ins.allIncidentsList
  // // },
  // //////new incident routes ending

  // // incident process
  // {
  //   method: 'GET',
  //   path: '/incidents/get/all/list/',
  //   config: Inc.allIncidentsList
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/get/investigate/list/',
  //   config: Inc.allIncidentsListForInvestigator
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/get/all/details/',
  //   config: Inc.allDetailsByIncidentId
  // },
  // {
  //   method: 'GET',
  //   path: '/incidents/get/imagePath/{id}',
  //   config: Inc.getImgPath
  // },

  // {
  //   method: 'GET',
  //   path: '/incidents/get/investigators/list/',
  //   config: Inc.allUsersListForLinkInvestigator
  // },
  // {
  //   method: 'GET',
  //   path: '/incidents/get/supervisors/list/',
  //   config: Inc.allUsersListForSupervisor
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/link/investigators/',
  //   config: Inc.LinkInvestigatorToIncident
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/close/investigation/',
  //   config: Inc.closeIncidentInvestigation
  // }, //close investigation incident
  // {
  //   method: 'POST',
  //   path: '/incidents/close/final/',
  //   config: Inc.closeIncidentFinal
  // }, //close incident by head

  // {
  //   method: 'GET',
  //   path: '/incidents/emplist/',
  //   config: IEMPL.get_employees

  // },
  // {
  //   method: 'GET',
  //   path: '/incidents/get/emps/list/',
  //   config: Inc.allUsersListForInjWit
  // }, // for injuries and witness

  // // { method: 'POST', path: '/incidents/raise/new/', config: Inc.raiseNewIncident }, //raise new incident

  // {
  //   method: 'POST',
  //   path: '/incidents/investigation/all/save/',
  //   config: Inc.saveInvestigationDetailsByModule
  // }, //raise new incident

  // {
  //   method: 'POST',
  //   path: '/incidents/actions/save/',
  //   config: Inc.saveActionDetails
  // },

  // {
  //   method: 'POST',
  //   path: '/incidents/investigation/delete/',
  //   config: Inc.deleteInvestigatedDetails
  // }, // by id

  // {
  //   method: 'POST',
  //   path: '/incidents/investigation/delete/emp/',
  //   config: Inc.deleteInvestigatedDetailsByEmp
  // }, // by emp

  // //list for first aid
  // {
  //   method: 'GET',
  //   path: '/incidents/firstaid/byperson/',
  //   config: Inc.firstaiddetailsforuser
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/firstaidclose/',
  //   config: Inc.Closefirstaidreport
  // },
  // {
  //   method: 'GET',
  //   path: '/incidents/getallhospitals/list/',
  //   config: Inc.getallhospitallist
  // },
  // {
  //   method: 'GET',
  //   path: '/incidents/getlistraisedbyme/',
  //   config: Inc.getlistraisedbyme
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/add_recall/',
  //   config: Inc.recall_incident
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/updateinvestigartorsview/',
  //   config: Inc.updateinvestigartorsview
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/getfirstaid/listbyperson/',
  //   config: Inc.getfirstaidlistbyperson
  // },


  // {
  //   method: 'POST',
  //   path: '/incidents/cost/getdetails',
  //   config: Inc.get_cost_details
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/cost/addcostdetails',
  //   config: Inc.add_cost_details
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/cost/addcostInjurytoPeople',
  //   config: Inc.add_cost_Injury_to_People
  // },
  // {
  //   method: 'POST',
  //   path: '/incidents/group/similar',
  //   config: Inc.SimilarIncidents
  // },

  // // nc

  // {
  //   method: 'POST',
  //   path: '/nc/close/report/',
  //   config: NC.closeReportForNc
  // },
  // {
  //   method: 'GET',
  //   path: '/nc/all/issues/list/',
  //   config: NC.allIssuesInNc
  // }, // all issues list for manager
  // {
  //   method: 'GET',
  //   path: '/nc/get/all/issues/empcode/',
  //   config: NC.getAllIssuesByempcode
  // }, // all issues by empcode
  // {
  //   method: 'POST',
  //   path: '/nc/get/full/details/issueid/',
  //   config: NC.getAllDetailsByIssueId
  // }, // full details of issue
  // {
  //   method: 'GET',
  //   path: '/nc/dash/list/',
  //   config: NC.getNCDashList
  // },

  // //work_permit
  // {
  //   method: 'POST',
  //   path: '/work_permit/add/data/',
  //   config: WKP.workpermitadd
  // },
  // {
  //   method: 'POST',
  //   path: '/work_permit/get/data/',
  //   config: WKP.workpermitdata
  // },
  // {
  //   method: 'POST',
  //   path: '/work_permit/get/data/safetyassesor/',
  //   config: WKP.workpermitsafetyassesor
  // },
  // //{ method: 'POST', path: '/work_permit/add/safety/data/', config: WKP.addsafetyreport },
  // //{ method: 'GET', path: '/work_permit/get/authoriz/data/', config: WKP.getdataforauthorization },
  // //{ method: 'POST', path: '/work-permit/get/fulldata/', config: WKP.getfulldata },
  // {
  //   method: 'POST',
  //   path: '/work_permit/add/safety/data/',
  //   config: WKP.addsafetyreport1
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/fulldata/',
  //   config: WKP.getfulldata
  // },
  // {
  //   method: 'POST',
  //   path: '/work_permit/add/emp/permit/',
  //   config: WKP.addemployeetopermit
  // },
  // {
  //   method: 'POST',
  //   path: '/work_permit/surrender/permit/',
  //   config: WKP.surrenderworkpermit
  // },
  // {
  //   method: 'POST',
  //   path: '/work_permit/addextension/permit/',
  //   config: WKP.addextensionworkpermit
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/sel_Work_Permit_data/',
  //   config: WKP.sel_Work_Permit_data
  // },
  // {
  //   method: 'GET',
  //   path: '/work-permit/get/get_All_Workpermits/',
  //   config: WKP.get_All_Workpermits
  // },

  // {
  //   method: 'POST',
  //   path: '/work-permit/get/authorize_Wp/',
  //   config: WKP.authorize_Wp
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/sel_HRPPE_for_sel_WP/',
  //   config: WKP.sel_HRPPE_for_sel_work_permist
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/get_Hazards_for_sel_work_permit/',
  //   config: WKP.get_Hazards_for_sel_work_permit
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/get_Risks_for_sel_hazards/',
  //   config: WKP.get_Risks_for_sel_hazards
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/get_PPE_for_sel_risks/',
  //   config: WKP.get_PPE_for_sel_risks
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/emplist/supervisor/',
  //   config: WKP.get_employees_for_supervisor
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/emplist/supervisor/status',
  //   config: WKP.get_employees_for_supervisor_status
  // },
  // {
  //   method: 'POST',
  //   path: '/work_permit/get/testspermitdata/',
  //   config: WKP.testspermitdata
  // },

  // // { method: 'POST', path: '/emp_mgmt/health/common_Update/', config: EMP.common_Update },
  // // { method: 'POST', path: '/emp_mgmt/health/common_Update/', config: EMP.common_Update },
  // // employee management
  // {
  //   method: 'GET',
  //   path: '/emp_mgmt/dept/getdept_list/',
  //   config: EMP.get_departments
  // }, // GET all Departments
  // {
  //   method: 'GET',
  //   path: '/emp_mgmt/dept/get_designation/',
  //   config: EMP.get_designation
  // }, // GET all Departments
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/health/get_all_health_issue/',
  //   config: EMP.get_all_health_issue
  // }, // GET all healthe issues
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/health/common_aDD/',
  //   config: EMP.common_aDD
  // }, // ADD DISABILITIES,ALLERGIES,HEALTH ISSUES,PHOBIAS
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/health/common_Update/',
  //   config: EMP.common_Update
  // }, // UPDATE DISABILITIES,ALLERGIES,HEALTH ISSUES,PHOBIAS
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/health/common_Delete/',
  //   config: EMP.common_Delete
  // }, // UPDATE DISABILITIES,ALLERGIES,HEALTH ISSUES,PHOBIAS
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/emp/add_Employee/',
  //   config: EMP.add_Employee
  // }, // ADD  EMPLOYEES
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/emp/update_Employee/',
  //   config: EMP.update_Employee
  // }, // UPDATE Employees
  // {
  //   method: 'GET',
  //   path: '/emp_mgmt/emp/get_All_Employees/',
  //   config: EMP.get_All_Employees
  // }, // GET employees
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/emp/add_Employee1/',
  //   config: EMP.add_Employee1
  // }, // ADD  EMPLOYEES
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/dept/emp_excel_upload/',
  //   config: EMP.emp_Excel_upload
  // }, // ADD  EMPLOYEES
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/dept/emp_excel_upload_update/',
  //   config: EMP.emp_excel_upload_update
  // }, // ADD  EMPLOYEES
  // {
  //   method: 'POST',
  //   path: '/emp_mgmt/dept/emp_Status_Update/',
  //   config: EMP.emp_Status_Update
  // }, // ADD  EMPLOYEES
  // {
  //   method: 'GET',
  //   path: '/emp_mgmt/emp/get_All_in_active_Employees/',
  //   config: EMP.get_All_in_active_Employees
  // },

  // //Linking WORK PERMIT,HAZARDS,RISKS,PPE
  // //Linking WORK PERMIT,HAZARDS,RISKS,PPE
  // {
  //   method: 'POST',
  //   path: '/links/link_module/links_Add/',
  //   config: Link_Modules.links_Add
  // }, // ADD WORK PERMIT,HAZARDS,RISKS,PPE,PRECAUTIONS,JSEA
  // {
  //   method: 'POST',
  //   path: '/links/link_module/links_Update/',
  //   config: Link_Modules.links_Update
  // }, // Update WORK PERMIT,HAZARDS,RISKS,PPE,PRECAUTIONS,JSEA
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_Work_Permits/',
  //   config: Link_Modules.get_Work_Permits
  // },
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_Hazards/',
  //   config: Link_Modules.get_Hazards
  // },
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_Risks/',
  //   config: Link_Modules.get_Risks
  // },
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_Precautions/',
  //   config: Link_Modules.get_Precautions
  // },
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_Ppe/',
  //   config: Link_Modules.get_Ppe
  // },
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_All_Links_Data/',
  //   config: Link_Modules.get_All_Links_Data
  // },
  // {
  //   method: 'POST',
  //   path: '/links/link_module/ppe_Add/',
  //   config: Link_Modules.ppe_Add
  // },
  // {
  //   method: 'POST',
  //   path: '/links/link_module/ppe_Update/',
  //   config: Link_Modules.ppe_Update
  // },

  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_PPES1/',
  //   config: Link_Modules.get_PPES1
  // },
  // {
  //   method: 'POST',
  //   path: '/links/link_module/stores_Add/',
  //   config: Link_Modules.stores_Add
  // },
  // {
  //   method: 'POST',
  //   path: '/links/link_module/stores_Balance/',
  //   config: Link_Modules.stores_Balance
  // },
  // {
  //   method: 'GET',
  //   path: '/links/link_module/stores_Data/',
  //   config: Link_Modules.stores_Data
  // },
  // {
  //   method: 'GET',
  //   path: '/links/link_module/stores_aval_balance/',
  //   config: Link_Modules.stores_aval_balance
  // }, // STORES BALANCE
  // {
  //   method: 'GET',
  //   path: '/links/link_module/lowstock_items_count',
  //   config: Link_Modules.lowStockItemsCount
  // }, // LOW STOCK ITEMS COUNT
  // {
  //   method: 'POST',
  //   path: '/links/link_module/getBalance_by_wpno/',
  //   config: Link_Modules.get_Bal_by_wpno
  // }, // GET PPES STOCK BY WP NO
  // {
  //   method: 'POST',
  //   path: '/links/link_module/stores_Add1/',
  //   config: Link_Modules.stores_Add1
  // }, // STOCK ADD
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_ppes_workpermits/',
  //   config: Link_Modules.get_ppes_workpermits
  // }, // GET W PERMITS OF STATUS =3
  // {
  //   method: 'POST',
  //   path: '/links/link_module/issue_stock/',
  //   config: Link_Modules.issue_stock
  // }, // Stock ISSUE
  // {
  //   method: 'POST',
  //   path: '/links/link_module/return_stock/',
  //   config: Link_Modules.return_stock
  // }, // Stock RETURN
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_surrender_workpermits/',
  //   config: Link_Modules.get_surrender_workpermits
  // }, // GET W PERMITS OF STATUS = 6
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_not_surrender_workpermits/',
  //   config: Link_Modules.get_not_surrender_workpermits
  // }, // GET W PERMITS OF STATUS = 6
  // {
  //   method: 'GET',
  //   path: '/links/link_module/get_procurements/',
  //   config: Link_Modules.get_procurements
  // }, // GET W PERMITS OF STATUS = 6
  // {
  //   method: 'POST',
  //   path: '/links/link_module/proc_add_to_stores/',
  //   config: Link_Modules.proc_add_to_stores
  // }, // GET W PERMITS OF STATUS = 6
  // {
  //   method: 'POST',
  //   path: '/links/link_module/addprocurement/',
  //   config: Link_Modules.procurementadd
  // },

  // // ROLES
  // {
  //   method: 'GET',
  //   path: '/roles/get/all/modules/status/1',
  //   config: ROLES.getAllModuleListWithStatus
  // }, // GET all Modules with status 1
  // {
  //   method: 'GET',
  //   path: '/roles/get/all/roles/status/1',
  //   config: ROLES.getAllRoleListWithStatus
  // }, // GET all Roles with status 1
  // {
  //   method: 'GET',
  //   path: '/roles/get/all/modules/',
  //   config: ROLES.getAllModuleList
  // }, // GET all Modules
  // {
  //   method: 'GET',
  //   path: '/roles/get/all/roles/',
  //   config: ROLES.getAllRoleList
  // }, // GET all Roles
  // {
  //   method: 'POST',
  //   path: '/roles/add/update/role/',
  //   config: ROLES.addUpdRole
  // }, // add update Roles
  // {
  //   method: 'POST',
  //   path: '/roles/add/update/module/',
  //   config: ROLES.addUpdModule
  // }, // add update modules
  // {
  //   method: 'GET',
  //   path: '/roles/get/all/roles/modules/status/1',
  //   config: ROLES.getAllRoleModulesListWithStatus
  // }, // GET all Roles Modules with status 1
  // {
  //   method: 'GET',
  //   path: '/roles/get/all/roles/modules/',
  //   config: ROLES.getAllRoleModuleList
  // }, // GET all Modules Roles list link up
  // {
  //   method: 'POST',
  //   path: '/roles/add/update/roles/modules/',
  //   config: ROLES.addUpdRoleModule
  // }, // add update modules role
  // {
  //   method: 'POST',
  //   path: '/roles/get/all/roles/employee/present',
  //   config: ROLES.getAllRolesByEmployeePresent
  // }, // get allroles by emp_id present roles
  // {
  //   method: 'POST',
  //   path: '/roles/get/all/roles/employee/futher',
  //   config: ROLES.getAllRolesByEmployeeFuther
  // }, // get allroles by emp_id futher roles

  // get user roles
  {
    method: 'POST',
    path: '/roles/get/all/roles/by/employee',
    config: ROLES.getAllRolesByEmployeePresent
  }, // get all roles by emp_id

  // {
  //   method: 'POST',
  //   path: '/roles/assign/all/roles/employees',
  //   config: ROLES.AssignAllRolesEmployees
  // }, // assign all roles  emp_id's
  // {
  //   method: 'POST',
  //   path: '/roles/assign/all/roles/employees/by/process',
  //   config: ROLES.getAllRolesEmployeesDataByProcess
  // }, // get all roles  emp_id's  by process
  // {
  //   method: 'POST',
  //   path: '/roles/get/list/designation',
  //   config: ROLES.get_for_designationwise
  // },
  // // Roles List
  // {
  //   method: 'GET',
  //   path: '/roles/get/list/assignRoles',
  //   config: ROLES.assignRoles
  // },
  // // change deadline
  // {
  //   method: 'POST',
  //   path: '/nc/request/chnagedeadline',
  //   config: NC.req_newDeadLine
  // },

  // // response to change deadline
  // {
  //   method: 'POST',
  //   path: '/nc/request/responsedeadline',
  //   config: NC.responseDeadLine
  // },
  // {
  //   method: 'POST',
  //   path: '/work-permit/get/authorize_Wp/NOT',
  //   config: WKP.authorize_Wp_NOT
  // },
  // {
  //   method: 'GET',
  //   path: '/getppes/getworkpermits/appr/pending',
  //   config: Link_Modules.get_ppes_workpermits_app_pendings
  // },
  // {
  //   method: 'GET',
  //   path: '/getppes/getworkpermits/appr/pending/list',
  //   config: Link_Modules.approval_pending_ppe_list
  // },
  // {
  //   method: 'GET',
  //   path: '/getppes/getworkpermits/appr/list',
  //   config: Link_Modules.approval_ppe_list
  // },
  // {
  //   method: 'POST',
  //   path: '/links/link_module/issue_stock/Appr/Pending',
  //   config: Link_Modules.issue_stock_approved_pending
  // },

  // {
  //   method: 'GET',
  //   path: '/getppes/getworkpermits/pending',
  //   config: Link_Modules.get_ppes_workpermits_pendings
  // },

  // {
  //   method: 'GET',
  //   path: '/get/investigate/standards/',
  //   config: Inc.get_investigated_standards
  // },

  // {
  //   method: 'POST',
  //   path: '/incidents/get/all/list/date',
  //   config: Inc.allIncidentsListbyDate
  // },

  // {
  //   method: 'GET',
  //   path: '/get/supervisors/uptodate',
  //   config: Inc.getsupervisorlist
  // },
  // {
  //   method: 'GET',
  //   path: '/get/assests/locationwise',
  //   config: Inc.getaseesstlist
  // },
  // {
  //   method: 'GET',
  //   path: '/get/countofpermits/supervisor',
  //   config: WKP.getcountforpermitwise
  // },
  // {
  //   method: 'POST',
  //   path: '/links/link_module/low_stock_config',
  //   config: Link_Modules.low_stock_config
  // }, // low stock qty config


  // {
  //   method: 'POST',
  //   path: '/add/kpi_targets/lists',
  //   config: Inc.adddataforkpi
  // },
  // {
  //   method: 'GET',
  //   path: '/get/kpi_targets/lists',
  //   config: Inc.getdataforkpi
  // },
  // {
  //   path: '/upload/{resumename*}',
  //   method: 'GET',
  //   handler: async (request, h) => {
  //       let picname = request.params.resumename;
  //       const path = `upload/${picname}`;
  //       try {
  //           if (!fs.existsSync(path)) {
  //               //file exists
  //               picname = 'nodatafound.png';
  //           }
  //       } catch (err) {
  //           console.error(err)
  //       }
  //       return h.file(`./upload/${picname}`, {
  //           // mode: 'attachment',
  //           filename:picname
  //       });

  //   }
  // },
  // {
  //   method: 'POST',
  //   path: '/imageUpload',
  //   config: IMG.image_upload
  // },

  // RA- Assessment
  {
    method: 'GET',
    path: '/get/ra/specific/type_list',
    config: fetch_specific
  },
  {
    method: 'GET',
    path: '/get/ra/risk/tech_list',
    config: fetch_risk_tech
  },
  {
    method: 'GET',
    path: '/get/ra/location/list',
    config: fetch_Location
  },
  {
    method: 'POST',
    path: '/post/ra/risk',
    config: insert_risk
  },
  
  // dashboard Reports   Poorna

  // ...save_data, 
  // ...save_data1,
  // ...investigation_details,
  // ...Substance_p,
  // ...Details_equipment,
  // // ...Substance_type,
  // ...post_inv_pers,
  // // ...incidentDetails,
  // ...workplaceType,
  // ...mediaUpload,
  // ...reportingPerson,
  // ...getPremisesType,
  // ...premises_details,
  // //...DashReports,
  // ...GET_cf,
  //...auditRoutes,
  //...trainingRoutes,
  //...gatepassRoutes,
  //...auditReports,
  //...notificationRoutes,
  //...riskRoutes,
  //...cronRoutes,
  //...helperRoutes,
  // ...VenderManagementRoutes,
  // ...ergonomicRoutes,
  // //...helperRoutes,
  // ...SafetyMeetingsRoutes,
  // ...empTrainingRoutes,
  // ...Imageuploadroutes,
  // ...Licenses,
  // ...Locations,
  //------------final for submit-----------/
  // ...final_form_submit,
  // ...NcRoutes,
  // ...work_permits,
  // ...ptwConfig,
  // ...hazards_risks_ppes,
  // ...newpermits,
  // ...LocationRoutes,
  // ...Injuries,
  // ...pers_details2,
  // ...FinalReport,
  // ...substance_2,
  // ...premises_data_2,
  //...checking,
  // ...Report,
  // ...Final_report,
  // ...GET_adverse,
  // ...d_equipment_2,
  // ...GET_form1,
  // ...GET_form3,
  // ...POST_SUBMIT
]
// ppmp_material_details

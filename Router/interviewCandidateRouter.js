const express = require("express");
const interviewCandidateRouter = express.Router();
const interviewCandidateController = require("../Controller/interviewCandidateController.js");
interviewCandidateRouter.post("/newInterviewCandidate", interviewCandidateController.newInterviewCandidate);
interviewCandidateRouter.get("/getAllInterviewCandidate", interviewCandidateController.getAllInterviewCandidate);
interviewCandidateRouter.get("/getInterviewCandidateById/:id", interviewCandidateController.getInterviewCandidateById);
interviewCandidateRouter.put("/updateInterviewCandidateById/:id", interviewCandidateController.updateInterviewCandidateById);
interviewCandidateRouter.delete("/deleteInterviewCandidateById/:id", interviewCandidateController.deleteInterviewCandidateById);

module.exports = interviewCandidateRouter;

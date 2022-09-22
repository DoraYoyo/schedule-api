var express = require('express');
var router = express.Router();

const scheduleService = require('../Service/ScheduleService.js');

//CREATE
router.post("/schedule", (request, result) => {
    let newSubject = scheduleService.addSubject(request.body);
    result.status(200).send(newSubject);
});

//READ ALL
router.get("/schedule", (request, result) => {
    const subjectsList = scheduleService.getAllSubjects();

    if(subjectsList!=undefined && subjectsList.length!=0)
        result.status(200).send(subjectsList);
    else 
        result.status(204).send("No subjects found!");
});

//UPDATE
router.put("/schedule/:id", (request, result) => {
    const subjectsList = scheduleService.getAllSubjects();

    const subjectId = request.params.id;
    let foundSubject = false;

    for(let i=0; i<subjectsList.length; i++)
        if(subjectsList[i].id == subjectId){
            subjectsList[i].subject = request.body.subject;
            subjectsList[i].day = requets.body.day;
            subjectsList[i].hour = request.body.hour;

            foundSubject = true;
            break;
        }
    
    if(foundSubject){
        scheduleService.commitScheduleChanges(subjectsList);
        result.status(200).send(subjectsList[i]);
    }
    else result.status(204).send("No subject found!");
});

//DELETE
router.delete("/subjects/:id", (request, result) => {
    const subjectsList = scheduleService.getAllSubjects();

    const subjectId = request.params.id;
    let foundSubject = false;

    for(let i=0; i<subjectsList.length; i++)
        if(subjectsList[i].id == subjectId){
            subjectsList.splice(i, 1);
            foundSubject=true;
            break;
        }
    if(foundSubject){
        scheduleService.commitScheduleChanges(subjectsList);
        result.status(200).send("Subject deleted");
    }
    else result.status(204).send("No subject found!");
});

module.exports = router;
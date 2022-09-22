const scheduleRepository = require('../Repository/ScheduleRepository.js');
const uuid = require("uuid");

module.exports.getAllSubjects = () => {
    const subjectsList = scheduleRepository.readJSONFile();
    return subjectsList;
}

module.exports.addSubject = (newSubject)=> {
    const subjectsList = scheduleRepository.readJSONFile();

    newSubject.id = uuid.v4.apply();
    subjectsList.push(newSubject);
    scheduleRepository.writeJSONFile(subjectsList);

    return newSubject;
}

module.exports.commitScheduleChanges = (newSubjectsList) => {
    scheduleRepository.writeJSONFile(newSubjectsList);
}
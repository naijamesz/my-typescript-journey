type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplicatedJob = SimpleJob & {
  // type intersection
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
};

const complicatedJob: ComplicatedJob = {
  codingLanguage: 'TS',
  sourceControl: 'git',
  hasManyMeetings: true,
  reportsToBeCompleted: ['hourly', 'daily', 'weekly'],
};

type MeetingHolder = {
  meetingMaxLength: number;
  holdMeeting: () => void;
};

class ProjectManager implements MeetingHolder {
  meetingMaxLength = 60;
  holdMeeting = () => {
    console.log('Just holding a meeting');
  };
}
class TeamLead implements MeetingHolder {
  meetingMaxLength = 30;
  holdMeeting = () => {
    console.log('Just holding a team lead meeting');
  };
}
const projectManager = new ProjectManager();
const teamLead = new TeamLead();

console.log(projectManager);
console.log(teamLead);
console.log(projectManager.holdMeeting());
console.log(teamLead.holdMeeting());

console.log(complicatedJob);
// This file demonstrates type extension using intersection types and class implementation of interfaces.

export {};


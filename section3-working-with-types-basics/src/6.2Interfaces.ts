// Interfaces in TypeScript Interface is a way to define the structure type of an object
interface SimpleJob {
  codingLanguage: string;
  sourceControl: string;
}

interface ComplicatedJob extends SimpleJob {
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
}

let complicatedJob: ComplicatedJob = {
  codingLanguage: 'TS',
  sourceControl: 'git',
  hasManyMeetings: true,
  reportsToBeCompleted: ['hourly', 'daily', 'weekly'],
};

interface MeetingHolder {
  meetingMaxLength: number;
  holdMeeting: () => void;
}

interface MeetingHolder {
  endMeeting: () => void;
}

class ProjectManager implements MeetingHolder {
  meetingMaxLength = 60;
  holdMeeting = () => {
    console.log('Just holding a meeting');
  };
  endMeeting = () => {
    console.log('Finally the meeting ended');
  };
}

export {};

import { Project } from "./project";
export class Issue {
    id: number;
    issueName: String;
    description: String;
    project: Project;
    deadline: Date;
}

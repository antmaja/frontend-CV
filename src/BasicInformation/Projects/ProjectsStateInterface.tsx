interface ProjectsStateInterface {
  arrayProjects: [
    {
      name: string;
      position: string;
      from: string;
      to: string;
      description: string;
      show: boolean;
      numChar: number;
      maxChar: number;
    }
  ];
}
export default ProjectsStateInterface;

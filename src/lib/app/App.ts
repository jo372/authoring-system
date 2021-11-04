class App {
    private static _instance : App;
    private static Project project;
    private constructor() {}
    public static getInstance() : App {
        if(!App._instance) {
            App._instance = new App();
        }
        return App._instance;
    }
    public createProject(name: string) {}
    public loadProject(name: string) {}
    public import(projectPath: string) {}
    public export(projectPath: string) {}
}
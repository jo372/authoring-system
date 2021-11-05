interface ProjectPaths {
    export : string,
    import: string
}

interface ProjectProps {
    name?: string,
    uuid?: string,
    // pages?: Page[],
    paths?: ProjectPaths,
    imagePreview?: string;
}

class Project {
    public name: string;
    public uuid: string;
    // public pages: Page[];
    public paths: ProjectPaths;
    public imagePreview: string;
    public static get defaultProps() : Required<ProjectProps> {
        return {
            name : "",
            uuid : "",
            // pages : [],
            paths : {
                import: "",
                export: ""
            },
            imagePreview : ""
        }
    }
    //console.log({...Project.defaultProps, ...config});
    constructor(config?: Partial<ProjectProps>) {
        const { name, uuid, paths, imagePreview } : ProjectProps = {...Project.defaultProps, ...config}
        this.name = name;
        this.uuid = uuid;
        // this.pages = pages;
        this.paths = paths;
        this.imagePreview = imagePreview;
    }
}

export default Project;
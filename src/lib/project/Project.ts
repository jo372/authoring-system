import Page from "../page/Page";
import { v4 as uuidv4 } from 'uuid';

interface ProjectPaths {
    export : string,
    import: string
}

interface ProjectProps {
    name?: string,
    uuid?: string,
    pages?: Array<Page>,
    paths?: ProjectPaths,
    imagePreview?: string;
}

class Project {
    public name: string;
    public readonly uuid: string = uuidv4();
    public pages: Array<Page> = new Array();
    public paths: ProjectPaths;
    public imagePreview: string;
    public static get defaultProps() : Required<ProjectProps> {
        return {
            name : "",
            uuid : "",
            pages : [],
            paths : {
                import: "",
                export: ""
            },
            imagePreview : ""
        }
    }
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
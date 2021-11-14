interface PageProps {
    title?: string, 
    path?: string
}

class Page {
    public title: string;
    public path: string;
    constructor(params?: Partial<PageProps>) {
        this.title = params?.title ?? "";
        this.path = params?.path ?? "";
    }
}

export default Page;
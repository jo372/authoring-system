abstract class RenderableComponent<P = {}> {
    private _defaultProps: Partial<P> = {};
    private _props : Partial<P> = {};
    private _children: RenderableComponent[] = [];
    constructor(props?: Partial<P>) {
        this._props = props ?? {};
        
        if(this._props['children']) {
            this._children = this._props['children'] as RenderableComponent[];
        }
    }
    
    public get props() : Partial<P> {
        return {...this._defaultProps, ...this._props};
    }

    private set props(props: Partial<P>) {
        this._props = {...props, ...this._defaultProps};
    }

    protected get defaultProps() : Partial<P> {
        return this._defaultProps;
    }
    
    protected set defaultProps(config: Partial<P>) {
        this._defaultProps = {...config};
    }
    
    public addChild<C extends RenderableComponent>(child: C) {
        this._children.push(child);
    }

    public removeChild<C extends RenderableComponent>(child: C) {
        this._children = this._children.filter(c => c !== child);
    }

    public removeChildAtIndex(index: number) {
        this._children.splice(index, 1);
    }

    public get children() : RenderableComponent[] {
        return this._children;
    }

    public toJSON() : Record<string, string> {
        return Object.fromEntries(Object.entries(this.props));
    }
}

export default RenderableComponent;
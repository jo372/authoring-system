abstract class RenderableComponent<P = {}> {
    private _defaultProps: Partial<P> = {};
    private _props : Partial<P> = {};
    private _children: RenderableComponent[] = [];
    constructor(props: Partial<P>) {
        this._props = props;
    }
    
    public get props() : Partial<P> {
        return this._props;
    }

    private set props(props: Partial<P>) {
        this._props = {...props, ...this._defaultProps};
    }

    protected get defaultProps() : Partial<P> {
        return this._defaultProps;
    }
    
    protected set defaultProps(config: Partial<P>) {
        this._defaultProps = {...config, ...this._props};
        this.props = this.defaultProps;
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

}

export default RenderableComponent;
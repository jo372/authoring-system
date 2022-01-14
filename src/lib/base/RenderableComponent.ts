abstract class RenderableComponent<P = {}, S = {}> {
    private _props : Partial<P> = {};
    private _defaultProps: Partial<P> = {};
    private _state : Partial<S> = {};
    private _children : RenderableComponent[] = [];
    
    constructor(props?: P, state?: S) {
        this._props = props ?? {};
        this._state = state ?? {};

        if(this._props['children']) {
            this._children = this._props['children'] as RenderableComponent[];
        }
    }
    
    // public useState = <T>(initial: T) => {
    //     let state = initial;
    //     const cb = (value: T) => {
    //         state = value;
    //     }
    //     return [() => state, cb];
    // }

    protected set state(states: Partial<S>) {
        this._state = {...states};
    }

    protected get state() { 
        return this._state;
    }

    /**
     * prevState 
     * {
     *    test: "test"
     * }
     * 
     */
    
    // setState({ stateName : updatedStateValue })

    // // OR
    // setState((prevState) => ({ 
    //    stateName: prevState.stateName + 1 
    // }))

    protected setState(cb: (prevState: Required<S>, prevProps: Required<P>)=> Partial<S>) {
        const newState = cb(this._state as Required<S>, this._props as Required<P>);
        this._state = {...this._state, ...newState};
    }

    public get props() : Required<P> {
        return {...this._defaultProps, ...this._props} as Required<P>;
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
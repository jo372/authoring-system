import { v4 as uuidv4 } from 'uuid';

abstract class RenderableComponent<P = {}> {
    private _defaultProps: Partial<P> = {};
    private _props : Partial<P> = {};
    
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
    }
}

export default RenderableComponent;
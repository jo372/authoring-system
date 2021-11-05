import { v4 as uuidv4 } from 'uuid';

abstract class Base<P = {}, S = {}> {
    private _defaultProps: Partial<P> = {};
    private _props : Partial<P> = {};
    private _state : Partial<S> = {};

    constructor(props: Partial<P>, state?: Partial<S>) {
        this._props = props;
        this._state = state ?? {};
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
    protected get state() {
        return this._state;
    }
    protected set state(state: Record<any, any>) {
        this._state = {...this._state, ...state};
    }
    protected setState<T>(value: T) : [T, (newValue: T) => void] {
        
        // return [value, updateC]

        // this.state = {...this.state, ...newState};
        const uuid = uuidv4();
        console.log(`old uuid`, uuid)
        const updateCB = (newValue: T) => {
            this._state[uuid] = newValue;
            console.log(this._state[uuid]);
        }
        return [value, updateCB];
    }
}

export default Base;
const Screen = () => {
    let _children : HTMLElement[] = new Array();

    const addChild = <C extends HTMLElement>(...children : C[]) => {
        children.forEach(c => _children.push(c));
    }

    const removeChild = <C extends HTMLElement>(...children : C[]) => {
        children.forEach((c, i) => _children.splice(i, 1));
    }
    
    const createElement = () : HTMLElement => {
        const el = document.createElement('div');
        el.append(..._children);
        
        return el;
    }

    const el = createElement(); 
    return {
        element: el,
        addChild,
        removeChild
    }
}

export default Screen;
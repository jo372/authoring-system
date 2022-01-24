interface PageControlsProps {
    text ?: string,
    isActive ?: boolean
}

export const PageControlItem = (props?: PageControlsProps) => {

    const template = document.createElement('template');
    const html = `<li class="page-controls__list-item${(props?.isActive ?? false) ? ' active' : ''}">
        <span>${props?.text ? props.text : ''}</span>
        <ul class="page-controls__list-item__options">
            <li><i class="far fa-clone"></i></li>
            <li><i class="fas fa-pencil-alt"></i></li>
            <li><i class="far fa-trash-alt"></i></li>
        </ul>
    </li>`.trim();
    
    template.innerHTML = html;

    return template.content.firstChild as HTMLLIElement;
}
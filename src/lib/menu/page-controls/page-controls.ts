import Modal from '../../modal/Modal';

interface PageControlsProps {
    text ?: string,
    isActive ?: boolean
}

export const PageControlItem = (props?: PageControlsProps) => {

    const template = document.createElement('template');
    const modal = Modal.getInstance();
    const html = `<li class="page-controls__list-item${(props?.isActive ?? false) ? ' active' : ''}">
        <span>${props?.text ? props.text : ''}</span>
        <ul class="page-controls__list-item__options">
            <li><i class="far fa-clone"></i></li>
            <li><i class="fas fa-pencil-alt"></i></li>
            <li><i class="far fa-trash-alt"></i></li>
        </ul>
    </li>`.trim();
    
    template.innerHTML = html;

    const pageControl = template.content.firstChild as HTMLLIElement;
    const listItems = Array.from(pageControl.querySelectorAll('li') as NodeListOf<HTMLLIElement>) ?? [];

    const cloneButton = () => {
        modal.show();
    }
    const editButton = () => {}
    const deleteButton = () => {
        modal.setTitle("Warning: This will delete the page");
        modal.setMessage("Are you sure you want to delete this page?");
        modal.show();
    }


    listItems[0].addEventListener('click', cloneButton);
    listItems[1].addEventListener('click', editButton);
    listItems[2].addEventListener('click', deleteButton);

    return pageControl;

}
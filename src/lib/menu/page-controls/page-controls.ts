import Modal from '../../modal/Modal';
import './page-controls.css';

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
    const currentNavLogo = document.querySelector('.main__content__nav-logo') as HTMLDivElement;

    const updatePageNameTo = (name: string) => {
        if(currentNavLogo) {
            const currentPageName = (pageControl.querySelector('span') as HTMLSpanElement).textContent ?? "";
            currentNavLogo.innerText = currentPageName;
        }
    }

    pageControl.addEventListener('click', () => {
        const currentActiveElement = document.querySelector('.page-controls__list-item.active');
        if(currentActiveElement) {
            currentActiveElement.classList.remove('active');
        }
        pageControl.classList.add('active');
        updatePageNameTo(pageControl.querySelector('span')?.textContent ?? "");
    });
    const listItems = Array.from(pageControl.querySelectorAll('li') as NodeListOf<HTMLLIElement>) ?? [];

    const cloneButton = () => {}
    const editButton = () => {
        const currentPageName = (pageControl.querySelector('span') as HTMLSpanElement);
        if(currentPageName) {
            currentPageName.setAttribute('contenteditable', '');
            currentPageName.focus();
            const keyEventListener = (e: KeyboardEvent) => {
                if(e.key === 'Enter') {
                    currentPageName.removeAttribute('contenteditable');
                    updatePageNameTo(pageControl.querySelector('span')?.textContent ?? "");
                    currentPageName.removeEventListener('keydown', keyEventListener);
                }
            }
            currentPageName.addEventListener('keydown', keyEventListener);
        }
    }
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
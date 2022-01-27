import "bootstrap/dist/css/bootstrap";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {PageControlItem} from './lib/menu/page-controls/page-controls';
import './lib/menu/page-controls/page-controls-searchbox.ts';
import Preview, { PreviewScreenSize } from './lib/preview/Preview';

const pagesList : HTMLUListElement | null = document.getElementById('page-control__pages__list') as HTMLUListElement;

if(pagesList) {
    
    ['Home', 'Demo', 'Features'].forEach((pageName, idx) => {
        const pageItem = PageControlItem({
            text: pageName,
            isActive: idx === 0
        });
        pagesList.appendChild(pageItem);
    });
    
    const togglePageControls = document.getElementById('page-control__list-controls-toggle');
    togglePageControls?.addEventListener('click', () => {
        pagesList.classList.toggle('hidden');
        togglePageControls.classList.toggle('toggle');
    });

    const pageControlCloseButton = document.getElementById('page-control__close-button');
    pageControlCloseButton?.addEventListener('click', () => {
        pageControlCloseButton.classList.toggle('opened');
        
        const pageControls = document.getElementById('page-controls');
        pageControls?.classList.toggle('closed');
    });
}

const app : HTMLDivElement | null = document.getElementById('app') as HTMLDivElement;

if(app) {
    
    const responsiveModes = Array.from(document.querySelectorAll('.main__content__responsive-modes li')) as HTMLLIElement[];
    
    if(responsiveModes) {
        const activeCSSSelector = 'active';
        for(const mode of responsiveModes) {
            mode.addEventListener('click', () => {
                const currentActiveElement = responsiveModes.filter(el => el.classList.contains(activeCSSSelector))[0];
                if(currentActiveElement) {
                    currentActiveElement.classList.remove(activeCSSSelector);
                }

                const modeName = mode.dataset.mode as string;
                const size = PreviewScreenSize[modeName];
                Preview.setWindowSize(size);
                mode.classList.add(activeCSSSelector);
            });
        }
    }
}

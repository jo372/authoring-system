import "bootstrap/dist/css/bootstrap";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {PageControlItem} from './lib/menu/page-controls/page-controls';
import './lib/menu/page-controls/page-controls-searchbox.ts';

const app : HTMLDivElement | null = document.getElementById('app') as HTMLDivElement;
const pagesList : HTMLUListElement | null = document.getElementById('page-control__pages__list') as HTMLUListElement;

if(pagesList) {
    
    const homePageItem = PageControlItem({
        text: 'Home',
        isActive: true
    });

    const demoPageItem = PageControlItem({
        text: 'Demo'
    });

    const featuresPageItem = PageControlItem({
        text: 'Features'
    });
    
    pagesList.append(homePageItem, demoPageItem, featuresPageItem);

    const togglePageControls = document.getElementById('page-control__list-controls-toggle');
    
    if(togglePageControls) {
        togglePageControls.addEventListener('click', () => {
            pagesList.classList.toggle('hidden');
            togglePageControls.classList.toggle('toggle');
        });
    }

    const pageControlCloseButton = document.getElementById('page-control__close-button');

    const pageControls = document.getElementById('page-controls');

    if(pageControlCloseButton) {
        pageControlCloseButton.addEventListener('click', () => {
            pageControlCloseButton.classList.toggle('opened');
            if(pageControls) {
                pageControls.classList.toggle('closed');
            }
        });
    }
}

if(app) {
    
}

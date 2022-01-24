const pageControlsSearchBox = document.getElementById('page-control__searchbox');

if(pageControlsSearchBox) {
    const filterSearchResultsByText = (text: string = "", searchResults: HTMLLIElement[] = []) => {

        const searchingForText = text.toLowerCase().trim();
        const noResults = document.getElementById('page-control__searchbox__no-results');
        const hiddenCSSSelector = 'hidden';

        if(!(noResults?.classList.contains(hiddenCSSSelector))) {
            noResults?.classList.add(hiddenCSSSelector);
        }
        
        if(text.trim() !== '') {
            searchResults.forEach(searchResult => {
                const searchResultTextElement = searchResult.querySelector('span');
                if(searchResultTextElement) {
                    const searchResultText = searchResultTextElement.innerText.toLowerCase().trim() ?? "";
                    if(searchResultText) {
                        if(searchResultText.indexOf(searchingForText) === -1) {
                            searchResult.classList.add(hiddenCSSSelector);
                        } else {
                            searchResult.classList.remove(hiddenCSSSelector);
                        }
                    }
                }
            });

            const numberOfHiddenResults = searchResults.filter(item => item.classList.contains(hiddenCSSSelector)).length;
            
            if(numberOfHiddenResults === searchResults.length) {
                noResults?.classList.remove(hiddenCSSSelector);
            }
        } else {
            if(!noResults?.classList.contains(hiddenCSSSelector)) {
                noResults?.classList.add(hiddenCSSSelector);
            }
            searchResults.forEach(item => item.classList.remove(hiddenCSSSelector));
        }
    }

    pageControlsSearchBox.addEventListener('keyup', (event: KeyboardEvent) => {
        const searchText = event.target as HTMLInputElement;
        const searchTextValue = searchText.value.toLocaleLowerCase().trim();
        const searchListItems = Array.from(document.querySelectorAll('.page-controls__list-item') as NodeListOf<HTMLLIElement>) ?? [];
        filterSearchResultsByText(searchTextValue, searchListItems);
    });
}

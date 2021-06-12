const resultListItemActiveStyle = `
    .control-prime-active-item {
        outline: 2px solid blue;
        box-shadow: 0px 0px 4px #fff;
        transform: scale(1.2deg);
    }
`;

let activeItemPosition = 0;
const resultListItemActive = 'control-prime-active-item';

document.body.onload = function() {
    const style = document.createElement('style');
    style.setAttribute("id", "prime-control-style-id");
    style.innerText = resultListItemActiveStyle.replace(/\n{1}/gi, '');


    if (!document.getElementById('prime-control-style-id')) {
        document.body.appendChild(style);

        const setFirstElementSelected = document.querySelectorAll('.av-hover-wrapper > div') 
                                        || document.querySelectorAll('.tst-hoverable-card');
        

        console.log(setFirstElementSelected)
        if (setFirstElementSelected.length) {
            setFirstElementSelected[0].classList.add(resultListItemActive);
        }
    }
}

const PageElement = {
    Search() {
        return document.getElementById("pv-search-nav")
    }
}

const eventGenerator = function(event, element) {
    const attachEvent = new MouseEvent(event, {
        view: window,
        bubbles: true,
        cancelable: false
    });

    element.dispatchEvent(attachEvent)
};


const getRequest = function(request) {
    const type = request.greeting.type;
    const value = request.greeting.value;
    const searchField = document.getElementById("pv-search-nav");
    const resultList = document.querySelectorAll('.av-hover-wrapper > div') || document.querySelectorAll('.tst-hoverable-card');
    const formSearch = document.querySelectorAll('.pv-nav-search-form')[0];

    console.log(resultList)

    const moveSelectedItem = function(index) {
        const olderClass = document.querySelectorAll(`.${resultListItemActive}`);
        if (olderClass.length) {
            olderClass[0].classList.remove(resultListItemActive);
        };

        resultList[index].classList.add(resultListItemActive);
    }

    if (type == 'search_term') {
        searchField.value = value;
    }

    if (type == 'search_submit') {
        formSearch.submit();
    }

    if (type == 'direction') {
        if (value == 'select') {
            resultList[activeItemPosition].querySelectorAll('a.tst-play-button')[0].click();
        }

        if (value == 'up') {

        }

        if (value == 'down') {

        }

        if (value == 'left') {
            if (activeItemPosition > 0) {
                moveSelectedItem(activeItemPosition-=1);
            }
        }

        if (value == 'right') {
            if (activeItemPosition < resultList.length -1) {
                moveSelectedItem(activeItemPosition+=1);
            }
        }
    }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    getRequest(request);
    sendResponse(JSON.stringify("request"));
}); 
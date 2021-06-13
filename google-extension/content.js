const resultListItemActiveStyle = `
    .control-prime-active-item {
        z-index: 9;
        padding: 2px;
        position: relative;
    }

    .jxBPRE {
        overflow: initial;
    }


    .control-prime-active-item:before {
        content: '';
        width: 100%;
        height: 100%;
        background: #00dcff;
        top: 5px;
        left: 0;
        position: absolute;
        z-index: 99;
        filter: opacity(0.5);
    }


    .control-prime-active-item > div:nth-child(1) {
        outline: 2px solid #00dcff;
        box-shadow: 0px 0px 4px #00dcff;
        transform: scale(1.1);
        margin-top: 10px;
        max-height: 184px;
    }
`;

let activeItemPosition = 0;
const resultListItemActive = 'control-prime-active-item';
const resultListEpisode = 'js-node-episode-container';

const existCarousel = function(element) {
    if(!element) return false;

    const parentChild = element.parentElement.parentElement;
    const buttonsPrev = parentChild.querySelectorAll('button[aria-label="Voltar"]');
    const buttonsNext = parentChild.querySelectorAll('button[aria-label="Avançar"]');

    return {
        prev: buttonsPrev,
        next: buttonsNext
    }
};

const handleObjects = function() {
    const functions = `

            var getVirtualHandler = function (abc) {
                var reactHandlerKey=Object.keys(abc).filter(function(item){
                return item.indexOf('__reactEventHandlers')>=0
                });

                return abc[reactHandlerKey[0]];
            };
            
            const watcher = setInterval(function() {
                console.log("entrei aqui")
                var abc = document.querySelectorAll(".subtitlesAndAudioButton")[0];

                if (abc.classList.contains("virtual-trigger-open")) {
                    getVirtualHandler(abc).onClick();
                    clearInterval(watcher);
                }
            }, 1000)
    `;

    const scripts = document.createElement('script');
    scripts.innerHTML = functions;
    document.body.appendChild(scripts);
};

const handleHoverObjects = function() {
    const functions = `
            const hoverbale = setInterval(function() {
                const card = document.querySelectorAll('.control-prime-active-item');
                if (card.length) {
                    const handler = Object.keys(card[0]).forEach(function(item) {
                        return item.indexOf("__reactEventHandlers") >= 0;
                    });

                    try {
                        if (handler) {
                            card[handler].onMouseEnter();
                        }
                    } catch(err) {
                        console.log('')
                    };
                } else {
                }
            }, 1000);
    `;

    const scripts = document.createElement('script');
    scripts.innerHTML = functions;
    document.body.appendChild(scripts)
};

const mainClassItem = function() {
    const classList = ['.dv-node-dp-seasons.active ul li', '.av-hover-wrapper > div', '.tst-card-wrapper.tst-hoverable-card', '.js-node-episode-container'];
    
    const mainClass = classList.filter(function(className){ 
        if(document.querySelectorAll(className).length) {
            return className;
        } 
    });

    return (mainClass[0])
};

const searchElement = function(element) {
    return document.querySelectorAll(element);
}

document.body.onload = function() {

    const style = document.createElement('style');
    style.setAttribute("id", "prime-control-style-id");
    style.innerText = resultListItemActiveStyle.replace(/\n{1}/gi, '');


    if (!document.getElementById('prime-control-style-id')) {
        document.body.appendChild(style);

        const setFirstElementSelected = document.querySelectorAll(mainClassItem());
        
        if (setFirstElementSelected.length) {
            setFirstElementSelected[0].classList.add(resultListItemActive);
            existCarousel(setFirstElementSelected[0]);
            scrollPageByElement(setFirstElementSelected[0]);
        }

        handleObjects();
        handleHoverObjects();
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
        cancelable: true
    });

    element.dispatchEvent(attachEvent)
};

const getElementPosY = function(element) {
    let bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect();

    return elemRect.top - bodyRect.top;
}

const scrollPageByElement = function(element) {
    window.scrollTo(0, getElementPosY(element) - 142);
}

const getRequest = function(request) {
    const type = request.greeting.type;
    const value = request.greeting.value;
    const searchField = document.getElementById("pv-search-nav");
    const resultList = document.querySelectorAll(mainClassItem());
    const formSearch = document.querySelectorAll('.pv-nav-search-form')[0];
    
    const Videos = function() {
        const getVideos = document.querySelectorAll("video");
        return getVideos;
    };

    const moveSelectedItem = function(index) {
        const olderClass = document.querySelectorAll(`.${resultListItemActive}`);

        if (olderClass.length) {
            olderClass[0].classList.remove(resultListItemActive);
        };

        resultList[index].classList.add(resultListItemActive);
        scrollPageByElement(resultList[index]);
    };

    const seek = function(secs) {
        let video = Videos();
        let index = video.length - 1;

        video[index].currentTime = video[index].currentTime + secs;
        video[index].pause();
        video[index].play();
    }

    if (type == 'search_term') {
        searchField.value = value;
    }

    if (type == 'search_submit') {
        formSearch.submit();
    }

    if (value == 'home'){
        window.location.href = "https://www.primevideo.com/";
    }

    if (value == 'skip') {
        const element = document.querySelectorAll('.adSkipButton.skippable')[0];
        eventGenerator('click', element);
    }

    if (type == 'subtitle') {
        const button = document.querySelectorAll(".subtitlesAndAudioButton")[0];
        button.classList.add('virtual-trigger-open');

        setTimeout(function() {
            const subtitles = document.querySelectorAll(".subtitles .checkbox");

            subtitles.forEach(function(subtitle, index) {

                const text = subtitle.querySelectorAll('.text')[0].innerText;

                if (text == value) {
                    document.querySelectorAll(".subtitles .checkbox")[index].click();
                    return;
                }

            });
        }, 1000)
    }

    if (type == 'audio') {
        const button = document.querySelectorAll(".subtitlesAndAudioButton")[0];
        button.classList.add('virtual-trigger-open');

        setTimeout(function() {
                const audios = document.querySelectorAll(".audio .checkbox");

                audios.forEach(function(audio, index) {

                const text = audio.querySelectorAll('.text')[0].innerText;

                if (text == value) {
                    document.querySelectorAll(".audio .checkbox")[index].click();
                    return;
                }

            });
        }, 1000)
    }

    if (value == 'seek-plus-10') {
        seek(+10);
    }

    if (value == 'seek-minus-10') {
        seek(-10);
    }

    if (type == 'direction' || type == 'video-control') {
        if (existCarousel(resultList[activeItemPosition])) {
            const button = existCarousel(resultList[activeItemPosition]);
            
            if (value == 'next' && button.next.length) {
                button.next[0].click();
            }

            if (value == 'prev' && button.prev.length) {
                button.prev[0].click();
            }
        };

        if (value == 'back') {
            window.history.back();
        };

        if (value == 'full') {
            let video = Videos();
            let index = video.length - 1;
            video[index].requestFullscreen();
        };

        if (value == 'exit-full') {
            let video = Videos();
            let index = video.length - 1;
            video[index].exitFullscreen();
        };

        if (value == 'prev') {
            window.history.go('-1');
        };

        if (value == 'close') {
            location.reload();
        };

        if (value == 'select') {
            const classNames = ['._1NNx6V', '.tst-packshot', '.dvui-packshot', '.dv-episode-playback-title'];

            classNames.forEach(function(className) {
                
                const findClass = resultList[activeItemPosition].querySelectorAll(className);

                if (findClass.length) {
                    
                    if(findClass[0].getAttribute('href')) {
                        findClass[0].click();
                        return;
                    }
                    
                    findClass[0].querySelectorAll('a')[0].click();
                }
            })
        };

        if (value == 'play') {
            document.querySelectorAll('.dv-dp-node-playback')[0]
                .querySelectorAll('a')[0]
                .click();
        };

        if (value == 'pause') {
            const getVideos = Videos();

            if (getVideos.length) {
                const video = getVideos[getVideos.length - 1];

                if (!video.paused) {
                    video.pause()
                } else {
                    video.play();
                }
            }
        }

        if (value == 'left') {
            if (activeItemPosition > 0) {
                moveSelectedItem(activeItemPosition-=1);
            }
        };

        if (value == 'right') {
            if (activeItemPosition < resultList.length -1) {
                moveSelectedItem(activeItemPosition+=1);
            }
        };

        if (value == 'seasons') {
            const seasonsList = document.querySelectorAll('.dv-node-dp-seasons');
            const seasonSelector = document.getElementById('av-droplist-av-atf-season-selector');
            window.scrollTo(0, 0);
            
            if (seasonSelector.checked) {
                seasonSelector.click();
                seasonsList[0].classList.remove('active');
                return;
            } else {
                seasonSelector.click();
                seasonsList[0].classList.add('active');
            }
        };

        if (value == 'begin') {
            let video = Videos();
            let index = video.length - 1;
            video[index].pause()

            video[index].currentTime = 0;

            setTimeout(function(){ video[index].play() }, 120);
        }
    }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    getRequest(request);
    sendResponse(JSON.stringify("request"));
}); 
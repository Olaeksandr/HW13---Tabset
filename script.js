'use strict';
const tab = new Tabset(document.getElementById('template-tabset'));

document.getElementById('btn-prev').addEventListener('click', onPrevBtnClick);

function onPrevBtnClick() {
    console.log('Prev-click');
    let activeTab = document.querySelector('.active');
    console.log(activeTab.id);
    if(activeTab.id >0){
       tab.showPrevTab(Number(activeTab.id)-1);
    } else {
        tab.showPrevTab(activeTab.attributes.length);
    }
};

document.getElementById('btn-next').addEventListener('click', onNextBtnClick);


function onNextBtnClick() {
    let activeTab = document.querySelector('.active');
    if(activeTab.id < activeTab.attributes.length){
        tab.showNextTab(Number(activeTab.id)+1);
    } else {
        tab.showNextTab(0);
    }
    
}

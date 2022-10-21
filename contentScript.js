(() => {
    let currentObj = "";
    let title;
    
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, objId } = obj;
    
        if (type === "NEW") {
            currentObj = objId;
            newObjLoaded();
        }
    
    });

    const newObjLoaded = () => {
        const addBtnExists = document.getElementsByClassName("add-btn")[0];
        const titleEl = document.getElementsByClassName("title")[0];
        const title = titleEl.textContent.trim();

        if (!addBtnExists) {
            //const addBtn = document.createElement("img");
            const addBtn = document.createElement("button");

            //addBtn.src = chrome.runtime.getURL('assets/add.png');
            addBtn.className = "add-btn";
            //addBtn.title = "Click to add object to SNEx";
            addBtn.innerHTML = "Add to SNEx";
            
            titleEl.appendChild(addBtn);
            addBtn.addEventListener("click",function(){
            addNewObjHandler(title)})
        }
    }
    
    function addNewObjHandler (_title) {
        const RaDec = document.getElementsByClassName("value")[0].textContent.split(" ");
        const Ra = RaDec[0].trim();
        const Dec = RaDec[1].trim();
        const url = "https://test.supernova.exchange/create-target/?name="+_title+"&ra="+Ra+"&dec="+Dec;
        //chrome.tabs.create({ url: newURL });
        window.open(url, '_blank').focus();
    }

    newObjLoaded();
})();


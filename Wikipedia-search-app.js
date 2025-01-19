let searchInputEl = document.getElementById("searchInput");
let searchResultsContainerEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
let options = {
    method: "GET"
};

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsContainerEl.appendChild(resultItemEl);

    let resultTitle = document.createElement("a");
    resultTitle.classList.add("result-title");
    resultTitle.href = link;
    resultTitle.target = "_blank";
    resultTitle.textContent = title;
    resultItemEl.appendChild(resultTitle);

    resultItemEl.appendChild(document.createElement("br"));

    let resultURL = document.createElement("a");
    resultURL.classList.add("result-url");
    resultURL.href = link;
    resultURL.textContent = link;
    resultURL.target = "_blank";
    resultItemEl.appendChild(resultURL);

    resultItemEl.appendChild(document.createElement("br"));

    let resultDescription = document.createElement("p");
    resultDescription.classList.add("link-description");
    resultDescription.textContent = description;
    resultItemEl.appendChild(resultDescription);

}

function displaySearchResults(resultArray) {
    spinnerEl.classList.toggle("d-none");

    for (let result of resultArray) {
        createAndAppendSearchResult(result);
    }
}

function sendHttpRequest(event) {

    if (event.key === "Enter") {
        searchResultsContainerEl.textContent = "";
        let searchText = searchInputEl.value;
        if (searchText === "") {
            return;
        }
        let reqURL = "https://apis.ccbp.in/wiki-search?search=" + searchText;

        spinnerEl.classList.toggle("d-none");

        fetch(reqURL, options).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            console.log(jsonData);
            let resultArray = jsonData.search_results;
            displaySearchResults(resultArray);
        });
    }
}

searchInputEl.addEventListener("keydown", sendHttpRequest);
# Wiki Search App 
[Visit Site](https://wikiappash236.ccbp.tech/)

Sample UI:
![image](https://github.com/user-attachments/assets/81f8a5d7-a061-49c8-8bc4-6267b4d85226)


This is a simple Wiki Search app built using HTML, CSS, and JavaScript that allows users to search for topics and display the results dynamically. The app uses an API to fetch search results and displays the title, URL, and description of each result.

## Features
- **Search Input**: Users can type a keyword into the search box and press "Enter" to initiate a search.
- **Dynamic Results**: The app displays a list of search results from the Wiki API. Each result includes:
  - Title of the search result (linked to the source).
  - URL of the search result (also clickable).
  - A brief description of the search result.
- **Loading Spinner**: A loading spinner appears while the search results are being fetched.
  
## Technologies Used
- **HTML**: Used for the structure of the page and input fields.
- **CSS**: Used for styling the page and adding responsive elements.
- **JavaScript**: Handles the functionality of making requests to the Wiki API and dynamically updating the search results.
- **Wiki API**: The API used to search for topics and fetch results dynamically.

## How It Works
1. When the user types a keyword into the search box and presses "Enter," the app sends a request to the Wiki API with the search keyword.
2. The API returns a list of search results.
3. The results are displayed on the page with the title, URL, and description of each result.
4. A loading spinner appears while the results are being fetched.

## Installation
To use this app, simply clone or download the repository and open the `index.html` file in a web browser.

# Wiki Search App

## Project Structure

```bash
Wiki-Search-App/
├── index.html           # Main HTML file
├── script.js            # JavaScript file for functionality
├── styles.css           # CSS file for styling
├── assets/              # Folder for any static assets (e.g., logo)
│   └── wiki-logo-img.png # Example image file (logo)
├── README.md            # Project README file
└── LICENSE              # Project License file (optional)


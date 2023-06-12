# URL-Shortener

This is a simple URL shortener application created by [Ismail Lagziri](https://github.com/ismail-lagziri). The application allows you to shorten long URLs into shorter, more manageable links. It is built using Node.js and Express.js on the backend and utilizes a JSON file to store the shortened URLs.

## Installation

To run the URL shortener locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ismail-lagziri/URL-Shortener.git
   ```
   
2. Install the dependencies:

   ```bash
   cd URL-Shortener
   npm install
   ```
3. Start the server:

   ```bash
   node app.js
   ```
   
4. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Usage

The URL shortener provides a simple web interface for shortening URLs. Follow the steps below to shorten a URL:

1. Open the URL shortener application in your web browser.

2. Enter the URL you want to shorten in the input field.

3. Click the "Shorten" button.

4. The shortened URL will be displayed below, which you can click to open in a new tab.

## Code Structure

The project consists of the following files:

- `app.js`: This is the main server file that handles the routing and logic for URL shortening. It utilizes Express.js for handling HTTP requests and responses.

- `public/index.html`: This HTML file defines the structure and layout of the web interface. It includes a form for entering a URL and a result container to display the shortened URL.

- `public/styles.css`: This CSS file contains the styles for the HTML elements in `index.html`.

- `public/script.js`: This JavaScript file adds interactivity to the web interface. It handles form submission and makes an asynchronous request to the server to shorten the URL.

- `urls.json`: This JSON file is used to store the mapping of shortened URLs to their original long URLs. It is initially empty and gets populated as new URLs are shortened.

## API Endpoints

The application provides the following API endpoints:

- `POST /shorten`: This endpoint is used to shorten a URL. It expects a JSON payload with a `url` property containing the long URL to be shortened. If the URL is already shortened, it returns the existing shortened URL; otherwise, it generates a new short URL and returns it.

- `GET /:shortId`: This endpoint is used to redirect to the original long URL associated with a given `shortId`. If the `shortId` is found in the `urls.json` file, the user is redirected to the original URL; otherwise, a 404 error is returned.

## Configuration

By default, the application runs on port 3000. You can modify the `port` variable in `app.js` to use a different port if desired.

## Dependencies

The following dependencies are used in this project:

- `express`: Fast, unopinionated web framework for Node.js.
- `shortid`: Generates unique and short IDs.
- `fs`: File system module for reading and writing files.
- `path`: Provides utilities for working with file and directory paths.

These dependencies are automatically installed when running `npm install`.

## Contributions

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on [GitHub](https://github.com/ismail-lagziri/URL-Shortener).

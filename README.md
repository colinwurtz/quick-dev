# quick-dev 

NoseJs + Socket.io server that auto refreshes browser window when saving a file. Great for quickly mocking up a web site.

Common libraries already included in `blanktemplate.html` file.

## Setup

* `git clone`

* Open folder in Visual Studio code. Hit F5 to run. **OR**
    * Run `npm start` from the command line if you have nodejs installed
* Copy `./public/blanktemplate.html` and rename to file name that you want
* Place d3 code in this section `<script id="code">`
* Navigate to link in browser like this `localhost:3000/yourfile.html`
    * Any changes saved to `yourfile.html` will be auto refresh your browser
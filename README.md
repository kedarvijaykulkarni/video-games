# video-games

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd video-games`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


# Advance Configrations

## Change Project Layout Classic layout to Pods layout

* [Project Layouts](https://cli.emberjs.com/release/advanced-use/project-layouts/)

in `.ember-cli` file add usePods to the object as below

`
  {
    "disableAnalytics": false,
    "usePods": true
  }
`

add following line in `config/environment.js`
`
  podModulePrefix: 'video-games/pods',
`


## SCSS Related changes

Install some basic  repository 

* `npm i ember-cli-sass --save-dev`
* `npm i sass --save-dev`
* `npm i tachyons-sass --save-dev`

Add some code in the `add default` and in the `ember-cli-build.js`

`
  sassOptions: {
    includePaths: [
      'node_modules/tachyons-sass'
    ]
  }
`

Change the file `app/styles/app.css` to `app/styles/app.scss`

add `app/styles/tachyons.scss` and import required scss from the the tachyons node_modules

then import tachyons in the app.scss 

`
  // Tachyons Modules
  @import 'tachyons';
  tachyons.scss
`
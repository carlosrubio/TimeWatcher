Time Watcher
https://travis-ci.org/carlosrubio/TimeWatcher.svg?branch=master 
============

Powered by Appverse Web 
============

Time Watcher is a tool to help controlling the time spent on different tasks. It is writen in HTML5 and based on Appverse HTML5 platform as a AngulaJS reference architecture. 

Following are just Roadmap task description:
- Support configuration of tasks or categories where time is spent.
- Start and stop time usage in a categorie
- Graphs and report

- Mobile, Desktop and Web versions are planned.


## More Information

* **About this project**: not yet a web
* **About licenses & groups**: MIT
* **About The Appverse Project**: <http://appverse.org>

### Quick Start

#### Before you start, tools you will need

* install npm
* bower and grunt (run the following commands):

```script
npm install -g bower
npm install -g grunt
```

## Running

* configure project:

```script
npm install
bower install
```
* run project

Run the application. 

`grunt server`

Run the appliction and open the browser.

`grunt server:open` 

## Testing

Exexecute the following command to launch tests

`grunt test`
 
 <!-- Available Grunt task (generated running 'grunt list') -->
 Grunt tasks list 
---------------- 
###setEmulatedDevice
set up the emulated window.
###karma
run karma. (Multitask)
###jshint
Validate files with JSHint. (Multitask)
###useminPrepare
Using HTML markup as the primary source of information (Multitask)
###http_upload
Upload files through POST/PUT HTTP request (Multitask)
###connect
Start a connect web server. (Multitask)
###watch
Run predefined tasks whenever watched files change.
###mockserver
Run mock server.
###concurrent
Run grunt tasks concurrently (Multitask)
###usemin
Replaces references to non-minified scripts / stylesheets (Multitask)
###replace
Replace text patterns with applause. (Multitask)
###rev
Prefix static asset file names with a content hash (Multitask)
###autoprefixer
Prefix CSS files. (Multitask)
###nodewebkit
Packaging the current app as a node-webkit application (Multitask)
###open
Open urls and files from a grunt task (Multitask)
###uglify
Minify files with UglifyJS. (Multitask)
###htmlmin
Minify HTML (Multitask)
###cssmin
Minify CSS (Multitask)
###list
List all the available grunt tasks and write them to a file.
###license
Generate an HTML report of all NPM modules licenses.
###download_mobile_build
Custom task.
###runNodeWebKit
Custom task.
###download_windows_mobile_build
Custom task.
###copy
Copy files. (Multitask)
###configureProxies
Configure any specified connect proxies.
###concat
Concatenate files. (Multitask)
###compress
Compress files. (Multitask)
###sass
Compile Sass to CSS (Multitask)
###coffee
Compile CoffeeScript files into JavaScript (Multitask)
###clean
Clean files and folders. (Multitask)
###webkit-manifest
Build Manifest for webkit (package.json)
###test:e2e
Alias for "testserver", "karma:e2e_auto" tasks.
###default
Alias for "server" task.
###emulator
Alias for "runNodeWebKit", "clean:server", "concurrent:server", "autoprefixer", "connect:livereload", "concurrent:emulator" tasks.
###test:unit
Alias for "karma:unit_auto" task.
###test
Alias for "karma:unit", "testserver", "karma:e2e" tasks.
###dist:mobile:build
Alias for "dist:mobile:emulator", "compress:mobileBuildBundle", "http_upload:mobileBuilder", "download_mobile_build", "http_upload:windowsMobileBuilder", "download_windows_mobile_build" tasks.
###dist:mobile
Alias for "dist:mobile:build" task.
###dist:mobile:emulator
Alias for "dist", "clean:mobileBuilderBundle", "copy:mobile" tasks.
###server:doc
Alias for "connect:doc", "open:doc", "watch:doc" tasks.
###server:dist
Alias for "connect:dist", "open:dist", "watch" tasks.
###server
Alias for "clean:server", "configureProxies:livereload", "concurrent:server", "autoprefixer", "connect:livereload", "watch" tasks.
###server:open
Alias for "clean:server", "configureProxies:livereload", "concurrent:server", "autoprefixer", "connect:livereload", "open:server", "watch" tasks.
###testserver
Alias for "clean:server", "concurrent:server", "autoprefixer", "connect:test" tasks.
###doc
Alias for "clean:doc", "docular" tasks.
###dist:web
Alias for "clean:dist", "useminPrepare", "concurrent:dist", "autoprefixer", "copy:dist", "copy:fonts", "ngAnnotate", "cssmin", "uglify", "rev", "usemin", "htmlmin" tasks.
###dist
Alias for "clean:dist", "useminPrepare", "concurrent:dist", "autoprefixer", "concat", "copy:dist", "ngAnnotate", "cssmin", "uglify", "rev", "usemin", "htmlmin" tasks.
###nodewebkit:dist
Alias for "clean:dist", "dist", "webkit-manifest", "nodewebkit" tasks.
###ngAnnotate
Add, remove and rebuild AngularJS dependency injection annotations (Multitask)
###grunt-license-report
No info 

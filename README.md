README.md
==========

<h2>Theme based on Twitter Bootstrap, Bootstrap UI and AngularJs</h2>

This theme don`t have user admin interface (UX) but if you experienced with bootstrap allow build theme very quick

Dependencies:
Twig Gear module required: https://www.drupal.org/sandbox/oles89/2501921


Features:
    - SCSS, Gulp watcher with autoprefixer and map css
    - FontAwesome
    - Breadcrumbs
    - Empty link in menu if route in menu = <code>"/<none>"</code>
    - starterkit

Installation:
In console from drupal root installation navigate to themes and type:

git clone http://git.drupal.org/sandbox/oles89/2502029.git angulasil
cd angulasil

If you wont work on theme without subtheme:
After that navigate to themes/angulasil/assets

npm install
bower install
gulp install


Using:

in themes/angulasil/assets type gulp watch for compile and watch sscs

Copy subangulasil inside starterkit to themes for using subtheme. 
In assets directory type first time:
ntm install
gulp css

After just type gulp watch to compile scss via watcher

Any ideas welcomed. Just create issue.

<h2>AUTHOR/MAINTAINER</h2>

- Codenator81 codenator81@gmail.com
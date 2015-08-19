<h2>Drupal Theme based on Twitter Bootstrap, Bootstrap UI and AngularJs</h2>

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
For now there two variants.
With git or composer.
<h4>Git:</h4>
In console from drupal root installation navigate to themes and type:

git clone http://git.drupal.org/sandbox/oles89/2502029.git angulasil
cd angulasil

<h4>Composer:</h4>
composer require codenator81/angulasil

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

This project on GitHub https://github.com/Codenator81/angulasil
And on Packagist https://packagist.org/packages/codenator81/angulasil

Any ideas welcomed. Just create issue.

<h2>AUTHOR/MAINTAINER</h2>

- Codenator81 codenator81@gmail.com
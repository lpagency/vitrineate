/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';
    
        var base_url = $.environmentVar(
          'https://apibodegas.ondev.today/',
          'https://apibodegas.ondev.today/',
          'https://apibodegas.loadingplay.com/');
        var checkout_url = $.environmentVar(
          'https://lpcheckout.ondev.today/',
          'https://lpcheckout.ondev.today/',
          'https://pay.loadingplay.com');
        var app_public = $.environmentVar(69,69,69);
        var site_name = $.environmentVar('vitrineate', 'vitrineate', 'vitrineate');

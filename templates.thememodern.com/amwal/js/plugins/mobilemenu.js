jQuery(document).ready(function( $ ) {
            $("#menu").mmenu({
               "extensions": [
                  "pagedim-black",
                  "theme-dark"
               ],
               "offCanvas": {
                  "position": "right"
               },
               "counters": true,
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield"
                     ]
                  },
                  {
                     "position": "top"
                  },
                  {
                     "position": "bottom",
                     "content": [
                       
                     ]
                  }
               ]
            });
         });
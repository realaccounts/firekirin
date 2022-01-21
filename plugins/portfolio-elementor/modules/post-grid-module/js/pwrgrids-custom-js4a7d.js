jQuery(window).load(function () {
    if ( jQuery( ".pwgd-post-grid-content" ).length ) {

        //Isotope Layout
        var $grid = jQuery('.pwgd-grid-content-isotope').isotope({
            //layoutMode: 'packery',
            layoutMode: 'masonry',
            itemSelector: '.pwgd-post-grid-item-wrapper'
        });
        $grid.imagesLoaded().progress( function() {
            jQuery('.pwgd-grid-content-equalheights').each(function(){          
                // Cache the highest
                var highestBox = 0;
                
                // Select and loop the elements you want to equalise
                jQuery('.pwgd-post-grid-item-wrapper', this).each(function(){
                
                    // If this box is higher than the cached highest then store it
                    if(jQuery(this).height() > highestBox) {
                        highestBox = jQuery(this).height(); 
                    }
                
                });  
                    
                // Set the height of all those children to whichever was highest 
                jQuery('.pwgd-post-grid-item-wrapper',this).height(highestBox);
                            
            }); 
            
            $grid.isotope('layout');

            
        });

        //Packery Layout
        /*var $packery = jQuery('.pwgd-grid-content-packery').isotope({
            layoutMode: 'packery',            
            itemSelector: '.grid-item-wrapper'
        });
        $packery.imagesLoaded().progress( function() {
            $packery.isotope('layout');
        });*/

        jQuery('.pwgd-posts-filter').on('click', 'button', function () {   
            jQuery('.pwgd-posts-filter button').removeClass('item-active');
            jQuery(this).addClass('item-active');
            var filterValue = jQuery(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            /*$packery.isotope({
                filter: filterValue
            });*/
        });

    }

});
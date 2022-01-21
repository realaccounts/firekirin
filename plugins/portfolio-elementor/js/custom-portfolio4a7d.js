jQuery(window).load(function () {
    if ( jQuery( ".elpt-portfolio-content" ).length ) {
        //Isotope Layout
        var $grid = jQuery('.elpt-portfolio-content-isotope').isotope({
            //layoutMode: 'packery',
            layoutMode: 'masonry',
            itemSelector: '.portfolio-item-wrapper'
        });
        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });

        //Packery Layout
        var $packery = jQuery('.elpt-portfolio-content-packery').isotope({
            layoutMode: 'packery',            
            itemSelector: '.portfolio-item-wrapper'
        });
        $packery.imagesLoaded().progress( function() {
            $packery.isotope('layout');
        });

        jQuery('.elpt-portfolio-filter').on('click', 'button', function () {   
            jQuery('.elpt-portfolio-filter button').removeClass('item-active');
            jQuery(this).addClass('item-active');
            var filterValue = jQuery(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            $packery.isotope({
                filter: filterValue
            });
        });

        //Lightbox
        jQuery('.elpt-portfolio-lightbox').each(function(){
            jQuery(this).simpleLightbox({
                captions: true,
                disableScroll: false,
            }); 
        });
    }

});
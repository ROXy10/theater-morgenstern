$(document).ready(function(){
    // DATATIMEPICKER
    $(function () {
    	$('#datetimepicker').datetimepicker({
    		inline: true,
    		// sideBySide: true
    	});
    });

    // var StickyElement = function(node){
    // 	var doc = $(document),
    // 	fixed = false,
    // 	anchor = node.find('.sticky-anchor'),
    // 	content = node.find('.content__datetimepicker');
    //
    // 	var onScroll = function(e){
    // 		var docTop = doc.scrollTop(),
    // 		anchorTop = anchor.offset().top;
    //
    // 		console.log('scroll', docTop, anchorTop);
    // 		if(docTop > anchorTop){
    // 			if(!fixed){
    // 				anchor.height(content.outerHeight());
    // 				content.addClass('fixed');
    // 				fixed = true;
    // 			}
    // 		}  else   {
    // 			if(fixed){
    // 				anchor.height(0);
    // 				content.removeClass('fixed');
    // 				fixed = false;
    // 			}
    // 		}
    // 	};
    //
    // 	$(window).on('scroll', onScroll);
    // };

    // var demo = new StickyElement($('#sticky'));
});
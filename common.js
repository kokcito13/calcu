common = function(){
    
    // **************** ON LOAD ACTIONS
    
    var t;
    
    var form;
    var form1;
    
    this.init = function() {
        
    };
    
    this.reopenTab = function(id) {
        
        $('.tabs').hide('slow',function(){
            $('#tab'+id).show('slow');
        });
        
        return false;
    }
};

var common = new common();
$(function(){
    common.init();
});
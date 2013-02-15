commonController = function(){
    
    var self = this;
    
    this.init = function() {
        
    };
    
    this.checkedPlot = function()
    {
        if($('#plot_porez').is(':checked')){
            return true;
        } else {
            return false;
        }
    }
    
    this.setPlot = function()
    {
        if(!self.checkedPlot()){
            $('select#vidPaperCn option').css('display','block');
            $('select#formatPaperCn option').css('display','block');
            $('select#colorNum option').css('display','block');
        } else {
            $('select#vidPaperCn option').css('display','none');
            $('select#formatPaperCn option').css('display','none');
            $('select#colorNum option').css('display','none');
            $('.plot_vid').css('display', 'block');
        }
    }
    
    this.reopenTab = function(id)
    {
        $('.tabs').hide();
        $('#tab'+id).show('slow');
        
        return false;
    }
};

var common = new commonController();
$(function(){
    common.init();
});
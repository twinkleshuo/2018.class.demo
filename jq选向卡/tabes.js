function Tab(that){
    this.that = that;
    this.opts = {
        btns:['体育','新闻','娱乐','游戏'],
        contents:['100米飞跃','中美关系','林志玲和前男友不能说的秘密','中国又输了s7']
    }
}


$.extend(Tab.prototype,{
    init:function(opt){
        this.createBtns();
        this.createDivs();
        this.changeBtn();
    },
    createBtns:function(){
        this.opts.btns.forEach((e,i)=>{
            this.that.append($(`<button class="${i==0?'active':''}">${e}</button>`));
        });
    },
    createDivs:function(){
        this.opts.contents.forEach((e,i)=>{
            this.that.append($(`<div class="${i==0?'show':''}">${e}</div>`));
        });
    },
    changeBtn:function(){
        var btn = this.that.find('button');
        var div = this.that.find('div');
        btn.on('click',function(){
            $(this).addClass('active').siblings('button').removeClass('active');
           div.eq($(this).index('button')).addClass('show').siblings('div').removeClass('show');
        });
    }

});



$.fn.extend({
    tabs:function(opt){
        var t = new Tab(this);
        t.init(opt);
    }
})
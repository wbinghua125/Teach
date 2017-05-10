(function($){
    var main={
        init:function(){
            this.prep();
            this.address();
            this.address_show();
        },
        prep:function(){
            var num=1/window.devicePixelRatio;
            $('head').prepend('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale='+num+', maximum-scale='+num+', minimum-scale='+num+'" />');
            var fontSize=document.documentElement.clientWidth/10;
            $('html').css('font-size',fontSize);
        },
        address:function(){
            var data=JSON.parse(localStorage.getItem('address'))||[];
            var input=$('.form>div input');
            var reg={
                name:[/^[\S]{2,12}$/,'姓名'],
                tel:[/^[\d]{7,}/,'电话'],
                address:[/^[\S]{2,12}$/,'地址ַ'],
                ecode:[/^[\d]{6}$/,'邮编']
            };
            var obj;
            $('.save_address').tap(function(){
                obj= {
                    name: input.eq(0).val(),
                    tel: input.eq(1).val(),
                    prov: $('.prov').html(),
                    city: $('.city').html(),
                    area: $('.area').html(),
                    address: input.eq(2).val(),
                    ecode: input.eq(3).val()
                };
                for(var i in reg) {
                    if(!reg[i][0].test(obj[i.toString()])){
                        alert(reg[i][1]+'错误！！！');
                        break;
                    }
                }
                data.push(obj);
                data=JSON.stringify(data);
                localStorage.setItem('address',data);
            })
        },
        address_show:function(){
            var data=JSON.parse(localStorage.getItem('address'));
            var html='';
            for(var i in data){
                console.log(1111);
                html+='<div class="item edge"><p class="clearfix"><span>';
                html+=data[i]['name']+'</span><span>'+data[i]['tel']+'</span></p><p>'+data[i]['address']+'</p>';
                html+='<div class="operate clearfix"><div class="operate_l clearfix"><div class="circle"></div>';
                html+='<div>设为默认地址</div></div><div class="operate_r"><span>删除</span><span>编辑</span></div></div></div>';
            }
            console.log(html);
            $('.address').html(html);
            $('.operate .circle').tap(function(){
                console.log(111);
            })

        }


    };
    main.init();
})(Zepto);

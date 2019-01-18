const index = Vue.component('index', {
    template: `
            <div>
                <aside id="anime-aside">
                <ul>
                    <li><a href="#">时间表</a></li>
                    <li><a href="#">新番更新</a></li>
                    <li><a href="#">历年动画</a></li>
                    <li><a href="#">剧场ova</a></li>
                </ul>
            </aside>
                <section class="timetable">
                <!-- Nav tabs -->
                <ul id="timetablelist" class="nav nav-tabs" role="tablist">
                    <li v-for="(item,index) in week" role="presentation" @click="tlclick(index)"><a :href=item.en :aria-controls=item.en role="tab" data-toggle="tab">{{item.zh}}</a>
                    </li>
                    <!--<li role="presentation"><a href="#Monday" aria-controls="Monday" role="tab" data-toggle="tab">周一</a>-->
                    <!--</li>-->
                    <!--<li role="presentation"><a href="#Tuesday" aria-controls="Tuesday" role="tab"-->
                                               <!--data-toggle="tab">周二</a></li>-->
                    <!--<li role="presentation"><a href="#Wednesday" aria-controls="Wednesday" role="tab" data-toggle="tab">周三</a>-->
                    <!--</li>-->
                    <!--<li role="presentation"><a href="#Thursday" aria-controls="Thursday" role="tab"-->
                                               <!--data-toggle="tab">周四</a></li>-->
                    <!--<li role="presentation"><a href="#Friday" aria-controls="Friday" role="tab" data-toggle="tab">周五</a>-->
                    <!--</li>-->
                    <!--<li role="presentation"><a href="#Saturday" aria-controls="Saturday" role="tab"-->
                                               <!--data-toggle="tab">周六</a></li>-->
                    <!--<li role="presentation"><a href="#Sunday" aria-controls="Sunday" role="tab" data-toggle="tab">周日</a>-->
                    <!--</li>-->
                </ul>

                <!-- Tab panes -->
                <div class="tab-content" v-for="item in timeline.datas">
                    <div role="tabpanel" class="tab-pane active" :id="item.name">
                        <ul class="time-ul">
                            <li v-for="datax in item.datas">
                                <img :src=datax.img>
                                <div>
                                    <span class="time-title">{{datax.title}}</span>
                                    <span class="time-update">{{datax.num}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

                <section class="text-left rmxf">
                <h4><span class="icon-rmxf"></span>日漫新番</h4>
                
            </section>
            </div>
    `,
    data:function() {
        return {
            timeline: {
                datas: [
                    {
                        datas: [],
                        name: "Monday"
                    },
                    {
                        datas: [],
                        name: "Tuesday"
                    },
                    {
                        datas: [],
                        name: "Wednesday"
                    },
                    {
                        datas: [],
                        name: "Thursday"
                    }, {
                        datas: [],
                        name: "Friday"
                    },
                    {
                        datas: [],
                        name: "Saturday"
                    },
                    {
                        datas: [],
                        name: "Sunday"
                    },
                ]
            },
            week: [{en:"Monday",zh:'周一'}, {en:"Tuesday",zh:'周二'}, {en:"Wednesday",zh:'周三'}, {en:"Thursday",zh:'周四'}, {en:"Friday",zh:'周五'}, {en:"Sunday",zh:'周六'}, {en:"Saturday",zh:'周日'}],
            tlifclick:[0,0,0,0,0,0,0],
            testdata: {
                tl: [{title: 'revisions', num: '12', img: 'Images/time.jpg'}, {
                    title: 'revisions',
                    num: '12',
                    img: 'Images/time.jpg'
                }, {title: 'revisions', num: '12', img: 'Images/time.jpg'}, {
                    title: 'revisions',
                    num: '12',
                    img: 'Images/time.jpg'
                }, {title: 'revisions', num: '12', img: 'Images/time.jpg'}, {
                    title: 'revisions',
                    num: '12',
                    img: 'Images/time.jpg'
                }, {title: 'revisions', num: '12', img: 'Images/time.jpg'}, {
                    title: 'revisions',
                    num: '12',
                    img: 'Images/time.jpg'
                }, {title: 'revisions', num: '12', img: 'Images/time.jpg'}],
            },
        }
    },
    methods:{
        tlajax:function(num){
            console.log('xxx')
            $.ajax({
                type: "get",
                url: "/timetable",
                data: date,
                processData: false,    //false
                cache: false,    //缓存
                beforeSend:function(){

                },
                success: function(data){
                    ajaxsuccess(data)
                },
                error:function(){
                    ajaxerror(data,date)
                },
                complete:function(){

                }
            })
        },
        tlclick:function(index){
            if(this.tlifclick[index]===0){
                this.tlajax()
            }
        }
    },
    mounted:function(){

    }

})
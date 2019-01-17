const newanime = Vue.component('newanime', {
    props:['pagestate'],
    template: `
<div id="newanime-container">
<nav>
<ul>

<li>字母</li>

</ul>
</nav>
<section class="anime-con-con">
    <div class="anime-container">
        <div class="anime-img-con" ><a href="#"><img class="anime-img" src="../Images/201812311546250656.png"></a></div>
        <div class="anime-title-con">
            <h4>辉夜姬想让人告白 天才们的恋爱头脑战</h4>
            <span>更新至1话</span>
        </div>
    </div>
    <div class="anime-container" v-for="item in animedata.data">
        <div class="anime-img-con" ><a :href="item.href"><img class="anime-img" :src=item.img></a></div>
        <div class="anime-title-con">
            <h4>{{item.title}}</h4>
            <span>更新至{{item.num}}话</span>
        </div>
    </div>
</section>
</div>
    `,
    data:function(){
        return {
            animedata:{}
        }
    },
    created:function(){
        if(this.pagestate.newanime === 0) {
            this.ajaxstart()
        }
    },
    methods:{
        ajaxstart:function (){
            //测试用
            this.$emit('newanimeopen')
            let data = {type:'newanime',page:'1'}
            let _temp = this
            $.ajax({
                type: "get",
                url: "/newanime",
                data: data,
                cache: false,    //缓存
                beforeSend:function(){

                },
                success: function(data){
                    ajaxsuccess(data)
                },
                error:function(){

                },
                complete:function(){
                    _temp.ajaxsuccess(data)
                }
            })
        },
        ajaxsuccess:function(data){
            this.animedata={data:[{title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                    {title:'辉夜姬想让人告白 天才们的恋爱头脑战',num:'1',img:'../Images/201812311546250656.png',href:'#'},
                ]}
            console.log(this.animedata)
        }
    }
})
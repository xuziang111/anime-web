const newanime = Vue.component('newanime', {
    props:['pagestate'],
    template: `

    `,
    data:function(){
        return {
            animedata:{}
        }
    },
    mounted:function(){

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

                },
                error:function(){

                },
                complete:function(){

                }
            })
        },
        ajaxsuccess:function(data){

        }
    }
})
const pastanime = { template: '<div>foo</div>' }
const movie = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/', component:index},
    { path: '/newanime', component: newanime },
    { path: '/pastanime', component: pastanime },
    { path: '/movie', component: movie },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    el:'#app',
    router,
    data:{
        pagestate:{
            index:0,
            newanime:{data:{},num:0},
            pastanime:0,
            movie:0,
        },
    },
    methods:{
        newanimeadd:function(data){
            this.pagestate.newanime.num=1
            this.pagestate.newanime.data = data
        }
    },
}).$mount('#app')

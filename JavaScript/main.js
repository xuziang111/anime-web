
(function(){
$("#top-carousel-carousel>div").toArray().forEach((element,index) => {
    $(element).on("mouseover",function(){
        $('#top-carousel').carousel(index)
    })
});

var week = [0,0,0,0,0,0,0]
var date = new Date().getDay()
week[date-1]=1
for(let i=0;$("#timetablelist>li").length>i;i++){
    if(i!==date-1){
        $($("#timetablelist>li")[i]).on('click',()=>{
            if(week[i]===0){
                week[i]=1
                sendajax(i+1)
            }
        })
    }
}    
// var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Sunday","Saturday"]


$(`#timetablelist li:eq(${date-1}) a`).tab('show')
function sendajax(date){
    this.date = date
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
}
function ajaxerror(data,date){
    if(week[date-1]!==2){
        week[date-1]=2  
    $(`.timetable>div>div:nth-child(${date})>ul`).append(`<p>加载失败，点击重新加载。</p>`)
    $(`.timetable>div>div:nth-child(${date})>ul>p`).on('click',()=>{
        sendajax(date)
    })
}
}
function ajaxsuccess(data,date){
    $(`.timetable>div>div:nth-child(${date})>ul>p`).remove()
    console.log(date)
    let temp = ''
    for(let i=0;data.rmxf.length>i;i++){       
        temp= temp+`
        <li>
            <img src="${data.rmxf[i].img}">
            <div>
                <span class="time-title">${data.rmxf[i].title}</span>
                <span class="time-update">${data.rmxf[i].num}</span>
            </div>
        </li>
        `
    }
    $(`.timetable>div>div:nth-child(${date})>ul`).append(temp)
}

data={
    rmxf:[{title:'revisions',num:'12',img:'Images/time.jpg'},{title:'revisions',num:'12',img:'Images/time.jpg'},{title:'revisions',num:'12',img:'Images/time.jpg'},{title:'revisions',num:'12',img:'Images/time.jpg'},{title:'revisions',num:'12',img:'Images/time.jpg'},{title:'revisions',num:'12',img:'Images/time.jpg'},{title:'revisions',num:'12',img:'Images/time.jpg'},{title:'revisions',num:'12',img:'Images/time.jpg'},{title:'revisions',num:'12',img:'Images/time.jpg'}],
}
// sendajax(date)
//测试用，上线换成sendajax(date)
ajaxsuccess(data,date)
console.log(week)





})()
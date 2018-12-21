
$("#top-carousel-carousel>div").toArray().forEach((element,index) => {
    $(element).on("mouseover",function(){
        $('#top-carousel').carousel(index)
    })
});
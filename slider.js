//slider
window.addEventListener("load", startup); // load sau nội dung fix lỗi addEventListener

function startup() {
    let index = 0;
    var rightbtn = document.querySelector('.fa-chevron-right');
    var leftbtn = document.querySelector('.fa-chevron-left');
    var imgNumber = document.querySelectorAll('.slider-content-left-top img')
    console.log(imgNumber.length)
    rightbtn.addEventListener("click", function () {
        index = index + 1
        if (index > imgNumber.length - 1) {
            index = 0
        }
        document.querySelector('.slider-content-left-top').style.right = index * 100 + "%";
    })
    leftbtn.addEventListener("click", function () {

        index += 1;
        if (index <= 0) {
            index = imgNumber.length - 1;
        }
        document.querySelector('.slider-content-left-top').style.right = index * 100 + "%";
    })

    var imgNumber_bottom = document.querySelectorAll('.slider-content-left-bottom li')

    imgNumber_bottom.forEach(function (li_img, index) {
        
            li_img.addEventListener("click", function () {
                removeActive()
                document.querySelector('.slider-content-left-top').style.right = index * 100 + "%";
                li_img.classList.add("active")
                // li_img.style.color = 'rgb(204, 110, 87)';
            })
    });

    function removeActive() {
        let imgactive = document.querySelector(".active")
        imgactive.classList.remove("active")
        //  imgactive.style.color = 'black';
    }

    function set_imgAuto() {
        index = index + 1;
        if (index > imgNumber.length - 1) {
            index = 0;
        }
        removeActive()
         imgNumber_bottom[index].classList.add("active") 
        document.querySelector('.slider-content-left-top').style.right = index * 100 + "%";
       
    }
    setInterval(set_imgAuto, 3000) // sét khoản thời gian chạy cho ảnh

}

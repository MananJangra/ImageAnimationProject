let main = document.querySelector(".main");
var nextimg = 0;




const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}





// main.addEventListener("mousemove", throttleFunction((dets) => {
//     console.log("button is clicked")
//     // console.log(main.dets.clientX);
//     var div = document.createElement("div");
//     div.classList.add("imagediv");
//     div.style.left = dets.clientX + "px";
//     // console.log(dets.clientX , dets.clientY);
//     div.style.top =  dets.clientY + "px";


//     var img = document.createElement("img");
//     // img.setAttribute("src" , "https://c4.wallpaperflare.com/wallpaper/225/669/315/marvel-heroes-deadpool-marvel-comics-gray-background-wallpaper-preview.jpg");

//     img.setAttribute("src" , "https://c4.wallpaperflare.com/wallpaper/285/471/731/night-cyberpunk-futuristic-city-artwork-wallpaper-preview.jpg");








//     document.body.appendChild(div);
//     div.appendChild(img);


// // var a=70;
// // var b="%";

// // setTimeout(() => {
// //     if (!(a==0)) {
// //         img.style.transform= `translateY(${a}${b})`;
// //             a--;
// //             console.log();
// //         }
// // }, 1000);
// // img.style.transform= `translateY(${a}${b})`;



// gsap.to(div,{
//     x:50,
//     rotation: -5,
//     ease:Power4,
//     duration:1,
// })

// gsap.to(img,{
//     y:"0",
//     // rotation: -360,
//     // rotation: -5,
//     ease:Power4,
//     duration:0.3,
// })



//     div.appendChild(img);
//     setTimeout(() => {

//         img.style.transition="";
//         gsap.to(img,{
//             y:"150%",
//             ease:Power4,
//             duration:0.3,
//         })
//         // div.remove();

//     }, 1000);

// }, 200));








main.addEventListener("mousemove", throttleFunction((dets) => {
    console.log("button is clicked")
    // console.log(main.dets.clientX);
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    // console.log(dets.clientX , dets.clientY);
    div.style.top = dets.clientY + "px";





    var img = document.createElement("img");
    img.src = "https://c4.wallpaperflare.com/wallpaper/285/471/731/night-cyberpunk-futuristic-city-artwork-wallpaper-preview.jpg";

    var img2 = document.createElement("img");
    img2.src = "https://c4.wallpaperflare.com/wallpaper/967/89/86/minimalism-code-quote-text-wallpaper-preview.jpg";

    var img3 = document.createElement("img");
    img3.src = "https://c4.wallpaperflare.com/wallpaper/999/511/622/8k-uhd-3d-digital-art-abstract-art-wallpaper-thumb.jpg";
    var img4 = document.createElement("img");
    img4.src = "https://c4.wallpaperflare.com/wallpaper/45/46/362/landscape-abstract-vaporwave-purple-background-wallpaper-thumb.jpg";
    var img5 = document.createElement("img");
    img5.src = "https://c4.wallpaperflare.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-thumb.jpg";
    var img6 = document.createElement("img");
    img6.src="https://i.pinimg.com/236x/3e/9c/26/3e9c262beafc622da643ca128012dcdd.jpg";
    var img7 = document.createElement("img");
    img7.src="https://i.pinimg.com/564x/7c/58/d9/7c58d979c756470a9e23d7ba234434ef.jpg";
    var img8 = document.createElement("img");
    img8.src="https://i.pinimg.com/236x/b2/5d/1e/b25d1e6294d2a529b89708102747fc34.jpg";
    var img9 = document.createElement("img");
    img9.src="https://i.pinimg.com/236x/18/2f/29/182f295f417f3a9ca7fdf8ea39d8d833.jpg";
    var img10 = document.createElement("img");
    img10.src="https://i.pinimg.com/236x/92/47/4c/92474c04b6843ea92d530d7d22af5b44.jpg";
    var img11 = document.createElement("img");
    img11.src="https://i.pinimg.com/474x/91/47/b0/9147b00cccd6e05733a0168ab7fc9291.jpg";
    var img12 = document.createElement("img");
    img12.src="https://i.pinimg.com/236x/77/d5/7c/77d57c8d3afe77dd45759dfeca9ad2d7.jpg";



    var multiimg = [];
    multiimg.push(img);
    multiimg.push(img2);
    multiimg.push(img3);
    multiimg.push(img4);
    multiimg.push(img5);
    multiimg.push(img6);
    multiimg.push(img7);
    multiimg.push(img8);
    multiimg.push(img9);
    multiimg.push(img10);
    multiimg.push(img11);
    multiimg.push(img12);




    // console.log(multiimg);
        // for (var i = 0; i > multiimg.length; i++) {
        //     console.log("loop");
        //      document.body.appendChild(div);
        //      div.append(multiimg[nextimg])
        // }
    





        document.body.appendChild(div);
        div.append(multiimg[nextimg]);

    console.log(multiimg);



nextimg++;

if (nextimg >= multiimg.length) {
    nextimg=0;
    
}



if (nextimg == 0 || nextimg== 2 || nextimg == 4|| nextimg == 6  || nextimg == 8|| nextimg == 10){



    // div.style.transform ="rotate(90deg)";
    // console.log("1");
    // gsap.to(div,{
    //     x:40,
    //     rotation: -10,
    //     ease:Power4,
    //     duration:1,
    // })

    console.log("if");
    gsap.to(div , {
        x:80,
        ease:Power1,
        duration:2,
        rotation: 20,
    })







} else {


    // div.style.transform ="rotate(-90deg)";

    // console.log("2");
    // gsap.to(div,{
    //     x:-40,
    //     rotation: 10,
    //     ease:Power4,
    //     duration:1,
    // })

    console.log("else");

    gsap.to(div , {
        x:-80,
        ease:Power1,
        duration:2,
        rotation: -20,
    })




}



gsap.to(multiimg,{
    y:"0",
    // rotation: -360,
    // rotation: -5,
    ease:Power4,
    duration:0.3,
})



setTimeout(() => {

            // multiimg.style.transition="";
            gsap.to(multiimg,{
                y:"150%",
                ease:Power4,
                duration:0.3,
            })
            // div.remove();
    
        }, 1000);



}, 100));







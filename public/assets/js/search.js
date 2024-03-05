let filterArray = [];

let galleryArray = [

    {
        id: 1,
        image: "1.png",
        extraImages: ["image1-1.jpg", "image1-2.jpg", "image1-3.jpg", "image1-4.jpg"],
        name: "Knee Joint Instrument Box",
        description: "Outside Dimensions/mm: 520x335x120, 550x275x160, 550x270x120 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 2,
        image: "2.png",
        extraImages: [],
        name: "Hip Joint - Bio Polar Instrument Box",
        description: "Outside Dimensions/mm: 520x335x120, 550x275x160, 550x270x120 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 3,
        image: "3.png",
        extraImages: ["image3-1.png", "image3-2.png"],
        name: "Hip Joint - Un Cemented Stamp & Cup Instrument Box",
        description: " Outside Dimensions/mm: 500X250X130 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 4,
        image: "5.png",
        extraImages: ["image5-1.png", "image5-2.png"],
        name: "Spine Implant Instrument Box",
        description: "Outside Dimensions/mm: 380X240X100 <pre></pre> <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 5,
        image: "8.png",
        extraImages: ["image8-1.png", "image8-2.png"],
        name: "Spine Instrument Box",
        description: "Outside Dimensions/mm: 415x275x175, 530X310X120 <pre>            </pre> <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 6,
        image: "10.png",
        extraImages: ["image10-1.jpg", "image10-2.jpg"],
        name: "Plif & Tilf Instrument Box",
        description: "Outside Dimensions/mm: 420X270X130 <pre>            </pre> <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 7,
        image: "7.png",
        extraImages: ["image7-1.jpg", "image7-2.jpg"],
        name: "Misso Robotic Instrument Box",
        description: "Outside Dimensions/mm: 596X296X175, 706X256X78, 596X296X175 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 8,
        image: "11.png",
        extraImages: [],
        name: "Tibia Femur Instrument Box",
        description: "Outside Dimensions/mm: 550x260x130 <pre></pre> <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 9,
        image: "9.png",
        extraImages: [],
        name: "PFN Instrument Box <pre>  </pre>",
        description: "Outside Dimensions/mm: 500x260x140 <pre></pre> <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 10,
        image: "12.png",
        extraImages: ["image12-1.jpg", "image12-2.jpg"],
        name: "PFN2A Instrument Box <pre>      </pre>",
        description: "Outside Dimensions/mm: 500x250x130 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 11,
        image: "13.png",
        extraImages: [],
        name: "Trauma - Expert Tibia Instrument Box <pre>   </pre>",
        description: "Outside Dimensions/mm: 550x260x130 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 12,
        image: "14.png",
        extraImages: [],
        name: "Trauma - Small Fragment 3.5mm Instrument Box ",
        description: "Outside Dimensions/mm: 540x250x140 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 13,
        image: "15.png",
        extraImages: [],
        name: "Trauma - Large Fragment 4.5mm Instrument Box",
        description: "Outside Dimensions/mm: 540x250x140 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 14,
        image: "16.png",
        extraImages: [],
        name: "Trauma - LCP 4.0mm Screw Box",
        description: "Outside Dimensions/mm: 240X200X100 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 15,
        image: "17.png",
        extraImages: [],
        name: "Trauma - LCP 3.5mm Screw Box",
        description: "Outside Dimensions/mm: 200X145X100 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 16,
        image: "18.png",
        extraImages: ["image18-1.jpg", "image18-2.jpg"],
        name: "Nail Implant Instrument Box",
        description: "Outside Dimensions/mm: 500x270x130 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 17,
        image: "19.png",
        extraImages: [],
        name: "LCP 5.0mm Screw Box",
        description: "Outside Dimensions/mm: 270X200X100 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 18,
        image: "20.png",
        extraImages: [],
        name: "LCP 6.5mm Screw Box",
        description: "Outside Dimensions/mm: 275X232X120 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 19,
        image: "21.png",
        extraImages: [],
        name: "Sterilize Basket",
        description: "Outside Dimensions/mm: 520X300X80 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 20,
        image: "22.png",
        extraImages: [],
        name: "Endoscopy Instrument Box",
        description: "Outside Dimensions/mm: 500x270x130 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 21,
        image: "23.png",
        extraImages: [],
        name: "Arthoscopy Instrument Box",
        description: "Outside Dimensions/mm: 500x270x130 <hr style='color: black;'> Colour: Silver, Blue, Green, Black"
    },
    {
        id: 22,
        image: "24.png",
        extraImages: ["image24-1.jpg", "image24-2.jpg"],
        name: "Silicone Mats",
        description: "Outside Dimensions/mm: 330X240"
    },
    {
        id: 23,
        image: "25.png",
        extraImages: ["image25-1.png"],
        name: "Silicone Handle",
        description: ""
    }, {
        id: 24,
        image: "26.png",
        extraImages: ["image26-1.jpg", "image26-2.jpg", "image26-3.jpg"],
        name: "Silicone Handle Type-II",
        description: "Outside Dimensions/mm: 440X45X10"
    }
];

//search code to diaplay cards

window.addEventListener("DOMContentLoaded", (event) => {

    const el = document.getElementById('searchInput');
    if (el) {
        el.addEventListener("keypress", function (e) {

            if (e.key === 'Enter') {
                document.getElementById("card-add").innerHTML = "";
                let text = document.getElementById("searchInput").value;

                filterArray = galleryArray.filter(function (a) {
                    if (a.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
                        return a.name;
                    }
                });

                if (text == "") {
                    document.getElementById("static-content-display").style.display = "block";
                    document.getElementById("slider-search").style.display = "none";
                    document.getElementById("para").style.display = "none";
                } else {

                    if (filterArray == "") {
                        document.getElementById("para").style.display = "block";
                        document.getElementById("slider-search").style.display = "none";
                        document.getElementById("static-content-display").style.display = "none";
                    }
                    else {
                        //display search results
                        document.getElementById("slider-search").style.display = "block";
                        document.getElementById("para").style.display = "none";
                        document.getElementById("static-content-display").style.display = "none";

                        for (let index = 0; index < filterArray.length; index++) {

                            var extraImagesHtml = ``;

                            if (filterArray[index].extraImages?.length != 0) {
                                for (let imaIndex = 0; imaIndex < filterArray[index].extraImages?.length; imaIndex++) {
                                    extraImagesHtml += `
                                    <a href="assets/img/products/products/slideshow/${filterArray[index].extraImages[imaIndex]}" data-lightbox="image-${filterArray[index].image}"
                                        hidden data-title="${filterArray[index].name}" data-alt="${filterArray[index].name}">
                                    </a>`;
                                }
                            }

                            document.getElementById("card-add").innerHTML += `
                        
                        <div class="product-card swiper-slide" style="width: 30%; margin-bottom: 5%;">
                            <div class="product-card-top"
                                style="background-image: url('assets/img/products/products/${filterArray[index].image}'); background-size: unset; background-repeat: unset;">
                                <div class="add-section"><a
                                    class="fs-10 fs-md-9 d-flex flex-column flex-xl-row align-items-center" href="#!"><span
                                        class="uil uil-phone me-1 align-middle"></span>Enquire </a>
                                  
                                    <a class="fs-10 fs-md-9 d-flex flex-column flex-xl-row align-items-center text-success fw-bold"
                                        href="assets/img/products/products/${filterArray[index].image}" data-lightbox="image-${filterArray[index].image}"
                                        data-title="${filterArray[index].name}" 
                                        data-alt="${filterArray[index].name}"><span
                                        class="uil uil-capture me-1 align-middle"></span>View</a>
                                        ${extraImagesHtml}
                                </div>
                            </div>
                            <div class="d-flex flex-column gap-x1 p-x1 pb-5 product-card-body">
                                <h3 class="text-success fw-semi-bold text-center fs-8 fs-md-11 fs-xxl-7">
                                    ${filterArray[index].name}</h3>
                                <p class="text-dark fs-10 fs-md-9 fs-xl-8 text-capitalize lh-xl mb-0">
                                    ${filterArray[index].description}                          
                                </p>
                            </div>
                        </div>
    
                        `;

                        }



                    }

                }


            }

        });
    }
});

// document.getElementById("searchInput").addEventListener("keyup", function () {

//     let text = document.getElementById("searchInput").value;

//     filterArray = galleryArray.filter(function (a) {
//         if (a.name.includes(text)) {
//             return a.name;
//         }

//         if (this.value == "") {

//             document.getElementById("static-content-display").style.display = "block";
//             document.getElementById("slider-search").style.display = "block";
//         } else {

//             if (filterArray == "") {
//                 document.getElementById("para").style.display = "block";
//                 document.getElementById("card").innerHTML = "";
//             }
//             else{
//                 //display search results
//                 document.getElementById("para").style.display = "none";
//             }
//         }
//     })
// });

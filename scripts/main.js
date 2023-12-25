const btnDescriptionAdresse = document.querySelector(".btn-description-adresse")
const marquee1 = document.querySelector("#marquee-1")
const googleMapEmbed = document.querySelector("#googleMapEmbed")

const dicoGallerie = {
    1: "./medias/marquee1-1.jpg",
    2: "./medias/marquee1-2.jpg",
    3: "./medias/marquee1-3.jpg",
    4: "./medias/marquee1-4.jpg",
    5: "./medias/marquee1-5.jpg",
    6: "./medias/marquee1-6.jpg",
    7: "./medias/marquee1-7.jpg",
    8: "./medias/marquee1-8.jpg",
    9: "./medias/marquee1-9.jpg",
    10: {
        1: "./medias/marquee1-11-safeimagekit/marquee1-111-safeimagekit.jpg",
        2: "./medias/marquee1-11-safeimagekit/marquee1-112-safeimagekit.jpg",
        3: "./medias/marquee1-11-safeimagekit/marquee1-113-safeimagekit.jpg",
        4: "./medias/marquee1-11-safeimagekit/marquee1-114-safeimagekit.jpg",
        5: "./medias/marquee1-11-safeimagekit/marquee1-115-safeimagekit.jpg",
        6: "./medias/marquee1-11-safeimagekit/marquee1-116-safeimagekit.jpg",
        7: "./medias/marquee1-11-safeimagekit/marquee1-117-safeimagekit.jpg",
        8: "./medias/marquee1-11-safeimagekit/marquee1-118-safeimagekit.jpg",
        9: "./medias/marquee1-11-safeimagekit/marquee1-119-safeimagekit.jpg",
    }
}

const spanGallerie1 = document.querySelector(".photogallerie1")
const spanGallerie2 = document.querySelector(".photogallerie2")
const spanGallerie3 = document.querySelector(".photogallerie3")
const spanGallerie4 = document.querySelector(".photogallerie4")
const spanGallerie5 = document.querySelector(".photogallerie5")
const spanGallerie6 = document.querySelector(".photogallerie6")
const spanGallerie7 = document.querySelector(".photogallerie7")
const spanGallerie8 = document.querySelector(".photogallerie8")
const spanGallerie9 = document.querySelector(".photogallerie9")

const spanList = [spanGallerie1, spanGallerie2, spanGallerie3, spanGallerie4, spanGallerie5, spanGallerie6, spanGallerie7, spanGallerie8, spanGallerie9]

googleMapEmbed.classList.add("googleMapEmbedInvisible")
btnDescriptionAdresse.addEventListener("click", () => {
    googleMapEmbed.classList.toggle("googleMapEmbedInvisible")
})

function nombreAleatoireEntreUnEtCent0() {
    let nbrRandomImg = Math.floor(Math.random() * 10) + 1
    let nbrRandomSpan = Math.floor(Math.random() * 10) + 1
    console.log(nbrRandomImg)
    if (nbrRandomImg < 10 && nbrRandomImg > 0) {
        console.log(spanList[nbrRandomSpan - 1])
        let spanTarget = spanList[nbrRandomSpan - 1]

        spanTarget.classList.add("spanGallerieDespawn")
        setTimeout(function () {
            spanTarget.src = dicoGallerie[nbrRandomImg]
            spanTarget.classList.add("spanGallerieSpawn")
        }, 256)
    }
    /*     else {
            let counter = 0
            spanList.forEach(n => {
                console.log(n)
                counter++
                n.src = dicoGallerie[10][counter]
    
            })
        } */
}

setInterval(nombreAleatoireEntreUnEtCent0, 5000)
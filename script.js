// HEADER
//SECTION 1:
// 1.1 Tạo hiệu ứng animation cho chữ xuất hiện lần lượt
// 1.2 Tạo hiệu ứng xuất hiện từng chữ cái



// Hàm kiểm tra scroll đến phần từ, để chạy hiệu ứng animation
function checkScrollToElement(idElement, callFunction) {
    const target = document.getElementById(idElement);
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callFunction();
                observer.unobserve(entry.target); // Chỉ gọi 1 lần
            }
        });
    }, {
        threshold: 0.5 // Khi 50% phần tử nằm trong màn hình
    });

    observer.observe(target);
}

//2 Thêm hiệu ứng animation
function addAnimation(animation) {
    document.querySelectorAll(".add-" + animation).forEach(el => {
        el.classList.add(animation)
    });
}


// -----------------------------------------------------------------------
// HEADER
// Phóng to video
function videoZoomOut(cl_video) {
    const videos = document.querySelectorAll(cl_video);
    videos.forEach(video => {
        let size = 85;
        const interval = setInterval(() => {
            if (size > 100) {
                clearInterval(interval);
                return;
            }
            video.style.width = size + "%";
            video.style.height = size + "%";
            size = size + 0.02;
        }, 5); // Càng nhỏ càng mượt
    });
}

videoZoomOut(".video-zoom-in");

// -----------------------------------------------------------------------
//SECTION 1:
// 1.1 Tạo hiệu ứng animation cho chữ xuất hiện lần lượt
function handleAnimationBanner() {
    const getText = document.querySelectorAll(".section-1-banner-item-text")
    let count = 0
    getText.forEach(text => {

        setTimeout(() => {
            text.classList.add("slide-up")
        }, count)
        count = count + 500

    })
}
// 1.2 Tạo hiệu ứng xuất hiện từng chữ cái
function handleAnimationText() {
    document.querySelectorAll(".animated-text").forEach(textEl => {
        const content = textEl.textContent.trim();
        textEl.innerHTML = "";

        content.split("").forEach((char, i) => {
            const span = document.createElement("span");

            if (char === " ") {
                span.textContent = "\u00A0";
            } else {
                span.textContent = char;
                span.className = "letter";
                span.style.display = "inline-block"; // 
                span.style.animationDelay = `${i * 0.05}s`;
            }

            textEl.appendChild(span);
        });
    });
}






// -----------------------------------------------------------------------
//SECTION 2:
// Hiệu ứng zoom ảnh
function ZoomImage() {
    let count = 80
    const interval = setInterval(() => {
        if (count > 100) {
            clearInterval(interval);
            return;
        }
        document.getElementById("SECTION2").style.backgroundSize = count + "%"
        count = count + 0.1
    }, 10)

}






// -----------------------------------------------------------------------
// Chạy animation khi lướt tới
checkScrollToElement("SECTION1", handleAnimationBanner)
checkScrollToElement("SECTION1", handleAnimationText)
checkScrollToElement("SECTION2", handleAnimationText)
checkScrollToElement("SECTION1", () => addAnimation("fade-in-right"))
checkScrollToElement("SECTION1", () => addAnimation("fade-in-left"))
checkScrollToElement("SECTION2", () => addAnimation("fade-in-left"))
checkScrollToElement("SECTION2", ZoomImage)
checkScrollToElement("SECTION3", () => addAnimation("fade-in-left"))

checkScrollToElement("FOOTER", () => addAnimation("slide-up"))
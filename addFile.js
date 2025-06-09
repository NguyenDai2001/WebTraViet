// thêm file vào /headhead
const timestamp = new Date().getTime(); // Thời gian hiện tại theo milliseconds
const stylesheets = ['style.css', 'animation.css'];
stylesheets.forEach(file => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${file}?v=${timestamp}`;
    document.head.appendChild(link);
});


// thêm file js vào  /body
const scripts = ['script.js'];

scripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true; // hoặc dùng async nếu phù hợp
    document.body.appendChild(script);
});
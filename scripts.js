document.addEventListener("DOMContentLoaded", function() {
    // 选取 h1 标签
    const schoolTitle = document.getElementById("school-title");

    // 为 h1 标签添加点击事件
    schoolTitle.addEventListener("click", function() {
        // 创建一个新窗口显示图片
        const newWindow = window.open("", "_blank", "width=800,height=600");
        newWindow.document.write(`
            <html>
            <head><title>睿智学院照片</title></head>
            <body style="margin:0; padding:0; text-align:center;">
                <img src="back.webp" alt="睿智学院照片" style="width:100%; height:auto;" />
            </body>
            </html>
        `);
    });
});

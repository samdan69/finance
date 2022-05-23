// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

//Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

// Програм холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдөлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөгдөлөө авах хэсэг");
    // 2. Олж авсан өгөгдөлүүдээ санхүүгийн контроллерт дамжуулж, тэнд хадгална.
    // 3. Олж авсан өгөгдөлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнп гаргана.
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);

todoApp.factory('ImagesFactory', function() {
    var images = [
        "http://www.w3schools.com/css/trolltunga.jpg",
        "http://wowslider.com/sliders/demo-45/data1/images/waves.jpg",
        "http://wowslider.com/sliders/demo-7/data/images/amsterdam.jpg"
    ];

    function getAllImages() {
        return images;
    }

    return {
        getAllImages: getAllImages
    };
});
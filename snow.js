window.onload = function() {

    //get the canvas and context and store in vars
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    //set canvas dims to window height and width
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //generate the snowflakes and apply attributes
    var mf = 100; //max flakes
    var flakes = [];

    //loop through the empty flakes and apply attributes
    for (var i = 0; i < mf; i++)
    {
        flakes.push({
            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*5+2 //min of 2px and max of 7px
            d: Math.random() + 1 //density of the flake

        })
}

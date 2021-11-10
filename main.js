canvas-
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleft",my_mouseleft);
function my_mouseleft(e)
{
    mouseEvent="mouseleft";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mousedown",my_mouseright);
function my_mouseright(e)
{
    mouseEvent="mouseright";
}


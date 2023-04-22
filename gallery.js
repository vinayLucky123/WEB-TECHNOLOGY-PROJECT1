function collOfImg()
{
    var allImgTag=document.images;
    for(i=0;i<allImgTag.length;i++)
    {
        allImgTag[i].src=`./images/${i}.jpeg`
    }
}
collOfImg()
function bigWindow(imgUrl)
{
    document.getElementById("imgContainer").style.backgroundImage=`url(${imgUrl})`
}
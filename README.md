# fnimageinfo
Demonstration function that uses imagemagick to provide image details.


### Example invocation--cat the file and pipe it to the function invocation:

`cat 3x3.jpg | fn invoke myapp imageinfo-bin`


### Example curl invocation--specify Content-Type and use --data-binary

`curl --data-binary @3x3.jpg -H "Content-Type: application/octet-stream" -X POST http://localhost:8080/t/tut/imageinfo-bin`
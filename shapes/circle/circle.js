/**
 * Created by jivan108 on 3/26/18.
 */
window.onload = function() {


    let radius = document.getElementById("radius");
    let diameter = document.getElementById("diameter");

    let aResultElement = document.getElementById("area-result");
    let cResultElement = document.getElementById("circumference-result");

    radius.onkeyup = function () {
        if (radius.value) {


            let d;

            let cResult;

            if (diameter.value) {
                d = parseInt(diameter.value);
                cResult = Math.PI * d;
                cResultElement.textContent = cResult.toString();
            }



            let r = parseInt(radius.value);



            let aResult = Math.PI * Math.pow(r, 2);


            aResultElement.textContent = aResult.toString();
        }
    };

    diameter.onkeyup = function () {
        if (diameter.value) {

            let r;
            let aResult;

            if (radius.value) {
                r = parseInt(radius.value);
                aResult = Math.PI * Math.pow(r, 2);
                aResultElement.textContent = aResult.toString();
            }
            let d = parseInt(diameter.value);

            let cResult = Math.PI * d;


            cResultElement.textContent = cResult.toString();



        }
    };
};

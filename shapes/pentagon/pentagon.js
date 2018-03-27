/**
 * Created by jivan108 on 3/19/18.
 */
window.onload = function() {


    let side = document.getElementById("side");

    let apothem = document.getElementById("apothem");

    let aResultElement = document.getElementById("area-result");
    let pResultElement = document.getElementById("perimeter-result");

    side.onkeyup = function () {
        if (side.value) {

            let s = parseInt(side.value);


            let pResult = 5 * s;


            pResultElement.textContent = pResult.toString();

            if (apothem.value) {
                let a = parseInt(apothem.value);
                let aResult = pResult * a / 2;
                aResultElement.textContent = aResult.toString();
            }





        }
    };

    apothem.onkeyup = function () {
        if (side.value) {

            let s = parseInt(side.value);


            let pResult = 5 * s;


            pResultElement.textContent = pResult.toString();

            if (apothem.value) {
                let a = parseInt(apothem.value);
                let aResult = pResult * a / 2;
                aResultElement.textContent = aResult.toString();
            }


        }
    }
};

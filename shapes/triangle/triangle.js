/**
 * Created by jivan108 on 3/19/18.
 */
window.onload = function() {


    let base = document.getElementById("base");

    let height = document.getElementById("height");

    let aResultElement = document.getElementById("area-result");
    let pResultElement = document.getElementById("perimeter-result");

    base.onkeyup = function () {
        if (base.value) {

            let b = parseInt(base.value);

            if (height.value) {
                let h = parseInt(height.value);
                let aResult = b * h / 2;
                aResultElement.textContent = aResult.toString();
            }


            let pResult = 3 * b;


            pResultElement.textContent = pResult.toString();






        }
    };

    height.onkeyup = function () {
        if (height.value && base.value) {

            let b = parseInt(base.value);
            let h = parseInt(height.value);

            let pResult = 3 * b;

            pResultElement.textContent = pResult.toString();

            let aResult = b * h / 2;

            aResultElement.textContent = aResult.toString();
        }
    };
};

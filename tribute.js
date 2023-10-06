
               const showMoreButton = document.getElementById("showMoreButton");
        const moreInfo = document.getElementById("moreInfo");

        showMoreButton.addEventListener("click", function() {
            if (moreInfo.style.display === "none") {
                moreInfo.style.display = "block";
                showMoreButton.textContent = "Hide More";
            } else {
                moreInfo.style.display = "none";
                showMoreButton.textContent = "Show More";
            }
        });  
            
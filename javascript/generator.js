window.addEventListener("load", () => {
  let generatorslot = document.querySelectorAll(".fetch-content");
  generatorslot.forEach((entry) => {
    if (entry.getAttribute("fetch-from")) {
      let link = entry.getAttribute("fetch-from");
      fetch(link)
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const html = parser.parseFromString(data, "text/html");
          let thumbnail = html
            .querySelector('meta[property="og:image"]')
            .getAttribute("content");
          let title = html
            .querySelector('meta[property="og:title"]')
            .getAttribute("content");
            
            const titleLimt = 30
            const descLimit = 70
            if (title.length > titleLimt){
           
                title = title.substring(0, titleLimt) + "...";
            }

        
          let description = html
            .querySelector('meta[property="og:description"]')
            .getAttribute("content");

            if (description.length > descLimit){
           
                description = description.substring(0, descLimit) + "...";
            }

            if (thumbnail != null && title != null && description != null){
                // Build HTML
                let newHTML = `
                <div class="card mb-3 shadow card-color-bg" style="max-height: 50%;">
                            <div class="row g-0">
                              <div class="col-sm-12 col-md-12 m-auto">
                                <img src="${thumbnail}" class="img-fluid rounded-start  bg-info"
                                  alt="Sorry! Image not found.">
                              </div>
                              
                            </div>
                          </div>
                `
                entry.innerHTML = newHTML;
            }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

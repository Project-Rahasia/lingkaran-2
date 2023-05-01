const getChapClass = (path) => {
  return this.location.pathname.substr(7, 8) === path ? "show" : "";
};

const getCollapsed = (path) => {
  return this.location.pathname.substr(7, 8) !== path ? "collapsed" : "";
};

const getChapChild = (path) => {
  return this.location.pathname.substring(7) === path ? "course-active" : "";
};

document.querySelector(".list-course").innerHTML = `
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button ${getCollapsed(
          "Materi-1"
        )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Bagian - Bagian Lingkaran
        </button>
    </h2>

    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse ${getChapClass(
      "Materi-1"
    )}" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/1.Pendahuluan/index.html" class="list-course-child isDisabled sub-1-0 ${getChapChild(
          "Materi-1/1.Pendahuluan/index.html"
        )}">Pendahuluan</a>
        </div>
    
        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/2.Titik-Pusat/index.html" class="list-course-child isDisabled sub-1-1 ${getChapChild(
          "Materi-1/2.Titik-Pusat/index.html"
        )}">Titik Pusat</a>
        </div>
    
        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/3.Diameter/index.html" class="list-course-child isDisabled sub-1-2 ${getChapChild(
          "Materi-1/3.Diameter/index.html"
        )}">Diameter</a>
        </div>

        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/4.Jari-jari/index.html" class="list-course-child isDisabled sub-1-3 ${getChapChild(
          "Materi-1/4.Jari-jari/index.html"
        )}">Jari - Jari</a>
        </div>

        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/5.Busur/index.html" class="list-course-child isDisabled sub-1-4 ${getChapChild(
          "Materi-1/5.Busur/index.html"
        )}">Busur</a>
        </div>
    
        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/6.Tali-busur/index.html" class="list-course-child isDisabled sub-1-5 ${getChapChild(
          "Materi-1/6.Tali-Busur/index.html"
        )}">Tali Busur</a>
        </div>
        
        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/7.Apotema/index.html" class="list-course-child isDisabled sub-1-6 ${getChapChild(
          "Materi-1/7.Apotema/index.html"
        )}">Apotema</a>
        </div>

        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/8.Tembereng/index.html" class="list-course-child isDisabled sub-1-7 ${getChapChild(
          "Materi-1/8.Tembereng/index.html"
        )}">Tembereng</a>
        </div>

        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/9.Juring/index.html" class="list-course-child isDisabled sub-1-8 ${getChapChild(
          "Materi-1/9.Juring/index.html"
        )}">Juring</a>
        </div>
        
        <div class="list-course mb-3">
        <a href="/Pages/Materi-1/10.Latihan/index.html" class="list-course-child isDisabled sub-1-9 ${getChapChild(
          "Materi-1/10.Latihan/index.html"
        )}">Latihan 1</a>
        </div>

        <div class="list-course">
        <a href="/Pages/Materi-1/11.Kuis1/index.html" class="list-course-child isDisabled sub-1-10 ${getChapChild(
          "Materi-1/11.Kuis1/index.html"
        )}">Kuis</a>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button class="accordion-button ${getCollapsed(
          "Materi-2"
        )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Keliling Lingkaran
        </button>
    </h2>

    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse ${getChapClass(
      "Materi-2"
    )}" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <div class="list-course mb-3">
        <a href="/Pages/Materi-2/0/" class="list-course-child isDisabled sub-2-0 ${getChapChild(
          "Materi-2/0/"
        )}">Pendahuluan</a>
        </div>

        <div class="list-course mb-3">
        <a href="/Pages/Materi-2/1/" class="list-course-child isDisabled sub-2-1 ${getChapChild(
          "Materi-2/1/"
        )}">Mengukur Keliling Suatu Lingkaran</a>
        </div>

        <div class="list-course mb-3">
        <a href="/Pages/Materi-2/2/" class="list-course-child isDisabled sub-2-2 ${getChapChild(
          "Materi-2/2/"
        )}">Menemukan Rumus Keliling Lingkaran</a>
        </div>

        <div class="list-course mb-3">
        <a href="/Pages/Materi-2/3/" class="list-course-child isDisabled sub-2-3 ${getChapChild(
          "Materi-2/3/"
        )}">Latihan</a>
        </div>

        <div class="list-course">
        <a href="/Pages/Materi-2/4/" class="list-course-child isDisabled sub-2-4 ${getChapChild(
          "Materi-2/4/"
        )}">Kuis</a>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button class="accordion-button ${getCollapsed(
          "Materi-3"
        )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Luas Lingkaran
        </button>
    </h2>
    
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse ${getChapClass(
      "Materi-3"
    )}" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <div class="list-course mb-3">
        <a href="/Pages/Materi-3/0/" class="list-course-child isDisabled sub-3-0 ${getChapChild(
          "Materi-3/0/"
        )}">Pendahuluan</a>
        </div>
        
        <div class="list-course mb-3">
        <a href="/Pages/Materi-3/1/" class="list-course-child isDisabled sub-3-1 ${getChapChild(
          "Materi-3/1/"
        )}">Menentukan Rumus Luas Lingkaran</a>
        </div>

        <div class="list-course mb-3">
        <a href="/Pages/Materi-3/2/" class="list-course-child isDisabled sub-3-2 ${getChapChild(
          "Materi-3/2/"
        )}">Latihan</a>
        </div>

        <div class="list-course">
        <a href="/Pages/Materi-3/3/" class="list-course-child isDisabled sub-3-3 ${getChapChild(
          "Materi-3/3/"
        )}">Kuis</a>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
        <button class="accordion-button ${getCollapsed(
          "Latihan"
        )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Latihan
        </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse ${getChapClass(
      "Latihan"
    )}" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
        <div class="list-course">
        <a href="/pages/latihan/" class="list-course-child isDisabled sub-4-0 ${getChapChild(
          "Latihan/"
        )}">Latihan</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

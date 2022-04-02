export function home(root){
    root.innerHTML=`
    <nav class="nav-bar">
        <a href=""><i class="fas fa-bars"></i></a>
        </nav>
        <div class="contenedor title">
            <h2>Hello!</h2>
            <span>Check the weather by the city</span>
        </div>
        <div class="search contenedor">
                <input type="text" id="search-bar" autocomplete="off" placeholder="Search city">
                <a href="#details" id="btn" class="btn-search"><i class="fas fa-search" ></i></a>
        </div>
        <div class="contenedor">
            <h4>Favorite city</h4>
            <div class="grid-card">
              <div class="card-img">
                  <img src="img/bsas.jpg" alt="">
                  <div class="info-city">
                  <span>Buenos Aires</span>
                  </div>
              </div>
              <div class="card-img">
                <img src="img/newyork.jpg" alt="">
                <div class="info-city">
                <span>New York</span>
                </div>
            </div>
            <div class="card-img">
                <img src="img/paris.jpg" alt="">
                <div class="info-city">
                <span>París</span>
                </div>
            </div>
            <div class="card-img">
                <img src="img/roma.jpg" alt="">
                <div class="info-city">
                <span>Roma</span>
                </div>
            </div>
            </div>
        </div>
    `;
}
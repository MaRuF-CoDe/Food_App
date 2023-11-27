import React from 'react'

export default function Caro() {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div class="carousel-inner" id='caro'>
          <div class="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div class="carousel-item active">
            <img src="https://w.forfun.com/fetch/e5/e594d337200536d04e08e6584a690275.jpeg" class="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
          </div>
          <div class="carousel-item">
            <img src="https://w0.peakpx.com/wallpaper/467/393/HD-wallpaper-food-dessert-still-life.jpg" class="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
          </div>
          <div class="carousel-item">
            <img src="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg" class="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}


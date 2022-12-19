<template>
          
    <section class="banner-home">

        <h1 class="visually-hidden">Inicio</h1>

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/banner.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/banner-dos.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/banner-tres.jpg" class="d-block w-100" alt="...">
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
        
    </section>

</template>

<script>
export default {
    name: 'bannerPrincipal',
}
</script>
<style scoped>

    .banner{
    background: url(../assets/vinilo-antiguo.jpeg) no-repeat;
    background-size: cover;
    height: 70vh;
    background-position: 50% 50%;
    width: 100%;
    }
    .banner h2{
        font-size: 4rem;
        font-weight: 700;
        color: white;
    }

    @media screen and (max-width: 768px){
        .banner{
            height: 100vh;
        }
    }
</style>
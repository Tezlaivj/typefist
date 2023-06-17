<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm">
                <h1 class="title-footer"><i class="fa-sharp fa-regular fa-keyboard fa-bounce"
                        style="color: #E8AA42 !important;"></i>
                    typefist</h1>
            </div>
            <div class="col-sm">
                <a href="">
                    <h3>Useful Links</h3>
                </a>
                <a href="">
                    <h5>sign up</h5>
                </a>
                <a href="">
                    <h5>about us</h5>
                </a>
                <a href="">
                    <h5>terms of service</h5>
                </a>
            </div>
            <div class="col-sm">
                <h3>Community</h3>
                <a href="">
                    <h5>Discord</h5>
                </a>
            </div>
        </div>

        <h4>Copyright © typefist 2023</h4>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    background-color: #025464;
    padding: 3%;
}

.title-footer {
    color: #E8AA42 !important;
}

.col-sm {
    text-align: left;
    color: #E8AA42 !important;
}

.col-sm h3,
h5 {
    text-align: left;
    color: #E8AA42 !important;
}

h3 {
    font-weight: bolder;
}

h5 {
    text-decoration: underline;
    color: #E8AA42;
    font-size: x-large;
}

a {
    color: #E8AA42 !important;
    font-weight: bolder;
}

h4 {
    text-align: left;
    color: #E8AA42 !important;
    font-weight: 800;
    padding-top: 5%;
}


@media only screen and (max-width: 700px) {
    h3 {
        padding-top: 5%;
    }
}
</style>
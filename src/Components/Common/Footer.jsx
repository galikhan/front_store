import React from "react";

export const Footer = () => {
  return (
    <>
      <div class="bg-body-tertiary text-center pb-5">
        <div class="row mt-1 gy-3">
          <div class="col-12 col-lg-3" style={{ textAlign: "center" }}>
            <p class="fw-bold">Мы в соцсетях</p>
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa-brands fa-youtube fa-2x"></i>
            </a>
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <br />
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa-brands fa-telegram fa-2x"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa-brands fa-vk fa-2x"></i>
            </a>
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
          </div>

          <div class="col-12 col-lg-3">
          <p class="fw-bold">г. Караганды</p>
                <p>ул Гоголя 64/3</p>
                <a href="tel:87057590099">+7(705)759-00-99</a><br />
                <a href="tel:87010716140">+7(701)071-61-40</a>

          </div>

          <div class="col-12 col-lg-3">
                  <p class="fw-bold">г.Астана </p>
                  <p>ул Бейсекбаева 18Б 1 этаж</p>
                  <a href="tel:87052396303">+7(705)239-63-03</a><br />
                  <a href="tel:8(705)7592999">+7(705)759-29-99</a>

          </div>

          <div class="col-12 col-lg-3">
                  <p class="fw-bold">г. Алматы </p>
                  <p>Микрорайон Атырау, 10 2 этаж</p>
                  <a href="tel:87758191232">+7(775)819-12-32</a><br />
                  <a style={{"display":"none"}} href="tel:87758191232">+7(775)819-12-32</a><br />

          </div>
        </div>

        <div class="text-center p-3">
          <p>© 2024 TОО «Santehplast»</p>
        </div>
      </div>
    </>
  );
};

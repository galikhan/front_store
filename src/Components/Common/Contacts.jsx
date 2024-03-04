import React from "react";
import pipeImageUrl from "../../Assets/santec-pipes.png";

export const Contacts = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-md-12 mb-10">
          <h6 className="page-title">Контакты</h6>
        </div>
      </div>
      <div className="row mt-10">
        <div className="col-12 col-lg-4">
          <div className="col-12 col-xl-10 mt-4">
            <div className="d-flex justify-content-center align-items-center">
              <a target="_blank" href="https://2gis.kz/karaganda/firm/70000001041892041"><i className="fas fa-location-dot fa-4x"></i></a>
            </div>
            <div className="mt-4 text-center">
              <p>
                ТОО "SANTEHPLAST"
                <p className="fw-bold">г. Караганды</p>
                <p>ул Гоголя 64/3</p>
                <a href="tel:87057590099">+7(705)759-00-99</a><br />
                <a href="tel:87010716140">+7(701)071-61-40</a>
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fas fa-clock fa-4x"></i>
            </div>
            <div className="mt-4 text-center">
              <p>Время работы:</p>
              <p>Пн-Пт: 9:00 — 18:00</p>
              <p>Сб: 9:00 — 14:00</p>
            </div>

          </div>

        </div>
        <div className="col-12 col-lg-4">

          <div className="row justify-content-xl-center">

            <div className="col-12 col-xl-10 mt-4">
              <div className="d-flex justify-content-center align-items-center">
                <a target="_blank" href="https://2gis.kz/astana/firm/70000001018072767"><i className="fas fa-location-dot fa-4x"></i></a>
              </div>
              <div className="mt-4 text-center">
                <p>
                  ТОО "SANTEHPLAST"
                  <p className="fw-bold">г.Астана </p>
                  <p>ул Бейсекбаева 18Б 1 этаж</p>
                  <a href="tel:87052396303">+7(705)239-63-03</a><br />
                  <a href="tel:8(705)7592999">+7(705)759-29-99</a>
                </p>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <i className="fas fa-clock fa-4x"></i>
              </div>
              <div className="mt-4 text-center">
                <p>Время работы:</p>
                <p>Пн-Пт: 9:00 — 18:00</p>
                <p>Сб: 9:00 — 14:00</p>
              </div>


            </div>

          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="row justify-content-xl-center">
            <div className="col-12 col-xl-10 mt-4">
              <div className="d-flex justify-content-center align-items-center">
                <a target="_blank" href="https://2gis.kz/almaty/geo/9430047375063232"><i className="fas fa-location-dot fa-4x"></i></a>
              </div>
              <div className="mt-4 mb-4 text-center">
                <p>
                  ТОО "SANTEHPLAST"
                  <p className="fw-bold">г. Алматы </p>
                  <p>Микрорайон Атырау, 10 2 этаж</p>
                  <a href="tel:87758191232">+7(775)819-12-32</a><br />
                  <a style={{"display":"none"}} href="tel:87758191232">+7(775)819-12-32</a><br />
                </p>
              </div>
              <div className="mt-4 d-flex justify-content-center align-items-center">
                <i className="fas fa-clock fa-4x"></i>
              </div>
              <div className="mt-4 text-center">
                <p>Время работы:</p>
                <p>Пн-Пт: 9:00 — 18:00</p>
                <p>Сб: 9:00 — 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

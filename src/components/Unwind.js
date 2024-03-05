import React from 'react'
import './Unwind.css'

const Unwind = () => {
  return (
    <div className="container fluid mb-5 px-lg-0 px-4 container_of_unwind">
      <div className="head-div">
        <div className="head-line"></div>
        <img
          src={require("../assets/fwr-head.png")}
          className="flower-head mx-1 rotate"
          alt=""
        />
        <div className="head-line"></div>
      </div>
      <div className="col-12 text-center">
        <h3 className="lg-heading ">Unwind & Recharge</h3>
        <p>Let us guide you on an incredible journey of rejuvenation.</p>
      </div>
      {/* card start here */}
      <div className="row">

        {/* ----card1--------------- */}
        <div className="col-lg-6 col-xxl-3  col-xl-6  p-2">
          <div className="unwind-bx p-2">
            <div className="unwind-img-bx">
              <img
                src={require("../assets/dedox.jpg")}
                className="unwind-img"
                alt=""
              />
            </div>
            <div className="unwind-txt px-1">
              <h5 className=" fw-bold ls mt-3">Yoga Detox Retreat</h5>
              <div className="lite-line mb-3"></div>
              <p className="c3 un-p sm-js">
                Cleanse your body and rejuvenate your spirit with a focused
                program that combines yoga, healthy meals, and detoxifying
                practices. Let go of toxins and embrace a fresh start.
              </p>
            </div>
            <div className="last-fix">
            <div className="un-last-bx p-2">
              <p className="c2 mb-0 d-flex align-items-center">
                <img
                  src={require("../assets/day.png")}
                  className="day me-2"
                  alt=""
                />
                <span className="m-0 un-p">3D/3N | 6D/6N</span>
              </p>

              <p className="c2 mb-0 d-flex align-items-center">
                <img
                  src={require("../assets/tag.png")}
                  className="day me-1"
                  alt=""
                />
                <span className="m-0 un-p">Starts from $299</span>
              </p>
            </div>
            </div>
          </div>
        </div>

{/* ---------------card2 ---------------------- */}
        <div className="col-lg-6 col-xxl-3  col-xl-6   p-2">
          <div className="unwind-bx p-2">
            <div className="unwind-img-bx">
              <img
                src={require("../assets/Yoga-healing.jpg")}
                className="unwind-img"
                alt=""
              />
            </div>
            <div className="unwind-txt px-1">
              <h5 className=" fw-bold ls mt-3">Yoga Healing Retreat</h5>
              <div className="lite-line mb-3"></div>
              <p className="c3 un-p sm-js">
                Heal from within and uncover your true potential with our
                healing retreat. Through a combination of yoga, meditation, and
                holistic therapies, you'll find balance and restore your inner
                harmony.
              </p>
            </div>
            <div className="last-fix">
            <div className="un-last-bx p-2">
              <p className="c2 mb-0 d-flex align-items-center">
                <img
                  src={require("../assets/day.png")}
                  className="day me-2"
                  alt=""
                />
                <span className="m-0 un-p">3D/3N | 6D/6N</span>
              </p>

              <p className="c2 mb-0 d-flex align-items-center">
                <img
                  src={require("../assets/tag.png")}
                  className="day me-1"
                  alt=""
                />
                <span className="m-0 un-p">Starts from $299</span>
              </p>
            </div>
            </div>
          </div>
        </div>

{/* ----------------card3---------------- */}
        <div className="col-lg-6 col-xxl-3 col-xl-6  p-2">
          <div className="unwind-bx p-2">
            <div className="unwind-img-bx">
              <img
                src={require("../assets/silent.jpg")}
                className="unwind-img"
                alt=""
              />
            </div>
            <div className="unwind-txt px-1">
              <h5 className=" fw-bold ls mt-3">Yoga Silent Retreat</h5>
              <div className="lite-line mb-3"></div>
              <p className="c3 un-p sm-js">
                Dive deep into the realm of inner stillness and tranquility.
                Disconnect from the noise of the world and reconnect with
                yourself through silent meditation, gentle yoga, and mindful
                practices.
              </p>
            </div>
            <div className="last-fix">
            <div className="un-last-bx p-2">
              <p className="c2 mb-0 d-flex align-items-center">
                <img
                  src={require("../assets/day.png")}
                  className="day me-2"
                  alt=""
                />
                <span className="m-0 un-p">3D/3N | 6D/6N</span>
              </p>

              <p className="c2 mb-0 d-flex align-items-center">
                <img
                  src={require("../assets/tag.png")}
                  className="day me-1"
                  alt=""
                />
                <span className="m-0 un-p">Starts from $299</span>
              </p>
            </div>
            </div>
          </div>
        </div>

        {/* -------------card-4-------------- */}

        <div className="col-lg-6 col-xxl-3 col-xl-6   p-2">
          <div className="unwind-bx p-2">
            <div className="unwind-img-bx">
              <img
                src={require("../assets/advenjur.jpg")}
                className="unwind-img"
                alt=""
              />
            </div>
            <div className="unwind-txt px-1">
              <h5 className=" fw-bold ls mt-3">Yoga Adventure Retreat</h5>
              <div className="lite-line mb-3"></div>
              <p className="c3 un-p sm-js">
                Experience the beauty of scenic landscapes, pristine beaches,
                engage in outdoor activities, and challenge yourself physically
                and mentally while enhancing your yoga practice..
              </p>
            </div>
            <div className="last-fix">
            <div className="un-last-bx p-2">
              <p className="c2 mb-0 d-flex align-items-center">
                <img
                  src={require("../assets/day.png")}
                  className="day me-2"
                  alt=""
                />
                <span className="m-0 un-p">3D/3N | 6D/6N</span>
              </p>

              <p className="c2 mb-0 d-flex align-items-center">
                <img
                  src={require("../assets/tag.png")}
                  className="day me-1"
                  alt=""
                />
                <span className="m-0 un-p">Starts from $399</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unwind
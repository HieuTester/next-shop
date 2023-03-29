import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const PageIntro = () => {
  return (
    <section className="page-intro">
      <Swiper
        navigation effect="fade"
        pagination={{
          clickable: true,
        }}
        className="swiper-wrapper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Sale of the summer collection</h2>
                <a href="products" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Make your house into a home</h2>
                <a href="products" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Giao hàng toàn quốc</h4>
                <p>Thu tiền code tận nhà</p>
              </div>
            </li>
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Đổi trả sản phẩm</h4>
                <p>Hỗ trợ đổi trả size/mẫu</p>
              </div>
            </li>
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Hỗ trợ khách hàng</h4>
                <p>Tư vấn miễn phí 24/7</p>
              </div>
            </li>


            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Khách hàng thành viên</h4>
                <p>Giảm 5-10%</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro
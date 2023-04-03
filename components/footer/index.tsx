import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Vinc</span>-Shop</h6>
            <p>House My Brand designs clothing for the young, the old & everyone in between – but most
              importantly, for the fashionable</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Mua hàng online</li>
              <li><a href="#">Tra cứu đơn hàng</a></li>
              <li><a href="#">Chính sách vận chuyển</a></li>
              <li><a href="#">Chính sách đổi trả hàng</a></li>
              <li><a href="#">Hình thức thanh toán</a></li>
            </ul>
            <ul>
              <li>Thông tin</li>
              <li><a href="#">Về chúng tôi</a></li>
              {/* <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li> */}
              <li><a href="#">Tin tức</a></li>
              <li><a href="#">Phản hồi</a></li>
            </ul>
            <ul>
              <li>Liên hệ</li>
              <li><a href="#">Địa chỉ: Trung Văn, Nam Từ Liêm</a></li>
              <li><a href="#">Email: vincstore@uist.com</a></li>
              <li><a href="#">Hotline: +1 131 138 138</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>Copyright - © 2023 Vinc-shop by Vinc.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer
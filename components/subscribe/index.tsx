const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{ backgroundImage: 'url(/images/subscribe.jpg)' }} className="subscribe__content">
          <h4>Nhập email để nhận tin khuyến mãi từ cửa hàng</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email của bạn" />
            <button type="submit" className="btn btn--rounded btn--yellow">Gửi ngay</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe
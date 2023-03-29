import ProductsCarousel from './carousel';
import useSwr from 'swr';
import { ProductsFeatured } from 'types';

const ProductsFeatured = ({
  apiUrl = "/api/products",
  title = "Selected just for you",
  url = '/products'
}: ProductsFeatured) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr(apiUrl, fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>{title}</h3>
          <a href={url} className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured
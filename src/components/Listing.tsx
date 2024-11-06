import { FC } from 'react';
import ListItem from './ListItem';

interface Item {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  state: string;
}

interface ListingProps {
  items: Item[];
}

const defaultProps: ListingProps = {
  items: [],
};

const Listing: FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        if (item.state === 'removed') {
          return null;
        }

        return (
          <ListItem
            key={item.listing_id}
            id={item.listing_id}
            url={item.url}
            MainImage={item.MainImage.url_570xN}
            title={item.title}
            currency_code={item.currency_code}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
}

Listing.defaultProps = defaultProps;

export default Listing;
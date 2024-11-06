import classNames from 'classnames';
import { FC } from 'react';

export function getFormattedPrice(currency_code: string, price: string): string {
  let formattedPrice: string;
  if (currency_code === 'USD') {
    formattedPrice = `$${price}`;
  } else if (currency_code === 'EUR') {
    formattedPrice = `€${price}`;
  } else {
    formattedPrice = `${price} ${currency_code}`;
  }
  return formattedPrice;
}

interface ListItemProps {
  id: number;
  url: string;
  MainImage: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

const ListItem: FC<ListItemProps> = (props) => {
  const { url, MainImage, title, currency_code, price, quantity } = props;

  const titleLimit: number = 50;

  const quantityClassName: string = classNames('item-quantity', {
    'level-low': quantity <= 10,
    'level-medium': quantity > 10 && quantity <= 20,
    'level-high': quantity > 20,
  });

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {
            title.length > titleLimit
              ? `${title.slice(0, titleLimit + 1)}…`
              : title
          }
        </p>
        <p className="item-price">{getFormattedPrice(currency_code, price)}</p>
        <p className={quantityClassName}>{quantity} left</p>
      </div>
    </div>
  );
}

export default ListItem;
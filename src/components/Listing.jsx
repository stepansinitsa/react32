import ListItem from "./Listitem";

const defaultProps = {
  items: [],
};

function Listing({ items }) {
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
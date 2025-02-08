/* eslint-disable react/no-unknown-property */

import { useMac88Query } from "../../../redux/features/events/events";

const HomeThumbnails = () => {
  const { data } = useMac88Query();

  return (
    <div _ngcontent-htq-c97 className="row mx-0 mt-1">
      {data?.data?.map((casino) => {
        return (
          <div
            key={casino?.game_id}
            _ngcontent-htq-c97
            className="col-3 px-1 casinoicons"
            tabIndex={0}
          >
            <img _ngcontent-htq-c97 className="img-fluid" src={casino?.img} />
            <div _ngcontent-htq-c97 className="casino-name">
              {casino?.game_name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeThumbnails;

import React from "react";
import { Rating } from "../../components";
import "./Grid.scss";
import { useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { IMAGE_URL } from "../../services/movieService";

const Grid = ({ images }) => {
  const list = useSelector((state) => state.movies.list);
  const [moviedata, setMovieData] = React.useState([]);

  React.useEffect(() => {
    setMovieData(list);
  }, [list]);
  return (
    <>
      <div className="grid">
        {moviedata.map((data) => (
          <div key={uuidV4()}>
            <div
              className="grid-cell"
              style={{
                backgroundImage: `url(${IMAGE_URL}${data?.poster_path})`,
              }}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{data?.title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={data?.vote_average} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{data?.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;

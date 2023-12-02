import List from "./List";

import styles7 from "./List.module.css";
const Movies = () => {
  const movies = JSON.parse(window.localStorage.getItem("categoriesOfUsers"));

  return (
    <>
      <div
        style={{
          width: "100vw",
          height:"100vh",
        //   minHeight: "100vh",
          background: "black",
        //   overflowX: "hidden",
        overflow:"scroll"
        
        }}
      >
       
        <p
          style={{
            color: "green",
            fontSize: "3rem",
            margin: "1vw",
          }}
          className={styles7.header}
        >
          Super app
        </p>
        <p className={styles7.heading} style={{ color: "white", fontSize: "2rem", margin: "2vw"}}>
          Entertainment according to your choice
        </p>
        {movies.map((movie) => (
          <List genre={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
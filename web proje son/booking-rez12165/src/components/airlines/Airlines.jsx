import "./airlines.css";

const Airlines = () => {
  return (
    <div className="airlines">
      <div className="airlinesItem">
        <img
          src="https://pbs.twimg.com/profile_images/1053335417456599040/jAkCW1Q8_400x400.jpg"
          alt=""
          className="airlinesImg"
        />
        <div className="airlinesTitles">
          <h1>Memnuniyet 9/10</h1>
        </div>
      </div>
      <div className="airlinesItem">
        <img
          src="https://seeklogo.com/images/P/Pegasus_Airlines-logo-239FB5E288-seeklogo.com.png"
          alt=""
          className="airlinesImg"
        />
        <div className="airlinesTitles">
          <h1>Memnuniyet: 7/10</h1>
        </div>
      </div>
      <div className="airlinesItem">
        <img
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0020/4591/brand.gif?itok=pmNkB7HS"
          alt=""
          className="airlinesImg"
        />
        <div className="airlinesTitles">
          <h1>Memnuniyet 6/10</h1>
        </div>
      </div>
    </div>
  );
};

export default Airlines;

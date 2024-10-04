import LogoHeader from "../assets/logoHeader.png";

const Home = () => {
  return (
    <nav className="bg-red ">
      <div>
        <img src={LogoHeader} alt="" />
      </div>
      <div className="max-w- ">
        <p>Home</p>
        <p>Create event</p>
        <p>My Profile</p>
      </div>
      <div>Login</div>
    </nav>
  );
};

export default Home;

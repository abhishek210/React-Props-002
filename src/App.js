
import Card from "./component/Card";
import './app.css'
function App() {
  return (
    <div className="app">
      <Card name = "Bright" year = "2017" name1="David" type="Action Drama" img='https://upload.wikimedia.org/wikipedia/en/a/a7/BrightPoster.jpeg' pic1='https://occ-0-37-358.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABffPAIPjEhT-aDZ2CPJqSvpx5OnrhKOXDYgwT2PIskGUmpJtnTgSHsWnJv84EVD_6XUt0hcgOVdyF2REM8Mvcia5Dx7rLq1QprqQ.jpg?r=b7e' />
      <br></br>
      <br></br>
      <Card name ="Against The Sun" year = "2018" name1="Jordon Walke" type="Adventure" img='https://m.media-amazon.com/images/M/MV5BZjFlMDc2NDAtMTJjYS00NGM5LTk1MTMtMWRhZmE2YjIxNjcyXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg' pic1='https://static.toiimg.com/thumb/msid-46466402,imgsize-156661,width-400,resizemode-4/46466402.jpg'/>
    </div>
  );
}

export default App;

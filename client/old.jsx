import SearchBar from "./SearchBar";

export default function NavBar() {
  const cart = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.auth);
  const admin = auth.isAdmin;

  console.log("auth ", auth);

  function logOutSubmit() {
    dispatch(logout());
  }

  return (
    <div>
      {auth.isAdmin === true ? (
        <nav>
          <Link to="/home"></Link>

          <SearchBar />

          <button>
            <Link to="/formRegister">Register</Link>
          </button>
          <button>
            <Link to="/login">Log In</Link>
          </button>
          <Link to="/cart">Cart</Link>
        </nav>
      ) : (
        <nav>
          <Link to="/home"></Link>

          <SearchBar />

          <button>
            <Link to="/formRegister">Register</Link>
          </button>
          <button>
            <Link to="/login">Log In</Link>
          </button>
          <button onClick={logOutSubmit}>Log out</button>
          <Link to="/cart">Cart</Link>
        </nav>
      )}
    </div>
  );
}

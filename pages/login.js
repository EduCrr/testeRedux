import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../redux/reducers/userReducer";
import { useSelector } from "react-redux";
import Link from "next/link";
export default function Login() {
  const [nome, setNome] = useState("");
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  const handleForm = (e) => {
    e.preventDefault();

    dispatch(setName(nome));
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          placeholder="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="value">send</button>
      </form>
      <h1>{user.name}</h1>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
}

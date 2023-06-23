import { useState, useEffect } from "react";
import axios from "axios";

function DadJokes() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState();

  const fetchJokes = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setLoading(false);
      setData(data.joke);
    } catch (error) {
      console.error(error.response);
    }
    useEffect(() => {
      fetchJokes();
    });
  };

  return (
    <>
      <h1 className="text-center font-bold uppercase text-7xl mt-[100px]">
        Dad <span className="text-blue-600">Jokes</span>
      </h1>
      <form className="flex justify-center items-center flex-col">
        <h1 className="text-3xl mt-[100px] mb-10 border text-center border-black py-10 px-5 w-[600px] ">
          "{data}"
        </h1>
        <button
          className="font-medium uppercase border-2 py-2 px-4 text-center bg-black text-white "
          onClick={fetchJokes}
          disabled={loading && "disabled"}
        >
          {!loading ? "Random Jokes" : "Loading..."}
        </button>
      </form>
    </>
  );
}

export default DadJokes;

import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react"

import MovieList from "@/components/MovieList";
import Billboard from "@/components/Billboard";
import  Navbar  from "@/components/Navbar";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModalStore from "@/hooks/useInfoModalStore";

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session) {
    return{
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home = () => {
  const {data: movies = [] } = useMovieList();
  const {data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Top 4 Today" data={movies} />
        <MovieList title="My List" data={favorites} />
        <MovieList title="Continue Watching" data={movies} />
        <MovieList title="Movies" data={movies} />
        <MovieList title="Series" data={movies} />
        <MovieList title="Tv Channels" data={movies} />
        <MovieList title="sports" data={movies} />
      </div>
    </>
  )
}

export default Home;
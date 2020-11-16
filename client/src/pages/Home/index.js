import React, { useState, useEffect } from "react";

//Import base url for server requests
import api from "../../services/api";

//Import components
import Header from './header';
import Slider from './slider';
import DualColumn from './dual-column';

//Import styles
import '../../styles/App.css';
import '../../styles/Home/home.css';

export default function Home({ history }) {
  
    return (
      <>
      <Header />
      <article className="box full">
        <main className='box section'>
          <Slider />
          <DualColumn />
        </main>
      </article>
      </>
    );
  }
  
import axios from 'axios';
import { useQuery } from "react-query";

import CsNavItems from "./CsNavItems.jsx";
import { useState } from 'react';

const getCsTitleUrl = import.meta.env.VITE_API_GET_CSTITLE;


const fetchCsTitles = async () => {

  const head = await sessionStorage.getItem("authToken");
  if (head) {
    const headers = {
      authToken: `${head}`
    };
    const res = await axios.get(
      getCsTitleUrl,
      {
        headers
      }
    );
    // return res.data.reverse();
    return res.data;
  }
};

function CsNav(props) {
  const { data, isLoading, error } = useQuery(
    "caseStudiesTitleData",
    fetchCsTitles
  );
  const [csNavActive, setCsNavActive] = useState(false)


  const handleNavClick = () => {
    if (csNavActive) {
      setCsNavActive(false)
      console.log('white');
    } else {
      setCsNavActive(true)
      console.log('red');
    }
  }

  return (
    <>
      <div className="CsNav">
        <div className="CsNavStrink">
          {'<|'}
        </div>
        {data
          ? data.map((e, i) => (
            <CsNavItems key={i} id={i} innerData={e} />
          ))
          : "no data "}
      </div>
    </>
  );
}

export default CsNav;

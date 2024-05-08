import axios from 'axios';
import { useQuery } from "react-query";

import CsNavItems from "./CsNavItems.jsx";

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
    return res.data;
  }
};

function CsNav() {
  const { data, isLoading, error } = useQuery(
    "caseStudiesTitleData",
    fetchCsTitles
  );
  if (error && !isLoading) {
    throw new Error(error)
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

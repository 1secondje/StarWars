import { useEffect, useState } from "react";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getApiResource, changeHTTP } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../services/getPeopleData";
import { useQueryParams } from "../../hooks/useQueryParams";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
import PeopleNavigation from "./PeopleNavigation/PeopleNavigation";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(null);

  const query = useQueryParams();
  const queryPage = query.get("page");

  // Get people data from server (name, url, id, img)
  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      // Fill the array with data
      setPeople(peopleList);

      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  // Data output after rendering
  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <div className="people-page">
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </div>
  );
};

export default withErrorApi(PeoplePage);

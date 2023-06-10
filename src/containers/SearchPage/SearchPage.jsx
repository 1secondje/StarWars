import { useCallback, useEffect, useState } from "react";
import { debounce, values } from "lodash";

import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getApiResource } from "../../utils/network";
import { API_SEARCH } from "../../constants/api";

import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import Input from "../../components/UI/Input/Input";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

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
      setPeople(peopleList);

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse("");
  }, []);

  const debounceGetResponse = useCallback(
    debounce((value) => getResponse(value), 200),
    []
  );

  const handleInputChange = value => {
    setInputSearchValue(value);
    debounceGetResponse(value);
  };

  return (
    <div className="">
      <h1 className={styles.title}>Search</h1>
      <Input
        value={inputSearchValue}
        placeholder="Input character's name"
        handleInputChange={handleInputChange}
      />
      <SearchPageInfo people={people} />
    </div>
  );
};

export default withErrorApi(SearchPage);

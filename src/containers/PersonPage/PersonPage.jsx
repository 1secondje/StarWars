import { useParams } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";

import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";

import Loading from "../../components/UI/Loading/Loading";

import { getApiResource } from "../../utils/network";
import { getPeopleImage } from "../../services/getPeopleData";
import { API_PERSON } from "../../constants/api";

import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("../../components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector(state => state.favorite);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <div className={styles.name}>{personName}</div>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            setPersonFavorite={setPersonFavorite}
            personFavorite={personFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<Loading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default withErrorApi(PersonPage);

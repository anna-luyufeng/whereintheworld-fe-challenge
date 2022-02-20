import { Link, useNavigate, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import Skeleton from "components/Skeleton";

import { useGetCountryByAlpha3CodeQuery } from "reduxModules/country/countryApi";

import styles from "./CountryDetail.module.scss";

function CountryDetail() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoading } = useGetCountryByAlpha3CodeQuery(params.code);

  const goBack = () => navigate("/");

  const renderDetail = () => {
    if (isLoading) return <Skeleton.CountryDetail />;

    const {
      borders,
      capital,
      currencies,
      flag,
      languages,
      name,
      nativeName,
      population,
      region,
      subregion,
      topLevelDomain,
    } = data;

    const details = {
      left: [
        {
          label: "Native Name",
          value: nativeName,
        },
        {
          label: "Population",
          value: population,
        },
        {
          label: "Region",
          value: region,
        },
        {
          label: "Sub Region",
          value: subregion,
        },
        {
          label: "Capital",
          value: capital,
        },
      ],
      right: [
        {
          label: "Top Level Domain",
          value: topLevelDomain,
        },
        {
          label: "Currencies",
          value: currencies,
        },
        {
          label: "Languages",
          value: languages,
        },
      ],
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.flag}>
          <img
            src={flag}
            alt={`Country flag of ${name}`}
            className={styles.flagImage}
            loading="lazy"
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{name}</h2>
          <ul className={styles.details}>
            {Object.entries(details).map(([position, list]) => (
              <li className={styles.group} key={position}>
                <ul>
                  {list.map(({ label, value }) => (
                    <li key={label}>
                      <b>{label}</b>
                      {value}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className={styles.borders}>
            <b>Border Countries:</b>
            {borders.length > 0 ? (
              <ul className={styles.borderList}>
                {borders.map((border) => (
                  <Link
                    to={`/country/${border.alpha3Code}`}
                    key={border.alpha3Code}
                  >
                    <li className={styles.borderListItem}>{border.name}</li>
                  </Link>
                ))}
              </ul>
            ) : (
              "None"
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.navigateBack}>
        <Button
          onClick={goBack}
          variant="outlined"
          startIcon={<ArrowBackIosNewIcon />}
        >
          Back
        </Button>
      </div>

      {renderDetail()}
    </div>
  );
}

export default CountryDetail;

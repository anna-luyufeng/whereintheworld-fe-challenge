import { string } from "prop-types";
import { Link } from "react-router-dom";

import styles from "./CountryCard.module.scss";

function CountryCard({
  alpha3Code,
  capital,
  flag,
  name,
  population,
  region,
}: CountryList) {
  const details = [
    {
      label: "Population",
      value: population,
    },
    {
      label: "Region",
      value: region,
    },
    {
      label: "Capital",
      value: capital,
    },
  ];
  return (
    <Link to={`/country/${alpha3Code}`} className={styles.root}>
      <div className={styles.flag}>
        <img src={flag} alt={`Country flag of ${name}`} loading="lazy" />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <ul className={styles.details}>
          {details.map(({ label, value }) => (
            <li key={label}>
              <b>{label}</b>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

CountryCard.propTypes = {
  alpha3Code: string.isRequired,
  capital: string.isRequired,
  flag: string.isRequired,
  name: string.isRequired,
  population: string.isRequired,
  region: string.isRequired,
};

export default CountryCard;

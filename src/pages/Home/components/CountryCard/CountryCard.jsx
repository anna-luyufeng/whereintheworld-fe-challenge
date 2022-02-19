import { string, number } from "prop-types";
import { Link } from "react-router-dom";

import styles from "./CountryCard.module.scss";

function CountryCard({ alpha3Code, capital, flag, name, population, region }) {
  const details = [
    {
      label: "Population",
      value: population.toLocaleString(), // TODO: move to data transform
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
      <img
        src={flag}
        alt={`Country flag of ${name}`}
        loading="lazy"
        width={265}
      />
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
  population: number.isRequired,
  region: string.isRequired,
};

export default CountryCard;

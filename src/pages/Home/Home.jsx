import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import CountryCard from "./components/CountryCard";

import REGION_LIST from "constants/regionList";

import styles from "./Home.module.scss";

function Home() {
  const [{ name, region }, setFilter] = useState({
    name: "",
    region: "",
  });

  const handleChangeFilter = (key) => (event) => {
    const value = event.target.value;
    setFilter((state) => ({
      ...state,
      [key]: value,
    }));
  };

  return (
    <>
      <div className={styles.toolbar}>
        <FormControl fullWidth className={styles.search}>
          <OutlinedInput
            type="search"
            value={name}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            placeholder="Search for a country..."
            onChange={handleChangeFilter("name")}
          />
        </FormControl>
        <FormControl fullWidth className={styles.filterRegion}>
          <InputLabel id="filter-region-label">Filter by region</InputLabel>
          <Select
            labelId="filter-region-label"
            label="Filter by region"
            value={region}
            onChange={handleChangeFilter("region")}
          >
            <MenuItem value="">All</MenuItem>
            {REGION_LIST.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={styles.cards}>
        {/* TODO: replace with real data from API */}
        {Array.from({ length: 10 }, () => ({
          alpha3Code: "col",
          capital: "Bogotá",
          flag: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
          name: "Colombia",
          population: 48759958,
          region: "South America",
        })).map((country, countryIndex) => (
          <CountryCard key={countryIndex} {...country} />
        ))}
      </div>
    </>
  );
}

export default Home;

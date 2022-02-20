import { useEffect, useState } from "react";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import Skeleton from "components/Skeleton";
import CountryCard from "./components/CountryCard";

import REGION_LIST from "constants/regionList";

import { useGetAllCountriesQuery } from "reduxModules/country/countryApi";

import useInfiniteLoader from "hooks/useInfiniteLoader";

import styles from "./Home.module.scss";

function Home() {
  const { data = [], isLoading } = useGetAllCountriesQuery();

  const [listData, setListData] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    region: "",
  });

  const { items, hasMoreItems, loadMoreRef } = useInfiniteLoader(listData);

  useEffect(() => {
    if (data.length === 0) return;

    const filteredListData = data
      .filter(
        (country) =>
          filter.region === "" || country.region.includes(filter.region)
      )
      .filter(
        (country) =>
          filter.name === "" ||
          country.name.toLowerCase().includes(filter.name.toLowerCase())
      );

    setListData(filteredListData);
  }, [data, filter.region, filter.name]);

  const onChangeFilter = (key) => (event) => {
    const value = event.target.value;
    setFilter((state) => ({
      ...state,
      [key]: value,
    }));
  };

  const renderCountryCards = () => {
    if (isLoading) return <Skeleton.HomeCountryCards />;

    if (items.length === 0) {
      return (
        <div>
          Sorry, we couldn't find a match country for "{filter.name}" in &#8203;
          {filter.region || "the world"}.
        </div>
      );
    }
    return (
      <div className={styles.cards}>
        {items.map((country) => (
          <CountryCard key={country.alpha3Code} {...country} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={styles.toolbar}>
        <FormControl fullWidth className={styles.search}>
          <OutlinedInput
            type="search"
            value={filter.name}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            placeholder="Search for a country..."
            onChange={onChangeFilter("name")}
          />
        </FormControl>
        <FormControl fullWidth className={styles.filter}>
          <InputLabel id="filter-region-label">Filter by region</InputLabel>
          <Select
            labelId="filter-region-label"
            label="Filter by region"
            value={filter.region}
            onChange={onChangeFilter("region")}
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
      {renderCountryCards()}
      {hasMoreItems && <div ref={loadMoreRef} className={styles.loadMore} />}
    </>
  );
}

export default Home;

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import Alert from "../alert/Alert";
import Spinner from "../spinner/Spinner";
import MainWrapper from "./MainWrapper";
import StyledTitle from "./StyledTitle";
import StyledForm from "./StyledForm";
import StyledLabel from "./StyledLabel";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";
import { fetchUser } from "../../apiRequests/requests.mjs";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isQueryEnabled, setIsQueryEnabled] = useState(false);
  const [alert, setAlert] = useState({ show: false, content: "" });
  const inputRef = useRef("");
  let navigate = useNavigate();

  const {
    isError,
    error,
    data,
    isFetching,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser(query),
    enabled: isQueryEnabled,
    cacheTime: 0,
    retry: 0,
    refetchOnWindowFocus: false
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) {
      setIsQueryEnabled(true);
      setQuery(value);
      return;
    }
    setAlert({ show: true, content: "The input value cannot be empty" });
  };

  useEffect(() => {
    if (isError) {
      setAlert({ show: true, content: error.message });
      setIsQueryEnabled(false);
    } else if (data && data.login) {      
      navigate(`/user/${data.login}`, { state: data });
    }
  }, [data, error, navigate]);

  return (
    
      <MainWrapper>
        <StyledTitle>Search for user </StyledTitle>
        <StyledForm
          onSubmit={onSubmitHandler}
          aria-label="Form for searching a user"
        >
          <StyledLabel>
            User name
            <StyledInput ref={inputRef} aria-label="User name" />
          </StyledLabel>
          <StyledButton>
            Search
            {isFetching && <Spinner width="12" height="12" positioned={false}/>}
          </StyledButton>
        </StyledForm>
        {alert.show && <Alert text={alert.content} onAlertHandler={setAlert}/>}
      </MainWrapper>
  );
};

export default Search;

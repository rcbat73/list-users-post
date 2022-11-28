import React, { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import Repos from "../repos/Repos";
import SearchIcon from "../icons/SearchIcon";
import Pagination from "../pagination/Pagination";
import MainWrapper from "./MainWrapper";
import Header from "./Header";
import Picture from "./Picture";
import UserTextWrapper from "./UserTextWrapper";
import ReposWrapper from "./ReposWrapper";
import UserInfoWrapper from "./UserInfoWrapper";
import StyledLink from "./StyledLink";
import Alert from "../alert/Alert";
import { fetchRepos } from "../../apiRequests/requests.mjs";

const User = ({ login, name, picture, alt, reposAmount }) => {
  const [currenRepos, setCurrenRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState({ show: false, content: "" });
  const reposPerPage = process.env.REACT_APP_REPOS_PER_PAGE;
  const pagesAmount = Math.ceil(reposAmount/reposPerPage);

  const {
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['repos', page],
    queryFn: () => fetchRepos(page, login)
  });

  useEffect(() => {
    if (isError) {
      setAlert({ show: true, content: error.message });
    }
    setCurrenRepos(data || []);
  }, [error, isError, data]);

  return (
    <MainWrapper>
      <StyledLink to={"/"} aria-label="Search a new user">
        <SearchIcon lineColor="white" />
      </StyledLink>
      <UserInfoWrapper>
        <h2>User {login}</h2>
        <Header>
          <Picture src={picture} alt={alt} />
          <UserTextWrapper>
            <p>
              <b>Name: </b>
              {name}
            </p>
            <p data-testid="repos-amount">
              <b>Amount of repositories: </b>
              {reposAmount}
            </p>
          </UserTextWrapper>
        </Header>
        <ReposWrapper>
          <h3>Repos</h3> 
          <Repos repos={currenRepos} isFetching={isFetching} />
          <Pagination
            movePrev={() => setPage(prev => Math.max(prev - 1, 0))}
            moveNext={() => {
              if (!isPreviousData && pagesAmount !== page) {
                setPage(prev => prev + 1)
              }
            }}
            pageInfo={`${page} of ${pagesAmount}`}
            isPrevDisabled={page === 1}
            isNextDisabled={isPreviousData || pagesAmount === page}
          />
        </ReposWrapper>        
      </UserInfoWrapper>
      {alert.show && <Alert text={alert.content} onAlertHandler={setAlert}/>}
    </MainWrapper>
  );
};

export default User;

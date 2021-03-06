import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../components/Spinner";

import {
  StyledTableTitle,
  StyledTableWrapper,
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableRow,
  StyledTableElement,
  StyledTableRank,
} from "./styles/StyledLeaderBoard";
import { API_URL } from '../constants/index';
import { useAuthContext } from "../context/auth";

const allUsersEndpoint = `${API_URL}/users/all`;

const LeaderBoard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { setActiveMenu } = useAuthContext();

  useEffect(() => {
    setActiveMenu('leaderboard');
    async function fetchData() {
      setLoading(true);
      const { data } = await axios.get(allUsersEndpoint);
      setData(data.users);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <StyledTableWrapper>
      <StyledTableTitle>Leaderboard</StyledTableTitle>
      <StyledTable>
        <StyledTableHeader>
          <StyledTableRow>
            <StyledTableRank>Rank</StyledTableRank>
            <StyledTableElement>Player</StyledTableElement>
            <StyledTableElement>Score</StyledTableElement>
            {/* <StyledTableElement>Achieved</StyledTableElement> */}
          </StyledTableRow>
        </StyledTableHeader>
        <StyledTableBody>
          {data.length > 0 &&
            data
              .sort((a, b) => b.points - a.points)
              .map((record, idx) => (
                <StyledTableRow key={record.id}>
                  <StyledTableRank style={{ color: "#C4421A" }}>
                    {idx + 1}
                  </StyledTableRank>
                  <StyledTableElement>{record.email.split('@')[0]}</StyledTableElement>
                  <StyledTableElement>{record.points}</StyledTableElement>
                  {/* <StyledTableElement>
                  {moment(record.createdAt).fromNow(true)} ago
                </StyledTableElement> */}
                </StyledTableRow>
              ))}
        </StyledTableBody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default LeaderBoard;

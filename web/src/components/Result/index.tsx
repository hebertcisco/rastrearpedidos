//import "../../styles/scss/timeline.scss";

import { ICode, IRastreio, IRastreios } from "../../utils/types";
import React, { useState } from "react";

import Footer from "../Footer";
import Header from "./header";
import axios from "axios";
import styled from "styled-components";

const Result: React.FC<ICode> = ({ codigo }) => {
  const [rastreioData, setRastreioData] = useState([]);
  const [inError, setInError] = useState(false);

  async function getTrack() {
    try {
      await axios
        .get(`https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=${codigo}`)
        .then((response: any) => {
          setRastreioData(response.data);
        });
    } catch (err) {
      console.error(err);
      setInError(true);
    }
  }
  getTrack();
  let lastStatus: IRastreio = rastreioData.shift();
  let deliveredMessage: string = "Objeto entregue ao destinatário";

  function IsDelivered() {
    if (lastStatus?.descricao === deliveredMessage) {
      return true;
    }
  }
  IsDelivered();

  if (rastreioData.length < 1) {
    return (
      <ContainerResultadoStyled>
        {inError ? (
          <ContainerResultadoStyled>
            <Header codigo={codigo} />
            <ItemStyled>
              <TimelineStyled id="timeline">
                <SectionStyled>
                  <SectionStyledTitle>Erro!</SectionStyledTitle>
                  <SectionStyledChild>
                    <SectionStyledList>
                      <SectionStyledListItem>
                        Código de rastreio incorreto ou inexistente 🥵
                      </SectionStyledListItem>
                    </SectionStyledList>
                  </SectionStyledChild>
                </SectionStyled>
              </TimelineStyled>{" "}
            </ItemStyled>{" "}
          </ContainerResultadoStyled>
        ) : (
          <></>
        )}
        <p>...</p>
      </ContainerResultadoStyled>
    );
  } else {
    return (
      <>
        <ContainerResultadoStyled>
          <Header codigo={codigo} />

          <ItemStyled>
            <TimelineStyled id="timeline">
              {IsDelivered() ? (
                <SectionStyled>
                  <SectionStyledTitle>
                    {lastStatus.data.slice(0, 5)}
                  </SectionStyledTitle>
                  <SectionStyledChild>
                    <SectionStyledList>
                      <SectionStyledListItem>
                        Seu pedido foi entregue 🙌
                      </SectionStyledListItem>
                      <SectionStyledListItem>{`${lastStatus.cidade} / ${lastStatus.uf}`}</SectionStyledListItem>
                      <SectionStyledListItem>
                        {lastStatus.dataHora}
                      </SectionStyledListItem>
                    </SectionStyledList>
                  </SectionStyledChild>
                </SectionStyled>
              ) : (
                <></>
              )}

              <TimelineStyledAfter>
                {rastreioData.map((rastreio: IRastreios) => {
                  return (
                    <SectionStyled>
                      <SectionStyledTitle>
                        {rastreio.data.slice(0, 5)}
                      </SectionStyledTitle>
                      <SectionStyledChild>
                        <SectionStyledList>
                          <SectionStyledListItem>
                            {rastreio.descricao}
                          </SectionStyledListItem>
                          <SectionStyledListItem>{`${rastreio.cidade} / ${rastreio.uf}`}</SectionStyledListItem>
                          <SectionStyledListItem>
                            {rastreio.dataHora}
                          </SectionStyledListItem>
                          {rastreio.destino?.cidade ? (
                            <SectionStyledListItem>
                              Destino: {rastreio.destino?.cidade} -{" "}
                              {rastreio.destino?.uf}
                            </SectionStyledListItem>
                          ) : (
                            <></>
                          )}
                        </SectionStyledList>
                      </SectionStyledChild>
                    </SectionStyled>
                  );
                })}
              </TimelineStyledAfter>
            </TimelineStyled>
          </ItemStyled>
        </ContainerResultadoStyled>
        <Footer />
      </>
    );
  }
};
export default Result;

const HeaderStyled = styled.div``;

const SectionStyledTitle = styled.h3`
  position: -webkit-sticky;
  position: sticky;
  top: 5rem;
  color: #888;
  margin: 0;
  font: {
    size: 1em;
    weight: 400;
  }
  @media (min-width: 62em) {
    font-size: 1.1em;
  }
`;
const TimelineStyled = styled.div`
  position: relative;
  display: table;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
`;
const TimelineStyledAfter = styled.div`
  &:after {
    content: "";
    width: 2px;
    position: absolute;
    top: 0.5rem;
    bottom: 0rem;
    left: 60px;
    z-index: 1;
    background: #c5c5c5;
  }
`;

const SectionStyledListItem = styled.li`
  margin-left: 0.5rem;
  &:before {
    content: "·";
    margin-left: -0.5rem;
    padding-right: 0.3rem;
  }
  &:not(:first-child) {
    margin-top: 0.5rem;
  }
  span.price {
    color: mediumturquoise;
    font-weight: 500;
  }
`;
const SectionStyledList = styled.ul`
  list-style-type: none;
  padding: 0 0 0 75px;
  margin: -1.35rem 0 1em;
  max-width: 32rem;
  font-size: 1em;
  @media (min-width: 62em) {
    font-size: 1.1em;
    padding: 0 0 0 81px;
  }
  &:last-child {
    margin: {
      bottom: 0;
    }
  }
  &:first-of-type:after {
    content: "";
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border: 2px solid #ffffff;
    border-radius: 50%;
    position: absolute;
    left: 54px;
    top: 3px;
    z-index: 2;
  }
`;

const SectionStyled = styled.section`
  position: relative;
  &:first-child section {
    margin-top: -1.3em;
    padding-bottom: 0px;
  }
`;

const SectionStyledChild = styled.section`
  position: relative;
  padding-bottom: 1.25em;
  margin-bottom: 2.2em;
`;

const ItemStyled = styled.div`
  display: flex;
  flex: auto;
  overflow-y: auto;
  padding: 0rem 1rem 0rem 1rem;
`;

const ContainerResultadoStyled = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  max-height: 100%;
`;

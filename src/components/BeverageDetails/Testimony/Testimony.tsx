import React from 'react';

import {
  Aged,
  Alcohol,
  Barcode,
  BeverageType,
  City,
  Container,
  Country,
  DryHopped,
  ExpirationDate,
  Extract,
  Fermentation,
  Filtration,
  HopRate,
  Ingredients,
  Pasteurization,
  Price,
  SmokedMalt,
  Style,
  Temperature,
  TestimonyWrapper,
} from '.';

const Testimony: React.FC = () => (
  <TestimonyWrapper>
    <City />
    <Country />
    <Barcode />
    <BeverageType />
    <Fermentation />
    <Extract />
    <Alcohol />
    <Filtration />
    <Pasteurization />
    <Aged />
    <Style />
    <DryHopped />
    <HopRate />
    <ExpirationDate />
    <Ingredients />
    <SmokedMalt />
    <Temperature />
    <Container />
    <Price />
  </TestimonyWrapper>
);

export default Testimony;

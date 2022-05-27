import React from 'react';
import {
  FloatBlock, FloatItem, FloatItemText, FloatItemTitle,
  HeaderElement,
  LanguageElement,
  MainBlockContainer,
  NavigationElement,
  ShowMoreButton
} from "./styles";

// статичная верстка шапки приложеня
const Main = () => {
  return (
    <MainBlockContainer className="px-60 relative">
      <div className="flex items center w-full font-size-15 uppercase text-white items-center">
        <img src="/logo.png" alt="" />
        <div className="mx-auto">
          <NavigationElement className="mr-9 selected">
            Main
          </NavigationElement>
          <NavigationElement className="mr-9">
            Our services
          </NavigationElement>
          <NavigationElement className="mr-9">
            About
          </NavigationElement>
          <NavigationElement className="mr-9">
            Contacts
          </NavigationElement>
        </div>
        <div>
          <LanguageElement className="selected mr-2">
            ru
          </LanguageElement>
          <LanguageElement>
            en
          </LanguageElement>
        </div>
      </div>
      <HeaderElement className="mt-52">
        <div>KEEPING YOU ON THE ROAD WITH</div>
        <div>SERVICE YOU CAN TRUST</div>
      </HeaderElement>
      <ShowMoreButton className="mt-12">
        Show more
      </ShowMoreButton>

      <FloatBlock className="px-60">
        <FloatItem>
          <img src="/icons/phone.png" alt="" />
          <FloatItemTitle>CALL US NOW 222-222-222</FloatItemTitle>
          <FloatItemText>
            Feel free to call us
          </FloatItemText>
        </FloatItem>
        <FloatItem>
          <img src="/icons/calendar.png" alt="" />
          <FloatItemTitle>GET FREE APPOITMET</FloatItemTitle>
          <FloatItemText>
            Free Diagnosis & Brake Checks
          </FloatItemText>
        </FloatItem>
        <FloatItem>
          <img src="/icons/mark.png" alt="" />
          <FloatItemTitle>FIND US ON MAP</FloatItemTitle>
          <FloatItemText>
            New York, 1286 Ruumu Nanor
          </FloatItemText>
        </FloatItem>
      </FloatBlock>
    </MainBlockContainer>
  );
};

export default Main;
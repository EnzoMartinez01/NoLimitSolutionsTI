import React from 'react';
import HeaderComponent from '../HeaderComponent'
import FooterComponent from '../FooterComponent';
import NosotrosMainComponent from './NosotrosMainComponent';


export default function NosotrosComponent() {
  return (
    <>
      <HeaderComponent />
      <br />
      <NosotrosMainComponent />
      <br />
      <FooterComponent />
    </>
  )
}

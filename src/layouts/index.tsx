import React from 'react';
import BasicLayout from './BasicLayout';

// layout选择
export default function (props) {
  // if (props.location.pathname === '/') {

  return <BasicLayout>{props.children}</BasicLayout>;
  // }

  // return (
  //     <>
  //         {props.children}
  //     </>
  // );
}

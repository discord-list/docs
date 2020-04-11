/** @jsx jsx */

import React, { useRef, useEffect } from "react";
import { Global } from "@emotion/core";
import { jsx, Box } from "theme-ui";
import { useMenus, useCurrentDoc } from "docz";

import * as styles from "gatsby-theme-docz/src/components/Sidebar/styles";
import { NavLink } from "gatsby-theme-docz/src/components/NavLink";
import { NavGroup } from "gatsby-theme-docz/src/components/NavGroup";

export const Sidebar = React.forwardRef((props, ref) => {
  const menus = useMenus();
  const currentDoc = useCurrentDoc();
  const currentDocRef = useRef();
  
  useEffect(() => {
    if (ref.current && currentDocRef.current) {
      ref.current.scrollTo(0, currentDocRef.current.offsetTop);
    }
  }, [ref]);

  return (
    <>
      <Box onClick={props.onClick} sx={styles.overlay(props)}>
        {props.open && <Global styles={styles.global} />}
      </Box>
      <Box ref={ref} sx={styles.wrapper(props)} data-testid="sidebar">
        <img src="/public/favicon.ico" style={{ maxWidth: '100%', marginBottom: 10 }} alt="Discord List" />

        {menus &&
          menus.map(menu => {
            if (!menu.route)
              return <NavGroup key={menu.id} item={menu} sidebarRef={ref} />;
            if (menu.route === currentDoc.route) {
              return (
                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              );
            }
            return (
              <NavLink key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            );
          })}
      </Box>
    </>
  );
});
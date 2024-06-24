import { HEIGHTS } from '@styles/constants';
import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { limitMaxWidth } from '@styles/utils';
import { poppins } from '@styles/fonts';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={poppins.className} css={container}>
      {children}
      <div css={gnbWrapper}>{/* <GNB /> */}</div>
    </div>
  );
};

export default Layout;

const container = css`
  ${limitMaxWidth}
  margin: 0 auto;
  padding-bottom: ${HEIGHTS.GNB}px;
`;

const gnbWrapper = css`
  ${limitMaxWidth}
  position: fixed;
  bottom: 0;
`;

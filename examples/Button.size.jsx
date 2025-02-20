/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Button } from '@itwin/itwinui-react';

export default () => {
  return (
    <div className='demo-container'>
      <Button size='small'>Small</Button>
      <Button>Medium</Button>
      <Button size='large'>Large</Button>
    </div>
  );
};

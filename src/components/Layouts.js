import React from 'react';
import TitleContent from './TitleContent';
import TextImage from './TextImage';
import DropdownBlock from './DropdownBlock';
import TextStack from './TextStack';
import HomeBlock from './HomeBlock';
import TitleContentImage from './TitleContentImage';

export default function Layouts({ layouts, _rawLayouts }) {
  const Components = {
    titleContent: TitleContent,
    textImage: TextImage,
    dropdownBlock: DropdownBlock,
    textStack: TextStack,
    homeBlock: HomeBlock,
    titleContentImage: TitleContentImage,
  };

  return layouts.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block,
        raw: _rawLayouts[index],
      });
    }
  });
}

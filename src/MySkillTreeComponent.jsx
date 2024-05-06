import React from 'react';
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
} from 'beautiful-skill-tree';

const data_of_lego = [
  {
    id: '',
    title: 'Hello World',
    tooltip: {
      content: 'このノードは最上位レベルで、アンロックされてクリック可能です。',
    },
    children: [
      {
        id: 'hello-sun',
        title: 'Hello Sun',
        tooltip: {
          content: 'このノードは上位ノードの子で、親が選択状態でないとロックされます。',
        },
        children: [],
      },
      {
        id: 'hello-stars',
        title: 'Hello Stars',
        tooltip: {
          content: 'このツールは自動的にレイアウトを管理します。だからこれをBeautiful Skill Treeと呼びます。',
        },
        children: [],
      },
    ],
  },
];

const MySkillTreeComponent = () => {
  return (
    <SkillProvider>
      <SkillTreeGroup>
        {({ skillCount }) => (
          <SkillTree
            treeId="Lego Education"
            title="Lego Education"
            data={data_of_lego}
            collapsible
            description="Lego Education用のスキルツリー"
          />
        )}
      </SkillTreeGroup>
    </SkillProvider>
  );
};

export default MySkillTreeComponent;

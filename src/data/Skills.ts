import {
  SiAmazonaws,
  SiGit,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';

export const skills = [
  {
    name: 'Typescript',
    icon: SiTypescript,
    description: 'Reactでフロントエンド開発をする際に使用。',
  },
  {
    name: 'React',
    icon: SiReact,
    description: '',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    description: '実務経験はなく趣味での使用のみ。本サイトの開発に使用。',
  },
  {
    name: 'AWS',
    icon: SiAmazonaws,
    description:
      '現在まで3年間ほど実務で使用。サーバーレスやマイクロサービスでのシステム開発がメイン。',
  },
  {
    name: 'Terraform',
    icon: SiTerraform,
    description:
      'AWSのリソースをコード化するために使用。 Module構成、state分離等のリファクタリングも経験あり。',
  },
  {
    name: 'Python',
    icon: SiPython,
    description: '',
  },

  {
    name: 'Git',
    icon: SiGit,
    description: '日々の開発のバージョン管理に使用。',
  },
];
